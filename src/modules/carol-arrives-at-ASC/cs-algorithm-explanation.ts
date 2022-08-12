import make from '../../core/util/make'

const algorithmExplaination = make.module({
    id: 'algorithm-explaination',
    submodules: [],
    convoSegments: [
        {
            id: 'Introduction',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>Did you ever ask yourself, how a movie platform algorithm can give you perfect movie recommendations based on your movie preference? If not, this is our approach for a possible solution. All you need are the following components.</b>',
                },
                {
                    type: 'text',
                    text:
                        '<b>-> movie Database .</b>',
                },
           
                   {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/110830478/184249977-d683dfd4-923c-4fb7-acff-3331cccf8fdb.png'
                },
                 {
                    type: 'text',
                    text:
                        '<b> -> user movie preference .</b>',
                },
                {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/110830478/184235461-be5a6872-330a-41e5-a4e3-acc72841b529.png'
                },
                 {
                    type: 'text',
                    text:
                        '<b> -> AI algorithm ‚K-Nearest neighbor‘.</b>',
                },
                 {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/110830478/184238169-5cab278c-dfec-4a8b-b79f-b3ca0002ca78.png'
                },
            ],

            choices: [
                {
                    text: 'continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Movie-Database'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
         id: 'Movie-Database',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>Our program provides an intelligent decision support, for finding the best three movie matches, based on the movie preference of the user. To achieve this, the program is searching through its movie Database (movie list), comparing the genre characteristics of each movie (movie datapoint), with the corresponding given movie preference (target datapoint)..</b>',
                },
            ],
            choices: [
                {
                    text: 'continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['K-Nearest-Neighbor'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

{
         id: 'K-Nearest-Neighbor',
            convo: [
                {
                    type: 'text',
                    text:
                        'To have a more accurate result, the program is using the euclidean distance formula, also used in ‚K-Nearest Neighbor‘ algorithm. The ‚K-Nearest Neighbor‘ algorithm finds the distance between two movie datapoints in our movie space.',
                },
                //  {
                //     type: 'image',
                //     src: 'https://user-images.githubusercontent.com/110830478/184241182-816ac5a7-3d65-4ed2-a7d0-0b42633c69fd.png'
                // },
            ],
            choices: [
                {
                    text: 'continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['rating'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },


{
         id: 'rating',
            convo: [
                {
                    type: 'text',
                    text:
                        `The outcome of each distance calculation is the grade of similarity (rating) between two Datapoints. The more a movie is resembling the user preference, the smaller the calculated distance value is. This distance value is stored after each comparison in the respective movie Datapoint.`,
                },
                 {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/110830478/184241182-816ac5a7-3d65-4ed2-a7d0-0b42633c69fd.png'
                },
            ],
            choices: [
                {
                    text: 'continue2',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Result'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
       
{
         id: 'Result',
            convo: [
                {
                    type: 'text',
                    text:
                        'Finally the program is sorting the movie list by distance from small to big and listing the first three movies of this list.',
                },
                 {
                    type: 'image',
                    src: 'https://user-images.githubusercontent.com/110830478/184243398-b86b2f0d-5eae-4fa5-ac3d-8b11b5ab4b3b.png'
                },
            ],
    choices: [
    {
        text: 'continue',
        logic: [
            {
                do: [
                    {
                        type: 'goto',
                        path: [
                            'root',
                            'norman-arrives-at-ASC',
                            'norman-on-the-plane',
                            'introduction',
                        ],
                    },
                ],
            },
        ],
    },
],     
},]
})

export default algorithmExplaination;