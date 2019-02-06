"use strict";

module.exports = {
	js: [{
		source: "./src/index.js",
		target: "./dist/bundle.js",
		jsx: { pragma: "createElement" }
	}, {
		source: "./demo/demo.js",
		target: "./dist/demo.js",
		jsx: { pragma: "createElement" }
	}]
};
