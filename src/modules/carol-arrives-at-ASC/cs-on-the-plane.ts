import make from '../../core/util/make';

const onThePlane = make.module({
  id: 'on-the-plane',
  submodules: [],
  convoSegments: [
    {
      id: 'opening',
      convo: [
        {
          type: 'text',
          text: '<b>Welcome to Apricot Stone City, an interactive storytelling game.</b>',
        },
      ],
      choices: [{
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
      }],
    },
    {
      id: 'setting-the-scene',
      convo: [
        {
          type: 'text',
          text: 'Our story begins ten thousand feet in the air, on a Boeing 737 passenger Jet. Here, in seat 31B (the middle seat), we meet Carol. Carol is on a two week vacation to Vienna, she has a layover in Apricot Stone City, Armenia. She\'s never been to Armenia before. Let\'s zoom in and see what\'s happening...',
        },
      ],
      choices: [],
    }],
});

export default onThePlane;
