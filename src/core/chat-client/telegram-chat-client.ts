import { ChatClientConstructor } from '../models/chat-client/chat-client'
import ConvoManager from '../models/convo-engine/managers/convo-manager'
import RenderInChat from '../models/chat-client/render-interface'
import log from '../util/logging'
import { Stores } from '../models/state/state'
import { State } from '../../state/state-config'

const Telegraf = require('telegraf')
const session = require('telegraf/session')

type TelegrafContext = any
type TelegrafBot = any

function renderWithContext(ctx: TelegrafContext): RenderInChat {
return {
    replyText: async (text, buttons) => {
      await log.debug('reply in chat with the text message: ', text);
      await ctx.replyWithHTML(text, getKeyboardWithButtons(buttons).draw());
    },
    replyImage: async (src, buttons) => {
      await log.debug('reply in chat with the image: ', src);
      await ctx.replyWithPhoto(
        { url: `${src}`, filename: 'photo.jpg' },
        getKeyboardWithButtons(buttons).draw(),
      );
    },
  };
}

export const telegramClient: ChatClientConstructor = apiKey => {
    const bot: TelegrafBot = new Telegraf(apiKey)
    return {
        runModule: (storytellerConfig, convoManagerConstructor) => {
            bot.use(session())

            const initStateStores: Stores = {
                variables: storytellerConfig.initialState as State,
                currentConvoSegmentPath:
                    storytellerConfig.startingConvoSegmentPath,
      };

      const convoManager: ConvoManager = convoManagerConstructor(
        storytellerConfig.rootModule,
        initStateStores,
      );
      
      bot.on('text', async (ctx: any) => {
        log.debug('received user input');
        const renderFunctions: RenderInChat = await renderWithContext(ctx);
        convoManager.respondToUserInput(
          ctx.from.id,
          ctx.message.text,
          renderFunctions,
        );
      });
      bot.on('message', async (ctx: { reply: (arg0: string) => any }) => {
        log.debug('received user input as message other than text');
        await ctx.reply('Only text messages please');
      });
      log.debug('telegram client is configured and waiting for messages.');
      bot.launch();
    },
  };
};
