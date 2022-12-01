/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tips.js":
/*!*********************!*\
  !*** ./src/tips.js ***!
  \*********************/
/***/ (() => {

eval("const rate = document.getElementById(\"Rate\");\nconst tips = document.getElementById(\"Tips\");\ngetRecap();\nfunction getRecap() {\n  fetch(`http://localhost:3001/api/recap`).then(response => response.json()).then(data => displayTips(data));\n}\n\n// Function to Display Tips\nasync function displayTips(data) {\n  rate.innerHTML = \"\";\n  tips.innerHTML = \"\";\n  let weeklyStatus = {\n    totalPending: 0,\n    totalComplete: 0,\n    completionRate: 0\n  };\n  let weeklyCompliance = {\n    totalPending: 0,\n    totalLate: 0,\n    totalOnTime: 0,\n    onTimeRate: 0\n  };\n  for (var date in data[\"weekly\"][\"status\"]) {\n    // Status\n    weeklyStatus[\"totalPending\"] += data[\"weekly\"][\"status\"][date][\"Pending\"];\n    weeklyStatus[\"totalComplete\"] += data[\"weekly\"][\"status\"][date][\"Complete\"];\n    weeklyStatus[\"completionRate\"] = weeklyStatus[\"totalComplete\"] / (weeklyStatus[\"totalPending\"] + weeklyStatus[\"totalComplete\"]) * 100;\n\n    // Compliance\n    weeklyCompliance[\"totalPending\"] += data[\"weekly\"][\"compliance\"][date][\"Pending\"];\n    weeklyCompliance[\"totalLate\"] += data[\"weekly\"][\"compliance\"][date][\"Late\"];\n    weeklyCompliance[\"totalOnTime\"] += data[\"weekly\"][\"compliance\"][date][\"On Time\"];\n    weeklyCompliance[\"onTimeRate\"] = weeklyCompliance[\"totalOnTime\"] / (weeklyCompliance[\"totalPending\"] + weeklyCompliance[\"totalLate\"] + weeklyCompliance[\"totalOnTime\"]) * 100;\n  }\n  let monthlyStatus = {\n    totalPending: 0,\n    totalComplete: 0,\n    completionRate: 0\n  };\n  let monthlyCompliance = {\n    totalPending: 0,\n    totalLate: 0,\n    totalOnTime: 0,\n    onTimeRate: 0\n  };\n  // Monthly Recap\n  for (var month in data[\"monthly\"][\"status\"]) {\n    // Status\n    monthlyStatus[\"totalPending\"] += data[\"monthly\"][\"status\"][month][\"Pending\"];\n    monthlyStatus[\"totalComplete\"] += data[\"monthly\"][\"status\"][month][\"Complete\"];\n    monthlyStatus[\"completionRate\"] = monthlyStatus[\"totalComplete\"] / (monthlyStatus[\"totalPending\"] + monthlyStatus[\"totalComplete\"]) * 100;\n\n    // Compliance\n    monthlyCompliance[\"totalPending\"] += data[\"monthly\"][\"compliance\"][month][\"Pending\"];\n    monthlyCompliance[\"totalLate\"] += data[\"monthly\"][\"compliance\"][month][\"Late\"];\n    monthlyCompliance[\"totalOnTime\"] += data[\"monthly\"][\"compliance\"][month][\"On Time\"];\n    monthlyCompliance[\"onTimeRate\"] = monthlyCompliance[\"totalOnTime\"] / (monthlyCompliance[\"totalPending\"] + monthlyCompliance[\"totalLate\"] + monthlyCompliance[\"totalOnTime\"]) * 100;\n  }\n  rate.innerHTML += `\n        <ul style=\"list-style: none\">\n            <li>Total All Week Completion Rate : ${weeklyStatus[\"completionRate\"]}%</li>\n            <li>Total All Week Compliance Rate : ${weeklyCompliance[\"onTimeRate\"]}%</li>\n            <li></li>\n            <li>Total All Month Completion Rate : ${monthlyStatus[\"completionRate\"]}%</li>\n            <li>Total All Month Compliance Rate : ${monthlyCompliance[\"onTimeRate\"]}%</li>\n        </ul>`;\n  tips.innerHTML += `\n        <ul style=\"list-style: none\">\n            <li><b>Week Tips : ${await getTips(weeklyStatus[\"completionRate\"], weeklyCompliance[\"onTimeRate\"])}</b></li>\n            <li><b>Month Tips : ${await getTips(monthlyStatus[\"completionRate\"], monthlyCompliance[\"onTimeRate\"])}</b></li>\n        </ul>`;\n}\n\n// Function to Get Tips from Backend with Status and Compliance Send by Weekly and Monthly\nasync function getTips(status, compliance) {\n  var tips = \"\";\n  const res = await fetch(\"http://localhost:3001/api/tips\", {\n    method: \"POST\",\n    headers: {\n      accept: \"*/*\",\n      \"content-type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      status: status,\n      compliance: compliance\n    })\n  });\n  tips = await res.text();\n  return tips;\n}\n\n//# sourceURL=webpack://backend/./src/tips.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/tips.js"]();
/******/ 	
/******/ })()
;