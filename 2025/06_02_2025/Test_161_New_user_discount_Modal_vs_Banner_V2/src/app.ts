/**
Developed by: Riah
Test name: Test 161 New user discount - Modal vs Banner V2
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
		globalNmdApplyDiscount?: boolean;
		globalNmdShowBanner?: boolean;
	}
}

const tagInterval = setInterval(() => {
	if (typeof window?.clarity === 'function') {
		window.clarity('set', 'test-161', 'Variation2');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	const myInterval = setInterval(() => {
		const homepage = document.querySelector('.HomePage');
		const headerACCBanner = $('.header-acc-banner');
		if (
			homepage &&
			window?.globalNmdApplyDiscount &&
			window?.globalNmdShowBanner &&
			headerACCBanner &&
			headerACCBanner.length
		) {
			clearInterval(myInterval);
			optiInit(headerACCBanner);
		}
	}, 300);

	const imgUrl = `https://www.hpacademy.com/resources/themes/base/production/images/hp-banner-bg.jpg`;
	const hpaLogo = `<img src="https://www.hpacademy.com/resources/themes/base/production/images/logo.png">`;
	const joinStudentsContent = `<div class="col-xs-12 join-students-content">
                    <div class="hp-banner-students-img">
                        <img src="/resources/themes/base/production/images/hp-banner-students.png" alt="Bannet students">
                    </div>
                    <div class="hp-banner-text-and-stars">
                        <div class="text">Join <span>188,565</span> other car enthusiasts
						            <div class="stars">
                            <img src="/resources/themes/base/production/images/hp-banner-stars.png" alt="Banner stars">
                        </div>
						</div>
            
                    </div>
                </div>`;

	const countdown = `	<div class="opti_timer">
							<div class="opti_timer_inner">
								<div class="opti_timer_inner_content">
									<div class="opti_timer_inner_content_text">
										<h5>Offer ends in:</h5>
									</div>
									<div class="opti_timer_inner_content_timer">
										<div class="opti_timer_units opti_days">
											<div class="opti_timer_units_number opti_days_number">00</div>
											<div class="opti_timer_units_text opti_days_text">DAYS</div>
										</div>
										<div class="opti_timer_units opti_hours">
											<div class="opti_timer_units_number opti_hours_number">00</div>
											<div class="opti_timer_units_text opti_hours_text">HOURS</div>
										</div>
										<div class="opti_timer_units opti_minutes">
											<div class="opti_timer_units_number opti_minutes_number">00</div>
											<div class="opti_timer_units_text opti_minutes_text">MINUTES</div>
										</div>
										<div class="opti_timer_units opti_seconds">
											<div class="opti_timer_units_number opti_seconds_number">00</div>
											<div class="opti_timer_units_text opti_seconds_text">SECONDS</div>
										</div>
									</div>
								</div>
							</div>
						</div>`;

	const optiInit = (headerACCBanner) => {
		const couponCode = headerACCBanner.data('acc'),
			days = 0.25,
			cookieName = 'HPAAutoCouponCode',
			currentCookieValue = hpaTestGetCookie(cookieName);

		if (!currentCookieValue) {
			hpaTestSetCookie(cookieName, couponCode, days);
		}

		// Add your code to close the modal here
		const modal = createModal();
		document.body.appendChild(modal);

		initializeCountdownTimer();
	};

	const createModal = (): HTMLElement => {
		const modal = document.createElement('div');
		modal.id = 'opti_new_discount_modal_parent';

		modal.innerHTML = `
		<div
			class="modal fade info-modal in"
			id="opti_discount_modal"
			tabindex="-1"
			role="dialog"
			aria-hidden="false"
			style="display: flex;">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<span class="info-modal-cross" data-dismiss="modal">×</span>
						<div class="opti_modal_form_container">
							<div class="opti_modal_form_header">
								<div class="opti_modal_form_header_logo">${hpaLogo}</div>
								<div class="opti_modal_form_header_text">
									<h2 class="info-modal-heading">Get 30% OFF</h2>
									<p class="info-modal-bottomtext">
										Your First Course Enrollment - New Members Only
									</p>
								</div>
							</div>
							<div class="opti_modal_form_content">
								<form action="/contact-us/ContactForm/" method="post" enctype="application/x-www-form-urlencoded">
									<label for="email">Email</label>
									<input type="email" id="email" name="email">
								</form>
								<div class="opti_modal_form_content_cta">
									<button type="submit" class="btn btn-primary btn-large">ACTIVATE 30% OFF</button>
								</div>
								${joinStudentsContent}
								<div class="opti_modal_no_thanks">
									<a href="javascript:void(0)">No thanks, I want to pay full price.</a>
								</div>
							</div>
							${countdown}
						</div>
						<div class="opti_modal_img_container"><img src=${imgUrl}></div>
					</div>
				</div>
			</div>
		</div>`;

		const modalClose = modal.querySelector<HTMLElement>('.info-modal-cross');
		const modalMain = modal.querySelector<HTMLElement>('.modal');
		const ctaBtn = modal.querySelector<HTMLElement>('.opti_modal_form_content_cta button');

		ctaBtn.addEventListener('click', (e) => {
			e.preventDefault();

			// Get the email value
			const emailInputEl = modal.querySelector<HTMLInputElement>('#email');
			const banner: HTMLElement = document.querySelector('.header-acc-banner');
			const emailInput = emailInputEl.value.trim();

			handleEmailInput(emailInput);
			banner.style.display = 'block';
			handleModalClose(modalMain);
		});
		modalClose.addEventListener('click', () => {
			handleModalClose(modalMain);
		});

		return modal;
	};

	const handleEmailInput = (emailInput: string) => {
		// Validate email input
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(emailInput)) {
			alert('Please enter a valid email address.');
			return;
		}

		fetch('https://hooks.zapier.com/hooks/catch/4987095/2w9pdlt/', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: emailInput }),
		})
			.then((response) => {
				if (response.ok) {
					console.log('Email sent successfully!');
				} else {
					console.error('Error sending email:', response.statusText);
				}
			})
			.catch((error) => console.error('Network error:', error));
	};

	// Countdown Timer
	function initializeCountdownTimer() {
		const currentDate = new Date();

		// Calculate the value to add (0.25 days in milliseconds)
		const timeToAdd = 0.25 * 24 * 60 * 60 * 1000;

		// Add the value to the current date
		const targetDate = new Date(currentDate.getTime() + timeToAdd).getTime();

		// Select timer elements
		const daysElement = document.querySelector('.opti_days_number') as HTMLElement;
		const hoursElement = document.querySelector('.opti_hours_number') as HTMLElement;
		const minutesElement = document.querySelector('.opti_minutes_number') as HTMLElement;
		const secondsElement = document.querySelector('.opti_seconds_number') as HTMLElement;

		function updateTimer() {
			const currentTime = new Date().getTime();
			const timeDifference = targetDate - currentTime;

			if (timeDifference <= 0) {
				// Timer has ended
				daysElement.textContent = '00';
				hoursElement.textContent = '00';
				minutesElement.textContent = '00';
				secondsElement.textContent = '00';
				clearInterval(timerInterval);
				return;
			}

			// Calculate time components
			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

			// Update the HTML content
			daysElement.textContent = days.toString().padStart(1, '0');
			hoursElement.textContent = hours.toString().padStart(2, '0');
			minutesElement.textContent = minutes.toString().padStart(2, '0');
			secondsElement.textContent = seconds.toString().padStart(2, '0');
		}

		// Start the timer with a 1-second interval
		const timerInterval = setInterval(updateTimer, 1000);

		// Initial update to prevent delay
		updateTimer();
	}

	function hpaTestSetCookie(name, value, days) {
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = '; expires=' + date.toUTCString();
		}

		document.cookie = name + '=' + (value || '') + expires + '; path=/';
	}

	function hpaTestGetCookie(name) {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}

		return null;
	}

	function hpaTestDelCookie(name) {
		document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	const handleModalClose = (modalMain) => {
		modalMain.style.display = 'none';
		modalMain.classList.remove('in');
		document.body.classList.remove('.modal-open');
	};
	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
