import make from '../../../core/util/make'

const neuralNetworks = make.module({
    id: 'cs.norman-and-merlin-in-world-of-neural-networks',
    submodules: [],
    convoSegments: [
        {
            id: 'auto-repair-shop',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://camo.githubusercontent.com/7038b9513fdf0f785ea1603b5628fc5db1da12ded186309f76f26e4e8f0ac23e/68747470733a2f2f636c6f756466726f6e742d75732d656173742d312e696d616765732e6172637075626c697368696e672e636f6d2f706d6e2f495552584f524635534245364c4458325a5a34585734554b50592e6a7067',
                },
                {
                    type: 'text',
                    text:
                        'They see an auto repair shop while driving, Merlin says, great, we can stop here and use this as an example.',
                },
            ],
            choices: [
                {
                    text: 'How can you use car for NN example?',
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
                    type: 'image',
                    src:
                        'https://camo.githubusercontent.com/7846b9dc5fb2ee4d3c71fbb19f5be0d93390531582a1ef503fd4e33972fe2385/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a72596e41584451626369376f55585a584656772d47672e706e67',
                },
                {
                    type: 'text',
                    text: `Suppose you want to program a self-driving car to activate the brakes, accelerator,and to steer left or right at the appropriate times. You have a number of sensors: <br> 
                    1.front proximity radarrear <br> 
                    2.proximity radarleft <br>
                    3.proximity radarright <br>
                    4.proximity radar, <br>
                    5.and a speedometer. If you knew what you were doing, you would wire the front proximity sensor to the breaks so that when something was really close in front of the car then the brakes would be activated hard. Likewise you would wire the left proximity radar and right proximity radar to the steering wheel such that the steering wheel was turned away from things that threaten the car from the side.`,
                },
            ],
            choices: [
                {
                    text: "So easy, where's the catch?",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['catch'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'catch',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://camo.githubusercontent.com/4c3b5a4dfe2523bab649d44f5a74d8a64e38d7b235762384f93969151c0dbd94/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313030302f312a7a5069696b39766c575f473747553962546a78684a512e6a706567',
                },
                {
                    type: 'text',
                    text:
                        "Let's say you don't know how a machine works.How would you connect the sensors?",
                },
            ],
            choices: [
                {
                    text:
                        'I will use transistors, integrated circuits or logic gates.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['transistors'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'I have no idea',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'connect-all-sensors-to-all-outputs',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'transistors',
            convo: [
                {
                    type: 'text',
                    text: `What if you don't have them? All you have are wires of varying degrees of conductivity. Some wires are superconductors and electricity flows without much resistance at all. Some wires barely conduct electricity at all.`,
                },
            ],
            choices: [
                {
                    text: 'What can we do?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'connect-all-sensors-to-all-outputs',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'connect-all-sensors-to-all-outputs',
            convo: [
                {
                    type: 'text',
                    text: `One thing you could do is you could connect all sensors to all outputs. Pick wires with different conductivity randomly as you wire everything together. Like this.`,
                },
                {
                    type: 'image',
                    src: `https://camo.githubusercontent.com/7a181053a0ae57132688186cf63cd270a151260d7604415d3ef715a2425d8634/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a4e65614b64732d7436514939785556656c47725579512e706e67`,
                },
                {
                    type: 'text',
                    text: `Now try it out. Does you car crash? Probably. It probably crashes a lot. In fact, the behavior of the car as the sensors activate will be quite random.`,
                },
            ],
            choices: [
                {
                    text: "What if it doesn't work?",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['work'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'work',
            convo: [
                {
                    type: 'image',
                    src: `https://camo.githubusercontent.com/79d1bb37c80ae2f21d878b565b221863b5c801cbf91073aae5f8a2479fe0daa8/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a44534a733546704d714475736742676c6858474a5a772e706e67`,
                },
                {
                    type: 'text',
                    text: `Swap out some wires for different ones with different conductivity. Try it again. Maybe this time it crashes a little bit less. If it crashes less, we are on the right track. Maybe it crashes a little bit more. If you do this long enough, you will eventually find a configuration that doesn’t crash at all. Maybe something like the following will work, where the darker edges are higher-conductivity wires and the lighter lines are higher-resistance.`,
                },
            ],
            choices: [
                {
                    text: 'Hmm, interesting. And how does this relate to NN?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['nn'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'nn',
            convo: [
                {
                    type: 'image',
                    src: `https://camo.githubusercontent.com/1ad0e6e8f969a9c9374b91686884747a8a9fe4dd781ce40b567a12b527083bef/68747470733a2f2f696e7465726e65746f66627573696e6573732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30322f4d49542d6e657572616c2d6e6574776f726b2e706e67`,
                },
                {
                    type: 'text',
                    text: `Training is what we call the process of figuring out what types of wires to use for each connection between nodes. Without going into details, we run some sample inputs — different driving scenarios — into the network and then check to see if the car did the right thing.`,
                },
            ],
            choices: [
                {
                    text: "What if it's wrong?",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['wrong'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'wrong',
            convo: [
                {
                    type: 'image',
                    src: `https://camo.githubusercontent.com/0c7415eb4d01c8779cb225c465def149dd1c14867e5be06f9c8a988274624f3b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a4370315573332d754a6c7255796e35703857777954412e706e67`,
                },
                {
                    type: 'text',
                    text: `We measure how wrong each of the actuators were. If an actuator was activated mostly right we try wires connected to it with slightly different conductivity. If an actuator was activated very wrong we try wires with very different conductivity. Try the network on a lot of scenarios, tweaking the network after each time.`,
                },
            ],
            choices: [
                {
                    text: `Start another mission`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'Norman-learns-about-gradient-descent',
                                        'blackboard',
                                        'start',
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

export default neuralNetworks
