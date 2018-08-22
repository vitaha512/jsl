window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	// Функция скрытия контента табов
	function hideTabContents(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	// Скрытие всего контента табов, кроме первого
	hideTabContents(1);

	// Функция отображения контента таба
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContents(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	// Дилегирование события click на таб
	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

});