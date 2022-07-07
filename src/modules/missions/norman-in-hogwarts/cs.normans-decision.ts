import make from '../../../core/util/make'

const  decission = make.module({
    id: 'norman-wants-to-create-a-new-spell',
    submodules: [],
    convoSegments: [
        {
            id: 'start-create',
            convo: [
                {
                    type: 'text',
                    text:'<b>After studying at Hogwarts for a while, Norman gets interested in how spells are created. Have they always existed or did someone make them? And if so, how to create new ones? So many questions.</b>',
                },
                {
                    type: 'text',
                    text:'<b>Suddenly, he sees professor Snape walking in corridor</b>',
                },
            ],
            choices: [
                {
                    text: 'ask Professor Snape',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['asksnape'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'asksnape',
            convo: [
                {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/51162620/177508541-057ea1a6-66d0-4186-b0b6-e4eea688246c.png',
                },
                {
                    type: 'text',
                    text:'<i>Professor Snape, I\'ve been learning magic for 4 years now, and I think I\'m ready to learn how to create new spells. Please, teach me</i>',
                },
                {
                    type: 'text',
                    text:'<i>This is out of study program, mr Potter, and I\'m not going to waste time on a lazy and irresponsible student like you. Now don\'t bother me, I\'m busy</i>',
                },
                {
                    type: 'text',
                    text:'<b>Saying this, Snape turns around and leaves.</b>',
                },
                {
                    type: 'text',
                    text:'<i>most probably other professors won\'t help me either. I should do something by myself</i>',
                },

            ],
            choices: [
                {
                    text: 'Go to library',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'norman-in-hogwarts','in-the-library','in-library'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Try it by yourself',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'norman-in-hogwarts','in-training-field','training-field'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default decission
