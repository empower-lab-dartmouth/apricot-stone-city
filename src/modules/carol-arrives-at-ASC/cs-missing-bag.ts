import make from '../../core/util/make'

const missingBag = make.module({
    id: 'missing-bags',
    submodules: [],
    convoSegments: [
        {
            id: 'miss-bag',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>At first Carol check out and then she goes to take her baggage.She is at the line, trying to find her baggage. Carol has bad feeling and restless standing at the line. Someone hit her shoulder and go away. Carol feels unconfident in Apricot Stone City.</b>',
                },
                
            ],
            choices: [
                {
                    text: 'takes a baggage taht looks like hers',
                    logic:[
                        {
                            do:[
                                {
                                    type: 'goto',
                                    path: ['take-it'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'doesnt find hers',
                    logic:[
                        {
                            do:[
                                {
                                    type: 'goto',
                                    path: ['leave-it'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'take-it',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol wants to go out and take a taxi, someone calls her and says: "Excuse me, Can you wait a minute. I think those are my bags with you, can we check it please?". Carol is calm now, she takes a deep breath.They meet and find out that the bags do not belong to Carol. Carols bags were with the person who called, their bags looked identical. They get their bags back. Carol is happy.',
                },
            ],
            choices: [
                {
                    text: 'Walk alone',
                    logic:[
                        {
                            do:[
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'solemn-walk-in-the-rain',
                                        'solemn-walk',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Take a cab',
                    logic:[
                        {
                            do:[
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'stop-taxi',
                                        'taxi',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'leave-it',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol starts panicking and goes to find the police and tells everything. Then the police promises theyll find them. Carol decides to sit and wait, she is very nervous, but then someone approaches her and says panicked "I think we got our bags wrong, I think those are mine", Carol jumps up, says "Oh my God, yes, probably, because these arent mine and I cant find my bags". Carol gets her bags back.',
                },
            ],
            choices: [
                {
                    text: 'Walk alone',
                    logic:[
                        {
                            do:[
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'solemn-walk-in-the-rain',
                                        'solemn-walk',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Take a cab',
                    logic:[
                        {
                            do:[
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'stop-taxi',
                                        'taxi',
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

export default missingBag
