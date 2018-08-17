var enterBudget = +prompt("Ваш бюджет?", "10000");
var enterStoreName = prompt("Название вашего магазина?", "Название");
var mainList = {
	budget: enterBudget,
	storeName: enterStoreName,
	shopGoods: [],
	employers: {},
	open: false
}
var budgetOneDay = mainList.budget / 30;

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?", "Товар 1");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?", "Товар 2");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?", "Товар 3");

alert("Бюджет на 1 день: "+ budgetOneDay);

console.log(mainList);