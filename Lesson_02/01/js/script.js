let enterBudget = +prompt("Ваш бюджет?");
let enterStoreName = prompt("Название вашего магазина?");
let mainList = {
	budget: enterBudget,
	storeName: enterStoreName,
	shopGoods: [],
	employers: {},
	open: false
}
let time = 19;
let budgetOneDay = mainList.budget / 30;

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a) === "string") && (typeof(a) !== null) && (a != "") && (a.length < 50)) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
	} else {
		console.log("Неверно! Повторите!");
		i--;
	};
};

// let i = 5;
// Способ 1
// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a) === "string") && (typeof(a) !== null) && (a != "") && (a.length < 50)) {
// 		console.log("Все верно!");
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		console.log("Неверно! Повторите!");
// 		i--;
// 	};
// 	i++;
// };

// Способ 2
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a) === "string") && (typeof(a) !== null) && (a != "") && (a.length < 50)) {
// 		console.log("Все верно!");
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		console.log("Неверно! Повторите!");
// 		i--;
// 	};
// 	i++;
// } while (i < 5);

if (time < 0) {
	console.log("Такого просто не может быть!");
} else if (time > 8 && time < 20) {
	console.log("Время работать!");
	} else if (time < 24) {
		console.log("Уже слишком поздно!");
		} else {
			console.log("В сутках только 24 часа!");
		};

alert("Бюджет на 1 день: " + budgetOneDay);

console.log(mainList);