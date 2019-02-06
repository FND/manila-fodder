"use strict";

module.exports = {
	js: [{
		source: "./src/index.js",
		target: "./dist/bundle.js"
	}, {
		source: "./demo.js",
		target: "./bundle.js",
		esnext: true
	}]
};
