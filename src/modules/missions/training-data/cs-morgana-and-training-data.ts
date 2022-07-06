import make from '../../../core/util/make'

const morganaAndTrainingData  = make.module({
    id: 'morgana-and-training-data',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `Norman sits closer as their conversation goes on.`,
                },
            ],
            choices: [
            ],
        },
    ],
})

export default morganaAndTrainingData
