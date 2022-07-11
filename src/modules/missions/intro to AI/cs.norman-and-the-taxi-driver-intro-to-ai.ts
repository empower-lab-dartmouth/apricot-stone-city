import make from '../../../core/util/make'

const IntroToAI  = make.module({
    id: 'cs.norman-and-the-taxi-driver-intro-to-ai',
    submodules: [],
    convoSegments: [
        {
            id: 'intro-to-ai-introduction',
            convo: [
                {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/108124901/177741655-79ac523a-fe37-4df5-9786-4f16250ee03c.jpeg',
                },   
                {
                    type: 'text',
                    text: 'Norman get into taxi. He must go to the Silk Road Hotel on the way, so that they don\'t go silently, the taxi driver asks for what purpose he is here',
                },  
            ],
            choices: [
                {
                    text: 'Norman prefers to remain silent.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['remain-silent'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'He immediately answers dismissively that he is here as a tourist.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['answers-dismissively'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Norman says he studies artificial intelligence and is here for that purpose.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['artificial-intelligence'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'remain-silent',
            convo: [
                {
                    type: 'text',
                    text: `The taxi driver realizes that he has no desire to talk and takes him to the destination.`,
                },
                {
                    type: 'text',
                    text: `You\'ve reached the end of the game! You did not accomplish your goal. To try again, start over.`,
                },
            ],
            choices: [
                {
                    text: 'Start another mission',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root',
                                    'training-data',
                                    'norman-arrives-at-Three-Broomsticks',
                                    'introduction',],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'answers-dismissively',
            convo: [
                {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/108124901/177742753-f183fa94-34dc-43cf-a7e9-2e03bb3383b1.jpeg',
                },
                {
                    type: 'text',
                    text: 'The taxi driver picks up on the tone of Norman\'s voice and doesn\'t continue the conversation saying it\'s understandable.',
                },
            ],
            choices: [
                {
                    text: 'Start another mission',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root',
                                    'training-data',
                                    'norman-arrives-at-Three-Broomsticks',
                                    'introduction',],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'artificial-intelligence',
            convo: [
                {
                    type: 'text',
                    text: `The taxi driver is interested in what artificial intelligence is։ He hadn't heard of it before. He asks norman to tell him more about AI. Artificial intelligence is the ability of a computer to think and learn. Engages in the construction of intelligent machines, and performs tasks that humans perform. The driver began to like hearing about artificial intelligence even more everyone is happy with new knowledge. And so Norman began to tell. <br>
                    -There are mainly 2 subtypes of Ai. One of them is machine learning. For example, have you ever wondered how you can type car in a picture search and open car pictures? <br>
                    -yes, I thought about it, but then I said that it was probably not my mind, and I moved on. <br>
                    -It is created on the basis of the principle of machine learning, which, thanks to the data it knows, is able to distinguish a car from a truck and use this knowledge when we ask it for something.`,
                },
            ],
            choices: [
                {
                    text: 'And what is the other subspecies?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['deep-learning',],
                                },
                            ],
                            
                        },
                    ],
                },
            ],
        },   
        {    
            id: 'deep-learning',
            convo: [
                {
                    type: 'text',
                    text: `-That is deep learning. It can independently distinguish between objects, text, and even sounds and videos. There are cases that what humans have, AI also has. For example, Brain Neurons, or a Neural Network. Each of these is responsible individually, separately from each other Brain Neurons that is deep learning in AI One of the simplest examples of Neural Network is the Face ID technology released by Apple company, which is able to identify the face in case of not too big deviations. <br>
                    -That is deep learning. It can independently distinguish between objects, text, and even sounds and videos. There are cases that what humans have, AI also has. For example, Brain Neurons, or a Neural Network. Each of these is responsible individually, separately from each other Brain Neurons that is deep learning in AI One of the simplest examples of Neural Network is the Face ID technology released by Apple company, which is able to identify the face in case of not too big deviations.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/108124901/177968682-6426bd41-9fc2-411f-ad78-c3a93b1cf8ab.jpg`,
                },
                {
                    type: 'text',
                    text: `I think you will be familiar with the Tesla car, and so Tesla Autopilot is the result of Neural Network and Deep Learning working together. It can work in many different road situations. However, they don't use it much, because there is very little chance that it will go wrong and take a person's life. <br> 
                    -In fact, computers have no borders and will soon begin to coexist with humans as usual? <br>
                    Artificial Intelligence can be equal or superior to humans only in specific actions. For example, there are many games in which AI is more advanced and plays smarter than humans, often with cheats. Now we are trying to achieve that AI should be able to think, create, work like a human. However, all these exist separately from each other and even if they are united, they will still not be close to man. In any case, such an AI has not yet been created that will surpass a human in all matters.`,
                },
            ],
            choices: [
                {
                    text: 'Start another mission',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [ 'root',
                                    'training-data',
                                    'norman-arrives-at-Three-Broomsticks',
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

export default IntroToAI
