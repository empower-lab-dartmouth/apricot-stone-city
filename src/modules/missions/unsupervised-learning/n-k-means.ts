/* eslint-disable import/extensions */
 
import make from '../../../core/util/make'
import kMeans from './cs-k-means'
 
const normanLearnsKMeans = make.module({
   id: 'k-means',
   submodules: [
       kMeans,
   ],
   convoSegments: [],
})
 
export default normanLearnsKMeans