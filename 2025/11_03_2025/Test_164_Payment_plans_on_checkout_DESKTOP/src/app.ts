/**
Developed by: Riah
Test name: Test 164 - Payment plans on checkout (DESKTOP)
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
	}
}

const tagInterval = setInterval(() => {
	if (typeof window?.clarity === 'function') {
		window.clarity('set', 'test-164', 'Variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	const myInterval = setInterval(() => {
		const ppFieldset: HTMLElement = document.querySelector('.payment-plan-section-top');
		const paymentMethodSection = document.getElementById('payment-method-section');
		const paymentInfoSpan: HTMLElement = paymentMethodSection?.querySelector('h3 span');
		const greenCheckIcon: HTMLElement = document.querySelector('.svg-icon-checkout-login-green-tick-wrapper');
		const defaultOverlay: HTMLElement = document.querySelector('.payment-methods__not-logged-in-overlay');
		if (ppFieldset && paymentMethodSection && paymentInfoSpan && greenCheckIcon && defaultOverlay) {
			clearInterval(myInterval);
			optiInit(paymentInfoSpan, ppFieldset);
		}
	}, 300);

	const ppFieldHeading = `<div class="form-section-heading">
                <h3>
                    <span class="highlight">2.</span> Payment Plans
                </h3>
            </div>`;

	const optiInit = (paymentInfoSpan, ppFieldset) => {
		if (document.getElementById('opti_pay_in_installments_btn')) return;
		const ppBtn = ppFieldset.querySelector('.pp-top-btn-wrapper');
		const payInInstalmentsBtn = ppBtn.querySelector('a');
		const greenCheckIcon: HTMLElement = document.querySelector('.svg-icon-checkout-login-green-tick-wrapper');
		const defaultOverlay: HTMLElement = document.querySelector('.payment-methods__not-logged-in-overlay');
		defaultOverlay.classList.add('opti_hide_overlay');

		payInInstalmentsBtn.classList.add('opti_outline_button');
		payInInstalmentsBtn.id = 'opti_pay_in_installments_btn';

		payInInstalmentsBtn.innerText = 'WEEKLY OR MONTHLY INSTALMENTS';
		paymentInfoSpan.innerText = '3.';

		ppFieldset.insertAdjacentHTML('afterbegin', ppFieldHeading);
		ppFieldset.insertAdjacentHTML(
			'beforeend',
			`<div class="opti-payment-methods__not-logged-in-overlay" ${
				greenCheckIcon.classList.contains('hidden') ? 'style="display: block;"' : ''
			}></div>`
		);
		ppBtn.insertAdjacentHTML(
			'afterend',
			`<div class="pp-top-btn-wrapper">
                                <a href="javascript:void(0)" id="opti_pay_in_full_btn" class="btn btn-primary pp-top-btn js-pp-top-btn opti_fill_button">
                                    PAY THE FULL AMOUNT TODAY
                                </a>
                            </div>`
		);

		const myOverlay: HTMLElement = document.querySelector('.opti-payment-methods__not-logged-in-overlay');

		const payInFullBtn: HTMLElement = document.querySelector('#opti_pay_in_full_btn');

		payInInstalmentsBtn.onclick = () => {
			payInFullBtn.style.display = 'none';
			defaultOverlay.classList.remove('opti_hide_overlay');
		};

		payInFullBtn.onclick = () => {
			defaultOverlay.classList.remove('opti_hide_overlay');
		};

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'class') {
					const target = mutation.target as HTMLElement;
					if (!target.classList.contains('hidden')) {
						myOverlay.style.display = '';
					}
				}
			});
		});

		observer.observe(greenCheckIcon, { attributes: true, attributeFilter: ['class'] });
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
