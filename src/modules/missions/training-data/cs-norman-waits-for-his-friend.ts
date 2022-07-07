import make from '../../../core/util/make'

const waitsForHisFriend = make.module({
    id: 'norman-waits-for-his-friend',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `After getting his drink, Norman starts looking around, cause apparently his friend is late. He notices a broomstick cleaning the place.He is amazed, it is his first time seeing magic.`,
                },
            ],
            choices: [
                {
                    text: 'touch the broomstick',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['touch'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'continue looking around',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['look'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'touch',
            convo: [
                {
                    type: 'text',
                    text: `Norman comes near the broomstick, which is trying to clean the corner but has problems reaching the farthest point. Norman grabs the broomstick to help, but it starts whirling crazy, getting out of Normans hand. The broomstick was offended.`,
                },
            ],
            choices: [
                {
                    text: 'apologize',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['apologize'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'get back to the table',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['get-back'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'look',
            convo: [
                {
                    type: 'text',
                    text: `Then he looks at the kitchen where sees self-cleaning dishes and self-cooking meals. He notices that the only person working here is the bartender, attracting and entertaining the audience. He hears a familiar voice coming from behind...`,
                },
            ],
            choices: [
                {
                    text: 'Morgana?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'morgana-and-leo-talking',
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
            id: 'apologize',
            convo: [
                {
                    type: 'text',
                    text: `Norman apologizes to the broomstick. It bows with understanding, and Norman decides to get back to his table.`,
                },
            ],
            choices: [
                {
                    text: 'Morgana?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'morgana-and-leo-talking',
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
            id: 'get-back',
            convo: [
                {
                    type: 'text',
                    text: `The broomstick whirls one more time and starts cleaning, ignoring Norman. On his way back he hears a familiar voice coming from behind...`,
                },
            ],
            choices: [
                {
                    text: 'Morgana?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'morgana-and-leo-talking',
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

export default waitsForHisFriend
