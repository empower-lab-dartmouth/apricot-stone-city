import make from '../../core/util/make'

const normanOnPlane = make.module({
    id: 'norman-on-the-plane',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `Welcome to Apricot Stone City, an interactive storytelling game.`,
                },
            ],
            choices: [
                {
                    text: 'Start the game',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['setting'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'setting',
            convo: [
                {
                    type: 'text',
                    text: `Once again, we step into our story on a familiar Boeing 737 passenger where we meet Norman just a few rows away from Carol, sipping a ginger ale and gazing out the window. Norman is on a week long business trip in Apricot Stone City, Armenia, where he will be collaborating with an Armenian company as a guest graphic designer. Although he has called with them many times on Zoom, this is his first time visiting Apricot Stone City in person. He is very excited to connect with his friends from the company he has talked with online. Otherwise, he is not sure what to expect for his first visit in the country!`,
                },
            ],
            choices: [
                {
                    text: 'Norman\'s story',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['story'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'story',
            convo: [
                {
                    type: 'text',
                    text: `Norman has never had much luck with sleeping on planes, so his pass time of choice is gazing out the window. He watches the clouds and thinks about all of the tourist websites he read about Apricot Stone City, remembering the interesting architecture he saw in photos, and the ornamental detail worked into buildings which speaks to the pride and nationalism of the Armenian people. He is a bit of a scattered person, so he did his best to prepare for his trip this time He can't wait to see all of this, and the many sculptures scattered around the city he has heard about. As a graphic designer, he is sure that these artistic details will be his favorite sight-seeing endeavor. Sparked by inspiration, he pulls out a pen from his shirt pocket and takes the small paper napkin that came with his ginger ale and decides to put pen to paper. He is not sure what he is most inspired to do currently.`,
                },
            ],
            choices: [
                {
                    text: 'Draw a picture',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['picture'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'write a novel',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['novel'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'picture',
            convo: [
                {
                    type: 'text',
                    text: `Norman begins to doodle on his napkin, letting his drawing wander with his mind. Through crosshatching and squiggles, a figure begins to take shape on the small napkin. In the drawing, a cartoon moose sits at a table eating a juicy apricot with a smile on his face. His large antlers spread over the top of the napkin. He smiles to himself at such a goofy image. Just then, the pilot's voice crackles over the speaker: \n<i>"we'll be landing in Apricot Stone City in 25 minutes. Please put away all large electronic devices."</i>`,
                },
            ],
            choices: [
                {
                    text: 'fasten seatbelt',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['seatbelt'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'novel',
            convo: [
                {
                    type: 'text',
                    text: `Norman taps the pen to his chin for a moment, then begins to write: \n <i>"Freedom, I've found Here in the clouds. And once back on earth, I'll remain to be Only free, only free."</i> Norman smiles to himself. Not his best work, but he was taken by a feeling of being in the sky. Just then, the pilot's voice crackles over the speaker: <i>"we'll be landing in Apricot Stone City in 25 minutes. Please put away all large electronic devices."</i>`,
                },
            ],
            choices: [
                {
                    text: 'fasten seatbelt',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['seatbelt'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'seatbelt',
            convo: [
                {
                    type: 'text',
                    text: `Norman puts the napkin in his pocket for safe keeping and puts up his tray table before fastening his seatbelt. He glances up at the overhead storage, remembering that he has to grab his suit jacket and ties that he put up there before the flight, hoping they aren't to crumpled. After a bit of time, the plane gradually glides down to a landing on the tarmac. Norman has always loved the rush feeling of plane landings. When the plane comes to a stop, everyone stands up and Norman waits his turn to grab suit and head out of the plane to get his luggage.`,
                },
            ],
            choices: [
                {
                    text: 'Get luggage',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root','norman-arrives-at-ASC','bags','getting-luggage'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default normanOnPlane
