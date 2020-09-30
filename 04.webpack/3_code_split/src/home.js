import { count, debounce } from "./lodash";
import $ from 'jquery'

console.log(count(1, 1));
console.log($);

const newFn = debounce(() => {
	console.log("debounce222");
});

newFn();
newFn();
