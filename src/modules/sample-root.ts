import make from '../core/util/make'
import { nestedModule } from './child-module'
import { stateManagerConstructor } from '../core/convo-engine/state-manager'
import log from '../core/util/logging'
import carolArrivesAtASC from './carol-arrives-at-ASC/n-carol-arrives-at-ASC'
import normanArrivesAtASC from './norman-arrives-at-ASC/n-norman-arrives-at-ASC'
import normanLearnsKMeans from './missions/unsupervised-learning/n-k-means'

const root = make.module({
    id: 'root',
    submodules: [
        nestedModule,
        carolArrivesAtASC,
        normanArrivesAtASC,
        normanLearnsKMeans,
    ],
    convoSegments: [
        {
            id: '/start',
            convo: [
                {
                    type: 'text',
                    text: state => `this chatbot says welcome ${state.userId}`,
                },
                {
                    type: 'text',
                    text: state => `test value is ${state.testValue}`,
                },
            ],
            choices: [
                {
                    text: '/start',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'on-the-plane',
                                        'opening',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: `Norman is stopped`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'norman-arrives-at-ASC',
                                        'norman-is-stopped',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: `k-means`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'k-means',
                                        'norman-learns-k-means',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'toughest nut',
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
                {
                    text: 'Arpi invitess Carol',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'arpi-Invites-Carol',
                                        'at-the-cascade',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'A woman stops her car',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'a-woman-stops-her-car',
                                        'introduction',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Arrival to Cascade',
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
                {
                    text: 'Warm house',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'at-the-warm-home',
                                        'around-the-table',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Goes to bed',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'carol-goes-to-bed',
                                        'carol-enters-the-bedroom',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Stops a taxi',
                    logic: [
                        {
                            do: [
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
                {
                    text: 'Dinner',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'having-dinner',
                                        'arrive-to-the-house',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Exploring ATC',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'walking',
                                        'walkingUnderRain',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Lost passport',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'Lost-pasport',
                                        'miss-pasport',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Solemn walk',
                    logic: [
                        {
                            do: [
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
                    text: 'updateCounter',
                    logic: [
                        {
                            if: state => state.testValue < 3,
                            do: [
                                {
                                    type: 'update-state',
                                    update: state => ({
                                        testValue: state.testValue + 1,
                                    }),
                                },
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                            otherwise: [
                                {
                                    type: 'update-state',
                                    update: { testValue: 0 },
                                },
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '/child',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'child', 'childSegment'],
                                },
                            ],
                        },
                    ],
                },
            ],
            default: [
                {
                    if: state => state.lastTextMessage.length > 20,
                    do: [
                        {
                            type: 'goto',
                            path: ['longMessage'],
                        },
                    ],
                    otherwise: [
                        {
                            type: 'goto',
                            path: ['/start'],
                        },
                    ],
                },
            ],
        },
        {
            id: 'longMessage',
            convo: [
                {
                    type: 'text',
                    text: state =>
                        `<b>${state.lastTextMessage}</b> is a long message!`,
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
                                    path: ['/start'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'sample2',
            convo: [
                {
                    type: 'text',
                    text: 'oh this <b>absolute path</b> works too',
                },
                {
                    type: 'image',
                    src:
                        'https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg',
                },
            ],
            choices: [
                {
                    text: '/goToStart',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/start'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default root
