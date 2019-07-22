import BeatMap from '../../src/beatmap';

const col0 =
[150, 20000, 50100];

const col1 =
[800, 7200, 8000, 10000, 13000, 15000, 17000, 20000];

const col2 =
[880, 8666, 9100, 10000, 14000, 21500];

const col3 =
[150, 1600, 1900, 2400, 2640, 60000];

const col4 =
[1200, 2460, 2580, 2760, 9000, 21300, 25500, 35000, 60600];

const col5 =
[150, 1600, 1900, 2520, 2700, 12300, 21500, 30000, 35000];


const beatMap = new BeatMap(col0, col1, col2, col3, col4, col5, 2);


export default beatMap;
