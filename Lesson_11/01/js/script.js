window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContents(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContents(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContents(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

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

	let deadLine = '2018-09-01';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( (t/(1000*60*60)) );

		if (t > 0) {
			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			}
		} else {
			return {
				'total': 0,
				'hours': '00',
				'minutes': '00',
				'seconds': '00'
			}
		};		
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);

			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			};
		};

		updateClock();

		let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadLine);


	let menu = document.querySelectorAll('a[href^="#"]'),
			V = 0.5; // скорость прокрутки
	for (let i = 0; i < menu.length; i++) {
	    menu[i].addEventListener('click', function(event) {
	        event.preventDefault();
	        let w = window.pageYOffset,
	            hash = this.href.replace(/[^#]*(.*)/, '$1');
	        let t = document.querySelector(hash).getBoundingClientRect().top,
	            start = null;
	        requestAnimationFrame(step);
	        function step(time) {
	            if (start === null) start = time;
	            let progress = time - start,
	                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
	            window.scrollTo(0,r);
	            if (r != w + t) {
	                requestAnimationFrame(step);
	            } else {
	                location.hash = hash;
	            }
	        }
	    });
	};

	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			descrBtn = document.getElementsByClassName('description-btn');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		if (more.classList.contains('more-splash')) {
			more.classList.remove('more-splash');
		};
		for (var i = 0; i < descrBtn.length; i++) {
			if (descrBtn[i].classList.contains('more-splash')) {
				descrBtn[i].classList.remove('more-splash');
			}
		};
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	});

	for (var i = 0; i < descrBtn.length; i++) {
		descrBtn[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	};

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
			input = form.getElementsByTagName("input"),
			statusMessage = document.createElement("div");
	statusMessage.classList.add("status");

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		};
		for (let i = 0; i < input.length; i++) {
			input[i].value = "";
			// Очищаем поля ввода
		};
	});

	let contactForm = document.getElementById("form"),
			contactFormInput = contactForm.getElementsByTagName("input"),
			statusMessage_2 = document.createElement("div");
	statusMessage_2.classList.add("status");

	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage_2);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(contactForm);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage_2.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage_2.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					statusMessage_2.innerHTML = message.failure;
				}
			}
		};
		for (let i = 0; i < contactFormInput.length; i++) {
			contactFormInput[i].value = "";
			// Очищаем поля ввода
		};
	});

});