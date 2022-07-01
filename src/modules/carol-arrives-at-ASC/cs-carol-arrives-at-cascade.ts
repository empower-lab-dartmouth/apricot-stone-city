import make from '../../core/util/make';

const CarolArrivesAtCascade = make.module({
  id: 'carol-arrives-at-cascade',
  submodules: [],
  convoSegments: [
    {
      id: 'intro',
      convo: [
        {
          type: 'text',
          text: 'Carol arrives at the Cascade.',
        },
      ],
      choices: [{
        text: 'How does Cascade look like?',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['picture-of-cascade'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'picture-of-cascade',
      convo: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Cascade_Yerevan.jpg',
        },
      ],
      choices: [{
        text: 'How is she feeling?',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-thinks'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'carol-thinks',
      convo: [
        {
          type: 'text',
          text: `She's tired now, no longer angry, just feeling a chill. She needs somewhere out of the rain. Maybe she should have accepted that ride the woman seemed nice after all. She decides to look for a place to huddle in the Cascade. She is hungry and tired but she decide if she would rather sit down or find something to eat. She sees a colorful shop, called Ponchikanoc, and it looks very inviting. Go to...`,
        },
      ],
      choices: [
        {
        text: 'Ponchikanoc(Snack)',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['ponchikanoc'],
              },
            ],
          },
            ],
        },
        {
          text: 'Just sit in Cascade',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['just-sit'],
                },
              ],
            },
          ],
  
          }
    ],
    },
    {
      id: 'ponchikanoc',
      convo: [
        {
          type: 'image',
          src: 'https://abp-am.storage.yandexcloud.net/page/image/c94c2a9f-41e7-422a-8600-14f0bc279a54.jpg',
        },
      ],
      choices: [{
        text: 'Does she enter?',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-enters-ponchikanoc'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'just-sit',
      convo: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Monument_of_Alexander_Tamanyan_%285%29.JPG',
        },
      ],
      choices: [{
        text: 'Does she enter?',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-sits-there'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'carol-enters-ponchikanoc',
      convo: [
        {
          type: 'text',
          text: 'She walks in to the colorful shop. There are kids running out, there smells very sweet. There are groups of family and friends sitting there and eating. Carol sees them eating ice-cream and large circle of dough with cream inside. She wants one for herself but she realizes she does not have any money. She sees an old woman buying one of this sweets. The old woman sees that she does not have money and decides to share one of donuts with her. Carol very grateful.',
        },
      ],
      choices: [],
    },
    {
      id: 'carol-sits-there',
      convo: [
        {
          type: 'text',
          text: `She is very tired, sits at Cascade. She is not in the mood, she does not want to do anything. She sits there about 5 minutes and then Carol sees an interesting statue of a large man leaning over a table. Carol wants to know what statue is that. Then an old woman comes and talks about that statue, she said: 'He is Alexander Tamanyan, an Armenian architect, well known for his work in the city of Yerevan'. And then the old woman decides to share one of donuts with her. Carol very grateful.`,
        },
      ],
      choices: []
    },
  ],  
});

export default CarolArrivesAtCascade;
