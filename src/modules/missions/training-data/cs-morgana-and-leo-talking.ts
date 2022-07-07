import make from '../../../core/util/make'

const morganaAndLeoTalking = make.module({
    id: 'morgana-and-leo-talking',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `As Norman turns, after hearing a familiar voice, he sees none other than Morgana Pendragon herself, in all beauty and glory.

                    She is talking to Leo DiCaprio, listening to him speak about a new tourist in town named Carol.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/108261746/177595886-28104d7f-a631-493f-94f9-590b80e087e2.png`,
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
                                    path: ['continue'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'continue',
            convo: [
                {
                    type: 'text',
                    text: `"Oh yeah, she's a blast! Definitely a refreshment after that damn squirrel, Scrat moved back to the city. We had to had all of those nuts and he still found some and started wrecking stuff. Beautiful creature though! Love all animals!" Norman hears Leo say.

                    "I hear there might be another one of those Americans from Big Apple City! They're always so fun to watch, examining our city like there's something extraordinary about it!" Morgana laughs.
                    
                    <b>Floating brooms and drinks bringing courage? pfft! Totally normal! </b> Norman thinks to himself, amused at Morgana's words.
                    
                    He looks at his half empty drink and contemplates downing it all in one gulp.`,
                },
            ],
            choices: [
                {
                    text: 'Drink it slowly',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['drink-it-slowly'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Drink it all in one gulp',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['one-gulp'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'drink-it-slowly',
            convo: [
                {
                    type: 'text',
                    text: `He decides to nurse it instead. One sip at a time, he finishes it, continues eavsdropping to their conversation.

                    After hearing some more stuff, he gets the urge to join the conversation, but he's not sure he can master enough audacity to do it.`,
                },
            ],
            choices: [
                {
                    text: 'Join the conversation',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-joins-the-conversation',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Continue listening',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-continues-listening',
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
            id: 'one-gulp',
            convo: [
                {
                    type: 'text',
                    text: `<b> Screw it! </b> he thinks and downs the drinks as he continues eavsdropping to their conversation.

                    After hearing some more stuff, he gets the urge to join the conversation, but he's not sure he can master enough audacity to do it.`,
                },
            ],
            choices: [
                {
                    text: 'Join the conversation',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-joins-the-conversation',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Continue listening',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-continues-listening',
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

export default morganaAndLeoTalking
