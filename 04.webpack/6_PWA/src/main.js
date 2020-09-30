import add from "./add";

import "./index.css";

console.log(process.env.NODE_ENV);
console.log("hello hmr");

console.log(add(1, 3));

// 开启HMR
if (module.hot) {
	module.hot.accept("./add", function () {});
}

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then((registration) => {
				console.log("SW registered: ", registration);
			})
			.catch((registrationError) => {
				console.log("SW registration failed: ", registrationError);
			});
	});
}
