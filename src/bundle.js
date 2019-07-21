/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./media/beatmaps/brahms.js":
/*!**********************************!*\
  !*** ./media/beatmaps/brahms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_beatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/beatmap */ \"./src/beatmap.js\");\n\n\nconst col0 =\n[];\n\nconst col1 =\n[];\n\nconst col2 =\n[];\n\nconst col3 =\n[];\n\nconst col4 =\n[];\n\nconst col5 =\n[];\n\n\nconst beatMap = new _src_beatmap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](col0, col1, col2, col3, col4, col5, 3);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (beatMap);\n\n\n//# sourceURL=webpack:///./media/beatmaps/brahms.js?");

/***/ }),

/***/ "./media/song.js":
/*!***********************!*\
  !*** ./media/song.js ***!
  \***********************/
/*! exports provided: playSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playSong\", function() { return playSong; });\n\nfunction playSong() {\n    // debugger\n    let song = document.getElementById(\"audio\")\n    song.play()\n    //start notes\n}\n\n//# sourceURL=webpack:///./media/song.js?");

/***/ }),

/***/ "./src/beatmap.js":
/*!************************!*\
  !*** ./src/beatmap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ \"./src/column.js\");\n\n\nclass BeatMap {\n    constructor(notes0, notes1, notes2, notes3, notes4, notes5, speed) {\n        this.startTime = 0;\n        this.currentTime = 0;\n        this.notes = {\n            0: notes0.slice(0),\n            1: notes1.slice(0),\n            2: notes2.slice(0),\n            3: notes3.slice(0),\n            4: notes4.slice(0),\n            5: notes5.slice(0),\n        }\n        this.speed = speed;\n        \n        // debugger\n        this.cols = {\n            0: new _column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0),\n            1: new _column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1),\n            2: new _column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2),\n            3: new _column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n            4: new _column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4),\n            5: new _column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5),\n        }\n\n        this.addNotes = this.addNotes.bind(this);\n        this.keyHit = this.keyHit.bind(this);\n\n        this.beatTracker = {\n            0: [],\n            1: [],\n            2: [],\n            3: [],\n            4: [],\n            5: [],\n        }\n    }\n\n    addNotes(colNum) {\n        if (this.notes[colNum][0] <= this.currentTime - this.startTime) {\n            this.cols[colNum].addNote(colNum);\n            this.notes[colNum].shift();\n        }\n    }\n\n    drawBeatMap() {\n        // this.ctx.clearRect(0, 0, 0, 0)\n        this.cols[0].drawNotes(this.speed);\n        this.cols[1].drawNotes(this.speed);\n        this.cols[2].drawNotes(this.speed);\n        this.cols[3].drawNotes(this.speed);\n        this.cols[4].drawNotes(this.speed);\n        this.cols[5].drawNotes(this.speed);\n\n        this.currentTime = new Date().getTime();\n    }\n\n    keyHit(colNum) {\n        this.cols[colNum].deleteNotes(0);\n        // this.beatTracker(colNum).push(Math.round((this.currentTime - this.startTime)/10) * 10 - (380 * 3) - 80);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BeatMap);\n\n//# sourceURL=webpack:///./src/beatmap.js?");

/***/ }),

/***/ "./src/column.js":
/*!***********************!*\
  !*** ./src/column.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ \"./src/note.js\");\n\n\nclass Column {\n    constructor(col) {\n        this.col = col;\n        this.cvs = document.getElementById(`${this.col}`);\n        this.ctx = this.cvs.getContext(\"2d\");\n        this.notes = [];\n\n        this.addNote = this.addNote.bind(this);\n        this.drawNotes = this.drawNotes.bind(this);\n        this.deleteNotes = this.deleteNotes.bind(this);\n    }\n\n    addNote() {\n        const note = new _note_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.col);\n        this.notes.push(note);\n    }\n\n    drawNotes(speed) {\n        if (this.notes.length > 0) {\n            this.notes.forEach(note => {\n                note.pos.y += speed;\n                note.drawNote();\n            })\n        }\n    }\n\n    deleteNotes() {\n        let pastNotes = 0;\n        if (this.notes.length > 0) {\n            this.notes.forEach(note => {\n                if (note.pos.y >= this.cvs.height * .75 - 10) {\n                    pastNotes ++;\n                }\n            })\n        }\n        this.notes.splice(0, pastNotes);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\n\n//# sourceURL=webpack:///./src/column.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nwindow.addEventListener('load', () => {\n    let canvas = document.getElementById('canvas')\n    let context = canvas.getContext(\"2d\")\n    let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context);\n    window.game = game;\n    game.init();\n})\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _beatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beatmap */ \"./src/beatmap.js\");\n/* harmony import */ var _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/beatmaps/brahms.js */ \"./media/beatmaps/brahms.js\");\n\n\n\n// import gd from '../media/audio/gd.mp3';\n\n\nconst COLORS = {\n    RED: \"#F9B9B9\",\n    BLUE: \"#5DC9FF\",\n    YELLOW: \"#FFFC66\",\n}\n\nclass Game {\n    constructor(cvs, ctx) {\n        this.cvs = cvs;\n        this.ctx = ctx;\n        this.keys = [];\n        this.notes = [];\n        this.playSong = this.playSong.bind(this);\n        this.init = this.init.bind(this);\n        this.beatMap;\n        // this.loop = this.loop.bind(this);\n    }\n\n    init() {\n        const offset = 70;\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 , this.cvs.height - 120, COLORS['RED'], 'S'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + offset, this.cvs.height - 120, COLORS['BLUE'], 'D'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 2), this.cvs.height - 120, COLORS['YELLOW'], 'F'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 3), this.cvs.height - 120, COLORS['YELLOW'], 'J'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 4), this.cvs.height - 120, COLORS['BLUE'], 'K'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 5), this.cvs.height - 120, COLORS['RED'], 'L'));\n        // Song.playSong('gd');\n        this.draw()\n        this.keys[0].trackInput();  \n    }\n\n    playSong() {\n        this.beatMap = new _beatmap__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[0].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[1].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[2].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[3].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[4].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[5].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speed\n        );\n        this.beatMap.startTime = new Date().getTime();\n        this.beatMap.currentTime = new Date().getTime();\n        this.drawInterval = setInterval(() => {\n            this.beatMap.addNotes(0);\n            this.beatMap.addNotes(1);\n            this.beatMap.addNotes(2);\n            this.beatMap.addNotes(3);\n            this.beatMap.addNotes(4);\n            this.beatMap.addNotes(5);\n            this.beatMap.drawBeatMap();\n        }, 1);\n        \n        // debugger;\n        // setTimeout( () => {\n        //     Song.playSong('gd');\n        // }, 900);    \n        // let song = new Audio();\n        // song.src = gd;\n        // song.play();\n\n        document.addEventListener('keydown', (e) => {\n            switch (e.keyCode) {\n\n                case 83:\n                    this.beatMap.keyHit(0);\n                    break;\n\n                case 68:\n                    this.beatMap.keyHit(1);\n                    break;\n\n                case 70:\n                    this.beatMap.keyHit(2);\n                    break;\n\n                case 74:\n                    this.beatMap.keyHit(3);\n                    break;\n\n                case 75:\n                    this.beatMap.keyHit(4);\n                    break;\n\n                case 76:\n                    this.beatMap.keyHit(5);\n                    break;\n            }\n        })\n    }\n    \n    draw() {\n        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);\n        this.keys.forEach(key => key.draw());    \n        this.notes.forEach(note => note.draw());\n    }\n    \n    update(){\n        this.keys.forEach(key => key.update());\n        this.notes.forEach(note => note.update());\n    }\n    \n\n    loop() {\n        this.update();\n        this.draw();\n        window.requestAnimationFrame(this.loop);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/song */ \"./media/song.js\");\n\n\nclass Key {\n    constructor(game, x, y, color, letter) {\n        this.cvs = game.cvs;\n        this.ctx = game.ctx;\n        this.game = game;\n \n        this.w = 70;\n        this.h = 120;\n        this.pos = {\n            x: x,\n            y: y,\n        }\n        this.color = color;\n        this.key = 0;\n        this.letter = letter;\n        this.state = {\n            S: false,\n            D: false,\n            F: false,\n            J: false,\n            K: false,\n            L: false\n        }\n        \n        this.trackInput = this.trackInput.bind(this);\n        this.keyPress = this.keyPress.bind(this);\n        this.keyUp = this.keyUp.bind(this);\n    }\n\n    keyPress(num, key) {\n        if (this.state[key] === false) {\n            this.state[key] = true;\n            // debugger\n            this.ctx.fillStyle = '#0074D9';\n            this.ctx.fillRect(this.pos.x + num, this.pos.y - 10, this.w, 10)\n        }\n    }\n\n    keyUp(num, key) {\n        this.state[key] = false;\n        if ( this.state[key] === false\n            // this.state['S'] === false &&\n            // this.state['D'] === false &&\n            // this.state['F'] === false &&\n            // this.state['J'] === false &&\n            // this.state['K'] === false &&\n            // this.state['L'] === false\n        ) {\n            // debugger\n            this.ctx.clearRect(this.pos.x + num, this.pos.y - 10, this.w, 10)\n            this.draw();\n        } else {\n            // debugger\n            this.ctx.clearRect(0, 0, this.w, 10)\n            this.draw();\n        }\n    }\n\n    trackInput() {\n        document.addEventListener('keydown', (e) => {\n            switch(e.keyCode) {\n                case 80:\n                    this.game.playSong();\n                    _media_song__WEBPACK_IMPORTED_MODULE_0__[\"playSong\"]('music')\n                    break;\n\n                case 83:\n                    this.keyPress(0, 'S');                \n                    break;\n                \n                case 68:\n                    this.keyPress(70, 'D');\n                    break;\n                \n                case 70:\n                   this.keyPress(140, 'F');\n                    break;\n               \n                case 74:\n                    this.keyPress(210, 'J');\n                    break;\n                \n                case 75:\n                    this.keyPress(280, 'K');\n                    break;\n               \n                case 76:\n                    this.keyPress(350, 'L');\n                    break;\n            }\n        })\n\n        document.addEventListener('keyup', (e) => {\n            switch (e.keyCode) {\n                case 83:\n                    this.keyUp(0, 'S');\n                    break;\n\n                case 68:\n                    this.keyUp(70, 'D');\n                    break;\n\n                case 70:\n                    this.keyUp(140, 'F');\n                    break;\n\n                case 74:\n                    this.keyUp(210, 'J');\n                    break;\n\n                case 75:\n                    this.keyUp(280, 'K');\n                    break;\n\n                case 76:\n                    this.keyUp(350, 'L');\n                    break;\n            }\n        })\n    }\n\n    draw() {\n        this.ctx.fillStyle = '#b3b3b3';\n        this.ctx.fillRect(this.pos.x, this.pos.y - 10, this.w * 6, 10)\n        this.ctx.fillStyle = this.color;\n        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);\n        this.ctx.font = '15px Arial'\n        this.ctx.fillStyle = \"black\"\n        this.ctx.fillText(this.letter, this.pos.x + 30, this.pos.y + 60)\n    }\n\n    update() {\n        this.draw();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Key);\n\n//# sourceURL=webpack:///./src/key.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Note {\n    constructor(col) {\n        this.col = col;\n        this.cvs = document.getElementById(`${this.col}`);\n        this.ctx = this.cvs.getContext('2d');\n        this.pos = {\n            x: 0,\n            y: -this.cvs.height\n        }\n    }\n\n    drawNote() {\n        this.ctx.clearRect(0, 0, this.pos.x, this.pos.y)\n        this.col === 0 || this.col === 5 ?\n            this.ctx.fillStyle = '#F9B9B9' :\n        this.col === 1 || this.col === 4 ?\n            this.ctx.fillStyle = \"#5DC9FF\" :\n            this.ctx.fillStyle = \"#FFFC66\"\n        this.ctx.strokeStyle = 'black';\n\n        this.col === 0 ? this.ctx.fillRect(this.cvs.width * .167 * this.col, this.pos.y, this.cvs.width * .167, 10) :\n            this.ctx.fillRect(this.cvs.width * .167 * this.col + 5, this.pos.y, this.cvs.width * .167 - 5, 10);\n\n        this.col === 0 ? this.ctx.strokeRect(this.cvs.width * .167 * this.col, this.pos.y, this.cvs.width * .167, 10) :\n            this.ctx.strokeRect(this.cvs.width * .167 * this.col + 5, this.pos.y, this.cvs.width * .167 - 5, 10);\n    }\n\n    update() {\n        this.drawNote();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\n\n//# sourceURL=webpack:///./src/note.js?");

/***/ })

/******/ });