/* eslint-disable import/extensions */

import make from '../../../core/util/make'
import kMeans from './cs-k-means'
import unsupervisedLearning from './cs-unsupervised-learning-overview'

const normanLearnsKMeans = make.module({
    id: 'k-means',
    submodules: [kMeans,unsupervisedLearning],
    convoSegments: [],
})

export default normanLearnsKMeans
