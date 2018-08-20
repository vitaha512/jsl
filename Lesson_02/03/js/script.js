// 1
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let weekFormat = "";

for (let i = 0; i < 7; i++) {
	if (i < 6) {
		weekFormat = weekFormat + week[i] + "\n";
	} else {
		weekFormat = weekFormat + week[i];
	};
};

alert( weekFormat );


// 2
let arr = ["1234", "94820", "395726", "50298", "70391", "22087", "3547"];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	let a = arr[i];
	if (a.charAt(0) === "3" || a.charAt(0) === "7") {
		console.log(a);
	};
};