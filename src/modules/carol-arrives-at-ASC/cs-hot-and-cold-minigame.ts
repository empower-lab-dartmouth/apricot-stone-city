import { randomInt } from 'crypto';
import make from '../../core/util/make';
import {
  calculateDistanceBetweenTwoPoints, infoAboutTheMovie, kSimilarFilms, MOVIE_LIBRARY, numberedListOfMovies,
} from './k-nearest-neighbors-movies';

const hotAndCold = make.module({
  id: 'hot-and-cold',
  submodules: [],
  convoSegments: [
    {
      id: 'intro',
      convo: [
        {
          type: 'text',
          text: 'This minigame is called "hot and cold", it works like this: I\'ll give you a list of movies and ask you to guess the number of the movie that I\'m thinking of. Then I\'ll give you a distance score, where higher scores mean you\'re farther away and lower scores mean you\'re closer. Try and get the correct answer in as few guesses as possible. Ready to play?',
        },
        {
          type: 'image',
          src: 'https://user-images.githubusercontent.com/5395091/184211462-57b7f2fd-25d3-4779-a535-d9d5ce6ab282.png',
        },
      ],
      choices: [
        {
          text: "let's play",
          logic: [
            {
              do: [
                // Reset state
                {
                  type: 'update-state',
                  update: (state) => ({
                    hotAndCold: {
                      guessesMade: 0,
                      correctAnswer: randomInt(1, MOVIE_LIBRARY.length),
                    },
                  }),
                },
                {
                  type: 'goto',
                  path: ['game-start'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'game-start',
      convo: [
        {
          type: 'text',
          text: `Ok, let's let's start a new round. Here's the list of movies: ${numberedListOfMovies(MOVIE_LIBRARY)}`,
        },
      ],
      choices: [
        {
          text: 'ok',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['take-turn'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'pick-new-movie',
      convo: [
        {
          type: 'text',
          text: 'Ok, I randomly chose a new film. Let\'s play again.',
        },
      ],
      choices: [
        {
          text: 'ok',
          logic: [
            {
              do: [
                // Reset state
                {
                  type: 'update-state',
                  update: (state) => ({
                    hotAndCold: {
                      guessesMade: 0,
                      correctAnswer: randomInt(1, MOVIE_LIBRARY.length),
                    },
                  }),
                },
                {
                  type: 'goto',
                  path: ['take-turn'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'take-turn',
      convo: [
        {
          type: 'text',
          text: (state) => `Type a number between 1 and ${MOVIE_LIBRARY.length}: the answer is ${state.hotAndCold.correctAnswer}`,
        },
      ],
      default: [
        {
          if: (state) => Number.isInteger(Number.parseInt(state.lastTextMessage, 10))
                        && Number.parseInt(state.lastTextMessage, 10) > 0
                        && Number.parseInt(state.lastTextMessage, 10) <= MOVIE_LIBRARY.length,
          do: [
            {
              type: 'update-state',
              update: (state) => ({
                hotAndCold: {
                  guessesMade: state.hotAndCold.guessesMade + 1,
                  correctAnswer: state.hotAndCold.correctAnswer,
                },
              }),
            },
          ],
          otherwise: [
            {
              type: 'goto',
              path: ['not-a-valid-input'],
            },
          ],
        },
        {
          if: (state) => Number.parseInt(state.lastTextMessage, 10)
           === state.hotAndCold.correctAnswer,
          do: [
            {
              type: 'goto',
              path: ['correct-answer'],
            },
          ],
        },
        {
          if: (state) => Number.parseInt(state.lastTextMessage, 10)
          !== state.hotAndCold.correctAnswer
          && (Number.isInteger(Number.parseInt(state.lastTextMessage, 10))
          && Number.parseInt(state.lastTextMessage, 10) > 0
          && Number.parseInt(state.lastTextMessage, 10) <= MOVIE_LIBRARY.length),
          do: [
            {
              type: 'goto',
              path: ['incorrect-answer'],
            },
          ],
        },
      ],
      choices: [
        {
          text: 'get hint!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['hint'],
                },
              ],
            },
          ],
        },
        {
          text: 'pick different movie',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['pick-new-movie'],
                },
              ],
            },
          ],
        },
        {
          text: 'quit',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['game-ends'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'correct-answer',
      convo: [
        {
          type: 'text',
          text: (state) => `You got it! Awesome. That's my guess. You found the correct answer in ${state.hotAndCold.guessesMade} guesses.`,
        },
      ],
      choices: [
        {
          text: 'play again',
          logic: [
            {
              do: [
                // Reset state
                {
                  type: 'update-state',
                  update: (state) => ({
                    hotAndCold: {
                      guessesMade: 0,
                      correctAnswer: randomInt(1, MOVIE_LIBRARY.length),
                    },
                  }),
                },
                {
                  type: 'goto',
                  path: ['game-start'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hint',
      convo: [
        {
          type: 'text',
          text: (state) => `Here's a hint, some similar films to the one I'm thinking of are: \n\n${kSimilarFilms(MOVIE_LIBRARY[state.hotAndCold.correctAnswer - 1], 3)}.\n\n Also, here's how I'd rate the movie I'm thinking of (1 to 10 scale):\n\n${infoAboutTheMovie(MOVIE_LIBRARY[state.hotAndCold.correctAnswer - 1])}`,
        },
      ],
      choices: [
        {
          text: 'Guess again',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['take-turn'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'incorrect-answer',
      convo: [
        {
          type: 'text',
          text: (state) => `Ah.. sorry that's not it. Your distance score is ${calculateDistanceBetweenTwoPoints(MOVIE_LIBRARY[state.hotAndCold.correctAnswer - 1].embedding, MOVIE_LIBRARY[parseInt(state.lastTextMessage, 10) - 1].embedding).toFixed(2)}\nremember, lower scores mean you're closer.\nYou have made ${state.hotAndCold.guessesMade} guesses so far.\nClick "guess again" to try again.`,
        },
      ],
      choices: [
        {
          text: 'guess again',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['take-turn'],
                },
              ],
            },
          ],
        },
        {
          text: 'pick different movie',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['pick-new-movie'],
                },
              ],
            },
          ],
        },
        {
          text: 'quit',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['game-ends'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'not-a-valid-input',
      convo: [
        {
          type: 'text',
          text: 'Not a valid input',
        },
      ],
      choices: [
        {
          text: 'ok',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['take-turn'],
                },
              ],
            },
          ],
        },
        {
          text: 'quit',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['game-ends'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'game-ends',
      convo: [
        {
          type: 'text',
          text: 'Thanks for playing! Want to learn more about how this game works?',
        },
      ],
      choices: [
        {
          text: 'yeah!',
          logic: [
            {
              do: [
                {
                  type: 'goto',
                  path: ['root', '/start'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default hotAndCold;
