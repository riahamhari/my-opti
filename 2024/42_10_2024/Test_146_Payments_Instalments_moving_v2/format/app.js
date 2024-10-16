/**
Developed by: Riah
Test name: Test 146 - Payments Instalments moving v2
**/
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const paymentPlanSections = document.querySelectorAll('.payment-plan-section');
        const eightPaymentsListEl = document.querySelector('li:has(#PaymentPlan8-Weekly) .js-total');
        if (paymentPlanSections && paymentPlanSections.length && eightPaymentsListEl) {
            clearInterval(myInterval);
            initFunc(paymentPlanSections);
            const waitForTopSection = setInterval(() => {
                const topPaymentPlanSection = document.querySelector('fieldset:has(#payment-plan-trigger-top)');
                if (topPaymentPlanSection) {
                    clearInterval(waitForTopSection);
                    optiInit(eightPaymentsListEl, topPaymentPlanSection);
                }
            });
        }
    }, 300);
    const initFunc = (paymentPlanSections) => {
        const ppOptionsHtml = paymentPlanSections[0].innerHTML;
        let ppTriggerHtml = '';
        if (paymentPlanSections.length > 1) {
            ppTriggerHtml = paymentPlanSections[1].innerHTML;
        }
        let ppTriggerSection = null, ppHeadingPrompt = null;
        if (ppTriggerHtml !== '') {
            ppTriggerSection = document.createElement('fieldset');
            ppTriggerSection.setAttribute('class', 'payment-plan-section');
            ppTriggerSection.innerHTML = ppTriggerHtml;
            const ppTriggerEl = ppTriggerSection.querySelector('#payment-plan-trigger');
            if (ppTriggerEl)
                ppTriggerEl.setAttribute('id', 'payment-plan-trigger-top');
            const leadEl = ppTriggerSection.querySelector('.lead');
            if (leadEl)
                leadEl.style.display = 'none';
            ppHeadingPrompt = ppTriggerSection.querySelector('.payment-heading__prompt');
            if (ppHeadingPrompt) {
                ppHeadingPrompt.style.textAlign = 'center';
                const aTag = ppHeadingPrompt.querySelector('a');
                if (aTag) {
                    aTag.style.color = '#69b3e';
                    aTag.style.textDecoration = 'underline';
                }
            }
        }
        const ppOptionsSection = document.createElement('fieldset');
        ppOptionsSection.setAttribute('class', 'payment-plan-section');
        ppOptionsSection.innerHTML = ppOptionsHtml;
        const ppSectionEl = ppOptionsSection.querySelector('#payment-plan-section');
        if (ppSectionEl)
            ppSectionEl.setAttribute('id', 'payment-plan-section-top');
        const ppOptionsSectionLeadAtag = ppOptionsSection.querySelector('.lead a');
        if (ppOptionsSectionLeadAtag)
            ppOptionsSectionLeadAtag.style.color = '#FFAE01';
        const paymentHeadingRevealEl = ppOptionsSection.querySelector('.payment-heading__prompt__reveal');
        if (paymentHeadingRevealEl) {
            paymentHeadingRevealEl.style = ''; // clear it in case it has the expand styles when an option is selected
            if (ppHeadingPrompt && ppHeadingPrompt.style.display !== 'none')
                paymentHeadingRevealEl.style.display = 'none';
        }
        const lis = ppOptionsSection.getElementsByTagName('li');
        for (var n = 0, m = lis.length; n < m; n++) {
            const li = lis[n], input = li.querySelector('input'), inputId = input.getAttribute('id'), label = li.querySelector('label');
            let inputIdNew = inputId + '-top';
            input.setAttribute('data-main-id', inputId);
            input.setAttribute('id', inputIdNew);
            input.classList.add('paymentplan-option-top');
            label.setAttribute('for', inputIdNew);
            input.addEventListener('click', function (e) {
                const id = input.getAttribute('data-main-id'), mainInput = document.getElementById(id);
                mainInput.click();
            });
        }
        const loginRegisterSection = document.querySelector('.login-register');
        if (loginRegisterSection) {
            const checkoutBoxNode = loginRegisterSection.parentNode;
            if (checkoutBoxNode) {
                if (ppTriggerSection)
                    checkoutBoxNode.insertBefore(ppTriggerSection, loginRegisterSection);
                checkoutBoxNode.insertBefore(ppOptionsSection, loginRegisterSection);
            }
        }
    };
    const optiInit = (eightPaymentsListEl, topPaymentPlanSection) => {
        const priceStr = eightPaymentsListEl.innerText.split('USD')[0].trim();
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
        const splitPaymentsHtml = `<div class="opti_split_payments_Wrapper">
			<p id="opti_split_payments">or 8 easy payments of only ${priceStr}<br />Instant access. No fees. <a class="opti_popover_trigger">Learn More.</a>${popoverHtml}</p>
		
		</div>`;
        topPaymentPlanSection.insertAdjacentHTML('beforebegin', splitPaymentsHtml);
        // popover fucntionality
        const waitForTrigger = setInterval(() => {
            const popoverTrigger = document.querySelector('.opti_popover_trigger');
            const popover = document.getElementById('opti_popover');
            if (popoverTrigger && popover) {
                clearInterval(waitForTrigger);
                popoverTrigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    popover.classList.toggle('opti_show_popover');
                });
                document.addEventListener('click', function (e) {
                    if (!popover.contains(e.target) && !popoverTrigger.contains(e.target)) {
                        popover.classList.remove('opti_show_popover');
                    }
                });
            }
        }, 300);
        // put els in a grid
        const splitPaymentsWrapper = document.querySelector('.opti_split_payments_Wrapper');
        const paymentPlanCtaContainer = document.querySelector('fieldset:has(#payment-plan-trigger-top)');
        const topFormSection = document.querySelector('fieldset:has(#payment-plan-section-top)');
        const loginRegisterSection = document.querySelector('.login-register');
        const firstFieldset = document.querySelector('.details-form fieldset');
        const gridContainer = document.createElement('div');
        gridContainer.classList.add('opti_grid_container');
        firstFieldset.insertAdjacentElement('afterend', gridContainer);
        gridContainer.append(splitPaymentsWrapper, paymentPlanCtaContainer, topFormSection, loginRegisterSection);
        const newCta = paymentPlanCtaContainer.querySelector('a');
        const paymentPlanDefaultSection = document.querySelector('fieldset:has(#payment-plan-section)');
        newCta.onclick = () => {
            paymentPlanDefaultSection.classList.add('opti_hide_default_pp_section');
        };
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
