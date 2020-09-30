import { add, debounce } from "./lodash";
import $ from 'jquery'

console.log(add(1, 1));
console.log($);

const newFn = debounce(() => {
	console.log("debounce111");
});

newFn();
newFn();
