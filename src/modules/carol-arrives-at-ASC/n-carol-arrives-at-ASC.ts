/* eslint-disable import/extensions */

import make from "../../core/util/make";
import missingBag from "./cs-missing-bag";
import onThePlane from "./cs-on-the-plane";

const carolArrivesAtASC = make.module({
  id: 'carol-arrives-at-ASC',
  submodules: [onThePlane, missingBag],
  convoSegments: [],
});

export default carolArrivesAtASC;
