import make from '../../core/util/make'

const solemWalk = make.module({
    id: 'solemn-walk-in-the-rain',
    submodules: [],
    convoSegments: [
        {
            id: 'solemn-walk',
            convo: [
                {
                    type: 'text',
                    text: `At first, Carol is frustrated, because her luggage is lost or on the way to another country. But then she sees the beautiful apricot trees and gardens full of other fruit trees and she feels peaceful.\n<b>What a wonderful city! I wonder what secrets it holds! Carol thinks to herself.</b>\nShe sees a dog patiently waiting for a green light to cross the street.`,
                },
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/108261746/176634068-dafb0623-b3c8-4ddb-8242-fb68e0f54edd.png',
                },
                {
                    type: 'text',
                    text: `"Greetings, dear tourist!" Carol hears the dog tell her.\n<b>A talking dog?! I guess, everything is possible in Apricot Stone City!</b> she thinks to herself.\nShe sees a dog patiently waiting for a green light to cross the street.\n"Why yes, dear friend! We have a lot of stuff that would surprise you!" she hears the dog answer.\n"You can hear my thoughts?!" Carol asks.\n"Indeed! Dogs possess the skill of telekinesis! Have a good day!" she hears the dog respond and he turns and crosses the road. She sees the light has turned green.`,
                },
            ],
            choices: [
                {
                    text: 'Follow the dog',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Follow-the-dog'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Continue her path',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Continue-her-path'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Follow-the-dog',
            convo: [
                {
                    type: 'text',
                    text: `Carol decides to follow the dog and sprints before the light turns red.\nShe crosses the road, but the dog has already disappeared. She feels drops of rain on her nose and shoulders and then on her glasses.<b>Oh what I wouldn't do for some mini windsheild wipers for my glasses! she thinks to herself.</b>\nCarol hears someone snap their fingers and magically her glasses have wipers now!`,
                },
            ],
            choices: [
                {
                    text: 'Turn to see who snapped their fingers',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'Turn-to-see-who-snapped-their-fingers',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Continue her path',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Continue-her-path'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Continue-her-path',
            convo: [
                {
                    type: 'text',
                    text: `Carol keeps walking, scared that someone else will read her mind. She tries to keep verbal thoughts out of her mind and focus on walking.\nShe feels herself get wet from the rain. She's afraid she'll catch a cold, so she decides to catch a cab instead.\n"TAXI!" she yells...`,
                },
            ],
            choices: [
                {
                    text: 'Carol stops a taxi',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'stop-taxi',
                                        'taxi',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Turn-to-see-who-snapped-their-fingers',
            convo: [
                {
                    type: 'text',
                    text: `Carol turns around to see who had granted her glass wipers. It is none other than-\n "Ryan Reynolds??!?!?" Carol exclaims.\n`,
                },
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/108261746/176633764-b815b39d-ae3c-4f7f-817d-8def1fa19e5f.png',
                },
                {
                    type: 'text',
                    text: `She's shocked, she doesn't know what to think!\n<b>Can Ryan read minds too??</b>\n"Why yes, I can! Hello, Carol! Welcome to Apricot Stone City! How are you enjoying your stay so far?" she hears him say.`,
                },
            ],
            choices: [
                {
                    text: 'Run',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Run'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Answer',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Answer'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Throw something at him',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Throw-something-at-him'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Run',
            convo: [
                {
                    type: 'text',
                    text: `<b>Oh my god, I need to get away from here. I hate Ryan Reynolds. Gosling is my favourite.</b>\nCarol runs away from Ryan towards the cab on the side of the road. She approaches the cab...`,
                },
            ],
            choices: [],
        },
        {
            id: 'Answer',
            convo: [
                {
                    type: 'text',
                    text: `"Great, now that I know you're here." Carol says flirtatiously.\n\n"I have to go, but I recommend you to visit Cascade in the city center. They have a lot of interesting stuff there!" she hears Ryan say, as he gets into a Superman pose and flies away.\n<b>Oh well, I guess I'll catch a cab to the city center then!</b>\n\n ...`,
                },
            ],
            choices: [],
        },
        {
            id: 'Throw-something-at-him',
            convo: [
                {
                    type: 'text',
                    text: `Carol starts to panic. I don't want Ryan to hear my thoughts! she thinks to herself. She fishes for something in her purse to throw at the man in front of her.`,
                },
            ],
            choices: [
                {
                    text: 'hit him with a shovel',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Hit-him-with-a-shovel'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'hit him with a boulder',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Boulder'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'hit him with the purse',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Purse'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Hit-him-with-a-shovel',
            convo: [
                {
                    type: 'text',
                    text: `She gets a shovel from her mini-purse and slams it on his head.`,
                },
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/108261746/176634636-91fee22c-79e8-45ad-8ae0-dbbd84b581fe.png',
                },
                {
                    type: 'text',
                    text: `She needs to get out of there, before someone arrests her for attacking a superhero.\n She yells <b>"TAXI!!!!"</b> and runs to the first one that stops...`,
                },
            ],
            choices: [
                {
                    text: 'Carol stops a taxi',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'stop-taxi',
                                        'taxi',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Boulder',
            convo: [
                {
                    type: 'text',
                    text: `She tries to find something in her bag, but it's useless!!! There's nothing!\nShe looks around and finds a boulder on the sidewalk.<b>Here we go, Carol thinks, first human attack ever</b>She takes the boulder and throws it at him. \nShe needs to get out of there, before someone arrests her for attacking a superhero.\nShe yells <b>"TAXI!!!!"</b> and runs to the first one that stops...`,
                },
            ],
            choices: [
                {
                    text: 'Carol stops a taxi',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'stop-taxi',
                                        'taxi',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Purse',
            convo: [
                {
                    type: 'text',
                    text: `<b>Nothing useful in my purse, goddamnit! I guess I'll pull a "grandma move" and hit him with my purse instead.</b>\nShe slams it on his head and runs away.\nShe yells <b>"TAXI!!!!"</b. and runs to the first one that stops...`,
                },
            ],
            choices: [
                {
                    text: 'Carol stops a taxi',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'stop-taxi',
                                        'taxi',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default solemWalk
