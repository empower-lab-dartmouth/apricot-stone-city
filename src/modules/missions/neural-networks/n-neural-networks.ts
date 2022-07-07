/* eslint-disable import/extensions */

import make from '../../../core/util/make'
import neuralNetworks from './cs.norman-and-merlin-in-world-of-neural-networks'

const NormanNeuralNetwork = make.module({
    id: 'neural-networks',
    submodules: [neuralNetworks],
    convoSegments: [],
})

export default NormanNeuralNetwork
