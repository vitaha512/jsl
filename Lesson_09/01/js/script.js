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

	let deadLine = '2018-08-25';

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
});