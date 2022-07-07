import make from '../../../core/util/make'

const morganaAndTrainingData = make.module({
    id: 'morgana-and-training-data',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `Norman sits closer as their conversation goes on.

                    [Leo] Oh, by the way i heard that there is a new curriculum in the dragon school of yours.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/108261746/177596114-2c088182-4960-4b1d-91d0-575413f5b544.png`,
                },
            ],
            choices: [
                {
                    text: 'Continue listening',
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
                    text: `[Morgana] Yeah thats right, how did you know about it?

                    [Leo] You know, being a world known actor has its advantages.`,
                },
            ],
            choices: [
                {
                    text: '[Norman] A new dragon school curriculum?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['continue2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'continue2',
            convo: [
                {
                    type: 'text',
                    text: `[[Morgana] We had some accidents during the last tower defense... Anyway the new one is based on Machine Learning, more specifically Training Data.`,
                },
            ],
            choices: [
                {
                    text: '[Norman] Training Data, huh...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['continue3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'continue3',
            convo: [
                {
                    type: 'text',
                    text: `[Morgana] It is the data you use to train a dragon or machine learning model to predict the outcome you design them to predict. Did you understand?`,
                },
            ],
            choices: [
                {
                    text: '[Norman] Absolutely!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Absolutely'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '[Norman] No... I still need some more explanation.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['more-explanation'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'more-explanation',
            convo: [
                {
                    type: 'text',
                    text: `[[Leo] Let me try. Look, I think what Morgana wants to say is that, last time dragons were not able to see the difference between their people and people attacking them.

                    [Morgana] Just how did you... Nevermind.
                    
                    [Leo] By using Training Data we will be able to teach dragons identifying enemies.`,
                },
            ],
            choices: [
                {
                    text: '[Norman] Oh wow it really makes sense now, thanks.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Absolutely'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Absolutely',
            convo: [
                {
                    type: 'text',
                    text: `[Morgana] Good.`,
                },
            ],
            choices: [],
        },
    ],
})

export default morganaAndTrainingData
