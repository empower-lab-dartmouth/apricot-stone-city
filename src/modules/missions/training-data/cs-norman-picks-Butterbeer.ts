import make from '../../../core/util/make'

const picksButterbeer = make.module({
    id: 'norman-picks-Butterbeer',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `"I'll have a Butterbeer, please!" Norman says.

                    "Cold or hot?" they ask.`,
                },
            ],
            choices: [
                {
                    text: 'Cold',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Cold'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Hot',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Hot'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Cold',
            convo: [
                {
                    type: 'text',
                    text: `"Cold, please" Norman says.

                    "Okay! Foam or whipped cream?" the ask.`,
                },
            ],
            choices: [
                {
                    text: 'Foam',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Foam'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Whipped cream',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Whipped-cream'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Hot',
            convo: [
                {
                    type: 'text',
                    text: `"Hot, please" Norman says.

                    "Okay! Foam or whipped cream?" the ask.`,
                },
            ],
            choices: [
                {
                    text: 'Foam',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Foam'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Whipped cream',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Whipped-cream'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Foam',
            convo: [
                {
                    type: 'text',
                    text: `"Foam, please" Norman says.

                    "Okay! Bottle or tankard?" they ask finally.`,
                },
            ],
            choices: [
                {
                    text: 'Bottle',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Bottle'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Tankard',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Tankard'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Whipped-cream',
            convo: [
                {
                    type: 'text',
                    text: `"Whipped cream, please" Norman says.

                    "Okay! Bottle or tankard?" they ask finally.`,
                },
            ],
            choices: [
                {
                    text: 'Bottle',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Bottle'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Tankard',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Tankard'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Bottle',
            convo: [
                {
                    type: 'text',
                    text: `"I'd like a bottle!" Norman says exhausted.
                    
                    "Good. I will bring your drink in a minute." the waiter says while pushing a button on their shirt and disappearing.

After the waiter reappears with Norman's drink in hand, they pass it to Norman and vanish again. He starts looking around the room, looking for his friend and listening to different conversations.`,
                },
            ],
            choices: [
                {
                    text: 'Listen to conversations',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-waits-for-his-friend',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Tankard',
            convo: [
                {
                    type: 'text',
                    text: `"I'd like a tankard!" Norman says exhausted.
                    
                    "Good. I will bring your drink in a minute." the waiter says while pushing a button on their shirt and disappearing.

After the waiter reappears with Norman's drink in hand, they pass it to Norman and vanish again. He starts looking around the room, looking for his friend and listening to different conversations.`,
                },
            ],
            choices: [
                {
                    text: 'Listen to conversations',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-waits-for-his-friend',
                                        'introduction',
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

export default picksButterbeer
