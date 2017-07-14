import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';

const data = [159, 25, 13, 46, 401, 353, 325, 49, 65, 221, 344, 388, 206, 415, 418, 490, 195, 481, 326, 170, 433, 264, 341, 190, 487, 293, 287, 16, 95, 245, 364, 364, 191, 360, 353, 217, 213, 268, 332, 411, 105, 76, 148, 442, 84, 394, 427, 151, 496, 462, 370, 267, 106, 266, 407, 387, 432, 252, 426, 272, 352, 96, 82, 93, 379, 426, 351, 409, 149, 362, 60, 117, 410, 156, 233, 107, 75, 414, 359, 103, 198, 492, 289, 23, 97, 265, 150, 467, 243, 91, 256, 205, 27, 469, 305, 263, 376, 267, 184, 215];

const scaleX = scaleLinear()
    .domain([0, data.length])
    .range([0, 500]);

const scaleY = scaleLinear()
    .domain([Math.min(...data), Math.max(...data)])
    .range([0, 500]);

const tuples = data
    .map((d, i) => [i, d])
    .map(([x, y]) => [scaleX(x), scaleY(y)]);

const generator = line();

const lineString = generator(tuples);

let pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathElement.setAttribute('d', lineString);

document.querySelector('svg').appendChild(pathElement);
