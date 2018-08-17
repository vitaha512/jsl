var num = 33721;
var str = String(num);
var res = 1;
var resPow;

for (var i = 0; i <= str.length - 1; i++) {
	res = res * str[i];
}

resPow = Math.pow(res, 3);

console.log( "Число: " + num + ".");
console.log( "Произведение цифр этого числа: " + res + ".");
console.log( "Возведение в степень 3: " + resPow + ".");