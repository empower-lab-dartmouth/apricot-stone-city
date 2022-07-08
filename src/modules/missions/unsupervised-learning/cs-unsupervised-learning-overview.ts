import make from '../../../core/util/make'

const unsupervisedLearning = make.module({
    id: 'ulOverview',
    submodules: [],
    convoSegments: [
        {
            id: 'meeting',
            convo: [
                {
                    type: 'text',
                    text:
                        'Norman wanders the streets, not knowing where the road leads. Norman accidentally bumps into a university professor who is running home. The professor sees him and stops him. \n •Hello, Norman!',
                },
            ],
            choices: [
                {
                    text: 'How do you know me?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['later'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'later',
            convo: [
                {
                    type: 'text',
                    text:
                        "I'll tell you later. My request will seem strange, but can you give the lecture instead of me? Because I do need to get home. Please!!!!",
                },
            ],
            choices: [
                {
                    text: 'Okay, but how will I conduct the lecture?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['okay'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'okay',
            convo: [
                {
                    type: 'text',
                    text:
                        "Don't worry about that, I'll give you the lectures, and you will just read them in class. You will have assistants too. Then I'll explain the concepts to them, don't worry.",
                },
            ],
            choices: [
                {
                    text: "Okay, I'll conduct that lecture",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['third_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'third_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'After 10 minutes, Norman entered the classroom. Students are shocked. ',
                },
            ],
            choices: [
                {
                    text: 'Continue...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['forth_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'forth_one',
            convo: [
                {
                    type: 'text',
                    text:
                        "One of the students: Welcome to this class, professor! Today's lecture should be about Artificial Intelligence (AI) and its methods of teaching - supervised and Unsupervised learning.  ",
                },
            ],
            choices: [
                {
                    text: "Okay... Let's see what we have.",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['fifth_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'fifth_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'Supervised learning is based on training the data, whereas the latter one is based on its own experience. However, we are going to go deep into the concept of Unsupervised learning and its types.',
                },
            ],
            choices: [
                {
                    text:
                        "Maybe, you'll explain the concept of Unsupervised learning by providing real-world examples?",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['sixth_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'sixth_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'So, the real-world example of Unsupervised learning is your path in your career.',
                },
            ],
            choices: [
                {
                    text: 'Hah!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['seventh_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Interesting!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['seventh_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'seventh_one',
            convo: [
                {
                    type: 'text',
                    text:
                        "When you start your work experience at 1st course, you become a real expert based on your own experience, because you don't have enough knowledge to complete the given tasks without errors. It's what is called Unsupervised learning. However, you can wait until your graduation, and after the university you will have enough knowledge to perform difficult tasks without the lack of particular knowledge. It's what is called Supervised learning.",
                },
            ],
            choices: [
                {
                    text:
                        'We got it. It was very clear example. Tank you, guys! Do you know which types it consist of?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['eighth_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'eighth_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'Clustering is one of the main methods df Unsupervised learning. It mainly deals with finding a structure or pattern in a collection of uncategorized data. It consists of 3 types: \n <b>1) Exclusive </b> \n <b>2) Probabilistic </b> \n <b>3) Overlapping.</b>',
                },
            ],
            choices: [
                {
                    text: 'Start with Exclusive one.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['exclusive_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Start with Probabilistic one.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['prob_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Start with Overlapping one.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['overlapping_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'exclusive_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'Exclusive type organizes the information by specific patterns based on its own experience.',
                },
            ],
            choices: [
                {
                    text: 'Give an example, please.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['exc1_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'exc1_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'For example, when we were kids, it was hard for us to distinguish between ... for example ... advertising and entertainment videos. Over the years we began to understand their essence and distinguish them. This happened thank to our own experience.',
                },
            ],
            choices: [
                {
                    text: 'Okay...Probabilistic one.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['prob_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Okay...Overlapping one.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['overlapping_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'prob_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'Sure, mister Norman! Probabilistic technique uses probability distribution to create the clusters.',
                },
            ],
            choices: [
                {
                    text: 'Example, please!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['prob1_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'prob1_one',
            convo: [
                {
                    type: 'text',
                    text:
                        "Of course. Following keywords\n 'man’s shoe.'\n 'women’s shoe.'\n 'women’s glove.'\n 'man’s glove.' \ncan be clustered into categories ... ",
                },
            ],
            choices: [
                {
                    text: '“shoe” and “glove”',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['prob2_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '“man” and “women"',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['prob2_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'prob2_one',
            convo: [
                {
                    type: 'text',
                    text: 'Both are right!',
                },
            ],
            choices: [
                {
                    text: 'Great! What about Overlapping one!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['overlapping_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Great! It's so exciting! What about Exclusive one!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['exclusive_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'overlapping_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'Overlapping!!! In this technique, each point may belong to two or more clusters with separate patterns. For example, you can reorganize the same data based on its different patterns like colors of the data, its location, size, shape, and even quantity. So, depending on which patterns you choose, your reorganization will be different!',
                },
            ],
            choices: [
                {
                    text: 'Cool!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['overlapping1_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Probabilistic one',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['prob_one'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Exclusive one',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['exclusive_one'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'overlapping1_one',
            convo: [
                {
                    type: 'text',
                    text:
                        'By the way, did you guys hear about n-grams? Mr. Norman, what about you?',
                },
            ],
            choices: [
                {
                    text: "I've heard about that!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['yes'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "I haven't heard about that!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'yes',
            convo: [
                {
                    type: 'text',
                    text:
                        "If so, you can visit this site and try that by your own for better understanding! the example of <a href='https://ai-random-writer.netlify.app/'>[a sentence completion system]</a>",
                },
            ],
            choices: [
                {
                    text: 'It was very useful. Thank you!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['end'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'no',
            convo: [
                {
                    type: 'text',
                    text:
                        "Oh, it's really cool example of how unsupervised learning works!",
                },
            ],
            choices: [
                {
                    text: 'Tell us about it!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'no1',
            convo: [
                {
                    type: 'text',
                    text:
                        'An N-gram means a sequence of N words. So for example, “Medium blog” is a 2-gram (a bigram), “A Medium blog post” is a 4-gram, and “Write on Medium” is a 3-gram (trigram). It is closely related to one of the types we listed - PROBABILISTIC type.',
                },
            ],
            choices: [
                {
                    text: 'Oh, sounds interesting!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'no2',
            convo: [
                {
                    type: 'text',
                    text:
                        "Well, n-grams are used for a variety of things. We'll share with you one interesting site with the help of which you will understand the essence of Unsupervised learning. We're talking about the example of <a href='https://ai-random-writer.netlify.app/'>[a sentence completion system]</a>",
                },
            ],
            choices: [
                {
                    text: 'Oh, sounds interesting!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'no3',
            convo: [
                {
                    type: 'text',
                    text:
                        "This system can generate and complete sentences based on its own experience. Generated sentences are not considered as right ones and wrong ones, because based on the given information it can generate anything. It's one of the main concepts of Unsupervised learning. So, you can check that site, and try to check it. It'll help you to understand the idea of Unsupervised learning, particularly, the idea of <b>Probabilistic technique.</b>",
                },
            ],
            choices: [
                {
                    text: 'thank you guys for helping to conduct the lecture!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'no4',
            convo: [
                {
                    type: 'text',
                    text: 'You are always welcome, mister Norman!',
                },
            ],
            choices: [
                {
                    text: 'End the chat',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['end'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'end',
            convo: [
                {
                    type: 'text',
                    text:
                        "The lesson is over, but we can confidently assume that the students definitely loved this lesson and will remember it for a long time. Now. it's time to move on!",
                },
            ],
            choices: [
                {
                    text: `Start another mission`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'k-means',
                                        'norman-learns-k-means',
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

export default unsupervisedLearning
