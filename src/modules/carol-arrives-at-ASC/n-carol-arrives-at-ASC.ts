/* eslint-disable import/extensions */

import make from "../../core/util/make";
import missingBag from "./cs-missing-bag";
import onThePlane from "./cs-on-the-plane";
import toughestNutInTown from "./cs-toughest-nut-in-town";

const carolArrivesAtASC = make.module({
  id: 'carol-arrives-at-ASC',
  submodules: [onThePlane, missingBag, toughestNutInTown],
  convoSegments: [],
});

export default carolArrivesAtASC;
