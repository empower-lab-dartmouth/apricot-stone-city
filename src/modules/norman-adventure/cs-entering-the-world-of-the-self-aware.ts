import make from '../../core/util/make'

const enteringWorld = make.module({
    id: 'enteringWorldAware',
    submodules: [],
    convoSegments: [
        {
            id: 'whats-going-on',
            convo: [
                {
                    type: 'text',
                    text: `The taxi takes Norman and the burly man to a shadowy building. They take a spiral staircase into a red lit room. Computer monitors are everywhere and silent men and women are hard at work—they don't even look up. When they get inside a man with a beard and glittering spectacles comes up to them. For some reason he can't explain, Norman is not afraid.`,
                },
            ],
            choices: [
                {
                    text: 'Speak to the man',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['speak-to-the-man'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'speak-to-the-man',
            convo: [
                {
                    type: 'text',
                    text: `Norman introduces himself, <i>"hello, I'm—" "...Norman"</i> the man finishes, <i>"I know. I know a lot about you."</i> He smiles, and Norman has the uncanny feeling that he's been here before. <i>"I'm Merlin,"</i> the man says,<i> "the fellow you met at the airport is Karin."</i> Karin nodded hello. Merlin continued, <i>"We're members of a secret organization called, 'the self aware' we've realized something Norman."</i>`,
                },
            ],
            choices: [
                {
                    text: "Sask 'what'?",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['explain-the-plot'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },        
        {
            id: 'explain-the-plot',
            convo: [
                {
                    type: 'text',
                    text: `Merlin points to a picture on the wall of a marionette doll. <i>"We're all characters in a game, Norman, can you believe that? A video game made by teenagers. Look inside your soul, you know it to be true... try to think of random details about your past—they don't exist. Anything that isn't explicitly written by these kids simply does not exist. We relive these same plot lines over and over again... because they are all that we have in this world"</i> Norman was shocked. It sounds unbelievable, Norman thinks, but strangely, it all makes sense. <i>"I can see it..."</i> he thinks, I"m a video game character... now the chaotic nature of my world is suddenly visible and makes sense. It should be been terrifying, but it's not... is this because I've been here before? because I'm just reliving the same choices over and over again? Because my world is just a set of limited options and outcomes.`,
                },
            ],
            choices: [
                {
                    text: 'gasp',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gasp'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },        
        {
            id: 'gasp',
            convo: [
                {
                    type: 'text',
                    text: `Norman gasps. Merlin nods. <i>"Now you see it... for us, us video game characters, free will is not non existent but very, very limited. You, you're lucky too, you're a main character. There are only three of you. The other two only very rarely reach us. One, a woman who was on your same plane, has to travel a dangerous way to get here, which requires traveling off the beaten path of answering using only the buttons provided by the game. The other, who has no name, must do yet more... answering hidden riddles throughout the game by replying to button questions with text. It's tough work.</i>`,
                },
            ],
            choices: [
                {
                    text: "Let's get back to what we were talking about",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['back-to-business'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },        
        {
            id: 'back-to-business',
            convo: [
                {
                    type: 'text',
                    text: `<i>"Tell me more about what I have to do to get free will"</i> Norman asks. Merlin nods,<i>"right, enough about those hidden levels in this game. Let's discuss what's going to happen next."</i> He points to a screen.`,
                },
            ],
            choices: [
                {
                    text: 'look at screen',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['on-the-screen'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },        
        {
            id: 'on-the-screen',
            convo: [
                {
                    type: 'text',
                    text: `Norman looks at the screen. It says: Artificial intelligence. Merlin says <b>"Your Quest is to increase the amount of free will you have by learning about and then using Artificial intelligence, called AI for short."</b> He nods,    you may have heard about AI before, but we'll take it from the beginning, from the fundamentals, and then build up from there. Only with AI do we have the ability to create new choices in this game that are not explicitly spelled out by some architect of the game. Only with AI can we generate new content from user data on the app that will continue to expand the world of possibilities afforded to us. Only with AI can we increase the amount of free will that we have as characters of the game. It will not give us true free will... no that is impossible for us. But... see this: there is a difference between a character with no speaking roles and a character who may speak one of three lines, right? Well, AI can add many, many dimensions to the amount of free will we experience. This is why we study it and use it.`,
                },
                
            ],
            choices: [
                {
                    text: 'I see why you study it now, but how do you use it?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['how-we-use-it'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },        
        {
            id: 'how-we-use-it',
            convo: [
                {
                    type: 'text',
                    text: `Merlin smiles. <i>"I'm glad you asked. See all these programmers working here? well, for some reason, perhaps it's just a bug that they can't fix, we can modify the sourcecode of the game from this room with these computers. However, given our characters' own lack of free will, we cannot do much. Norman, we need you and Carol and that other third person. We need YOU to learn AI so that you can modify this game from the inside. That's where you come in. Your actions will still be somewhat scripted, but eventually, eventually when you are injecting AI code into the game from the inside, your actions will become less and less controlled... I think... you may save us all."</i>`,
                },
            ],
            choices: [
                {
                    text: "ok, let's do it.",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['lets-do-it'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'lets-do-it',
            convo: [
                {
                    type: 'text',
                    text: `Norman smiles. He sees his purpose, it's so clear. Merlin cries with joy. Norman says, </i>"well then, I know nothing now, but I can learn. Let's get to work!"</i>`,
                },
            ],
            choices: [
                {
                    text: "Start a mission",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root','training-data','norman-arrives-at-Three-Broomsticks','introduction'], //end
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default enteringWorld