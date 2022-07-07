import make from '../../core/util/make'

const lostPasport = make.module({
    id: 'Lost-pasport',
    submodules: [],
    convoSegments: [
        {
            id: 'miss-pasport',
            convo: [
                {
                    type: 'text',
                    text:
                        "<b>She gets dropped off and realizes her bag is open. She looks in, her passport is missing. It was in that first pocket, it must have fallen out.She's devastated. She has no way to contact the taxi.Her phone doesn't work here and her email isn't written on the passport. How would anyone even contact her if they did find the passport? She realizes she'll definitely be missing her planned might well be stuck in Armenia for a while.</b>",
                },
            ],
            choices: [
                {
                    text: 'Grab a drink',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Grab-Drink'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Get a shelter',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Get-shelter'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Grab-Drink',
            convo: [
                {
                    type: 'text',
                    text:
                        "Carol arrives at the cafe with the intensions of getting her head clear of all the stress she encountered today And also at the same time she can try to communicate with the locals , she tries to kill two birds with one stone. At the cafe she sees locals and Carol tries to communicate with them but she is unsuccessful because the locals don't speak her language. Through the pressure she gets angry and frustrated and decides to leave the cafe.",
                },
            ],
            choices: [
                {
                    text: 'Decides to walk',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Decide-walk'],
                                        
                                    
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Decide-walk',
            convo: [
                {
                    type: 'text',
                    text:
                        "She's not sure where she's going, she's just upset. Carol is soaking wet after just a few blocks. It's pouring. She is walking and only negative thoughts are circulating in her head about why everything was so badly arranged.",
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
                                        'walking',
                                        'walkingUnderRain',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Get-shelter',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol tries to get shelter she stumbles upon the bus stations which are spread throughout out the city. Carol is amazed at the bus stations at the Apricot Stone City she feels like she went back in time because of the buildings and how they are architected. Carol hides under a bus station where she is covered from the rain. She spots some locals who are waiting for the bus and Carol decides to try and speak to the locals , but she is unable because the locals do not speak her native language. Out of frustration she decides to just walk under the heavy rain.',
                },
            ],
            choices: [
                {
                    text: 'Walk alone',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Decide-walk'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default lostPasport
