let money,
		name,
		time,
		price;

function start() {
	money = prompt("Ваш бюджет?", "");
	while ((isNaN(money)) || (money == "") || (money == null)) {
		money = prompt("Ваш бюджет?", "");
	}
	name = prompt("Название вашего магазина?", "").toUpperCase();
	time = 19;
}

start();

let mainList = {
	budget: money,
	storeName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", "");
			if ((typeof(a) === "string") && (typeof(a) !== null) && (a != "") && (a.length < 50)) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Такого просто не может быть!");
		} else if (time > 8 && time < 20) {
			console.log("Время работать!");
			mainList.open = true;
			} else if (time < 24) {
				console.log("Уже слишком поздно!");
				} else {
					console.log("В сутках только 24 часа!");
				}
	},
	dayBudget: function dayBudget() {
		alert("Бюджет на 1 день: " + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = price * 0.8;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 5; i++) {
			let name = prompt("Имя сотрудника", "");
			if ((typeof(name) === "string") && (typeof(name) !== null) && (name != "") && (name.length < 50)) {
				mainList.employers[i] = name;
			} else {
				i--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");
		while ((typeof(items) != "string") || (items == "") || (items == null)) {
			items = prompt("Перечислите через запятую товары", "");
		}
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще ", ""));
		mainList.shopItems.sort();
	},
	showShopItems: function showShopItems() {
		let str = "У нас вы можете купить:";
		let num = 0;
		mainList.shopItems.forEach(function(item, i) {
			num = i + 1;
			str = str + "\n" + num + ". " + item;
		});
		alert( str );
	},
	showShop: function showShop() {
		console.log("Наш магазин включает в себя:");
		for (let key in mainList) {
			console.log(key + ", значение: " + mainList[key]);
		}
	}
}

console.log(mainList);