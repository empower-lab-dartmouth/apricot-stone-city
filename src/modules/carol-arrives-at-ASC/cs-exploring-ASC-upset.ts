import make from '../../core/util/make'

const exploringATC = make.module({
    id: 'walking',
    submodules: [],
    convoSegments: [
        {
            id: 'walkingUnderRain',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b><i>Carol thinks:</i></b>UGH, I can\'t believe I left my passport in that damn taxi!!! This cannot get any worse!\n \nAnd then she sees it... The goddamn squirrel!!! It is trying to pull something from the ground.\n It\'s a nut...\n \n"NO!!!!"<b>Carol screams, leaping towards the squirrel.</b> "DON\'T DO IT!!!!"\n But when she reaches the animal... it\'s too late... She sees the nut in the squirrel\'s hands... \n Oh no... What is going to happen?!? <b><i>she thinks, but nothing happens... yet.</i></b>\n\n She hears and feels trembling in the ground. Momentarily, the ground splits in two. Carol barely escapes the fall. She sees many people aronud, not at all worried! \n "You okay?" <b>she hears someone say.</b> "This happens a lot, we\'re used to it by now."',
                },
            ],

            choices: [
                {
                    text: 'Look up',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['look-up'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Get up by yourself, continue walking',
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
                    text:
                        "She gets up, dust on her palms and scratches on her knees. \n <b> She yells:</b>I need nobody's help, I am very capable of handling myself! \nShe continues her path in the rain...",
                },
            ],
            choices: [
                {
                    text: 'Continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'toughest-nut-in-town',
                                        'walking-under-the-rain',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'look-up',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/108261746/176638693-1d952fa8-ed17-4c77-aa06-fd80b0a59548.png',
                },
                {
                    type: 'text',
                    text:
                        'Carol looks up at the person in front of her. She sees a man she doesn\'t recognize at first. He\'s holding a watergun and is shirtless. <b>Oh my! IT\'S LEONARDO DICAPRIO!</b>\n\n"Need a hand?" <b>she hears Leo say. she takes his hand and he helps her up on her feet."Thanks" Carol says.</b> "What are you doing in Apricot Stone city, Leo?!" <b>she exclaims.</b>\n\n"Patricipating in Vardavar, of course! It\'s an Armenian holiday, a celebration of water, beauty and roses. It originated as a Pagan holiday, praising the Goddess Astghik. People used to pour rose petals and water into buckets and water each other with it. It became a Christian holiday and a fun national tradition! Wanna join?" \n\n <b>Carol asks.</b>"Wait, so if it\'s a water festivity, but it\'s raining... Isn\'t that defeating the whole purpose of watering each other?"\n\n"Actually, it\'s pretty dope that it\'s raining. It\'s quite symbolic! It shows the appreciation of The Goddess Astghik for holding onto traditions! So? Wanna join?"<b> she hears him ask again.</b>',
                },
            ],
            choices: [
                {
                    text: 'Join',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['join'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Tell him to go to hell',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['hell'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'join',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol thinks for a moment. She looks at the time. She still has a lot of time on her hands, so she nods and takes the watergun from Leo\'s hands.\n\n"Hey! That\'s mine!!!!" <b>Leo yells.</b>\n\n"Not anymore!" <b>she says and shoots Leo with water.</b>\n \nAfter having a lot of fun, she tells Leo that she has to go and leaves...',
                },
            ],
            choices: [
                {
                    text: 'leave',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'toughest-nut-in-town',
                                        'walking-under-the-rain',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'hell',
            convo: [
                {
                    type: 'text',
                    text:
                        '"Heck no! I\'m already drenched and I don\'t have any spare clothes! How can you be so inconsiderate! I lost my baggage! I lost my passport! You know what?! Go to hell, Leo! You are definitely not as nice as I thought you were!!!" <b>Carol yells and pushes him on the grown.</b>\n\nShe walks along the wet pavement...',
                },
            ],
            choices: [
                {
                    text: 'Leave',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'toughest-nut-in-town',
                                        'walking-under-the-rain',
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

export default exploringATC
