import make from '../core/util/make'
import { nestedModule } from './child-module'
import { stateManagerConstructor } from '../core/convo-engine/state-manager'
import log from '../core/util/logging'
import NormanLearnsAboutGradientDescent from './missions/Norman-learns-about-gradient-descent/n-Norman-learns-about-gradient-descent'
import carolArrivesAtASC from './carol-arrives-at-ASC/n-carol-arrives-at-ASC'
import normanArrivesAtASC from './norman-adventure/n-norman-adventures'
import normanLearnsKMeans from './missions/unsupervised-learning/n-k-means'
import normanLearnsAboutTrainingData from './missions/training-data/n-training-data'
import normancreatespell from './missions/norman-in-hogwarts/n-norman-training-data'
import NormanNeuralNetwork from './missions/neural-networks/n-neural-networks'
import IntroToAI from './missions/intro to AI/n-intro-to-ai'
import { userInfo } from 'os'
import { unsafeInsertAt } from 'fp-ts/lib/Array'
import { state } from 'fp-ts/lib/State'

const root = make.module({
    id: 'root',
    submodules: [
        nestedModule,
        carolArrivesAtASC,
        NormanLearnsAboutGradientDescent,
        normanArrivesAtASC,
        normanLearnsKMeans,
        normanLearnsAboutTrainingData,
        normancreatespell,
        NormanNeuralNetwork,
        IntroToAI,
    ],
    convoSegments: [
        {
            id: '/start',
            convo: [
                {
                    type: 'text',
                    text:
                        'Welcome to Apricot Stone City, an interactive storytelling game about life in Yerevan, machine learning, and free will.\n\n Before we continue, is this a new account, or is there a different person playing from this account?',
                },
            ],
            choices: [
                {
                    text:
                        'Yes, it is my first time or someone else was playing before',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'get-info-name'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Minigame',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'hot-and-cold-minigame',
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
            id: 'get-info-name',
            convo: [
                {
                    type: 'text',
                    text: 'Please Enter Your name using the keyboard',
                },
            ],
            choices: [
                {
                    text:
                        'please input text on your keyboard, ignore this button',
                    logic: [],
                },
            ],
            default: [
                {
                    if: state =>
                        state.lastTextMessage ==
                        'please input text on your keyboard, ignore this button',
                    do: [
                        {
                            type: 'goto',
                            path: ['enter-again'],
                        },
                    ],
                    otherwise: [
                        {
                            type: 'update-state',
                            update: state => ({
                                username: state.lastTextMessage,
                            }),
                        },
                        {
                            type: 'goto',
                            path: ['check-name'],
                        },
                    ],
                },
            ],
        },
        {
            id: 'check-name',
            convo: [
                {
                    type: 'text',
                    text: state =>
                        `Thanks you entered ${state.username} as your name, is it correct?`,
                },
            ],
            choices: [
                {
                    text: 'yes',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['get-info-email'],
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
                                    path: ['get-info-name'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'enter-again',
            convo: [
                {
                    type: 'text',
                    text:
                        'Please enter your real name, and dont use the buttons, use the keyboard instead!',
                },
            ],
            choices: [
                {
                    text:
                        'please input text on your keyboard, ignore this button',
                    logic: [],
                },
            ],
            default: [
                {
                    if: state =>
                        state.lastTextMessage ===
                        'please input text on your keyboard, ignore this button',
                    do: [
                        {
                            type: 'goto',
                            path: ['enter-again'],
                        },
                    ],
                    otherwise: [
                        {
                            type: 'update-state',
                            update: state => ({
                                username: state.lastTextMessage,
                            }),
                        },
                        {
                            type: 'goto',
                            path: ['check-name'],
                        },
                    ],
                },
            ],
        },
        {
            id: 'get-info-email',
            convo: [
                {
                    type: 'text',
                    text: 'Please enter your real e-mail here, using keyboard',
                },
            ],
            choices: [
                {
                    text:
                        'please input text on your keyboard, ignore this button',
                    logic: [],
                },
            ],
            default: [
                {
                    if: state =>
                        state.lastTextMessage ===
                        'please input text on your keyboard, ignore this button',
                    do: [
                        {
                            type: 'goto',
                            path: ['enter-email-again'],
                        },
                    ],
                    otherwise: [
                        {
                            type: 'update-state',
                            update: state => ({
                                userEmail: state.lastTextMessage,
                            }),
                        },
                        {
                            type: 'goto',
                            path: ['check-email'],
                        },
                    ],
                },
            ],
        },
        {
            id: 'check-email',
            convo: [
                {
                    type: 'text',
                    text: state =>
                        `Thanks you entered ${state.userEmail} as your email, is it correct?`,
                },
            ],
            choices: [
                {
                    text: 'yes',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['get-started'],
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
                                    path: ['get-info-email'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'get-started',
            convo: [
                {
                    type: 'text',
                    text: state =>
                        `One more thing ${state.username}. Remember, you can always suggest new buttons that should be added by just typing them. We'll use that data to keep building out that game :)`,
                },
            ],
            choices: [
                {
                    text: 'Ok, I understand',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['start-the-story'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'start-the-story',
            convo: [
                {
                    type: 'text',
                    text: 'Thats it! Lets get started....',
                },
            ],
            choices: [
                {
                    text: 'Start!',
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
            ],
        },
    ],
})

export default root
