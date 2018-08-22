//1
let ul = document.querySelector(".menu");
let menuItem = document.getElementsByClassName("menu-item");
let menuItem5 = document.createElement("li");

ul.insertBefore(menuItem[2], menuItem[1]);
menuItem5.classList.add("menu-item");
menuItem5.textContent = "Пятый пункт";
ul.appendChild(menuItem5);

//2
let body = document.getElementsByTagName("body");

body[0].style.background = " url(img/apple_true.jpg) center no-repeat";

//3
let title = document.getElementById("title");

title.textContent = "Мы продаем только подлинную технику Apple";

//4
let column = document.getElementsByClassName("column");
let adv = document.getElementsByClassName("adv");

column[1].removeChild(adv[0]);

//5
let review = document.getElementById("prompt");

function takeReview() {
	setTimeout(function() {
		review.textContent = prompt("Ваше отношение к технике apple", "");
	}, 2000);
}
takeReview();