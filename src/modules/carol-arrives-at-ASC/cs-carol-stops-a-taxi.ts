import make from '../../core/util/make'

const stopsTaxi = make.module({
    id: 'stop-taxi',
    submodules: [],
    convoSegments: [
        {
            id: 'taxi',
            convo: [
                {
                    type: 'text',
                    text: `Carol is pretty soaked and she is starting to feel cold. She decides to take a taxi. She looks around and sees no taxis standing, therefore she decides to stop one. She comes closer to the edge of the sidewalk and hesitantly raises her hand. A car stops in front of her. She opens the door to get in.\n <b>Taxi Driver:</b> Ու՞ր ենք գնում քուրս:`,
                },
            ],
            choices: [
                {
                    text: "Carol: I don't understand!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ["I-don't-understand"],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Carol: Sorry, I only speak English.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['sorry-I-only-speak-English'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "I-don't-understand",
            convo: [
                {
                    type: 'text',
                    text: `<b>Taxi Driver:</b> Why so munat (mad) qurs (sister)?\nCarol gets in and angrily slams the door.\n<b>Carol:</b> Drive me to the Center of the City!\nTaxi driver rolls his eyes.\n<b>Taxi Driver:</b> Oqey\nThey drive in silence\n`,
                },
            ],
            choices: [
                {
                    text: 'Just Go',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'Lost-pasport',
                                        'miss-pasport',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'sorry-I-only-speak-English',
            convo: [
                {
                    type: 'text',
                    text: `<b>Taxi Driver:</b> Vochinch (it's okay)! I speak English very well! Where are we going qurs (sister)?\nCarol absent-mindedly looks outside the window. The rain pours even harder.\n<b>Carol:</b> Uuuuh... To the Center of the City, I guess?\n<b>Taxi Driver:</b> Where?\nCarol realizes that she has to talk as simply as possible. She nervously licks her lips trying to think of a way to describe the place.`,
                },
            ],
            choices: [
                {
                    text: 'Carol takes her phone from her bag.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-takes-off-her-phone'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Carol tries to describe the place.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-tries-to-describe'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-takes-off-her-phone',
            convo: [
                {
                    type: 'text',
                    text: `Carol opens Google maps. She zooms the map on Apricot-Stone-City to show the center. She points some places around the Opera house.\n<b>Carol:</b> Here... I think...\nTaxi Driver narrows his eyes looking at the phone. Then he smiles widely and his eyes are glittering.\n<b>Taxi Driver:</b> Haaaaaaaaa (oh yeah)! Kentron? Eh Center?\nCarol eagerly bobs her head.\n<b>Taxi Driver:</b> Oqey!`,
                },
            ],
            choices: [
                {
                    text: 'They start driving',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['During-the-taxi-ride'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-tries-to-describe',
            convo: [
                {
                    type: 'text',
                    text: `Carol frantically waves her hands. She shows a circle with her hands.\n<b>Carol:</b> Umm... City!\nShe then points to the Center of the Circle in the air.\n<b>Carol:</b> Center!\n<b>Taxi Driver:</b> Kentron? Eh Center?\nCarol smiled. She calmed down a little bit.\n<b>Taxi Driver:</b> Oqey..`,
                },
            ],
            choices: [
                {
                    text: 'They start driving',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['During-the-taxi-ride'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'During-the-taxi-ride',
            convo: [
                {
                    type: 'text',
                    text: `<b>Taxi Driver:</b> So, qurs, u tink I alvays been a taxi drayver?!?!?!?!?! NOoOoO!?!?!?!?! I do it for hobi! I am internacional biznesmen! Do u even nou vat bizneses I do beq in my deyz?!? Our Prezident axpersa (my brother), my brat (brother), my bro, femili u nou?\nCarol nods without a single clue of what was just said.\n<b>Carol:</b> mhmmm...\n<b>Taxi Driver:</b> ze veader is gut, yes? I mean, dis probkeq (traffic), ehhhhh... TRAFIK! are qiling mi! Dey dont do aniting tu chenj it!\n<b>Carol:</b> mhmmm...?\n<b>Taxi Driver:</b> ver ar u from, agen?\nCarol opens her mouth to respond, but she is interrupted by the driver.\n<b>Taxi Driver:</b> Amerika? Galivud? Golden city? Glendel? My dotr in Glendel live!\n<b>Carol:</b> A-\n<b>Taxi Driver:</b> Argentina? My anql livz der!?!!! Amsterdam? My sistr vorks der! She iz a denser.\nAfter Long incomprehensible monologue for Carol, they finally arrive to the city center.\n<b>Taxi Driver:</b> Oqey, jans (sweetie), ve ar hir. it iz 20 tousand apricots. Asumes (you were saying), ver ar u from?\nCarol pays the driver and as she gets out, she answers,\n<b>Carol:</b> Big Apple City.\nAnd slams the door shut. The taxi driver screams out of the driver's seat,\n<b>Taxi Driver:</b>GOMI DUR CHI!!!!!!!!!!(The car door isn't a farm door for you to slam)\nAnd drives away.`,
                },
            ],
            choices: [
                {
                    text: 'Just Go',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'Lost-pasport',
                                        'miss-pasport',
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

export default stopsTaxi
