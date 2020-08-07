'use strict';

import { ALIGNMENT_KEYS, SESSION_STORAGE_KEY } from './keys.js';
import {
  assemblePartsAndStore,
  calculateResult,
  displayResult,
  toggleDisplay,
  updateScore,
} from './utils.js';

window.process = function process() {
  const survey = document.survey;
  let alignmentParts = {
    lx: 0,
    nx: 0,
    cx: 0,
    xg: 0,
    xn: 0,
    xe: 0,
  };

  let alignments = {
    lg: 0,
    ln: 0,
    le: 0,
    ng: 0,
    nn: 0,
    ne: 0,
    cg: 0,
    cn: 0,
    ce: 0,
  };

  // init empty store
  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify({ alignmentParts, alignments })
  );

  toggleDisplay();
  updateScore(survey.q201, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XE);
  updateScore(survey.q202, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XN);
  updateScore(survey.q203, ALIGNMENT_KEYS.XE, ALIGNMENT_KEYS.XN);
  updateScore(survey.q204, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.CX);
  updateScore(survey.q205, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q206, ALIGNMENT_KEYS.CX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q207, ALIGNMENT_KEYS.XE, ALIGNMENT_KEYS.XG);
  updateScore(survey.q208, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XN);
  updateScore(survey.q209, ALIGNMENT_KEYS.XE, ALIGNMENT_KEYS.XN);
  updateScore(survey.q210, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.CX);
  updateScore(survey.q211, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q212, ALIGNMENT_KEYS.NX, ALIGNMENT_KEYS.CX);
  updateScore(survey.q213, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XN);
  updateScore(survey.q214, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XE);
  updateScore(survey.q215, ALIGNMENT_KEYS.XN, ALIGNMENT_KEYS.XE);
  updateScore(survey.q216, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.CX);
  updateScore(survey.q217, ALIGNMENT_KEYS.CX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q218, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q219, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XE);
  updateScore(survey.q220, ALIGNMENT_KEYS.XE, ALIGNMENT_KEYS.XN);
  updateScore(survey.q221, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XN);
  updateScore(survey.q222, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.CX);
  updateScore(survey.q223, ALIGNMENT_KEYS.CX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q224, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q225, ALIGNMENT_KEYS.XE, ALIGNMENT_KEYS.XN);
  updateScore(survey.q226, ALIGNMENT_KEYS.XN, ALIGNMENT_KEYS.XG);
  updateScore(survey.q227, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XE);
  updateScore(survey.q228, ALIGNMENT_KEYS.LX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q229, ALIGNMENT_KEYS.CX, ALIGNMENT_KEYS.NX);
  updateScore(survey.q230, ALIGNMENT_KEYS.CX, ALIGNMENT_KEYS.LX);
  updateScore(survey.q231, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XE);
  updateScore(survey.q232, ALIGNMENT_KEYS.XG, ALIGNMENT_KEYS.XN);
  updateScore(survey.q233, ALIGNMENT_KEYS.XE, ALIGNMENT_KEYS.XN);
  updateScore(survey.q234, ALIGNMENT_KEYS.NX, ALIGNMENT_KEYS.LX);
  updateScore(survey.q235, ALIGNMENT_KEYS.CX, ALIGNMENT_KEYS.LX);
  updateScore(survey.q236, ALIGNMENT_KEYS.NX, ALIGNMENT_KEYS.CX);
  assemblePartsAndStore();
  calculateResult();
  displayResult();
};
