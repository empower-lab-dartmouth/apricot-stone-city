import { choice } from 'fp-ts'
import { type } from 'os'
import { Telegraf } from 'telegraf'
import make from '../../core/util/make'

const havingDinner = make.module({
    id: 'having-dinner',
    submodules: [],
    convoSegments: [
        {
            id: 'arrive-to-the-house',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>Carol, Arpi and Anoush just enter Anoushs house. From the outside the house looks small, and Carol even wonders if they have a room for her. But then she enters the house she gets surprised how big it is from inside. A big red carpet hanged on the wall catches Carols attention. There are noises of children playing outside the house. Carols nose smells delicious smell of something sweet. Carol wants to ask so many questions about the strange carpet on the wall, or why there are so many children in the house, but suddenly an old man with half bald half white hair, tall wearing old cloths but with a warm smile and handsome voice steps in front of them and says: "Barev, Carol jan. Hameceq hameceq</b>',
                },
                {
                    type: 'text',
                    text:
                        '<b>Carol, Arpi and Anoush just enter Anoushs house. From the outside the house looks small, and Carol even wonders if they have a room for her. But then she enters the house she gets surprised how big it is from inside. A big red carpet hanged on the wall catches Carols attention. There are noises of children playing outside the house. Carols nose smells delicious smell of something sweet. Carol wants to ask so many questions about the strange carpet on the wall, or why there are so many children in the house, but suddenly an old man with half bald half white hair, tall wearing old cloths but with a warm smile and handsome voice steps in front of them and says: "Barev, Carol jan. Hameceq hameceq</b>',
                },
            ],
            choices: [
                {
                    text: 'tell him that you dont know Armenian',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['talk-to-the-father'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'nod shyly',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['nod-shyly'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'talk-to-the-father',
            convo: [
                {
                    type: 'text',
                    text:
                        '-I am sorry, I dont understand Armenian, - Carol says with regret. She adds "learning Armenian" in her mental TO DO list.',
                },
                {
                    type: 'text',
                    text:
                        '-Its ok. This is my father - Hayk, - Anoush says with big smile, - I have told him about your situation. He is more than happy for you to stay here. \n \n \n -Thank you so much, "Shnorhakalutyun", - Carol tries to say "Thank you" in Armenian. \n \n \n Anoush and Arpi start to cook dinner, while Anoushs brother makes a tour through the house.',
                },
            ],
            choices: [
                {
                    text: 'Go to the house tour',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['house-tour'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'follow the little Kid',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['house-tour'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'nod-shyly',
            convo: [
                {
                    type: 'text',
                    text:
                        '-Its ok. This is my father - Hayk, - Anoush says with big smile, - I have told him about your situation. He is more than happy for you to stay here. \n \n \n -Thank you so much, "Shnorhakalutyun", - Carol tries to say "Thank you" in Armenian. \n \n \n Anoush and Arpi start to cook dinner, while Anoushs brother makes a tour through the house.',
                },
            ],
            choices: [
                {
                    text: 'Go to the house tour',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['house-tour'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'follow the little Kid',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['house-tour'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'house-tour',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol starts to feel very excited as she begins to experience cultural shock. Anoushs brother, Garnik explains why is the carpet on the wall, explains a lot of Armenian traditions and suggests to go up to the second floor of the house. As they go up she notices that the volume of a pleasant melody starts increasing',
                },
                {
                    type: 'image',
                    src: 'https://www.rugvista.kr/pfdoc/inspPics/281.jpg',
                },
            ],
            choices: [
                {
                    text: 'ask what sound is that',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['music-info'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'walk down the hall',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['room-info'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'music-info',
            convo: [
                {
                    type: 'text',
                    text:
                        'Garnik tells about the singer, Aram Asatryan and shows his gradpas collection of tapes of Aram Asatryans best hits. Carol feels a lot better and excited she wants to listen more from that artist. They play some of the cassettes and she recognizes one of them . it was playing in the taxi earlier today. She tries to sing along and they both burst out laughing as she cant pronounce most of the words correctly and just makes some funny sounds.',
                },

                // bot.on('message', (ctx: { telegram: { sendAudio: (arg0: any, arg1: string) => void; }; replyWithAudio: (arg0: string) => void; }) => {
                //     ctx.telegram.sendAudio(chatId, 'https://server.tld/file.mp3')
                //     ctx.telegram.sendAudio(chatId, 'fileId')

                //   }),
            ],
            choices: [
                {
                    text: 'Go downstairs',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Arpi-calls-down'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'room-info',
            convo: [
                {
                    type: 'text',
                    text:
                        'They walked together down the hall, they noticed an opened door, Carol and Garnik both enter the room. After enetering the room and staring at the walls for couple of seconds Carol feels absoultely amazed. in that room they find the the paintings that Lili made when she was younger, Garnik tells her the story  of every picture and Carol feels filled with armenian culture and wants to experience even more....suddenly they hear a voice from downstairs calling them for dinner ',
                },

                {
                    type: 'image',
                    src:
                        'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2018/07/4-robotart.jpg',
                },
            ],
            choices: [
                {
                    text: 'Go downstairs',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Arpi-calls-down'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Arpi-calls-down',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol walks in to the guest-room. Her eyes go wide from the view of a huge table with more than 15 plates on it. Arpi realizes that Carol looks amazed from the variety of food. They sit and have dinner while listening to Aram Asatryans best hits.',
                },
            ],
            choices: [
                {
                    text: 'Continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'carol-goes-to-bed',
                                        'carol-enters-the-bedroom',
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

export default havingDinner
