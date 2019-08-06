import BeatMap from '../../src/beatmap';

const col0 =
[0, 2800, 3200, 4800, 6400, 7800, 9000, 15200, 15800]

const col1 =
[600, 2400, 5600, 7400, 8600, 9800, 14800]

const col2 =
[800, 2800, 3800, 4600, 5400, 7000, 8200, 11600, 14400]

const col3 =
[0, 1600, 1800, 7200, 7800, 10600, 12200, 12400, 14000]

const col4 =
[1200, 2400, 4000, 8800, 10700, 11400, 12300, 13600]

const col5 =
[0, 1600, 1800, 7800, 10800, 13200, 16000]


const beatMap = new BeatMap(col0, col1, col2, col3, col4, col5, 2);


export default beatMap;


// every beat 200
// 
