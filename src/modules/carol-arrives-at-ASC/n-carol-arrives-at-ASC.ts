/* eslint-disable import/extensions */

import make from "../../core/util/make";
import onThePlane from "./cs-on-the-plane";

const carolArrivesAtASC = make.module({
  id: 'carol-arrives-at-ASC',
  submodules: [onThePlane],
  convoSegments: [],
});

export default carolArrivesAtASC;
