/* eslint-disable import/extensions */

import make from '../../../core/util/make'
import training from './cs.in-training-field'
import decision from './cs.normans-decision'
import library from './cs.in-the-library'
import conclusion from './cs.conclusion'

const normancreatespell = make.module({
    id: 'norman-in-hogwarts',
    submodules: [training, decision, library,conclusion],
    convoSegments: [],
})

export default normancreatespell
