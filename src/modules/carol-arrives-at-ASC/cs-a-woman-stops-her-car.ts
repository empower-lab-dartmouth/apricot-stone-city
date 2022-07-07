import make from '../../core/util/make'

const aWomanStopsHerCar = make.module({
    id: 'a-woman-stops-her-car',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>It is raining heavily. Carol is wet and frustrated. She does not know where she is. A car stops and the driver is an old-looking woman looks out of the window.</b>',
                },
            ],
            choices: [
                {
                    text: 'What happened next?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-woman-conversation'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-woman-conversation',
            convo: [
                {
                    type: 'text',
                    text: `The woman:Աղջիկ ջան, կմրսես արի նստի, կտանեմ անվճար, հո չեմ թողի ստեղ մնաս սառես:\n
          Carol: I'm sorry, what? I don't speak Armenian.\n
          
          The woman: Oh, I can speak English if you want, although not so well so bear with me, maybe I will use Google Translate or something. Why are you out here alone? You should go back to your hotel.\n
          
          Carol: I... I just arrived... And I left my bag in a taxi...\n
          
          Carol's heart starts beating faster. She feels as if she would cry in any moment.\n
          
          Carol: I... I don't have anyone here. I can't call anyone and I lost my money and I lost my belongings!!! What am I gonna do?!!\n
          
          Carol hiccups. The woman looks into her eyes. Carol thinks she looks concerned.\n
          
          The woman: Maybe I can help you? I can take you somewhere for tonight, if you want, till you figure something out.`,
                },
            ],
            choices: [
                {
                    text: 'She refuses',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-refuses'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'She accepts the ride',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-accepts'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-refuses',
            convo: [
                {
                    type: 'text',
                    text: `Carol: I... I don't need your help! I can solve my problems myself! \n

          Carol angrily marches away. She looks back and sees the car is gone.`,
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
                                        'carol-arrives-at-cascade',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-accepts',
            convo: [
                {
                    type: 'text',
                    text: `Carol stops to think for a moment. She realizes that she has no other options left.She hesitantly opens the door of the car and gets in. \n
            The woman looks pleased. The woman takes out her phone and starts to call someone. She then talks to somebody in her native language. Carol is confused and a little bit scared, because she doesn't understand. \n
            The woman stops talking. Carol takes out her own phone and types the following in Google translate.`,
                },
            ],
            choices: [
                {
                    text: 'What happened next?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-google-translate'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-google-translate',
            convo: [
                {
                    type: 'text',
                    text: `Carol in google translate: I am sorry, who are you. Who were you talking to just now? Where are you going to take me? \n

          The woman scans the translation. Carol hopes that the translation is at least a little bit accurate, because she knows from her own experience from spanish-english translations that it usually is not. The woman appears to be confused. After a moment or, so she types the answer.\n
          
          Google Translate: My name is Anoush. I was talking to my mother Arpi. We are going to pick him up. Then I will take you to our house. Stay with us today, we'll see later.\n
          
          Carol is confused who is this Arpi, or whether Arpi is a she or a he. Carol assumes it's just Google translate messing up with the translation. She bobs her head in agreement.`,
                },
            ],
            choices: [
                {
                    text: 'What happened next?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['they-pick-up-a-man'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'they-pick-up-a-man',
            convo: [
                {
                    type: 'text',
                    text: `Carol sees a man on the street, as their car pulls up next to him, she questionably looks at Anoush. \n "So her mother is this guy? Nah, can't be. too young." Carol thinks to herself.\n

          "This isn't my mother, but don't worry, he's harmless." the translator voices.\n
          
          Carol sees a man on the street, as their car pulls up next to him, she questionably looks at Anoush. "Her mother is a guy? Nah, can't be. too young. Although, you never know these days." Carol thinks to herself.`,
                },
            ],
            choices: [
                {
                    text: 'How did he look like?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['picture-of-the-man'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'picture-of-the-man',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://previews.123rf.com/images/tixti/tixti1502/tixti150201475/36865186-young-handsome-man-with-umbrella-posing-in-the-rain.jpg',
                },
            ],
            choices: [
                {
                    text: 'What happened next?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['man-talks-to-Anoush'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'man-talks-to-Anoush',
            convo: [
                {
                    type: 'text',
                    text: `Man: Barev dzez! Barev, Anoush jan. Amerikacia? \n

          Carol sees Anoush nod and is completely baffled, but she makes out the word America in that sentence.\n

          Man: Nice to meet you! I'm Artak! Anoush's friend. Welcome to Apricot City! Are you American? What city are you from?
          
          `,
                },
            ],
            choices: [
                {
                    text: 'She answers the question',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-answers-the-question'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: `She doesn't answer the question`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-doesnot-answer'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: `Carol-does-not-listen`,
            convo: [
                {
                    type: 'text',
                    text: `Carol: Sorry, I am currently in a bad mood. I would probably not pay attention to anything you are saying, maybe some other time, if we ever meet again.\n

          Artak: Sure!\n
          
          Carol went back to staring outside the window.
          
          `,
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
                                        'carol-arrives-at-cascade',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-answers-the-question',
            convo: [
                {
                    type: 'text',
                    text: `Carol:Yes! I'm from Big Apple City! Nice to meet you, Artak, I'm Carol!\n

          Artak: So, Carol, are you a believer in God?\n
          
          Carol:Not really. I was raised in a religious household, but never really believed in God.\n
          
          Artak:Do you mind if I tell you my story about finding God?
          
          `,
                },
            ],
            choices: [
                {
                    text: 'Yes please!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-listens'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: `No I dont want to hear it`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Carol-does-not-listen'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-doesnot-answer',
            convo: [
                {
                    type: 'text',
                    text: `Carol: I would prefer to withhold any information about myself, after all you are a stranger to me.\n

          Artak: Yes that makes sense. Sorry, I won't press the matter again.\n
          
          The rest of the ride is silent.
          `,
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
                                        'carol-arrives-at-cascade',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Carol-listens',
            convo: [
                {
                    type: 'text',
                    text: `Carol: Not at all!

          Artak: It happened when I served in the military during the recent war between Armenia and Azerbaijan. 
          I served right in the center of action and happenings and I had some friends there. During one specific night patrol the person I was with, offered me a Coca-Cola. 
          I accepted, of course, made a sip and fainted. Is the story too boring for you? Should I stop talking?
          `,
                },
            ],
            choices: [
                {
                    text: `Yes the story is kind of boring`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['boring'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: `No, carry on please`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['not-boring'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'boring',
            convo: [
                {
                    type: 'text',
                    text: `Carol: Yes the story is kind of boring for me, I am sorry\n

          Artak: It's ok. We can talk about something else.?
          
          `,
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
                                        'carol-arrives-at-cascade',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'not-boring',
            convo: [
                {
                    type: 'text',
                    text: `Carol: No, carry on please\n

          Artak: I had asked God to send me sign and to make it continuous. 
          I asked for it before my military service, when I went to church. 
          The next couple of weeks, I continued fainting, but every time the doctors checked my vitals and everything, they couldn't find the issue. 
          They said I was perfectly healthy! They ran a bunch of tests, but my health was as good as a bull's. I felt as if I was receiving a sign. 
          Finally, I got pneumonia. I was held in a hospital, even though he tried "escaping" many times.
          `,
                },
            ],
            choices: [
                {
                    text: `Carol asks him about escaping`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['escaping'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: ` Carol remains silent`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['silent'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'escaping',
            convo: [
                {
                    type: 'text',
                    text: `Carol: What do you mean by "escaping"?\n

          Artak: Escaping is a little exaggerated, but my doctor surely felt me trying to get away. I was always saying, like 'hey doc, I'm going back to my friends today, aren't I?' but he always said 'not today, pal'.\n
          
          Carol: And what happened next?\n
          
          Artak: As the days went by, I went to the church again, praying and enjoying the morning service. 
          After the service I felt drawn to pick up a book from the altar, even though I didn't know what the book was. The name wasn't visible. 
          I grabbed it and felt God call my name and I immediately felt myself think 'this is how I win.' And I don't just mean war.
          I meant life. I meant I would win the great battle of life if I remained loyal to 'this'. When I picked it up, surely it was the Bible. 
          I opened the book and a note fell from the book. 'This is how you win' it said. Words written from God's breath. In Armenian the word Bible means "God's Breath" or something written by God's breath.
          Therefore, the Bible, belief and religion is how I believed I'd win.\n
          
          One day, at the hospital, the doctor almost gave in and let me go, but decided at the last moment not to.\n
          
          I almost got into the car assigned for the soldiers to go in, for their mission. The next day I found out that the car I almost went into got blown up. my friends all died then and there. I was grieving my friends but grateful to God for sparing my life.\n
          
          I found God and never let go ever since. I is guided by belief, hope and kindness.
          `,
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
                                        'carol-arrives-at-cascade',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'silent',
            convo: [
                {
                    type: 'text',
                    text: `Carol decided not to comment about escaping part.\n

          Artak: As the days went by, I went to the church again, praying and enjoying the morning service. 
          After the service I felt drawn to pick up a book from the altar, even though I didn't know what the book was. 
          The name wasn't visible. I grabbed it and felt God call my name and I immediately felt myself think 'this is how I win.' And I don't just mean war. 
          I meant life. I meant I would win the great battle of life if I remained loyal to 'this'. When I picked it up, surely it was the Bible.
           I opened the book and a note fell from the book. 'This is how you win' it said. Words written from God's breath. 
           In Armenian the word Bible means "God's Breath" or something written by God's breath. Therefore, the Bible, belief and religion is how I believed I'd win.\n
          
          One day, at the hospital, the doctor almost gave in and let me go, but decided at the last moment not to.\n
          
          I almost got into the car assigned for the soldiers to go in, for their mission. 
          The next day I found out that the car I almost went into got blown up. my friends all died then and there. I was grieving my friends but grateful to God for sparing my life.\n
          
          I found God and never let go ever since. I is guided by belief, hope and kindness.
          `,
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
                                        'carol-arrives-at-cascade',
                                        'intro',
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

export default aWomanStopsHerCar
