/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(10);

	function scrollElementTo(scrollWithin, scrollTo, duration, targetID) {
		scrollWithin.scrollTop = scrollWithin.scrollTop || 0;

		var destY = scrollTo.offsetTop,
		    initialOffset = scrollWithin.scrollTop,
		    totalOffset = Math.abs(initialOffset - destY),
		    direction = initialOffset < destY ? 1 : -1,
		    interval = 20,
		    totalTicks = duration / interval;

		var i = 0;

		var timerId = setTimeout(function tick() {
			var progress = i / totalTicks,
			    ease = progress * (2 - progress);
			scrollWithin.scrollTop = initialOffset + totalOffset * ease * direction;
			i++;
			if (i <= totalTicks) {
				timerId = setTimeout(tick, interval);
			} else {
				scrollWithin.tabIndex = "-1";
				scrollWithin.focus();
				window.history.pushState("", "", targetID);
			}
		}, interval);
	}

	function anchorLinkHandler(e) {
		var distanceToTop = function distanceToTop(el) {
			return Math.floor(el.getBoundingClientRect().top);
		};

		e.preventDefault();
		var targetID = '#' + this.getAttribute("href").split("#", 2)[1];
		var targetAnchor = document.querySelector(targetID);
		if (!targetAnchor) return;

		var wrapper = document.getElementById('wrapper');
		scrollElementTo(wrapper, targetAnchor, 500, targetID);
	}

	var linksToAnchors = document.querySelectorAll('a[href*="#"]');

	linksToAnchors.forEach(function (each) {
		return each.onclick = anchorLinkHandler;
	});

	window.addEventListener('load', function () {
		document.body.classList.add('loaded');
	}, false);

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

/******/ });