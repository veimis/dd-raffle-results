(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./epochs.json":
/*!*********************!*\
  !*** ./epochs.json ***!
  \*********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"304\\\",\\\"303\\\",\\\"302\\\",\\\"301\\\",\\\"299\\\",\\\"298\\\",\\\"297\\\",\\\"296\\\",\\\"295\\\",\\\"294\\\"]\");\n\n//# sourceURL=webpack:///./epochs.json?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emurgo_cardano_serialization_lib_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emurgo/cardano-serialization-lib-browser */ \"./node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js\");\n/* harmony import */ var _epochs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epochs.json */ \"./epochs.json\");\nvar _epochs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./epochs.json */ \"./epochs.json\", 1);\n\n\n\nfunction getStakeAddress(str) {\n\t// Build base address\n\tlet addr = _emurgo_cardano_serialization_lib_browser__WEBPACK_IMPORTED_MODULE_0__[\"Address\"].from_bech32(str)\n\tlet base_addr = _emurgo_cardano_serialization_lib_browser__WEBPACK_IMPORTED_MODULE_0__[\"BaseAddress\"].from_address(addr)\n\n\t// Extract stake credential               \n\tlet stake_cred = base_addr.stake_cred()\n\n\t// Build reward address (add 0xe1 prefix to 28 last bytes of stake credential one) \n\tlet reward_addr_bytes = new Uint8Array(29)                                          \n\treward_addr_bytes.set([0xe1], 0)                                                \n\treward_addr_bytes.set(stake_cred.to_bytes().slice(4, 32), 1)             \n\tlet reward_addr = _emurgo_cardano_serialization_lib_browser__WEBPACK_IMPORTED_MODULE_0__[\"RewardAddress\"].from_address(_emurgo_cardano_serialization_lib_browser__WEBPACK_IMPORTED_MODULE_0__[\"Address\"].from_bytes(reward_addr_bytes))\n\n\treturn reward_addr.to_address().to_bech32();\n}\n\nfunction compare(winners, myStakeAddr) {\n\tlet result = \"\";\n\twinners.some((item,i) => {\n\t\tlet stakeAddr = getStakeAddress(item.address);\n\t\tif(stakeAddr === myStakeAddr) {\n\t\t\tresult = item.pt;\n\t\t\treturn true;\n\t\t}\n\t\treturn false;\n\t});\n\n\treturn result;\n}\n\nasync function getWinners() {\n\tlet select = document.getElementById(\"epochSelector\");\n\tconst index = select.selectedIndex;\n\tconst option = select.options[index];\n\tconst value = option.value;\n\n\tlet promise = fetch(`results/${value}`)\n\t\t.then(response => response.json());\n\treturn promise;\n}\n\nasync function check() {\n\tlet inputValue = document.getElementById(\"input\").value\n\tlet stakeAddr = getStakeAddress(inputValue)\n\tlet winners = await getWinners();\n\tlet result = compare(winners, stakeAddr);\n\tsetResult(result);\n}\t\n\nfunction setResult(result) {\n\tlet outputElement = document.getElementById(\"output\")\n\n\tif(result) {\n\t\toutputElement.innerHTML = `<h3>You won! ${result}</h3><img src=https://www.drunkendragon.games/s1/${result}.png /><p>(The Pixel Tile was sent to your wallet automatically)</p>`\n\t}\n\telse\n\t{\n\t\toutputElement.innerHTML = `<h3>Better luck next time adventurer! (no reward)</h3>`\n\t}\n}\n\ndocument.getElementById(\"button\").onclick = check;\n\nfunction copyAddress() {\n\t  /* Get the text field */\n\t  var copyText = document.getElementById(\"address\").textContent.trim();\n\n\t  /* Copy the text inside the text field */\n\t  navigator.clipboard.writeText(copyText);\n}\n\ndocument.getElementById(\"copy\").onclick = copyAddress;\n\nlet epochSelector = document.getElementById(\"epochSelector\");\n_epochs_json__WEBPACK_IMPORTED_MODULE_1__.forEach(epoch => {\n\tlet option = document.createElement(\"option\");\n\toption.value = `epoch${epoch}.json`;\n\toption.text = `Epoch ${epoch}`;\n\tepochSelector.add(option);\n});\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/@emurgo/cardano-serialization-lib-browser sync recursive":
/*!*********************************************************************!*\
  !*** ./node_modules/@emurgo/cardano-serialization-lib-browser sync ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/@emurgo/cardano-serialization-lib-browser sync recursive\";\n\n//# sourceURL=webpack:///./node_modules/@emurgo/cardano-serialization-lib-browser_sync?");

/***/ })

}]);