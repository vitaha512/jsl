let money,
		name,
		time,
		price;

function start() {
	money = prompt("Ваш бюджет?");
	while ((isNaN(money)) || (money == "") || (money == null)) {
		money = prompt("Ваш бюджет?");
	}
	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

start();

let mainList = {
	budget: money,
	storeName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a) === "string") && (typeof(a) !== null) && (a != "") && (a.length < 50)) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	}
}

chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log("Такого просто не может быть!");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
		} else if (time < 24) {
			console.log("Уже слишком поздно!");
			} else {
				console.log("В сутках только 24 часа!");
			}
}

workTime(time);

function dayBudget() {
	alert("Бюджет на 1 день: " + mainList.budget / 30);
}

dayBudget();

function makeDiscount() {
	if (mainList.discount == true) {
		price = price * 0.8;
	}
}

function hireEmployers() {
	for (let i = 1; i < 5; i++) {
		let name = prompt("Имя сотрудника");
		if ((typeof(name) === "string") && (typeof(name) !== null) && (name != "") && (name.length < 50)) {
			mainList.employers[i] = name;
		} else {
			i--;
		}
	}
}

hireEmployers();

console.log(mainList);