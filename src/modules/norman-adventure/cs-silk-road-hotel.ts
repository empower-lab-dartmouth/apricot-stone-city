import make from '../../core/util/make'

const silkRoadHotel = make.module({
    id: 'road-hotel',
    submodules: [],
    convoSegments: [
        {
            id: 'go-to-hotel',
            convo: [
                {
                    type: 'text',
                    text: '<b>Although his taxi ride is a bit hectic, Norman is relieved it still is calmer than that black SUV seemed to be driving! Arriving at the Silk Road Hotel, Norman steps out of the taxi with his bags and walks into the lovely little hotel. At the door, a woman in a dress meets him</b>',
                },
                {
                    type: 'text',
                    text: '<i>Welcome to the Silk Road Hotel! My name is Aregnaz. Do you have a reservation with us?</i>'
                },
                {
                    type: 'text',
                    text: '<b>Norman checks in with the woman and gets his key for room 14. On the reception table is a bowl of apricots.</b>'
                },
                {
                    type: 'text',
                    text: '<i>Can I take one</i>'
                },
                {
                    type: 'text',
                    text: '<b>he asks. The woman smiles,</b>'
                },
                {
                    type: 'text',
                    text: '<i>Certainly! They are from our garden!</i>'
                }
            ],
            choices: [
                {
                    text: 'Take an apricot',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['eat'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Not hungry now',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['hungry'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'eat',
            convo: [
                {
                    type: 'text',
                    text: '<i>I would love an apricot, they are so ripe.</i>'
                },
                {
                    type: 'text',
                    text: '<b>Aregnaz shows Norman how he can open the apricot by tearing it open. He takes a bite out of the half of the apricot and the juicy fruit takes over his mouth. He has never had such a flavorful apricot! Aregnaz leads Norman to his room, and on the way they walk through a quiet garden where apricot trees, grape vines, and pomegranate trees flourish around a peaceful fountain. They also pass through a large room filled with looms. Each loom has an intricate rug in the process of being woven. It is a beautiful sight and Norman gasps at the pure craftsmanship. When he gets to his room, Norman collapses on his bed and falls asleep. After a few hours of good rest, he wakes up to a text on his phone. His friend Serko, a photographer who lives in Apricot Stone City.</b>',
                },
                {
                    type: 'text',
                    text: '<i>So glad you made it! Let\'s get dinner tonight. I can think of two places you may like, would you like to go to Lavash, or Seasons Restaurant?</i>'
                }
            ],
            choices: [
                {
                    text: 'return to begining',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                
            ],
        },
        {
            id: 'hungry',
            convo: [
                {
                    type: 'text',
                    text: '<i>I don\'t feel like an apricot right now, but maybe later.</i>'
                },
                {
                    type: 'text',
                    text: '<b>Aregnaz leads Norman to his room, and on the way they walk through a quiet garden where apricot trees, grape vines, and pomegranate trees flourish around a peaceful fountain. They also pass through a large room filled with looms. Each loom has an intricate rug in the process of being woven. It is a beautiful sight and Norman gasps at the pure craftsmanship. When he gets to his room, Norman collapses on his bed and falls asleep. After a few hours of good rest, he wakes up to a text on his phone. His friend Serko, a photographer who lives in Apricot Stone City.</b>',
                },
            ],
            choices: [
                {
                    text: 'return to begining',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                
            ],
        }
    ]
}) 

export default silkRoadHotel  