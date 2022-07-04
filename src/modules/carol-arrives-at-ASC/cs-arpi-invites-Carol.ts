import make from '../../core/util/make';

const arpiInvitesCarol = make.module({
  id: 'arpi-Invites-Carol',
  submodules: [],
  convoSegments: [
    {
      id: 'at-the-cascade',
      convo: [
        {
          type: 'text',
          text: '<b>You are listening to a conversation in Armenian but do not understand anything. So, you can address to Arpi.</b>',
        },
      ],
      choices: [{
        text: 'Ask Arpi about the conversation',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['question'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'question',
      convo: [
        {
          type: 'text',
          text: 'Oh, darling, That was my daughter, Anoush. she is actually coming to pick us up.',
        },
      ],
      choices: [{
        text: 'I feel uncomfortable staying with your family. Would they mind?',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['answertoquestion'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'answertoquestion',
      convo: [
        {
          type: 'text',
          text: 'I know! We love having guests in our house, so don\'t worry nobody would mind!',
        },
      ],
      choices: [{
        text: 'Why would you invite a strange foreigner over to your house. What if I am a criminal or something.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['hesitate'],
              },
            ],
          },
        ],
      },
      {
        text: 'Thank you for the invitation  but I cannot accept that. I am sorry...',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['decline'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'hesitate',
      convo: [
        {
          type: 'text',
          text: 'Well you don\'t look like a criminal to me.',
        },
      ],
      choices: [{
        text: 'You know what criminals are supposed to look like? It\'s not like all criminals walk around with black clothes and mask.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['hesitate1'],
              },
            ],
          },
        ],
      },],
    },
    {
        id: 'hesitate1',
        convo: [
          {
            type: 'text',
            text: 'You are not a criminal. In fact, I knew what kind of trouble you were facing even, prior to talking to you.',
          },
        ],
        choices: [{
          text: 'What?...',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['hesitate2'],
                },
              ],
            },
          ],
        },],
      },
      {
        id: 'hesitate2',
        convo: [
          {
            type: 'text',
            text: 'Since I have to wait for my daughter\'s arrival and you obviously are not planning to go everywhere we both have enough time for me to tell you a little story.',
          },
        ],
        choices: [{
          text: 'Oh, it\'s interesting!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['hesitate3'],
                },
              ],
            },
          ],
        },
    ],
      },
      {
        id: 'hesitate3',
        convo: [
          {
            type: 'text',
            text: 'It happened when my daughters were still little girls. I have two daughters, by the way, Arpi and Nare, if you eventually accept my offer you\'ll get to meet them both.',
          },
        ],
        choices: [{
          text: 'Oh, it would be great!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['story'],
                },
              ],
            },
          ],
        },
    ],
      },
      {
        id: 'story',
        convo: [
          {
            type: 'text',
            text: 'I took my daughters on a weekly trip to the neighboring country we planned to visit all the famous towns, cities, and monuments there. We began our trip with the capital of the country the Mutton-Wine-City.',
          },
        ],
        choices: [{
          text: 'Oh, I\'ve heard about that city!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['story1'],
                },
              ],
            },
          ],
        },
    ],
      },
      {
        id: 'story1',
        convo: [
          {
            type: 'text',
            text: 'Long story short, after an enjoyable day and evening the next they we went to the train station to move to our next location. I reached for my wallet to take out the tickets and surprise-surprise no wallet. I panicked and I mean actually panicked really hard and why shouldn\'t I. I was in a foreign country, with two little girls and zero lari, that\'s the currency in there, in my pocket.',
          },
        ],
        choices: [{
          text: 'What happened then?',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['story2'],
                },
              ],
            },
          ],
        },
    ],
      },
      {
        id: 'story2',
        convo: [
          {
            type: 'text',
            text: 'So, I tried to think of some places where I could have left it. Every possible scenario ran into my head. What if it fell off the language?, what if someone slipped his hand into my staff and stole it from there without me noticing?, should I go to the police? But our train is leaving in half an hour and the tickets are for this ride, what should we do?!',
          },
        ],
        choices: [{
          text: 'What did you do?',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['story3'],
                },
              ],
            },
          ],
        },
    ],
      },
      {
        id: 'story3',
        convo: [
          {
            type: 'text',
            text: 'Luckily at that point, Nare recalled seeing my wallet on the table of our hotel room. We took a taxi and practically raced back to the hotel. I was afraid that someone may steal it from there, but luckily it never happened. I got my wallet, we managed to go back to our train station just in a nick of time. The rest of our journey luckily went as planned.',
          },
        ],
        choices: [{
          text: 'Thank God everything worked out!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['hesitate4'],
                },
              ],
            },
          ],
        },
    ],
      },
      {
        id: 'hesitate4',
        convo: [
          {
            type: 'text',
            text: 'Seems like my daughter arrived. I am leaving and my offer still stands you may come still come to stay at our house overnight. You are having a hard time with no language and friends to help and all. I just want to help you out. ',
          },
        ],
        choices: [{
          text: 'Sorry, but I cannot accept that offer. I do appreciate that, but I cannot.',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline'],
                },
              ],
            },
          ],
        },
        {
            text: 'Thank you very much for invitation. I\'d love to!',
            logic: [
              {
                do: [
                  {
                    type: 'goto',
                    path: ['accept'],
                  },
                ],
              },
            ],
          },
    ],
      },
    {
      id: 'decline',
      convo: [
        {
          type: 'text',
          text: 'Well that\'s a pity. What are you gonna do now?',
        },
      ],
      choices: [{
        text: 'I... I think I\'ll try to find a hotel. Maybe they\'ll let me stay overnight until I find my luggage and pay them back.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['decline1'],
              },
            ],
          },
        ],
      },
      ],
    },
    {
        id: 'decline1',
        convo: [
          {
            type: 'text',
            text: 'Then... Then maybe we can give you a ride to the nearby hotel? Hm? How does that sound?',
          },
        ],
        choices: [{
          text: 'No... I don\'t wanna cause any trouble.',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline2'],
                },
              ],
            },
          ],
        },
        ],
      },
      {
        id: 'decline2',
        convo: [
          {
            type: 'text',
            text: 'Young lady! That\'s not a trouble at all. I will feel very bad if I don\'t help you now somehow! Come! My daughter is waiting outside.',
          },
        ],
        choices: [{
          text: 'Thank you! Can your daughter give me a lift to the Studio Hotel?',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline3'],
                },
              ],
            },
          ],
        },
        ],
      },
      {
        id: 'decline3',
        convo: [
          {
            type: 'text',
            text: 'Yes, sure!',
          },
        ],
        choices: [{
          text: 'Thank you!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline4'],
                },
              ],
            },
          ],
        },
        ],
      }, 
      {
        id: 'decline4',
        convo: [
          {
            type: 'text',
            text: 'At the hotel.',
          },
        ],
        choices: [{
          text: 'Contact the manager for help.',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline5'],
                },
              ],
            },
          ],
        },
        ],
      },
      {
        id: 'decline5',
        convo: [
          {
            type: 'text',
            text: 'Hello Miss. How can I help you?.',
          },
        ],
        choices: [{
          text: 'Could I stay tonight for free? I lost all of my belongings... I will surely pay you back afterward once I get my luggage back',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline6'],
                },
              ],
            },
          ],
        },
        ],
      },
      {
        id: 'decline6',
        convo: [
          {
            type: 'text',
            text: 'I am sorry Miss, but unfortunately I will have to decline. We charge our customers immediately during the booking process, that\'s how our hotel always worked and that\'s how almost all the hotels do. I am sorry Miss. You should find another solution.',
          },
        ],
        choices: [{
          text: `Oh... Stop... Anoush's car is still outside. I have to tell them about the conversation with the manager`,
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['decline7'],
                },
              ],
            },
          ],
        },
        ],
      },
      {
        id: 'decline7',
        convo: [
          {
            type: 'text',
            text: 'I want you to know that I am still inviting you to our house. You may still come.',
          },
        ],
        choices: [{
          text: 'Oh, thank you very much!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['accept'],
                },
              ],
            },
          ],
        },
        ],
      },
      {
        id: 'accept',
        convo: [
          {
            type: 'text',
            text: 'We are so happy! We promise everything will be fine!',
          },
        ],
        choices: [{
          text: 'I am so grateful!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['accept'],
                },
              ],
            },
          ],
        },
        ],
      },
    ],
});

export default arpiInvitesCarol;