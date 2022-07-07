import make from '../../../core/util/make'

const normanJoinsTheConversation = make.module({
    id: 'norman-joins-the-conversation',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `After contemplating for a long time, Norman finally gets the courage to come up to the bar, grab a stool and ask the two people if he can join the conversation.

                    "Excuse me?" Norman says.`,
                },
            ],
            choices: [
                {
                    text: `Act like they're strangers`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['strangers'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: `Fangirl`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Fangirl'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'strangers',
            convo: [
                {
                    type: 'text',
                    text: `"Hello, can I join your conversation? I'm also a tourist and I'm in complete shock of how magical this city is!" Norman says.

                    He sees Morgana smile and hears her say "welcome to Apricot Stone city! Join us! We'd love to chat!"`,
                },
            ],
            choices: [
                {
                    text: 'pull up a chair and join them',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'morgana-and-training-data',
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
            id: 'Fangirl',
            convo: [
                {
                    type: 'text',
                    text: `"Omg, are you guys Morgana Pendragon and Leo DiCaprio?! I'm such a fan of both of you! May I join?" he asks.

                    He sees Morgana smile and hears her say "welcome to Apricot Stone city! Join us! We'd love to chat!"`,
                },
            ],
            choices: [
                {
                    text: 'pull up a chair and join them',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'morgana-and-training-data',
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

export default normanJoinsTheConversation
