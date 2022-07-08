/* eslint-disable import/extensions */

import make from '../../core/util/make'

import normanOnPlane from './cs-on-the-plane'
import tooManyBags from './cs.too-many-bags'
import silkRoadHotel from './cs-silk-road-hotel'
import enteringWorld from './cs-entering-the-world-of-the-self-aware'

const normanArrivesAtASC = make.module({
    id: 'norman-arrives-at-ASC',
    submodules: [normanOnPlane,tooManyBags,silkRoadHotel,enteringWorld],
    convoSegments: [],
})

export default normanArrivesAtASC
