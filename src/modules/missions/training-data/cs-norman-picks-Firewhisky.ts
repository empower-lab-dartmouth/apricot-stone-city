import make from '../../../core/util/make'

const picksFirewhisky = make.module({
    id: 'norman-picks-Firewhisky',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `"I'll have Firewhisky, please. Here's my ID!" Norman says and passes his ID to the waiter.

                    "Verification that you're not flying your broom home?" the waiter asks.
                    
                    "I'm going home by foot" Norman says, with his hand on his heart.
                    
                    "You're gonna have to verify it under Veritaserum. A wizard-fabricated truth potion. Do you agree to drink it?" the waiter asks.`,
                },
            ],
            choices: [
                {
                    text: 'Yes, I do',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['continue1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'continue1',
            convo: [
                {
                    type: 'text',
                    text: `"Yes, I do," Norman says and takes a shot of the truth potion. "I confirm that I won't be flying my broomstick home." he says confidently, since he doesn't have a broomstick.

                    "Good. I will bring your drink in a minute." the waiter says, while pushing a button on their shirt and disappearing.
                    
                    After the waiter reappears with a firewhisky glass in hand, they pass it to Norman and vanish again.
                    
                    Norman takes a sip of the firewhisky and chokes on the spicy cinnamon taste.
                    
                    He starts coughing and hears someone say "Bless you."`,
                },
            ],
            choices: [
                {
                    text: `Turn around and tell it wasn't a sneeze`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['turn-around'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Say "thank you"',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['thank-you'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'turn-around',
            convo: [
                {
                    type: 'text',
                    text: `Norman turns around to the person saying "bless you" in order to inform them he wasn't sneezing.

                    He turns around and sees none other than-`,
                },
            ],
            choices: [
                {
                    text: 'Who??!!!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['tony-stark'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'thank-you',
            convo: [
                {
                    type: 'text',
                    text: `Norman says "Thank you" without turning around and takes another sip.

                    No amount of firewhisky can cure my social anxiety. he thinks to himself.
                    
                    He starts looking around the room, looking for his friend and listening in to different conversations.
                    
                    `,
                },
            ],
            choices: [
                {
                    text: 'Listen to conversations',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-waits-for-his-friend',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'tony-stark',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/108261746/177534093-fd1623f2-a99c-4759-b5bd-0647d57fe55e.png`,
                },
                {
                    type: 'text',
                    text: `"Tony Stark?!" he gasps at the surprise.

                    "Yeah, honey, you a fan?" Tony asks with a smirk.
                    
                    "After this moment, hell yeah I am!" Norman says.

He turns back around, shocked at his courage and continues nursing his drink.

He starts feeling a bit lonely, since his friend is late, so he starts looking around the room, listening in to different conversations.`,
                },
            ],
            choices: [
                {
                    text: 'Listen to conversations',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'training-data',
                                        'norman-waits-for-his-friend',
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

export default picksFirewhisky
