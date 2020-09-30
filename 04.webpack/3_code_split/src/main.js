// import { add, debounce } from "./lodash";
import $ from "jquery";

console.log($);
// console.log(add(1, 1));

// const newFn = debounce(() => {
// 	console.log("debounce111");
// });

// newFn();
// newFn();

document.getElementById('btn').onclick = function () {
	import(/* webpackChunkName: "lodash" */"./lodash").then(({ add, debounce }) => {
		console.log(add(1, 1));
	
		const newFn = debounce(() => {
			console.log("debounce111");
		});
	
		newFn();
		newFn();
	});
}
