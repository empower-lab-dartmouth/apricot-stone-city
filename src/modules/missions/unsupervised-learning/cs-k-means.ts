import make from '../../../core/util/make'
 
const kMeans = make.module({
   id: 'norman-learns-k-means',
   submodules: [],
   convoSegments: [
       {
           id: 'introduction',
           convo: [
               {
                   type: 'text',
                   text:
                       `Norman and Merlin are in dark cave. Norman sees that the cave is mostly empty save a huge bag with something heavy in it and four empty boxes in front of it.

                       Merlin: It's time for your next mission. See that huge bag in front of you? It contains 4 different types of fruits. I am gonna ask you to separate them into these boxes without actually seeing them.
                       
                       Norman: That's ridiculous! I can't sort them correctly without having any information about them. No one can!
                       
                       Merlin: That's true... But I never said anything about not getting any information at all. You can ask me to give a certain characteristics of the items inside. You can separate them based on that information.
                       
                       Norman: OK, fair enough. Then can you give me the list of items based on...`,
               },
           ],
           choices: [
            {
                text: 'Weight',
                logic: [
                    {
                        do: [
                            {
                                type: 'goto',
                                path: ['Weight'],
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Volume',
                logic: [
                    {
                        do: [
                            {
                                type: 'goto',
                                path: ['Volume'],
                            },
                        ],
                    },
                ],
            },
           ],
       },
       {
        id: 'Weight',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177499341-3ac83b65-ec98-416c-a187-efbd9aab08e9.png`,
            },
        ],
        choices: [
         {
             text: `Norman: OK. Firstly, let's put them in an ascending order.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['ascending-order'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'ascending-order',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177500597-ba70fb65-dde0-41e4-960c-861a2a93e819.png`,
            },
        ],
        choices: [
         {
             text: `Norman: And now let's divide them into four groups.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['groups'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'groups',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177500746-d0807ec8-a018-4b32-8bed-b232ba80e2c7.png`,
            },
        ],
        choices: [
         {
             text: `Norman: This should work fine I think.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['work-fine'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'work-fine',
        convo: [
            {
                type: 'text',
                text:
                    `Merlin smirked.
                    
                    Merlin: Do you want to see the final result?
                    
                    `,
            },
        ],
        choices: [
         {
             text: `Norman: Yes definitely!`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['final-result'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'final-result',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177501061-e3d82a4d-cb0e-4dca-96ae-8453a14caeba.png`,
            },
        ],
        choices: [
         {
             text: `Norman: There are far too many errors! I was NOT expecting this.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['too-many-errors'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'too-many-errors',
        convo: [
            {
                type: 'text',
                text:
                    `Merlin: I can suggest another solution, do you want to listen?`,
            },
        ],
        choices: [
         {
             text: `Norman: Yes!`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['solution'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'Volume',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177502267-402749a8-2640-4828-9adb-eb92c3b93469.png`,
            },
        ],
        choices: [
         {
             text: `Norman: OK. Firstly, let's put them in an ascending order.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['ascending-order1'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'ascending-order1',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177502354-3ad0c58f-18bb-4486-b426-89b82f0055b9.png`,
            },
        ],
        choices: [
         {
             text: `Norman: And now let's divide them into four groups.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['groups1'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'groups1',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177502426-4ed4e3ff-4539-4404-9237-223a3960df19.png`,
            },
        ],
        choices: [
         {
             text: `Norman: This should work fine I think.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['work-fine'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'work-fine1',
        convo: [
            {
                type: 'text',
                text:
                    `Merlin smirked.
                    
                    Merlin: Do you want to see the final result?
                    
                    `,
            },
        ],
        choices: [
         {
             text: `Norman: Yes definitely!`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['final-result1'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'final-result1',
        convo: [
            {
                type: 'image',
                src:
                    `https://user-images.githubusercontent.com/68229446/177502449-2ad5683d-d3a8-4c40-9439-c873f95c885f.png`,
            },
        ],
        choices: [
         {
             text: `Norman: There are far too many errors! I was NOT expecting this.`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['too-many-errors1'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'too-many-errors1',
        convo: [
            {
                type: 'text',
                text:
                    `Merlin: I can suggest another solution, do you want to listen?`,
            },
        ],
        choices: [
         {
             text: `Norman: Yes!`,
             logic: [
                 {
                     do: [
                         {
                             type: 'goto',
                             path: ['solution'],
                         },
                     ],
                 },
             ],
         },
        ],
    },
    {
        id: 'solution',
        convo: [
            {
                type: 'text',
                text:
                    `Merlin: I suggest to separate items into groups using k-means.`,
            },
        ],
        choices: [
         
        ],
    },
   ],
})
 
export default kMeans
 
