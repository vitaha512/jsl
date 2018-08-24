let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + 
		this.value);
}

showUser.call(age, 'Smith', 'John');
showUser.apply(age, ['Smith', 'John']);

let bindshowUser = showUser.bind(age);
bindshowUser('Smith', 'John');
