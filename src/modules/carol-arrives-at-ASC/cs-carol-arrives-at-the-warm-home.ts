import make from '../../core/util/make'

const atTheWarmHouse = make.module({
    id: 'at-the-warm-home',
    submodules: [],
    convoSegments: [
        {
            id: 'around-the-table',
            convo: [
                {
                    type: 'text',
                    text:
                        "<b>[Anoush leads Carol to the second floor of the room] Carol turns around and sees the a big family table.The atmosphere is warm and lively. At first everyone starts to introduce themselves: big uncle, uncle, aunt, cousins, twins Ani and Anna. One more name and Carol's head would spin around. Then they start enjoying delicious Armenian meal while Anoush's relatives continue to ask questions about Carol. Carol feels so welcomed and all negative emotions are gone. Hosts offer Carol to eat Armenian food. At first, she refuses, thinking that she will not like them, and at the same time she is feeling shy. She decides that it would be better to order Chinese food and secretly orders some, because it would be rude to do it in front of them. But the deliveryman says that he can't come because of the rain. Carol comes back and sits around the table. Anoush asks once more and she takes the offer.</b>",
                },
                {
                    type: 'image',
                    src:
                        'https://cdn-icons-png.flaticon.com/512/878/878220.png',
                },
            ],
            choices: [
                {
                    text: 'Carol eats Tolma',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-eats-tolma'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Carol eats Harisa',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-eats-harisa'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Carol eats Khorovats',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-eats-khorovats'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carol-eats-tolma',
            convo: [
                {
                    type: 'text',
                    text:
                        "Carol doesn't like the way Tolma looks, but not to be rude, she gives it a try. She swallows a small piece of Tolma and falls in love with it. and eats whole plate of Tolma. Anoush also offers her to add more, but she already felt full. They share a meal of lavash, fruit, meat, cheese, and wine. Carol is very happy and relieved to dry off in the warm home with this kind family.",
                },
            ],
            choices: [],
        },
        {
            id: 'carol-eats-harisa',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol tries strange looking Harisa. It was not so bad, but she does not like it as much. Arpi realizes it and helps Carol to eat other things from the table. They share a meal of lavash, fruit, meat, cheese, and wine. Carol is very happy and relieved to dry off in the warm home with this kind family.',
                },
            ],
            choices: [],
        },
        {
            id: 'carol-eats-khorovats',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol eats a big piece of Khorovats and likes it so-so much. She later she askes the recipe of it to make later for herself. They share a meal of lavash, fruit, meat, cheese, and wine. Carol is very happy and relieved to dry off in the warm home with this kind family.',
                },
            ],
            choices: [],
        },
    ],
})

export default atTheWarmHouse
