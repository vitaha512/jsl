let arr = [];
let arrCount = 0;
let arrSum = 0;

arrCount = prompt("Сколько массивов включить во внутрь массива arr?", "");
while ((isNaN(arrCount)) || (arrCount == "") || (arrCount == null) || (arrCount == 0)) {
	arrCount = prompt("Сколько массивов включить во внутрь массива arr?", "");
}

for (let i = 1; i <= arrCount; i++) {
	let newArr = [];
	let sum = 0;

	for (let j = 0; j < 5; j++) {
		let num = parseInt(Math.random() * (11 - 1) + 1);
		newArr.push(num);
		sum += num;
	}

	arr.push(newArr);
	arrSum += sum;

	console.log('Создан массив ' + newArr);
	console.log('Сумма элементов ' + sum);
}

console.log('Создан массив ' + arr);
console.log('Сумма элементов ' + arrSum);