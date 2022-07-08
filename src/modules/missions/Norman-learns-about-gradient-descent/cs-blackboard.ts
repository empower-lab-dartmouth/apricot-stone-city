import make from '../../../core/util/make'

const blackboard = make.module({
    id: 'blackboard',
    submodules: [],
    convoSegments: [
        {
            id: 'start',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>Norman"s first interaction with Gradient Descent.</b>',
                },
            ],
            choices: [
                {
                    text: 'start the game',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['setting-the-scene'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'setting-the-scene',
            convo: [
                {
                    type: 'text',
                    text:
                        'In the dark secret room Norman starts to feel overwhelmed. He starts to wonder how his life became so complicated in one day. He came to ASC with expectations of bright memories, but now he is stuck with some strangers talking about some ridiculous stuff about AI. Feeling confused, Norman at first thinks of taking some break, but his curiosity wins over him. He was quite excited to learn more about the world he lives in. Norman walks around the room, takes deep breath to get his thoughts together. Suddenly, on the blackboard he sees an interesting, and most importantly easy graph, so he asks about it. <b>\n It is called Gradient Descent. Want me to teach more about it? -Morgana replies.</b>',
                },
            ],
            choices: [
                {
                    text: 'Thanks, I will do it myself',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carols-story'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Thanks, that is very nice of you',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carols-story'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carols-story',
            convo: [
                {
                    type: 'text',
                    text:
                        'Norman walks out of the room. he is stands in the hallway. e wants to determine the best way to learn about the concept written on the blackboard. He starts to think about AI and what is used during AI creation. When he finishes the thinking he notices that he has reached the end of the hall. on his right he sees a door',
                },
            ],
            choices: [
                {
                    text: 'go in',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['respond-to-woman'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'walk back',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gaze-at-clouds'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'respond-to-woman',
            convo: [
                {
                    type: 'text',
                    text: `He walks in a room full of books, computers and learning materials. It reminds him of a library. He goes deeper into the room and wants to figure out what the best way would be to learn the Gradient Descent.He sees an open computer on the table`,
                },
            ],
            choices: [
                {
                    text: 'use the computer',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'norman-in-hogwarts',
                                        'norman-wants-to-create-a-new-spell',
                                        'start-create',
                                    ], //the conersations of this neighborhood are not finished
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'use textbooks',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'norman-in-hogwarts',
                                        'norman-wants-to-create-a-new-spell',
                                        'start-create',
                                    ],//the conersations of this neighborhood are not finished
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ask-old-woman-about-her-story',
            convo: [
                {
                    type: 'text',
                    text: `"Oh, interesting, why is it called 'Apricot Stone City?'" Carol asks. The woman nods, "well, it's hard to know for sure... it could be the pink color of the actual stone that's used to make many of the original buildings here... it's this volcanic rock that just looks that way when it oxidizes: like a very ripe apricot. You see it everywhere in the city, my mother would tell me, but it's unique to this region.

          `,
                },
            ],
            choices: [
                {
                    text: 'nod',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-nods-regarding-pink-rock'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carol-nods-regarding-pink-rock',
            convo: [
                {
                    type: 'text',
                    text: `Carol nods and the woman continues: "however, that's not how I think the city got its name... did you know that you can eat the seed inside an Apricot?"`,
                },
            ],
            choices: [
                {
                    text: 'yep',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'carol-says-yes-to-eating-apricot-nut',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'of course',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'carol-says-yes-to-eating-apricot-nut',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'no',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'carol-says-no-to-eating-apricot-nut',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Really?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'carol-says-no-to-eating-apricot-nut',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carol-says-yes-to-eating-apricot-nut',
            convo: [
                {
                    type: 'text',
                    text: `"Yes," Carol said, "they're delicious." The old woman nodded, "they are indeed. Very nutritious too. Yes, that nut inside an apricot stone is an Armenian favorite. So, I like to think, that's how the city got its name. From those little nuts: the hidden treat inside a sweet fruit. Do you know what I mean?"`,
                },
            ],
            choices: [
                {
                    text: "shake head, 'no'",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-doesnt-get-it'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "nod, 'yes'",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-nods'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carol-doesnt-get-it',
            convo: [
                {
                    type: 'text',
                    text: `Carol shakes her head, "I'm not sure I follow you..."\n "Let me try and explain better," The woman says, "Like the secret treat inside an apricot, this city is full of hidden stories. And each story has the potential to make your world a little better. Just like the nutrients in that little nut." Carol smiles, "that's beautiful," she says.

          `,
                },
            ],
            choices: [
                {
                    text: 'fasten seat belt',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['fasten-seat-belt'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carol-nods',
            convo: [
                {
                    type: 'text',
                    text: `The old woman settled back into her seat. On the speaker the captain's voice came on: "we'll be landing in Apricot Stone City in 25 minutes. Please put away all large electronic devices." On Carol's other side, a sleeping man wakes up and rummages about in his bag with a serious expression on his face, then lays back and falls asleep again. Carol has a funny feeling about the man, but she can't pin it down.

          `,
                },
            ],
            choices: [
                {
                    text: 'fasten seat belt',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['fasten-seat-belt'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'carol-says-no-to-eating-apricot-nut',
            convo: [
                {
                    type: 'text',
                    text: `"No," Carol says, "like the hard seed? I'm pretty sure you can't eat that. It would break your teeth." The woman chuckled, "my dear, she said, "an Apricot stone, also called a seed, has a delicious nut inside of it if you break it open. I like to think that's how the city got its name. From those little nuts: the hidden treat inside a sweet fruit. Do you know what I mean?"

          `,
                },
            ],
            choices: [
                {
                    text: "shake head, 'no'",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-doesnt-get-it'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "nod, 'yes'",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['carol-nods'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'comment-on-earrings',
            convo: [
                {
                    type: 'text',
                    text: `Carol points at the earrings, "those are lovely." The old woman brightens, "these were a gift to me from my mother, and a gift to her from her mother. I was told they go way back in our family history... at some point they once belonged to a princess. But you know, stories like that." she chucked, "who can say. Anyways, they're very dear to me. I've planned for a long time that I would wear them when I finally touch down in Armenia. I feel as if my mother is close by when I wear these." She drifts off into thought. Carol isn't sure what to say.

          `,
                },
            ],
            choices: [
                {
                    text: 'look out the window',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gaze-at-clouds'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'gaze-at-clouds',
            convo: [
                {
                    type: 'text',
                    text: `Norman is really confused he doesn't know what to do. He thinks that he missed a room in a hall. As tries to enter a room with an opened door a middle aged woman comes out of it and says

                    "What do you want darling"
                    
                    -"Im searching for a room to study in, Can you help me?"
                    
                    -"Sure follow me"

          `,
                },
            ],
            choices: [
                {
                    text: 'follow her',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['respond-to-woman'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'fasten-seat-belt',
            convo: [
                {
                    type: 'text',
                    text: `Carol fastens her seat belt and closes her eyes. "I have an eight hour layover," she thinks to herself, "that's so much time. I don't know a thing about Armenia, why don't I go out and see the city. I can see a few things, get a good meal (what is Armenian food like? I wonder?) and then be back here with time to spare."\n She's roused from her musings by the screaming of the plane's wheels on the landing strip. Her body tenses... plane landings always always scares her. And then it's over. The plane comes to a halt and pulls up to a terminal. Her neighbor hurriedly closes his bag and stands in the isle, "he in a rush..." Carol thinks, "what a strange man."

          `,
                },
            ],
            choices: [
                {
                    text: 'Leave quickly',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['leave-quickly'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Wait for others',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['wait-on-plane'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'leave-quickly',
            convo: [
                {
                    type: 'text',
                    text: `As soon as she can, Carol rushes off the plane. She's starting to get excited about exploring this unknown city. Apricot Stone City... how intriguing... Once she's off the plane she pushes past the man with the two ties. He has a concentrated look on his face.
          `,
                },
            ],
            choices: [
                {
                    text: 'Grab your bag/next mission',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'norman-in-hogwarts',
                                        'norman-wants-to-create-a-new-spell',
                                        'start-create',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'wait-on-plane',
            convo: [
                {
                    type: 'text',
                    text: `There's no rush, Carol realizes, why hurry? She's got eight hours after all for this layover. She reclines her seat again and waits until everyone else has left. Then she casually makes her way out into the airport.

          `,
                },
            ],
            choices: [
                {
                    text: 'Grab your bag/next mission',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'norman-in-hogwarts',
                                        'norman-wants-to-create-a-new-spell',
                                        'start-create',
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

export default blackboard
