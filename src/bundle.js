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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_beatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/beatmap */ \"./src/beatmap.js\");\n\n\nconst col0 =\n[180, 20000, 50100];\n\nconst col1 =\n[780, 5000, 6000, 7200, 8000, 10000, 13000, 15000, 17000, 20000];\n\nconst col2 =\n[820, 2525, 2788, 2898, 3131, 3255, 3667, 5644, 8666, 9100, 10000, 14000, 21500];\n\nconst col3 =\n[180, 6000, 9000, 10000, 21300, 35000, 60000];\n\nconst col4 =\n[1100, 1600, 2000, 2500, 3600, 6600, 9000, 21300, 25500, 35000, 60600];\n\nconst col5 =\n[180, 6000, 9500, 12000, 12300, 21500, 30000, 35000];\n\n\nconst beatMap = new _src_beatmap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](col0, col1, col2, col3, col4, col5, 2);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (beatMap);\n\n\n//# sourceURL=webpack:///./media/beatmaps/brahms.js?");

/***/ }),

/***/ "./media/song.js":
/*!***********************!*\
  !*** ./media/song.js ***!
  \***********************/
/*! exports provided: playSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playSong\", function() { return playSong; });\n\nfunction playSong() {\n    // debugger\n    let song = new Audio('./media/audio/brahms.mp3')\n    song.play()\n    //start notes\n}\n\n//# sourceURL=webpack:///./media/song.js?");

/***/ }),

/***/ "./src/beatmap.js":
/*!************************!*\
  !*** ./src/beatmap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/eightseconds/Desktop/museruse/src/beatmap.js'\");\n\n//# sourceURL=webpack:///./src/beatmap.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _beatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beatmap */ \"./src/beatmap.js\");\n/* harmony import */ var _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/beatmaps/brahms.js */ \"./media/beatmaps/brahms.js\");\n\n\n\n// import gd from '../media/audio/gd.mp3';\n\n\nconst COLORS = {\n    RED: \"#F9B9B9\",\n    BLUE: \"#5DC9FF\",\n    YELLOW: \"#FFFC66\",\n}\n\nclass Game {\n    constructor(cvs, ctx) {\n        this.cvs = cvs;\n        this.ctx = ctx;\n        this.keys = [];\n        this.notes = [];\n        this.playSong = this.playSong.bind(this);\n        this.init = this.init.bind(this);\n        this.beatMap;\n        // this.loop = this.loop.bind(this);\n    }\n\n    init() {\n        const offset = 70;\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 , this.cvs.height - 120, COLORS['RED'], 'S'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + offset, this.cvs.height - 120, COLORS['BLUE'], 'D'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 2), this.cvs.height - 120, COLORS['YELLOW'], 'F'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 3), this.cvs.height - 120, COLORS['YELLOW'], 'J'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 4), this.cvs.height - 120, COLORS['BLUE'], 'K'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 5), this.cvs.height - 120, COLORS['RED'], 'L'));\n        // Song.playSong('gd');\n        this.draw()\n        this.keys[0].trackInput();  \n    }\n\n    playSong() {\n        this.beatMap = new _beatmap__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[0].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[1].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[2].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[3].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[4].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notes[5].slice(0),\n            _media_beatmaps_brahms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speed\n        );\n        this.beatMap.startTime = new Date().getTime();\n        this.beatMap.currentTime = new Date().getTime();\n        this.drawInterval = setInterval(() => {\n            this.beatMap.addNotes(0);\n            this.beatMap.addNotes(1);\n            this.beatMap.addNotes(2);\n            this.beatMap.addNotes(3);\n            this.beatMap.addNotes(4);\n            this.beatMap.addNotes(5);\n            this.beatMap.drawBeatMap();\n        }, 1);\n        \n        // debugger;\n        // setTimeout( () => {\n        //     Song.playSong('gd');\n        // }, 900);    \n        // let song = new Audio();\n        // song.src = gd;\n        // song.play();\n\n        document.addEventListener('keydown', (e) => {\n            switch (e.keyCode) {\n\n                case 83:\n                    this.beatMap.keyHit(0);\n                    break;\n\n                case 68:\n                    this.beatMap.keyHit(1);\n                    break;\n\n                case 70:\n                    this.beatMap.keyHit(2);\n                    break;\n\n                case 74:\n                    this.beatMap.keyHit(3);\n                    break;\n\n                case 75:\n                    this.beatMap.keyHit(4);\n                    break;\n\n                case 76:\n                    this.beatMap.keyHit(5);\n                    break;\n            }\n        })\n    }\n    \n    draw() {\n        this.keys.forEach(key => key.draw());    \n        // this.notes.forEach(note => note.draw());\n    }\n    \n    // update(){\n    //     this.keys.forEach(key => key.update());\n    //     this.notes.forEach(note => note.update());\n    // }\n    \n\n    // loop() {\n    //     this.update();\n    //     this.draw();\n    //     window.requestAnimationFrame(this.loop);\n    // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/song */ \"./media/song.js\");\n\n\nclass Key {\n    constructor(game, x, y, color, letter) {\n        this.cvs = game.cvs;\n        this.ctx = game.ctx;\n        this.game = game;\n \n        this.w = 70;\n        this.h = 120;\n        this.pos = {\n            x: x,\n            y: y,\n        }\n        this.color = color;\n        this.key = 0;\n        this.letter = letter;\n        this.state = {\n            S: false,\n            D: false,\n            F: false,\n            J: false,\n            K: false,\n            L: false\n        }\n        \n        this.trackInput = this.trackInput.bind(this);\n        this.keyPress = this.keyPress.bind(this);\n        this.keyUp = this.keyUp.bind(this);\n    }\n\n    keyPress(num, key) {\n        if (this.state[key] === false) {\n            this.state[key] = true;\n            // debugger\n            this.ctx.fillStyle = '#0074D9';\n            this.ctx.fillRect(this.pos.x + num, this.pos.y - 20, this.w, 20)\n        }\n    }\n\n    keyUp(num, key) {\n        this.state[key] = false;\n        if ( this.state[key] === false\n            // this.state['S'] === false &&\n            // this.state['D'] === false &&\n            // this.state['F'] === false &&\n            // this.state['J'] === false &&\n            // this.state['K'] === false &&\n            // this.state['L'] === false\n        ) {\n            // debugger\n            this.ctx.clearRect(0, 0, this.w, 20);\n            this.draw();\n\n        } else {\n            // debugger\n            this.ctx.clearRect(this.pos.x + num, this.pos.y - 20, this.w, 20)\n            this.draw();\n        }\n    }\n\n    trackInput() {\n        document.addEventListener('keydown', (e) => {\n            switch(e.keyCode) {\n                case 80:\n                    this.game.playSong();\n                    _media_song__WEBPACK_IMPORTED_MODULE_0__[\"playSong\"]('music')\n                    break;\n\n                case 83:\n                    this.keyPress(0, 'S');                \n                    break;\n                \n                case 68:\n                    this.keyPress(70, 'D');\n                    break;\n                \n                case 70:\n                   this.keyPress(140, 'F');\n                    break;\n               \n                case 74:\n                    this.keyPress(210, 'J');\n                    break;\n                \n                case 75:\n                    this.keyPress(280, 'K');\n                    break;\n               \n                case 76:\n                    this.keyPress(350, 'L');\n                    break;\n            }\n        })\n\n        document.addEventListener('keyup', (e) => {\n            switch (e.keyCode) {\n                case 83:\n                    this.keyUp(0, 'S');\n                    break;\n\n                case 68:\n                    this.keyUp(70, 'D');\n                    break;\n\n                case 70:\n                    this.keyUp(140, 'F');\n                    break;\n\n                case 74:\n                    this.keyUp(210, 'J');\n                    break;\n\n                case 75:\n                    this.keyUp(280, 'K');\n                    break;\n\n                case 76:\n                    this.keyUp(350, 'L');\n                    break;\n            }\n        })\n    }\n\n    draw() {\n        this.ctx.fillStyle = '#b3b3b3';\n        this.ctx.fillRect(this.pos.x, this.pos.y - 20, this.w * 6, 20)\n        this.ctx.fillStyle = this.color;\n        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);\n        this.ctx.font = '15px Arial'\n        this.ctx.fillStyle = \"black\"\n        this.ctx.fillText(this.letter, this.pos.x + 30, this.pos.y + 60)\n\n        this.ctx.strokeStyle = \"#b3b3b3\"\n        this.ctx.beginPath();\n        this.ctx.moveTo(this.w, 800)\n        this.ctx.lineTo(this.w, 0)\n        this.ctx.stroke();\n        this.ctx.beginPath();\n        this.ctx.moveTo(this.w + 70, 800)\n        this.ctx.lineTo(this.w + 70, 0)\n        this.ctx.stroke();\n        this.ctx.beginPath();\n        this.ctx.moveTo(this.w + 140, 800)\n        this.ctx.lineTo(this.w + 140, 0)\n        this.ctx.stroke();\n        this.ctx.beginPath();\n        this.ctx.moveTo(this.w + 210, 800)\n        this.ctx.lineTo(this.w + 210, 0)\n        this.ctx.stroke();\n        this.ctx.beginPath();\n        this.ctx.moveTo(this.w + 280, 800)\n        this.ctx.lineTo(this.w + 280, 0)\n        this.ctx.stroke();\n    }\n\n    update() {\n        this.draw();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Key);\n\n//# sourceURL=webpack:///./src/key.js?");

/***/ })

/******/ });