import make from '../../../core/util/make'

const normanContinuesListening  = make.module({
    id: 'norman-continues-listening',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `After Norman's social anxiety gets the better of him, he decides to just sit and listen to them speak.

                    He listens and starts to regret not going up to them and decides to go up to them anyway, but as he gets up, he drops his backpack, drawing Leo's attention straight onto him.
                    
                    "Hey," he hears Leo say, "Aren't you Norman? You're the other tourist!"
                    
                    "Yeah." Norman says.
                    
                    "Wanna join us, Norman?" Morgana asks.
                    
                    "Definitely!" Norman exclaims.
                    
                    "Grab a chair, Norm!" Leo says and turns back to his compagnion.`,
                },
            ],
            choices: [
                {
                    text: 'Grab a chair and join',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['training-data',
                                    'morgana-and-training-data',
                                    'introduction',],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default normanContinuesListening
