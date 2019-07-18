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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/museruse.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/museruse.js":
/*!*************************!*\
  !*** ./src/museruse.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.getElementById(\"canvas\")\nconst ctx = canvas.getContext(\"2d\")\n\nctx.fillStyle = \"#F9B9B9\";\nctx.fillRect(0, 675, 70, 125);\nctx.fillStyle = \"#F7A1A1\";\nctx.fillRect(0, 655, 70, 20);\nctx.font = \"30px, Arial\";\nctx.fillStyle = \"#000000\";\nctx.fillText('S', 30, 737.5);\n\nctx.fillStyle = \"#5DC9FF\";\nctx.fillRect(70, 675, 70, 125);\nctx.fillStyle = \"#1AB2FF\";\nctx.fillRect(70, 655, 70, 20);\nctx.font = \"30px, Arial\";\nctx.fillStyle = \"#000000\";\nctx.fillText('D', 100, 737.5);\n\nctx.fillStyle = \"#FFFC66\";\nctx.fillRect(140, 675, 70, 125);\nctx.fillStyle = \"#FFFB1A\";\nctx.fillRect(140, 655, 70, 20);\nctx.font = \"30px, Arial\";\nctx.fillStyle = \"#000000\";\nctx.fillText('F', 170, 737.5);\n\nctx.fillStyle = \"#FFFC66\";\nctx.fillRect(210, 675, 70, 125);\nctx.fillStyle = \"#FFFB1A\";\nctx.fillRect(210, 655, 70, 20);\nctx.font = \"30px, Arial\";\nctx.fillStyle = \"#000000\";\nctx.fillText('J', 240, 737.5);\n\nctx.fillStyle = \"#5DC9FF\";\nctx.fillRect(280, 675, 70, 125);\nctx.fillStyle = \"#1AB2FF\";\nctx.fillRect(280, 655, 70, 20);\nctx.font = \"30px, Arial\";\nctx.fillStyle = \"#000000\";\nctx.fillText('K', 315, 737.5);\n\nctx.fillStyle = \"#F9B9B9\";\nctx.fillRect(350, 675, 70, 125);\nctx.fillStyle = \"#F7A1A1\";\nctx.fillRect(350, 655, 70, 20);\nctx.font = \"30px, Arial\";\nctx.fillStyle = \"#000000\";\nctx.fillText('L', 385, 737.5);\n\n// const key = module.exports = new Event();\n\n// key.load = function() {\n\n\n    \n    window.addEventListener('keydown', function(e) {\n        // const act = maps.hit[e.keyCode];\n        // if (act && !state[act]) {\n        //     state[act] = true;\n        //     key.emit('hit, act, state');\n        // }\n        switch(e.keyCode) {\n            case 83:\n                ctx.fillStyle = \"#F37272\"\n                ctx.fillRect(0, 655, 70, 20);\n                break;\n            case 68:\n                ctx.fillStyle = \"#0088CC\"\n                ctx.fillRect(70, 655, 70, 20);\n                break;\n            case 70:\n                ctx.fillStyle = \"#FFCC00\"\n                ctx.fillRect(140, 655, 70, 20);\n                break;\n            case 74:\n                ctx.fillStyle = \"#FFCC00\"\n                ctx.fillRect(210, 655, 70, 20);\n                break;\n            case 75:\n                ctx.fillStyle = \"#0088CC\"\n                ctx.fillRect(280, 655, 70, 20);\n                break;\n            case 76:\n                ctx.fillStyle = \"#F37272\"\n                ctx.fillRect(350, 655, 70, 20);\n                break;\n        }\n    })\n\n    window.addEventListener('keyup', function(e) {\n        // const cmd = maps.command[e.keyCode];\n        // if (cmd) return key.emit(cmd);\n\n        // const act = maps.hit[e.keyCode];\n        // if (act) {\n        //     state[act] = false;\n        //     key.emit('hitup', act, state);\n        // }\n        switch (e.keyCode) {\n            case 83:\n                ctx.fillStyle = \"#F9B9B9\";\n                ctx.fillRect(0, 675, 70, 125);\n                ctx.fillStyle = \"#F7A1A1\";\n                ctx.fillRect(0, 655, 70, 20);\n                ctx.font = \"30px, Arial\";\n                ctx.fillStyle = \"#000000\";\n                ctx.fillText('S', 30, 737.5);\n                break;\n            case 68:\n                ctx.fillStyle = \"#5DC9FF\";\n                ctx.fillRect(70, 675, 70, 125);\n                ctx.fillStyle = \"#1AB2FF\";\n                ctx.fillRect(70, 655, 70, 20);\n                ctx.font = \"30px, Arial\";\n                ctx.fillStyle = \"#000000\";\n                ctx.fillText('D', 100, 737.5);\n                break;\n            case 70:\n                ctx.fillStyle = \"#FFFC66\";\n                ctx.fillRect(140, 675, 70, 125);\n                ctx.fillStyle = \"#FFFB1A\";\n                ctx.fillRect(140, 655, 70, 20);\n                ctx.font = \"30px, Arial\";\n                ctx.fillStyle = \"#000000\";\n                ctx.fillText('F', 170, 737.5);\n                break;\n            case 74:\n                ctx.fillStyle = \"#FFFC66\";\n                ctx.fillRect(210, 675, 70, 125);\n                ctx.fillStyle = \"#FFFB1A\";\n                ctx.fillRect(210, 655, 70, 20);\n                ctx.font = \"30px, Arial\";\n                ctx.fillStyle = \"#000000\";\n                ctx.fillText('J', 240, 737.5);\n                break;\n            case 75:\n                ctx.fillStyle = \"#5DC9FF\";\n                ctx.fillRect(280, 675, 70, 125);\n                ctx.fillStyle = \"#1AB2FF\";\n                ctx.fillRect(280, 655, 70, 20);\n                ctx.font = \"30px, Arial\";\n                ctx.fillStyle = \"#000000\";\n                ctx.fillText('K', 315, 737.5);\n                break;\n            case 76:\n                ctx.fillStyle = \"#F9B9B9\";\n                ctx.fillRect(350, 675, 70, 125);\n                ctx.fillStyle = \"#F7A1A1\";\n                ctx.fillRect(350, 655, 70, 20);\n                ctx.font = \"30px, Arial\";\n                ctx.fillStyle = \"#000000\";\n                ctx.fillText('L', 385, 737.5);\n                break;\n        }\n\n    });\n// };\n\n//# sourceURL=webpack:///./src/museruse.js?");

/***/ })

/******/ });