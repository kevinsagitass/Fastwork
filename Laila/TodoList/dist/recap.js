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

/***/ "./src/recap.js":
/*!**********************!*\
  !*** ./src/recap.js ***!
  \**********************/
/***/ (() => {

eval("const weeklyStatusBox = document.getElementById(\"weeklyStatus\");\nconst weeklyComplianceBox = document.getElementById(\"weeklyCompliance\");\nconst monthlyStatusBox = document.getElementById(\"monthlyStatus\");\nconst monthlyComplianceBox = document.getElementById(\"monthlyCompliance\");\ngetRecap();\n\n// Get Detail of Recap Data\nfunction getRecap() {\n  console.log('tes');\n  fetch(`http://localhost:3001/api/recap`).then(response => response.json()).then(data => displayRecap(data));\n}\n\n// Display Detail of Recap Data to Frontend\nfunction displayRecap(data) {\n  weeklyStatusBox.innerHTML = \"\";\n  weeklyComplianceBox.innerHTML = \"\";\n  monthlyStatusBox.innerHTML = \"\";\n  monthlyComplianceBox.innerHTML = \"\";\n\n  // Weekly Recap\n  for (var date in data[\"weekly\"][\"status\"]) {\n    // Status\n    let weeklyStatus = {\n      totalPending: 0,\n      totalComplete: 0,\n      completionRate: 0\n    };\n\n    // Calculate Pending, Complete, and Completion Rate by Weekly\n    weeklyStatus[\"totalPending\"] += data[\"weekly\"][\"status\"][date][\"Pending\"];\n    weeklyStatus[\"totalComplete\"] += data[\"weekly\"][\"status\"][date][\"Complete\"];\n    weeklyStatus[\"completionRate\"] = weeklyStatus[\"totalComplete\"] / (weeklyStatus[\"totalPending\"] + weeklyStatus[\"totalComplete\"]) * 100;\n    weeklyStatusBox.innerHTML += `<b>Completion Rate Week Of ${date} :</b>\n        <div class=\"progress\">\n            <div class=\"progress-bar\" style=\"width:${weeklyStatus[\"completionRate\"]}%\">${weeklyStatus[\"completionRate\"]}%</div>\n        </div>`;\n\n    // Compliance\n    let weeklyCompliance = {\n      totalPending: 0,\n      totalLate: 0,\n      totalOnTime: 0,\n      onTimeRate: 0\n    };\n\n    // Calculate Pending, Late, and On Time Rate per Weekly\n    weeklyCompliance[\"totalPending\"] += data[\"weekly\"][\"compliance\"][date][\"Pending\"];\n    weeklyCompliance[\"totalLate\"] += data[\"weekly\"][\"compliance\"][date][\"Late\"];\n    weeklyCompliance[\"totalOnTime\"] += data[\"weekly\"][\"compliance\"][date][\"On Time\"];\n    weeklyCompliance[\"onTimeRate\"] = weeklyCompliance[\"totalOnTime\"] / (weeklyCompliance[\"totalPending\"] + weeklyCompliance[\"totalLate\"] + weeklyCompliance[\"totalOnTime\"]) * 100;\n    weeklyComplianceBox.innerHTML += `<b>On Time Rate Week Of ${date} :</b>\n        <div class=\"progress\">\n            <div class=\"progress-bar\" style=\"width:${weeklyCompliance[\"onTimeRate\"]}%\">${weeklyCompliance[\"onTimeRate\"]}%</div>\n        </div>`;\n  }\n\n  // Monthly Recap\n  for (var month in data[\"monthly\"][\"status\"]) {\n    // Status\n    let monthlyStatus = {\n      totalPending: 0,\n      totalComplete: 0,\n      completionRate: 0\n    };\n\n    // Calculate Pending, Complete, and Completion Rate by Monthly\n    monthlyStatus[\"totalPending\"] += data[\"monthly\"][\"status\"][month][\"Pending\"];\n    monthlyStatus[\"totalComplete\"] += data[\"monthly\"][\"status\"][month][\"Complete\"];\n    monthlyStatus[\"completionRate\"] = monthlyStatus[\"totalComplete\"] / (monthlyStatus[\"totalPending\"] + monthlyStatus[\"totalComplete\"]) * 100;\n    monthlyStatusBox.innerHTML += `<b>Completion Rate Month Of ${getMonthName(month)} :</b> \n        <div class=\"progress\">\n            <div class=\"progress-bar\" style=\"width:${monthlyStatus[\"completionRate\"]}%\">${monthlyStatus[\"completionRate\"]}%</div>\n        </div>`;\n\n    // Compliance\n    let monthlyCompliance = {\n      totalPending: 0,\n      totalLate: 0,\n      totalOnTime: 0,\n      onTimeRate: 0\n    };\n\n    // Calculate Pending, Late, and On Time Rate per Monthly\n    monthlyCompliance[\"totalPending\"] += data[\"monthly\"][\"compliance\"][month][\"Pending\"];\n    monthlyCompliance[\"totalLate\"] += data[\"monthly\"][\"compliance\"][month][\"Late\"];\n    monthlyCompliance[\"totalOnTime\"] += data[\"monthly\"][\"compliance\"][month][\"On Time\"];\n    monthlyCompliance[\"onTimeRate\"] = monthlyCompliance[\"totalOnTime\"] / (monthlyCompliance[\"totalPending\"] + monthlyCompliance[\"totalLate\"] + monthlyCompliance[\"totalOnTime\"]) * 100;\n    monthlyComplianceBox.innerHTML += `<b>On Time Rate Month Of ${getMonthName(month)} :</b>\n        <div class=\"progress\">\n            <div class=\"progress-bar\" style=\"width:${monthlyCompliance[\"onTimeRate\"]}%\">${monthlyCompliance[\"onTimeRate\"]}%</div>\n        </div>`;\n  }\n}\n\n// Function to Return Month Name from Month Number\nfunction getMonthName(monthNumber) {\n  const date = new Date();\n  date.setMonth(monthNumber - 1);\n  return date.toLocaleString(\"en-US\", {\n    month: \"long\"\n  });\n}\n\n//# sourceURL=webpack://backend/./src/recap.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/recap.js"]();
/******/ 	
/******/ })()
;