'use strict';
import { HEADING_KEYS, SESSION_STORAGE_KEY } from './keys.js';
export function loadGraph() {
  const { alignments, alignmentParts } = JSON.parse(
    sessionStorage.getItem(SESSION_STORAGE_KEY)
  );

  const alignmentCtx = document.getElementById('alignment').getContext('2d');
  const lawChaosCtx = document.getElementById('law-chaos').getContext('2d');
  const goodEvilCtx = document.getElementById('good-evil').getContext('2d');

  const alignmentChart = new Chart(alignmentCtx, {
    type: 'doughnut',
    data: {
      labels: [
        HEADING_KEYS.lg,
        HEADING_KEYS.ng,
        HEADING_KEYS.cg,
        HEADING_KEYS.ln,
        HEADING_KEYS.nn,
        HEADING_KEYS.cn,
        HEADING_KEYS.le,
        HEADING_KEYS.ne,
        HEADING_KEYS.ce,
      ],
      datasets: [
        {
          label: 'Alignment',
          data: [
            alignments.lg,
            alignments.ng,
            alignments.cg,
            alignments.ln,
            alignments.nn,
            alignments.cn,
            alignments.le,
            alignments.ne,
            alignments.ce,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: { align: 'start', position: 'right' },
    },
  });

  const lawChaosChart = new Chart(lawChaosCtx, {
    type: 'doughnut',
    data: {
      labels: ['Law', 'Neutral', 'Chaos'],
      datasets: [
        {
          label: 'Alignment',
          data: [alignmentParts.lx, alignmentParts.nx, alignmentParts.cx],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: { align: 'start', position: 'right' },
    },
  });

  const goodEvilChart = new Chart(goodEvilCtx, {
    type: 'doughnut',
    data: {
      labels: ['Good', 'Neutral', 'Evil'],
      datasets: [
        {
          label: 'Alignment',
          data: [alignmentParts.xg, alignmentParts.xn, alignmentParts.xe],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: { align: 'start', position: 'right' },
    },
  });
}
