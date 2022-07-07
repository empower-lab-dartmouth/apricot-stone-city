import make from '../../../core/util/make'

const  training = make.module({
    id: 'in-training-field',
    submodules: [],
    convoSegments: [
        {
            id: 'training-field',
              convo: [
                {
                    type: 'text',
                    text: `Norman goes to the training field \n\n <i>Alright, I'm ready to make a new spell. After all, I'm the best student in our group!</i>`,
                },
            ],
            choices: [
                {
                    text: 'tacoium makeium',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['taco'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'cucumberium creatium',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['cucumber'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'taco',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/101460264/177518929-594ee12e-86b2-42de-ab03-dfe015d588ae.jpg',
                },
                {
                    type: 'text',
                    text: `Tacomonster attacks Norman \n <i>Oh no, what've I done?!</i> \n Tacomonster persuades Norman. Norman tries to defend himself.`,
                },
            ],
            choices: [
                {
                    text: 'expecto patronum',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ep'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ep',
            convo: [
                {
                    type: 'text',
                    text: `The monster dodges the attack and eats Norman

                    `,
                },
            ],
            choices: [
                {
                    text: 'Norman dies',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['rip'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'rip',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/101460264/177527599-9b510e44-133b-4e9d-a23e-2e7eaf851d16.JPG`,
                },
            ],
            choices: [
                {
                    text: 'conlusion',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root','/start'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'cucumber',
            convo: [
                {
                    type: 'text',
                    text: `5000 cucumbers are spawned in front of him \n <i>Oh my god.How cute is that.</i> \n Suddenly cucumbers turn into evil monsters and run towards Norman. He tries to defend himself, but fails.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/101460264/177519927-3657d400-eb9a-49b9-8b22-c48a138ff68e.jpg`,
                },
                
            ],
            choices: [
                {
                    text: 'Norman dies',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['rip'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default training
