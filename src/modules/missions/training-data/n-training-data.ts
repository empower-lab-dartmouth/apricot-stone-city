/* eslint-disable import/extensions */

import make from '../../../core/util/make'
import waitsForHisFriend from './cs-norman-waits-for-his-friend'
import picksFirewhisky from './cs-norman-picks-Firewhisky'
import picksButterbeer from './cs-norman-picks-Butterbeer'
import morganaAndTrainingData from './cs-morgana-and-training-data'
import arrivalAtThreeBroomsticks from './cs-norman-arrives-at-Three-Broomsticks'

const normanLearnsAboutTrainingData = make.module({
    id: 'training-data',
    submodules: [arrivalAtThreeBroomsticks,waitsForHisFriend,picksFirewhisky,picksButterbeer,morganaAndTrainingData],
    convoSegments: [],
})

export default normanLearnsAboutTrainingData
