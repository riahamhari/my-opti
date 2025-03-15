/**
Developed by: Riah
Test name: Test 164 - Payment plans on checkout (DESKTOP)
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-164', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
// (() => {
// 	'use strict';
// 	const popoverHtml = `<div
// 	class="popover fade bottom in"
// 	role="tooltip"
// 	id="opti_popover"
// 	>
// 	<div class="arrow"></div>
// 	<h3 class="popover-title" style="display: none;"></h3>
// 	<div class="popover-content">
// 		Spreading out your payments cost no more than paying the full amount, and is just as quick and easy:<br />
// 		- Use the same checkout as normal<br />
// 		- Pay by Visa, Mastercard or PayPal<br />
// 		- No ID, contracts or paperwork<br />
// 		- No fees, interest or penalties<br />
// 		- Instant course access<br /><br />
// 		Plus all payments made are eligible for our 60-day money back guarantee.<br /><br />
// 		Simply select your preferred payment frequency and amount when checking out, then enjoy immediate access to your
// 		course.
// 	</div>
// </div>`;
// 	const initPPFieldset = (ppSectionsArr) => {
// 		const ppOptionsHtml = ppSectionsArr[0].innerHTML;
// 		let ppTriggerHtml = '';
// 		if (ppSectionsArr.length > 1) {
// 			ppTriggerHtml = ppSectionsArr[1].innerHTML;
// 		}
// 		let ppTriggerSection = null,
// 			ppHeadingPrompt = null;
// 		if (ppTriggerHtml !== '') {
// 			ppTriggerSection = document.createElement('fieldset');
// 			ppTriggerSection.setAttribute('class', 'payment-plan-section-field');
// 			ppTriggerSection.innerHTML = ppTriggerHtml;
// 			const ppTriggerEl = ppTriggerSection.querySelector('#payment-plan-trigger');
// 			if (ppTriggerEl) ppTriggerEl.setAttribute('id', 'payment-plan-trigger-top');
// 			const leadEl = ppTriggerSection.querySelector('.lead');
// 			if (leadEl) leadEl.style.display = 'none';
// 			ppHeadingPrompt = ppTriggerSection.querySelector('.payment-heading__prompt');
// 			if (ppHeadingPrompt) {
// 				ppHeadingPrompt.style.textAlign = 'center';
// 				const aTag = ppHeadingPrompt.querySelector('a');
// 				if (aTag) {
// 					aTag.id = 'opti_pay_in_installments_btn';
// 					aTag.classList.add('opti_outline_button');
// 				}
// 			}
// 		}
// 		const ppOptionsSection = document.createElement('fieldset');
// 		ppOptionsSection.setAttribute('class', 'payment-plan-section-options');
// 		ppOptionsSection.innerHTML = ppOptionsHtml;
// 		const ppSectionEl = ppOptionsSection.querySelector('#payment-plan-section');
// 		if (ppSectionEl) ppSectionEl.setAttribute('id', 'payment-plan-section-top');
// 		const ppOptionsSectionLeadAtag: HTMLElement = ppOptionsSection.querySelector('.lead a');
// 		if (ppOptionsSectionLeadAtag) ppOptionsSectionLeadAtag.style.color = '#FFAE01';
// 		const paymentHeadingRevealEl: any = ppOptionsSection.querySelector('.payment-heading__prompt__reveal');
// 		if (paymentHeadingRevealEl) {
// 			paymentHeadingRevealEl.style = ''; // clear it in case it has the expand styles when an option is selected
// 			if (ppHeadingPrompt && ppHeadingPrompt.style.display !== 'none') paymentHeadingRevealEl.style.display = 'none';
// 		}
// 		const lis = ppOptionsSection.getElementsByTagName('li');
// 		for (var n = 0, m = lis.length; n < m; n++) {
// 			const li = lis[n],
// 				input = li.querySelector('input'),
// 				inputId = input.getAttribute('id'),
// 				label = li.querySelector('label');
// 			let inputIdNew = inputId + '-top';
// 			input.setAttribute('data-main-id', inputId);
// 			input.setAttribute('id', inputIdNew);
// 			input.classList.add('paymentplan-option-top');
// 			label.setAttribute('for', inputIdNew);
// 			input.addEventListener('click', function (e) {
// 				const id = input.getAttribute('data-main-id'),
// 					mainInput = document.getElementById(id);
// 				mainInput.click();
// 			});
// 		}
// 		const loginRegisterSection = document.querySelector('.login-register');
// 		if (loginRegisterSection) {
// 			const checkoutBoxNode = loginRegisterSection.parentNode;
// 			if (checkoutBoxNode) {
// 				if (ppTriggerSection) checkoutBoxNode.insertBefore(ppTriggerSection, loginRegisterSection);
// 				checkoutBoxNode.insertBefore(ppOptionsSection, loginRegisterSection);
// 			}
// 		}
// 		return ppOptionsSection;
// 	};
// 	const oldBtnHtml = `		<div class="opti_payment_plan_btn_wrapper">
// 											<button id="opti_pay_in_installments_btn" class="opti_outline_button">PAY IN WEEKLY OR MONTHLY INSTALMENTS</button>
// 											<button id="opti_pay_in_full_btn" class="opti_fill_button">PAY THE FULL AMOUNT TODAY</button>
// 										</div>`;
// 	const createPaymentPlanSection = (eightPaymentEl) => {
// 		const eightPaymentStr = eightPaymentEl.innerText;
// 		const priceStr = eightPaymentStr.split('USD')[0].trim();
// 		const paymentPlanSection = document.createElement('fieldset');
// 		paymentPlanSection.classList.add('opti_payment_plans');
// 		paymentPlanSection.innerHTML = `<div class="form-section-heading" id="opti_payment_plans__heading">
// 												<h3><span class="highlight">2.</span> Payment Plans</h3>
// 										</div>
// 										<div class="opti_split_payments_wrapper">
// 											<p id="opti_split_payments">8 easy payments of only $${!1}{priceStr}<br />Instant access. No fees. <a class="opti_popover_trigger">Learn More.</a>$${!1}{popoverHtml}</p>
// 										</div>
// 										`;
// 		// const payInFullBtn: HTMLElement = paymentPlanSection.querySelector('#opti_pay_in_full_btn');
// 		// payInFullBtn.onclick = () => {
// 		// 	notLoggedInOverlay.style.display = '';
// 		// };
// 		const popoverTrigger = paymentPlanSection.querySelector('.opti_popover_trigger');
// 		const popover = paymentPlanSection.querySelector('.popover');
// 		popoverTrigger.addEventListener('click', function (e) {
// 			e.preventDefault();
// 			popover.classList.toggle('opti_show_popover');
// 		});
// 		document.addEventListener('click', function (e: any) {
// 			if (!popover.contains(e.target) && !popoverTrigger.contains(e.target)) {
// 				popover.classList.remove('opti_show_popover');
// 			}
// 		});
// 		return paymentPlanSection;
// 	};
// 	const optiInit = (paymentInfoSpan: HTMLElement, paymentContainer: HTMLElement, eightPaymentEl: HTMLElement) => {
// 		paymentInfoSpan.innerText = '3.';
// 		const paymentOptionsField = document.querySelector('.payment-plan-section-field');
// 		const payInInstallmentsBtn = document.getElementById('opti_pay_in_installments_btn');
// 		const paymentOptions = document.querySelector('.payment-plan-section-options');
// 		const formSuccessIcon = document.querySelector('.login-register .svg-icon-checkout-login-green-tick-wrapper');
// 		const formContinueBtn: HTMLElement = document.querySelector(
// 			'#HPACheckoutEmailForm_HPACheckoutEmailForm .form-login-button'
// 		);
// 		const notLoggedInOverlay: HTMLElement = document.querySelector('.payment-methods__not-logged-in-overlay');
// 		payInInstallmentsBtn.insertAdjacentHTML(
// 			'afterend',
// 			`<a href="javascript:void(0)" id="opti_pay_in_full_btn" class="opti_fill_button">PAY THE FULL AMOUNT TODAY</a>`
// 		);
// 		const paymentPlanSection = createPaymentPlanSection(eightPaymentEl);
// 		paymentPlanSection.append(paymentOptionsField, paymentOptions);
// 		const payInFullBtn: HTMLElement = paymentPlanSection.querySelector('#opti_pay_in_full_btn');
// 		if (formContinueBtn) {
// 			formContinueBtn.onclick = () => {
// 				console.log('clicked form continue button');
// 				console.log(formSuccessIcon.classList.contains('hidden'));
// 				if (!formSuccessIcon.classList.contains('hidden')) {
// 					console.log('not hidden');
// 					notLoggedInOverlay.classList.add('opti_not-logged-in-overlay');
// 				}
// 			};
// 		}
// 		payInFullBtn.onclick = (e) => {
// 			e.preventDefault;
// 			notLoggedInOverlay.style.display = '';
// 			notLoggedInOverlay.classList.add('opti_hide_overlay');
// 		};
// 		payInInstallmentsBtn.onclick = () => {
// 			notLoggedInOverlay.style.display = '';
// 			notLoggedInOverlay.classList.add('opti_hide_overlay');
// 		};
// 		if (!formSuccessIcon.classList.contains('hidden')) {
// 			notLoggedInOverlay.classList.add('opti_not-logged-in-overlay');
// 		}
// 		paymentContainer.insertAdjacentElement('afterbegin', paymentPlanSection);
// 	};
// 	const myInterval = setInterval(() => {
// 		const paymentMethodSection = document.getElementById('payment-method-section');
// 		const ppSectionsArr = document.querySelectorAll<HTMLElement>('.payment-plan-section');
// 		const paymentInfoSpan: HTMLElement = paymentMethodSection?.querySelector('h3 span');
// 		const paymentContainer: HTMLElement = document.querySelector('.payment-methods');
// 		const eightPaymentEl: HTMLElement =
// 			document.querySelector('li:has(#PaymentPlan8-Monthly) .js-total') ||
// 			document.querySelector('li:has(#PaymentPlan8-Weekly) .js-total');
// 		const formSuccessIcon = document.querySelector('.login-register .svg-icon-checkout-login-green-tick-wrapper');
// 		const notLoggedInOverlay = document.querySelector('.payment-methods__not-logged-in-overlay');
// 		if (
// 			paymentMethodSection &&
// 			paymentInfoSpan &&
// 			paymentContainer &&
// 			eightPaymentEl &&
// 			notLoggedInOverlay &&
// 			ppSectionsArr
// 		) {
// 			clearInterval(myInterval);
// 			// initPPFieldset(ppSectionsArr);
// 			// optiInit(paymentInfoSpan, paymentContainer, eightPaymentEl);
// 			// const waitForTopSection = setInterval(() => {
// 			// 	const topPaymentPlanSection = document.querySelector('fieldset:has(#payment-plan-trigger-top)');
// 			// 	if (topPaymentPlanSection) {
// 			// 		clearInterval(waitForTopSection);
// 			// 		optiInit(paymentInfoSpan, paymentContainer, eightPaymentEl);
// 			// 	}
// 			// });
// 		}
// 	}, 300);
// 	setTimeout(function () {
// 		if (myInterval) {
// 			clearInterval(myInterval);
// 		}
// 	}, 15000);
// })();
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const ppFieldset = document.querySelector('.payment-plan-section-top');
        const paymentMethodSection = document.getElementById('payment-method-section');
        const paymentInfoSpan = paymentMethodSection === null || paymentMethodSection === void 0 ? void 0 : paymentMethodSection.querySelector('h3 span');
        const greenCheckIcon = document.querySelector('.svg-icon-checkout-login-green-tick-wrapper');
        const defaultOverlay = document.querySelector('.payment-methods__not-logged-in-overlay');
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
        const ppBtn = ppFieldset.querySelector('.pp-top-btn-wrapper');
        const payInInstalmentsBtn = ppBtn.querySelector('a');
        const greenCheckIcon = document.querySelector('.svg-icon-checkout-login-green-tick-wrapper');
        const defaultOverlay = document.querySelector('.payment-methods__not-logged-in-overlay');
        defaultOverlay.classList.add('opti_hide_overlay');
        payInInstalmentsBtn.classList.add('opti_outline_button');
        payInInstalmentsBtn.id = 'opti_pay_in_installments_btn';
        payInInstalmentsBtn.innerText = 'WEEKLY OR MONTHLY INSTALMENTS';
        paymentInfoSpan.innerText = '3.';
        ppFieldset.insertAdjacentHTML('afterbegin', ppFieldHeading);
        ppFieldset.insertAdjacentHTML('beforeend', `<div class="opti-payment-methods__not-logged-in-overlay" $${!1}{greenCheckIcon.classList.contains('hidden') ? 'style="display: block;"' : ''}></div>`);
        ppBtn.insertAdjacentHTML('afterend', `<div class="pp-top-btn-wrapper">
                                <a href="javascript:void(0)" id="opti_pay_in_full_btn" class="btn btn-primary pp-top-btn js-pp-top-btn opti_fill_button">
                                    PAY THE FULL AMOUNT TODAY
                                </a>
                            </div>`);
        const myOverlay = document.querySelector('.opti-payment-methods__not-logged-in-overlay');
        const payInFullBtn = document.querySelector('#opti_pay_in_full_btn');
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
                    const target = mutation.target;
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

