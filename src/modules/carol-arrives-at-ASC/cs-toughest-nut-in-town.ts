import make from '../../core/util/make'

const toughestNutInTown = make.module({
    id: 'toughest-nut-in-town',
    submodules: [],
    convoSegments: [
        {
            id: 'walking-under-the-rain',
            convo: [
                {
                    type: 'text',
                    text:
                        'It is raining cats and dogs, Carols frustrated and angry. She makes a decision to walk, despite the weather and her wet, soggy shoes.This was supposed to be a good trip! I shouldve just stayed at the airport!',
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
                                    path: ['continue1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'turning-around',
            convo: [
                {
                    type: 'text',
                    text: 'As soon as she turns back, a blue car stops by...',
                },
            ],
            choices: [],
        },
        {
            id: 'going-check-the-cat',
            convo: [
                {
                    type: 'text',
                    text:
                        'She approaches the trash can, seeing the cat, gagging, trying to throw up and then she sees a blue glowing cube come out of the cats mouth. She sees an old chest. Carol thinks that in the old chest will be an expensive things. She decides to open it. Then she understand that it is not old chest, it is a "mimic". The mimic eats her and then she appeared in the blue car.',
                },
            ],
            choices: [],
        },
        {
            id: 'continue1',
            convo: [
                {
                    type: 'text',
                    text:
                        'After walking for about what feels like eternity, she gives up on her mission of just walking. She is tired as fork, her feet cant bear it anymore.',
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
                    text:
                        'What the heck is this woman even thinking?! the left foot mumbles grumpily.',
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
                    text:
                        'Dont you remember the last guy she went on a date with?! Her brain is just a meaty greek nut!" the right foot responds.',
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
                                    path: ['continue4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'continue4',
            convo: [
                {
                    type: 'text',
                    text:
                        'She crashes on the wet concrete and sees a 13 year old boy in a yellow raincoat running after a paper boat. She sees that the boat falls into the sewers and the boy follows the boat, attempting to get it back.Carol thinks she hears something crash. She looks in the direction of the noise. Turns out it was a cat jumping into a trash can.',
                },
            ],
            choices: [
                {
                    text: 'turn around',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'a-woman-stops-her-car',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'go check the cat',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['going-check-the-catt'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'going-check-the-catt',
            convo: [
                {
                    type: 'text',
                    text:
                        'She approaches the trash can, seeing the cat, gagging, trying to throw up and then she sees a blue glowing cube come out of the cats mouth. She sees an old chest. Carol thinks that in the old chest will be an expensive things. She decides to open it. Then she understand that it is not old chest, it is a "mimic". The mimic eats her and then she appeared in the blue car.',
                },
            ],
            choices: [
                {
                    text: 'Continue walking',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'a-woman-stops-her-car',
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

export default toughestNutInTown
