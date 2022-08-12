import make from '../../core/util/make'

const teletubbies = make.module({
    id: 'teletubbies',
    submodules: [],
    convoSegments: [
        {
            id: 'carol-wakes-up',
            convo: [
                {
                    type: 'text',
                    text: 'Carol wakes up',
                },
                {
                    type: 'text',
                    text:
                        'She looks outside the window. Its still dark outside. She tries to sleep again, but in the corner of her eye she detects something weird: the dolls',
                },
            ],

            choices: [
                {
                    text: 'look at the dolls',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['look-at-the-dolls'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'try to sleep again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['try-to-sleep'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'look-at-the-dolls',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/105520369/184097858-ef6efa21-8d54-4203-bd97-132ee31ecf53.png',
                },
                {
                    type: 'text',
                    text: 'After loooking at the dolls, Carol feels hungry ',
                },
            ],

            choices: [
                {
                    text: 'go downstairs to find something to eat',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-downstairs-to-eat'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'try to sleep again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['try-to-sleep'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'try-to-sleep',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol goes back to the bed and lies down again. She closes her eyes and... *loud noise and child music*. Someone is watching TV or something downstairs',
                },
            ],

            choices: [
                {
                    text: 'go downstairs slowly to find out whos there',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-downstairs-slowly'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'run down fast to stop the person from escaping',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['run-downstairs'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'go-downstairs-to-eat',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol goes down the stairs. She wants to go to the kitchen, but in the hallway she recognizes a flickering light',
                },
            ],

            choices: [
                {
                    text: 'go to the light source',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-to-the-light'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'go-downstairs-slowly',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol slowly goes to the staircase and sneaks down. In the hallway she recognizes a flickering light',
                },
            ],

            choices: [
                {
                    text: 'go to the light source',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-to-the-light'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'run-downstairs',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol runs down the stairs. She follows the source of the noises. On her way she crashes into a vase.',
                },
            ],

            choices: [
                {
                    text: 'catch the vase',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['catch-the-vase'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'go on',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-on'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'go-to-the-light',
            convo: [
                {
                    type: 'text',
                    text: 'She follows the light to its source, in the livingroom. In the livivngroom she sees the Teletubbies watching a cursed sun on one of their screens, while singing the Teletubbies-show opening-theme.',
                },
                {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/105520369/184104368-ce3db256-d603-481e-800d-659e5c8369cd.png',
                },
                {
                    type: 'text',
                    text: 'Slowly, carefully, Carol approaches the green Teletubby, who points at a screen embedded in his belly. Three other teletubbys are solely illuminated by the light resonating from the screen. Carol only sees their outlines. Abruptly they stop singing and turn their heads by 180°, directly in Carols direction, asking "DO YOU WANT TO PLAY A GAME?" with a creepy voice',
                },
            ],

            choices: [
                {
                    text: 'agree to play a game',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['agree-playing'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'ask which game',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ask-which-game'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'catch-the-vase',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol just catches the vase closely before it crashes on the ground. Then She sees a flickering light at the end of the hallway.',
                },
            ],

            choices: [
                {
                    text: 'go to the light source',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-to-the-light'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'go-on',
            convo: [
                {
                    type: 'text',
                    text: 'Luckily the Vase dropped on the fluffy carpet. Now carol can see a flickering light at the end of the hallway.',
                },
            ],

            choices: [
                {
                    text: 'go to the light source',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['go-to-the-light'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'agree-playing',
            convo: [
                {
                    type: 'text',
                    text: 'Carol agrees to play a  game with the Teletubbies. "Let us guess a movie you like! If we are wrong, you can leave. But if we are right...", the yellow Teletubby whispers. He points to the screen of the green teletubby. "There is your game," he says,"Go on, we do not...BITE!" As the eerie laughter echoes in Carols ears, she approaches the large green figure and regards the screen.',
                },
            ],

            choices: [
                {
                    text: 'start playing',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'hot-and-cold-minigame',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ask-which-game',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol asks which game thy want to play. "Let us guess a movie you like! If we are wrong, you can leave. But if we are right...", the yellow Teletubby whispers. He points to the screen of the green teletubby. "There is your game," he says,"Go on, we do not...BITE!" As the eerie laughter echoes in Carols ears, she approaches the large green figure and regards the screen.',
                },
            ],

            choices: [
                {
                    text: 'start game',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'hot-and-cold-minigame',
                                        'intro',
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

export default teletubbies
