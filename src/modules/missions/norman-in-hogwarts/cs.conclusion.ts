import make from '../../../core/util/make'
import { text } from '../../../core/util/make/unvalidated-type-constructors'

const conclusion = make.module({
    id: 'conclusion',
    submodules: [],
    convoSegments: [
        {
            id: 'conc',
            convo: [
                {
                    type: 'text',
                    text:
                        'so, what happened in our story in terms of machine learning?',
                },
            ],
            choices: [
                {
                    text: 'continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['partone'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'partone',
            convo: [
                {
                    type: 'text',
                    text:
                        'in machine learning, the library is train data. when he tried to create a spell without knowing a lot of spells, he got weird results',
                },
            ],
            choices: [
                {
                    text: 'interesting...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['parttwo'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'parttwo',
            convo: [
                {
                    type: 'text',
                    text:
                        'but when he went to library, read some spell books and got a bigger training data, he created a spell successfully!',
                },
            ],
            choices: [
                {
                    text: 'return to begining',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default conclusion
