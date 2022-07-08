import make from '../../core/util/make'

const tooManyBags = make.module({
    id: 'bags',
    submodules: [],
    convoSegments: [
        {
            id: 'getting-luggage',
            convo: [
                {
                    type: 'text',
                    text: `With his suit jacket and two of his ties in one hand, and his carry-on in the other hand, Norman exits the plane and follows the crowd to the luggage carousel. Despite his fatigue from the flight, he looks excitedly around at his first glimpses of Armenia. He loves the look of the Armenian letters on each sign, all curves and tails to his fresh eyes. After waiting a few minutes amongst the other travelers, he sees his large green luggage come around the carousel and realizes he has an issue after he grabs it. Between his carry-on, his suit jacket and ties, and the luggage, he has no free hands! How will he make it out to the taxi in this state?`,
                },
            ],
            choices: [
                {
                    text: 'Wear the jacket and ties',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['wear-the-jacket-and-ties'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Just carry it all',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['just-carry-it-all'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'wear-the-jacket-and-ties',
            convo: [
                {
                    type: 'text',
                    text: `Norman really does not want to wrinkle his suit right away, especially because he is not sure he will have an iron at his hotel. Hastily, Norman puts the suit jacket on over his traveling shirt, and loosely knots both of his ties around his neck so that they don’t fall off in the hubbub. He knows that he must look very silly at this point, walking around with two ties on, but he is too tired at this moment to give it much thought. Soon he will be relaxing at his hotel, and enjoying Apricot Stone City.Now with two free hands, Norman gathers his bags and, feeling much relieved, gets into the customs line to enter Armenia properly. After a brief walk through customs, he walks through the airport double doors that open into taxi section of the street. Norman walks to the curb, looking around to see if a taxi might pull up soon. Suddenly, a black SUV skirts around the corner, weaving between other cars. It skids to a halt right in front of him. The back seat door opens and a burly man in a pressed suit and dark sunglasses reaches out and grabs Norman by his ties. He hauls Norman into the car, grabbing his bags with ease. Before Norman can struggle or cry for help, the moment is over and the SUV is swerving off through traffic with him inside! He is scared and dazed and babbling frantically,<i> “You can have my money! I don’t have anything expensive with me! I haven’t got any cash but you can have my wallet! Please, where are you taking me?”</i> To his great surprise, the burly man turns to him with a big smile and speaks with a thick accent:<i> “Don’t worry sir, it’s just us! I do hope you had a restful flight. Sorry for my rough welcome, but it is of the utmost importance that our mission remains confidential from any watchful eyes. We didn’t spot you on our first pass through the airport, but luckily, the signal of your two ties was unmistakable! In any case, we have much work to do. Let’s get you briefed.”</i>`,
                },
            ],
            choices: [
                {
                    text: 'What is going on?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root','norman-arrives-at-ASC','enteringWorldAware','whats-going-on'], //first end
                                },
                            ],
                        },
                    ],
                },
                
            ],
        },
        {
            id: 'just-carry-it-all',
            convo: [
                {
                    type: 'text',
                    text: `Too tired to think through this conundrum properly, Norman simply gathers his carry-on and suit/ties in one hand, and takes his large luggage in the other. He knows that this will crumple his fresh suit, which may not be the best first impression for his first meeting tomorrow, but they will have an iron at the hotel—right? He takes his belongings and joins the customs line to enter Armenia. Soon he exits the airport and steps up to the curb where taxis are supposed to arrive. To his amazement, he sees a large black SUV weave through the airport traffic, skidding off at a high speed. <i>“Wow!”</i> Norman thinks. Driving in Apricot Stone City must be a lot more intense than he is used to. After another few minutes, a taxi pulls up to the curb.<i> “The Silk Road Hotel please,”</i> he says to the driver. After a few tries back and forth, they figure it out and he is on his way to settle in.`,
                },
            ],
            choices: [
                {
                    text: 'Go to hotel',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root','norman-arrives-at-ASC','road-hotel','go-to-hotel'], //second end
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        
    ],
})

export default tooManyBags