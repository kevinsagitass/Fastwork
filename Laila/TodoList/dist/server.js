/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tips_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tips.json */ \"./src/tips.json\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nlet todoList = [];\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(\"/\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](__dirname));\n\n// Web\napp.get(\"/\", (req, res) => {\n  res.sendFile(\"index.html\", {\n    root: __dirname\n  });\n});\napp.get(\"/todo\", (req, res) => {\n  res.sendFile(\"todo.html\", {\n    root: __dirname\n  });\n});\napp.get(\"/recap\", (req, res) => {\n  res.sendFile(\"recap.html\", {\n    root: __dirname\n  });\n});\napp.get(\"/tips\", (req, res) => {\n  res.sendFile(\"tips.html\", {\n    root: __dirname\n  });\n});\napp.get(\"/calendar\", (req, res) => {\n  res.sendFile(\"calendar.html\", {\n    root: __dirname\n  });\n});\n\n// API\napp.post(\"/api/set-todo\", (req, res) => {\n  const localTodo = req.body.localTodo;\n  todoList = [...localTodo];\n  res.send(\"ok\");\n});\napp.get(\"/api/list\", (req, res) => {\n  const filter = req.query.filter;\n  res.send(todoList.filter(function (x) {\n    return x.status == filter || filter === \"All\";\n  }));\n});\napp.get(\"/api/list/:id\", (req, res) => {\n  const id = req.params.id;\n  res.send(todoList.filter(function (x) {\n    return x.id == id;\n  })[0]);\n});\napp.get(\"/api/today\", (req, res) => {\n  const today = new Date();\n  const stringToday = `${(\"0\" + today.getDate()).slice(-2)}/${(\"0\" + (today.getMonth() + 1)).slice(-2)}/${today.getFullYear()}`;\n  res.send(todoList.filter(function (x) {\n    return x.date.split(\" \")[0] == stringToday;\n  }));\n});\napp.post(\"/api/list\", (req, res) => {\n  const todo = req.body;\n  todoList.push({\n    id: todoList.length + 1,\n    title: todo.title,\n    date: todo.date,\n    status: \"Pending\",\n    compliance: \"Pending\"\n  });\n  res.send(\"ok\");\n});\napp.post(\"/api/list/:id\", (req, res) => {\n  const id = req.params.id;\n  const todo = req.body;\n  todoList.forEach((value, index) => {\n    if (value.id == id) {\n      value.title = todo.title;\n      value.date = todo.date;\n    }\n  });\n  res.send(\"ok\");\n});\napp.put(\"/api/list/:id\", (req, res) => {\n  const id = req.params.id;\n  const today = new Date();\n  todoList.forEach((element, index) => {\n    if (element.id == id) {\n      todoList[index].status = \"Complete\";\n      const dates = element.date.split(\" \");\n      let todoDate = new Date(dates[0].split(\"/\")[2], dates[0].split(\"/\")[1] - 1, dates[0].split(\"/\")[0], dates[1].split(\":\")[0], dates[1].split(\":\")[1], dates[1].split(\":\")[2], 0);\n      if (today.getTime() <= todoDate.getTime()) {\n        todoList[index].compliance = \"On Time\";\n      } else {\n        todoList[index].compliance = \"Late\";\n      }\n    }\n  });\n  res.send(\"ok\");\n});\napp.delete(\"/api/list/:id\", (req, res) => {\n  const id = req.params.id;\n  todoList.forEach((element, index) => {\n    if (element.id == id) {\n      todoList.splice(index, 1);\n    }\n  });\n  res.send(\"ok\");\n});\napp.get(\"/api/recap\", (req, res) => {\n  let result = {\n    weekly: {\n      status: {},\n      compliance: {}\n    },\n    monthly: {\n      status: {},\n      compliance: {}\n    }\n  };\n  const today = new Date();\n\n  // Weekly\n  let firstDay = new Date(today.getFullYear(), today.getMonth(), 1);\n  let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);\n  for (let i = new Date(firstDay.getTime()); i < lastDay; i.setDate(i.getDate() + 7)) {\n    let endOfWeekDate = new Date(i.getTime());\n    endOfWeekDate.setDate(endOfWeekDate.getDate() + 7);\n    const startWeek = `${(\"0\" + i.getDate()).slice(-2)}/${(\"0\" + (i.getMonth() + 1)).slice(-2)}/${i.getFullYear()}`;\n    todoList.forEach((todo, index) => {\n      const dates = todo.date.split(\" \");\n      let todoDate = new Date(dates[0].split(\"/\")[2], dates[0].split(\"/\")[1] - 1, dates[0].split(\"/\")[0], dates[1].split(\":\")[0], dates[1].split(\":\")[1], dates[1].split(\":\")[2], 0);\n      if (todoDate.getTime() >= i.getTime() && todoDate.getTime() < endOfWeekDate.getTime()) {\n        if (result[\"weekly\"][\"status\"][startWeek] == undefined || result[\"weekly\"][\"compliance\"][startWeek] == undefined) {\n          result[\"weekly\"][\"status\"][startWeek] = {\n            Pending: 0,\n            Complete: 0\n          };\n          result[\"weekly\"][\"compliance\"][startWeek] = {\n            Pending: 0,\n            Late: 0,\n            \"On Time\": 0\n          };\n        }\n        result[\"weekly\"][\"status\"][startWeek][todo.status]++;\n        result[\"weekly\"][\"compliance\"][startWeek][todo.compliance]++;\n      }\n    });\n  }\n\n  // Monthly\n  let firstDayYear = new Date(today.getFullYear(), 0, 1);\n  let lastDayYear = new Date(today.getFullYear(), 11, 1);\n  for (let i = new Date(firstDayYear.getTime()); i <= lastDayYear; i.setMonth(i.getMonth() + 1)) {\n    todoList.forEach((todo, index) => {\n      let todoMonth = todo.date.split(\" \")[0].split(\"/\")[1];\n      if (todoMonth == i.getMonth() + 1) {\n        if (result[\"monthly\"][\"status\"][todoMonth] == undefined || result[\"monthly\"][\"compliance\"][todoMonth] == undefined) {\n          result[\"monthly\"][\"status\"][todoMonth] = {\n            Pending: 0,\n            Complete: 0\n          };\n          result[\"monthly\"][\"compliance\"][todoMonth] = {\n            Pending: 0,\n            Late: 0,\n            \"On Time\": 0\n          };\n        }\n        result[\"monthly\"][\"status\"][todoMonth][todo.status]++;\n        result[\"monthly\"][\"compliance\"][todoMonth][todo.compliance]++;\n      }\n    });\n  }\n  res.send(result);\n});\napp.post(\"/api/tips\", (req, res) => {\n  const score = req.body;\n  for (stats in _tips_json__WEBPACK_IMPORTED_MODULE_3__) {\n    if (score.status <= stats) {\n      for (compliance in _tips_json__WEBPACK_IMPORTED_MODULE_3__[stats]) {\n        if (score.compliance <= compliance) {\n          res.send(_tips_json__WEBPACK_IMPORTED_MODULE_3__[stats][compliance]);\n          return;\n        }\n      }\n    }\n  }\n});\napp.listen(3001, () => {\n  console.log(\"Server Started on Port 3001\");\n});\n\n//# sourceURL=webpack://backend/./src/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "./src/tips.json":
/*!***********************!*\
  !*** ./src/tips.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"25\":{\"25\":\"Keep Opening the App and Write all Your Tasks\",\"50\":\"Complete More Tasks by Checking the Daily Task page\",\"75\":\"Great You Can Start Early for Tasks and Complete them when you Have Time\",\"100\":\"You are Efficient on Time you can Use the Extra Time you have and Complete More Tasks\"},\"50\":{\"25\":\"Its a Start But You can do Better Try Opening the Web more Consistently\",\"50\":\"Not Bad Theres More to Go make a Time Everyday to Organize and See what Tasks For Today\",\"75\":\"You Know how to Manage your Time what you Need is More Focus to Complete Tasks\",\"100\":\"You are Great on Time Management than Ever now Start Making more Time to Complete your Tasks\"},\"75\":{\"25\":\"You Completed Most of Your Task But Not On Time you Should Organize More and Do a Time Management\",\"50\":\"You Completed Most of Your Task and Is Doing quite Okay on The Time Keep Managing the Time Management and Do a Priority List\",\"75\":\"You Completed Most of Your Task and doing Quite Great! Improvement Never Hurts though\",\"100\":\"Now What you need is To Complete More Task and You are Going for a Fast Track!\"},\"100\":{\"25\":\"You Completed A Lot of Task Just not On Time :( Maybe You Can Try and Organize your Time do the Important Task First and make it On Time!\",\"50\":\"You Completed A Lot of Task Just Not so Effectively Maybe make a Schedule and Book Time to Complete Tasks\",\"75\":\"You Completed A Lot of Task And Mostly On Time This is Great but There is Still Some Room for Improvement :)\",\"100\":\"You Are Amazing!\"}}');\n\n//# sourceURL=webpack://backend/./src/tips.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;