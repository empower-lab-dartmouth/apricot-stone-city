/* eslint-disable import/extensions */

import make from '../../core/util/make'
import normanIsStopped from './cs-norman-is-stopped'

const normanArrivesAtASC = make.module({
    id: 'norman-arrives-at-ASC',
    submodules: [normanIsStopped],
    convoSegments: [],
})

export default normanArrivesAtASC
