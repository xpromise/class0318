import "./index.css";

console.log(process.env.NODE_ENV);
console.log("hello cache~~~~~");

import(/* webpackChunkName: "add" */"./add").then(({ default: add }) => {
	console.log(add(1, 1));
});
