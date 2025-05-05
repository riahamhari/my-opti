/**
Developed by: Riah
Test name: Test 171 - Payment Plans Checkout v3
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
		window.clarity('set', 'test-171', 'variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';

	let totalsFieldset,
		orderTotal,
		eightPaymentsEl,
		paymentPlanHeading: HTMLElement,
		paymentMethods: HTMLElement,
		overlay: HTMLElement,
		paymentPlanListEls: HTMLElement[],
		paymentPlanLink: HTMLElement;

	const myInterval = setInterval(() => {
		totalsFieldset = document.querySelector('fieldset:has(.order-totals)');
		orderTotal = document.getElementById('order-total');
		paymentPlanHeading = document.querySelector('#payment-method-section h3');
		paymentMethods = document.querySelector('.payment-methods .optionset');
		eightPaymentsEl =
			document.querySelector<HTMLElement>('[for="PaymentPlan8-Monthly-top"] .js-total') ||
			document.querySelector<HTMLElement>('[for="PaymentPlan8-Weekly-top"] .js-total');
		overlay = document.querySelector(
			'.GenericPaymentConfirmationPage .details-form fieldset.payment-methods .payment-methods__not-logged-in-overlay, .GenericPaymentConfirmationPage .details-form fieldset:not(:last-child).payment-methods .payment-methods__not-logged-in-overlay'
		);
		paymentPlanLink = document.querySelector(
			'.GenericPaymentConfirmationPage .details-form fieldset.payment-plan-section .payment-heading .payment-heading__prompt a'
		);
		paymentPlanListEls = [
			...document.querySelectorAll<HTMLElement>(
				'.GenericPaymentConfirmationPage .details-form fieldset.payment-plan-section .payment-heading ul li'
			),
		];
		if (
			totalsFieldset &&
			orderTotal &&
			eightPaymentsEl &&
			paymentPlanHeading &&
			paymentMethods &&
			overlay &&
			paymentPlanLink &&
			paymentPlanListEls
		) {
			clearInterval(myInterval);
			optiInit(totalsFieldset);

			const debouncePriceUpdate = debounce(
				() => {
					eightPaymentsEl =
						document.querySelector<HTMLElement>('[for="PaymentPlan8-Monthly-top"] .js-total') ||
						document.querySelector<HTMLElement>('[for="PaymentPlan8-Weekly-top"] .js-total');
					const priceStr = eightPaymentsEl.innerText.split('USD')[0].trim();
					const priceEl: HTMLElement = document.querySelector('#opti_split_payments_Wrapper span');
					priceEl.innerText = priceStr;
					const select = document.getElementById('opti_payment_plan_select');
					if (!select) {
						return;
					}
					[...select.querySelectorAll<HTMLElement>('option')].forEach((option) => {
						const value = option.getAttribute('value');
						const matchingPPListItem: HTMLInputElement = document.querySelector(
							`.GenericPaymentConfirmationPage .details-form fieldset.payment-plan-section .payment-heading ul li:has(input#${value})`
						);
						const paymentText = matchingPPListItem.innerText.replace('Make ', '');
						option.innerHTML = `${paymentText}`;
					});
				},
				300,
				false
			);

			const observer = new MutationObserver((mutationsList) => {
				for (const mutation of mutationsList) {
					if (mutation.type === 'childList' || mutation.type === 'characterData') {
						if (document.getElementById('opti_split_payments_Wrapper')) {
							debouncePriceUpdate();
						}
					}
				}
			});

			observer.observe(orderTotal, {
				childList: true,
				characterData: true,
				subtree: true,
			});
		}
	}, 300);

	const popoverHtml = `<div
	class="popover fade bottom in"
	role="tooltip"
	id="opti_popover"
	>
	<div class="arrow"></div>
				<h3 class="popover-title" style="display: none;"></h3>
				<div class="popover-content">
					Spreading out your payments cost no more than paying the full amount, and is just as quick and easy:<br />
					- Use the same checkout as normal<br />
					- Pay by Visa, Mastercard or PayPal<br />
					- No ID, contracts or paperwork<br />
					- No fees, interest or penalties<br />
					- Instant course access<br /><br />
					Plus all payments made are eligible for our 60-day money back guarantee.<br /><br />
					Simply select your preferred payment frequency and amount when checking out, then enjoy immediate access to your
					course.
				</div>
			</div>`;

	const optiInit = (totalsFieldset: HTMLElement) => {
		const priceStr = eightPaymentsEl.innerText.split('USD')[0].trim();

		const splitPayments = createSplitPayments(priceStr);

		totalsFieldset.insertAdjacentElement('afterend', splitPayments);

		// change payment plans text
		paymentPlanHeading.innerHTML = `
                    <span class="highlight">2.</span> Payment Info


                `;

		overlay.classList.remove('opti_hide_overlay');
		// add payment plan select element
		const paymentPlanSelect = createPPSelect();
		paymentMethods.after(paymentPlanSelect);
	};

	const createSplitPayments = (priceStr) => {
		const splitPayment = document.createElement('div');
		splitPayment.id = 'opti_split_payments_Wrapper';
		splitPayment.classList.add('col-sm-12', 'col-md-8', 'col-lg-6');
		splitPayment.innerHTML = `<div><h5>Payment Plan Available - </h5>
										<p id="opti_split_payments">or 8 easy payments of only <span>${priceStr}</span><br />Instant access. No fees.</p> <div class="opti_popover_trigger"><a>Learn More.</a>${popoverHtml}</div>
								</div>`;
		const trigger = splitPayment.querySelector('.opti_popover_trigger');
		const popover = trigger.querySelector('.popover');
		// Toggle the respective popover on trigger click
		trigger.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation(); // Prevent the document click from immediately closing it
			popover.classList.toggle('opti_show_popover');
		});

		// Hide popovers when clicking outside
		document.addEventListener('click', function (e: any) {
			if (!trigger.contains(e.target)) {
				popover.classList.remove('opti_show_popover');
			}
		});

		return splitPayment;
	};

	const createPPSelect = () => {
		const select = document.createElement('div');
		select.classList.add('opti-select-wrapper');
		// select.setAttribute('name', 'opti_payment_plan_select');
		// select.classList.add('custom-select');
		// select.id = 'opti_payment_plan_select';
		select.innerHTML = `<div class="row">
								<div class="col-md-8">
									<select class="custom-select" id="opti_payment_plan_select" name="opti_payment_plan_select">
										${paymentPlanListEls
											.map((listEl) => {
												const paymentText = listEl.innerText.replace('Make ', '');
												const value = listEl.querySelector('input').id;
												return `<option value="${value}">${paymentText}</option>`;
											})
											.join('')}
									</select>
								</div>
							</div>
							`;

		select.onchange = (e) => {
			const target: any = e.target;
			const value = target.value;
			paymentPlanLink.click();
			const matchingRadioInput: HTMLInputElement = document.querySelector(
				`.GenericPaymentConfirmationPage .details-form fieldset.payment-plan-section .payment-heading ul li input#${value}`
			);
			const matchingLabel: HTMLInputElement = document.querySelector(
				`.GenericPaymentConfirmationPage .details-form fieldset.payment-plan-section .payment-heading ul li:has(input#${value}) label`
			);
			matchingLabel.click();
			matchingRadioInput.checked = true;
		};

		return select;
	};

	const debounce = (func: Function, wait = 300, immediate = false) => {
		var timeout;
		return function () {
			var context = this,
				args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
