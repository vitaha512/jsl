let str = "урок-3-был слишком легким";

// 1
str = str[0].toUpperCase() + str.slice(1);

// 2
let pos = 0;

while (true) {
  let foundPos = str.indexOf("-", pos);

  if (foundPos == -1) break;
  
  str = str.slice(0, foundPos) + " " + str.slice(foundPos + 1);
  pos = foundPos + 1;
}

console.log(str);

// 3
str = str.slice(0, str.indexOf("легким", 0) - 1);
str = str.slice(0, str.length - 2) + 'о';

alert( str );

// 4
let arr = [20, 33, 1, "Человек", 2, 3];
let sqrtElements = 0;

for (var i = 0; i < arr.length; i++) {
	if (!isNaN(arr[i])) {
		sqrtElements = sqrtElements + Math.pow(arr[i], 3);
	}
}

sqrtElements = Math.sqrt(sqrtElements);

console.log(sqrtElements);