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

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let canvas = document.getElementById('canvas')\n    let context = canvas.getContext(\"2d\")\n    let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context);\n    window.game = game;\n    \n    game.init();\n})\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n\n\n\nconst GAME_PLAYING = 'GAME_PLAYING'\n\nconst KEYS = {\n    S: 83,\n    D: 68,\n    F: 70,\n    J: 74,\n    K: 75,\n    L: 76,\n}\n\nconst COLORS = {\n    RED: \"#F9B9B9\",\n    BLUE: \"#5DC9FF\",\n    YELLOW: \"#FFFC66\",\n}\n\nclass Game {\n    constructor(cvs, ctx) {\n        this.cvs = cvs;\n        this.ctx = ctx;\n    \n        this.keys = [];\n        this.notes = [];\n\n        this.init = this.init.bind(this);\n        this.loop = this.loop.bind(this);\n    }\n\n    init() {\n        const offset = 70;\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 , this.cvs.height - 120, COLORS['RED'], 'S'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + offset, this.cvs.height - 120, COLORS['BLUE'], 'D'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 2), this.cvs.height - 120, COLORS['YELLOW'], 'F'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 3), this.cvs.height - 120, COLORS['YELLOW'], 'J'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 4), this.cvs.height - 120, COLORS['BLUE'], 'K'));\n        this.keys.push(new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, this.cvs.width / 2 - 70 * 3 + (offset * 5), this.cvs.height - 120, COLORS['RED'], 'L'));\n\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 400, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 500, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 700, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 200, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 900, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 1000, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 1100, COLORS['RED'], 'S'));\n        this.notes.push(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 500, COLORS['RED'], 'S'));\n        this.loop();\n        this.keys[0].trackInput();\n    }\n    \n    draw() {\n        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);\n        this.keys.forEach(key => key.draw());    \n        this.notes.forEach(note => note.draw());\n    }\n    \n    update(){\n        this.keys.forEach(key => key.update());\n        this.notes = this.notes.filter(note => note.active)    \n        this.notes.forEach(note => note.update());    \n    }\n    \n    loop() {\n        this.update();\n        this.draw();\n        window.requestAnimationFrame(this.loop);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Key {\n    constructor(game, x, y, color, letter) {\n        this.cvs = game.cvs;\n        this.ctx = game.ctx;\n \n        this.w = 70;\n        this.h = 120;\n        this.pos = {\n            x: x,\n            y: y,\n        }\n        this.color = color;\n        this.key = 0;\n        this.letter = letter;\n        this.trackInput = this.trackInput.bind(this);\n        this.state = {\n            S: false,\n            D: false,\n            F: false,\n            J: false,\n            K: false,\n            L: false\n        }\n\n    }\n\n    getKeyIndex(key) {\n        if (key === 'S') {\n            return 0;\n        } else if (key === 'D') {\n            return 1;\n        } else if (key === 'F') {\n            return 2;\n        } else if (key === 'J') {\n            return 3;\n        } else if (key === 'K') {\n            return 4;\n        } else if (key === 'L') {\n            return 5;\n        }\n    };\n    \n    trackInput() {\n        document.addEventListener('keydown', (e) => {\n            \n        })\n    }\n\n    update() {\n\n    }\n\n    draw() {\n        this.ctx.fillStyle = '#b3b3b3';\n        this.ctx.fillRect(this.pos.x, this.pos.y - 10, this.w, 10)\n        this.ctx.fillStyle = this.color;\n        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);\n        this.ctx.font = '15px Arial'\n        this.ctx.fillStyle = \"black\"\n        this.ctx.fillText(this.letter, this.pos.x + 30, this.pos.y + 60)\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Key);\n\n//# sourceURL=webpack:///./src/key.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VELOCITY = 5\n\n\nclass Note {\n    constructor(game, x, y, color, letter) {\n        this.cvs = game.cvs;\n        this.ctx = game.ctx;\n\n        this.w = 70;\n        this.h = 10;\n        this.pos = {\n            x: x,\n            y: y,\n        }\n        this.color = color;\n        this.letter = letter;\n        this.velocity = VELOCITY;\n        this.active = true;\n    }\n\n\n\n    update() {\n        this.pos.y += this.velocity;\n        // debugger\n        if (this.pos.y === this.cvs.height - 100) {\n            this.active = false;\n        }\n    }\n\n    draw() {\n        this.ctx.fillStyle = this.color;\n        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\n\n//# sourceURL=webpack:///./src/note.js?");

/***/ })

/******/ });