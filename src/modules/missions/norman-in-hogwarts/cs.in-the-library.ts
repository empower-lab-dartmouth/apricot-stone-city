import make from '../../../core/util/make'
import { text } from '../../../core/util/make/unvalidated-type-constructors'

const library = make.module({
    id: 'in-the-library',
    submodules: [],
    convoSegments: [
        {
            id: 'in-library',
            convo: [
                {
                    type: 'image',
                    src:
                        'https://user-images.githubusercontent.com/51162620/177533174-e5e7f2a9-11f6-47ae-b740-a0fbc73c3358.jpeg',
                },
                {
                    type: 'text',
                    text:
                        "<b>He goes to the library. Now, time to pick up a spell book and research the spells in it. But it's not an easy task. After all, Hogwarts' library is 2nd biggest library in the world.</b>",
                },
            ],
            choices: [
                {
                    text: 'walk through the shelves',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['walk-through-the-shelves'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'walk-through-the-shelves',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>he searches a good book for about an hour, taking book after book, but none of these were what he wanted. He took "spells for skilled magicians" out of the shelf and noticed that there was another book hidden behind it. An old, damaged book looks like it is older than Hogwarts.</b>',
                },
                {
                    type: 'text',
                    text: '<i>Wow, this might be what I was looking for.</i>',
                },
                {
                    type: 'text',
                    text:
                        "<b>this book contained nearly all spells ever known to magicians.And what's interesting, the spells were written in different handwriting.</b>",
                },
                {
                    type: 'text',
                    text:
                        "<i>maybe if I write a spell here, it will become an actual spell! Wait, everything here is written in latin, maybe that's how it works.</i>",
                },
                {
                    type: 'text',
                    text: '<b>Norman writes something in latin.</b>',
                },
                {
                    type: 'text',
                    text: "<i>Alright, let's test this</i>",
                },
                {
                    type: 'text',
                    text:
                        '<b>he shakes his magic wand, closes his eyes in fear and pronounces.</b>',
                },
            ],
            choices: [
                {
                    text: 'crescere barbatum!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['crescere-barbatum'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'crescere-barbatum',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>Suddenly, he feels something soft on his face. He runs to the bathroom, looks in the mirror and shouts</b>',
                },
                {
                    type: 'text',
                    text: '<i>It worked!</i>',
                },
                {
                    type: 'text',
                    text:
                        '<b>a beautiful beard was on his childish face. Norman is very happy</b>',
                },
            ],
            choices: [
                {
                    text: 'Conclusion',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'norman-in-hogwarts',
                                        'conclusion',
                                        'conc',
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

export default library
