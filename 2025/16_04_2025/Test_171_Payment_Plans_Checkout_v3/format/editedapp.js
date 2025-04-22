/**
Developed by: Riah
Test name: Test 171 - Payment Plans Checkout v3
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-171', 'variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    let totalsFieldset, orderTotal, eightPaymentsEl;
    const myInterval = setInterval(() => {
        totalsFieldset = document.querySelector('fieldset:has(.order-totals)');
        orderTotal = document.getElementById('order-total');
        eightPaymentsEl =
            document.querySelector('[for="PaymentPlan8-Monthly-top"] .js-total') ||
                document.querySelector('[for="PaymentPlan8-Weekly-top"] .js-total');
        if (totalsFieldset && orderTotal && eightPaymentsEl) {
            clearInterval(myInterval);
            optiInit(totalsFieldset);
            const debouncePriceUpdate = debounce(() => {
                eightPaymentsEl =
                    document.querySelector('[for="PaymentPlan8-Monthly-top"] .js-total') ||
                        document.querySelector('[for="PaymentPlan8-Weekly-top"] .js-total');
                const priceStr = eightPaymentsEl.innerText.split('USD')[0].trim();
                const priceEl = document.querySelector('#opti_split_payments_Wrapper span');
                priceEl.innerText = priceStr;
            }, 300, false);
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
    const optiInit = (totalsFieldset) => {
        const priceStr = eightPaymentsEl.innerText.split('USD')[0].trim();
        const splitPayments = createSplitPayments(priceStr);
        totalsFieldset.insertAdjacentElement('afterend', splitPayments);
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
        document.addEventListener('click', function (e) {
            if (!trigger.contains(e.target)) {
                popover.classList.remove('opti_show_popover');
            }
        });
        return splitPayment;
    };
    const debounce = (func, wait = 300, immediate = false) => {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

