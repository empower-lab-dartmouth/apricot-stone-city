import make from '../../../core/util/make'

const arrivalAtThreeBroomsticks = make.module({
    id: 'norman-arrives-at-Three-Broomsticks',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `After walking around Apricot Stone city for a little while, he hears someone talk about a pub called "Three Broomsticks"and decides to check it out with his friend.

                    He types the name of the pub into Google Maps and walks toward the location.
                    
                    As Norman walks into the pub, he starts scrutinizing his surroundings. He notices lanterns, candle holders, ancient coatracks, animal fur chair covers, signs, everything in warm tones and redwood.`,
                },
            ],
            choices: [
                {
                    text: 'Show how the pub looked like',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['pub'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'pub',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/108261746/177497906-ee3cc3bc-eef5-4ad0-82bd-2fe4a977f9bd.png`,
                },
            ],
            choices: [
                {
                    text: 'Continue the story',
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
                    type: 'text',
                    text: `He sits down at the nearest table and picks up the menu.

                    He notices that the chairs are squeaky.
                    
                    He looks up from the menu to look around the room and ask for a waiter. He notices people putting 10 inch sticks into some kind of holders. He sees one on his table. It has a label. <b> Olivander's finest work, wand holders for witches and wizards </b>
                    
                    He suddenly wishes he possessed a wand.
                    
                    One of the waiters approaches him and asks if he wants to get started with something to drink.
                    
                    He looks up at the waiter and sees round glasses and a lightning scar on their forehead.`,
                },
            ],
            choices: [
                {
                    text: 'Ask them about the scar',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['scar'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Order',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['order'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'scar',
            convo: [
                {
                    type: 'text',
                    text: `"Hello" the waiter greets Norman.

                    "Hi! Not to make you uncomfortable, can I ask you about your scar?" Norman asks and sees the waiter lighten up.
                    
                    "Ah! I'm cosplaying Harry Potter! He's my hero! I met him once, during the Hogwarts battle and he saved my life. I never forgot it. I send him letters every day. Although he has restraining order against me. so I can't approach him closer than 50 feet." the waiter says. Norman's whole face froze in place from shock. His mouth was left agape, he was forcing a smile to not make this even more awkward.`,
                },
            ],
            choices: [
                {
                    text: 'He orders a drink',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['order'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'order',
            convo: [
                {
                    type: 'text',
                    text: `Norman looks through the menu one more time and comes up with two options to order.

                    "I am torn between two drinks. Butterbeer and Firewhisky. Can you describe both so I can choose?" Norman asks.
                    
                    "Well, you narrowed it down to two good options, it depends on what are you in the mood for. Butterbeer is slightly alcoholic. It is a syrup-y, sweet drink. It can be served cold or hot, in a tankard or in a bottle, with foam or with whipped cream. It's a very cozy drink and Hogwarts' house elves' personal favourite. Not enough to affect a human, but house elves party with it." Norman hears the waiter say.
                    
                    "What about firewhisky?" Norman asks.
                    
                    "Firewhisky is a much stronger drink. I have to ask for Wizarding ID and verify you're not flying a broomstick afterwards. Make sure to have a safe ride, like your Hippogriff, dragon or someone to pick you up, because firewhisky is not for amateurs! It is a hard, cinnamon flavoured drink that fills you with courage and bravery. It is Remus Lupin and Sirius Black's personal favourite. Although Remus prefers a chocolate bar on the side. Although too many glasses cause hangover." The waiter responds.`,
                },
            ],
            choices: [
                {
                    text: 'Pick Firewhisky',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-picks-Firewhisky',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Pick Butterbeer',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-picks-Butterbeer',
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

export default arrivalAtThreeBroomsticks
