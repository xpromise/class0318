export function add(x, y) {
	return x + y;
}

export function count(x, y) {
	return x - y;
}

export function mul(x, y) {
	return x * y;
}

// 防抖
export function debounce(fn, time = 300) {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		const me = this;
		timer = setTimeout(function () {
			fn.apply(me, args);
		}, time);
	};
}
