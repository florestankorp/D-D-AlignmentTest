'use strict';
import { loadGraph } from './chart.js';
import {
  alignmentsKeys,
  ALIGNMENT_ABR,
  HEADING_KEYS,
  PARAGRAPH_KEYS,
  RESULTS,
  SESSION_STORAGE_KEY,
} from './keys.js';

const resultEl = document.querySelector('.result');
const headingEl = document.createElement('h1');
const paragraphEl = document.createElement('p');
const overviewEl = document.createElement('div');

let showResult = false;
let i = 0;
let value = '-1';
let tie = -1;
let align = '';

export function displayResult() {
  const { alignments, alignmentParts } = JSON.parse(
    sessionStorage.getItem(SESSION_STORAGE_KEY)
  );

  overviewEl.innerHTML = RESULTS;
  resultEl.innerHTML = '';
  resultEl.appendChild(headingEl);
  resultEl.appendChild(paragraphEl);
  resultEl.appendChild(overviewEl);

  headingEl.innerHTML = HEADING_KEYS[align];
  paragraphEl.innerHTML = PARAGRAPH_KEYS[align];
  loadGraph();
}

export function toggleDisplay() {
  const toggleButton = document.querySelector('.toggle-button');
  if (!showResult) {
    const resultEl = document.querySelector('.result');
    resultEl.style.display = 'block';

    document.querySelector('form').style.display = 'none';
    toggleButton.value = 'Take me back to the test';
  } else {
    const resultEl = document.querySelector('.result');
    resultEl.style.display = 'none';

    document.querySelector('form').style.display = 'block';
    toggleButton.value = 'What is my alignment?';
  }
  showResult = !showResult;
}

export function assemblePartsAndStore() {
  const { alignmentParts } = JSON.parse(
    sessionStorage.getItem(SESSION_STORAGE_KEY)
  );

  const newAlignments = {
    lg: alignmentParts.lx + alignmentParts.xg,
    ng: alignmentParts.nx + alignmentParts.xg,
    cg: alignmentParts.cx + alignmentParts.xg,
    ln: alignmentParts.lx + alignmentParts.xn,
    nn: alignmentParts.nx + alignmentParts.xn,
    cn: alignmentParts.cx + alignmentParts.xn,
    le: alignmentParts.lx + alignmentParts.xe,
    ne: alignmentParts.nx + alignmentParts.xe,
    ce: alignmentParts.cx + alignmentParts.xe,
  };

  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify({ alignmentParts, alignments: newAlignments })
  );
}

export function updateScore(question, alignmentOne, alignmentTwo) {
  const { alignmentParts, alignments } = JSON.parse(
    sessionStorage.getItem(SESSION_STORAGE_KEY)
  );

  let newAlignmentParts;

  for (i = 0; i < question.length; i++) {
    if (question[i].checked) {
      value = question[i].value;
    }

    switch (value) {
      case '1':
        newAlignmentParts = {
          ...alignmentParts,
          [alignmentOne]: (alignmentParts[alignmentOne] += 2),
        };
        break;
      case '2':
        newAlignmentParts = {
          ...alignmentParts,
          [alignmentOne]: (alignmentParts[alignmentOne] += 1),
        };
        break;
      case '3':
        newAlignmentParts = {
          ...alignmentParts,
          [alignmentOne]: (alignmentParts[alignmentTwo] += 1),
        };
        break;
      case '4':
        newAlignmentParts = {
          ...alignmentParts,
          [alignmentOne]: (alignmentParts[alignmentTwo] += 2),
        };
    }
    value = '-1';
  }

  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify({ alignments, alignmentParts: newAlignmentParts })
  );
}

export function calculateResult() {
  const { alignmentParts, alignments } = JSON.parse(
    sessionStorage.getItem(SESSION_STORAGE_KEY)
  );

  i = alignments.nn;
  align = ALIGNMENT_ABR.NN;

  alignmentsKeys.forEach((key) => {
    if (alignments[key] > i) {
      align = ALIGNMENT_ABR[key];
      i = alignments[key];
    }

    if (alignments[key] == i) {
      tie++;
    }
  });

  if (tie != 0) {
    if (
      alignmentParts.lx > alignmentParts.nx &&
      alignmentParts.lx > alignmentParts.cx
    ) {
      align = 'l';
    } else if (
      alignmentParts.cx > alignmentParts.nx &&
      alignmentParts.cx > alignmentParts.lx
    ) {
      align = 'c';
    } else {
      align = 'n';
    }

    if (
      alignmentParts.xg > alignmentParts.xe &&
      alignmentParts.xg > alignmentParts.xn
    ) {
      align += 'g';
    } else if (
      alignmentParts.xe > alignmentParts.xn &&
      alignmentParts.xe > alignmentParts.xg
    ) {
      align += 'e';
    } else {
      align += 'n';
    }
  }
}
