/**
Developed by: Riah
Test name: Test 156 - Winning CTA Tests - VIP
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-156', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const mainCtaCol = document.querySelector('.sidebar:has(.btn-wrapper)');
        const mainBtnWrapper = document.querySelector('.sidebar .btn-wrapper');
        const mainCtaDetails = document.querySelector('.sidebar .btn-wrapper span');
        const priceWrapper = document.querySelector('.price-wrapper');
        const courseTitle = document.querySelector('.starter-title h2');
        if (mainCtaDetails && mainBtnWrapper && mainCtaDetails && priceWrapper && courseTitle) {
            clearInterval(myInterval);
            optiInit(priceWrapper, mainCtaCol);
            updateToolTipPosition();
            const debouncedFunction = debounce(updateToolTipPosition, 300, false);
            window.addEventListener('resize', debouncedFunction);
        }
    }, 300);
    const reviewsCont = ` <div class="rating">4.93</div>
        <div class="stars">
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
        </div>
        <div class="total">(170)</div>
        <div class="read"><a href="/reviews">Read reviews</a></div>`;
    const paymentIconsCont = ` <img src="/resources/themes/base/production/images/payment-icons.png">`;
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
    const optiInit = (priceWrapper, mainCtaCol) => {
        const btnWrapper = mainCtaCol.querySelector('.btn-wrapper');
        const eightPaymentsStr = btnWrapper.querySelector('span').innerText;
        const titleAndPriceBlock = document.querySelector('.tittleAndPriceBlock__points');
        const courseTitle = document.querySelector('.starter-title h2');
        // remove default sticky class from btn wrapper
        btnWrapper.classList.remove('btn-sticky');
        priceWrapper.id = 'opti_price_wrapper';
        const newBtn = btnWrapper.cloneNode(true);
        const eightPaymentsCont = `
									<a class="line1 js_paymentPlanPurchase" href="/vip-package/#">${eightPaymentsStr}</a>
									<a class="line2 js_paymentPlanPurchase" href="/vip-package/#">Instant access. Easy checkout. No fees.</a>
									<span
										class="popover-trigger show-button opti_popover_trigger"
										data-content="
								Spreading out your payments cost no more than paying the full amount, and is just as quick and easy:<br>
								- Use the same checkout as normal<br>
								- Pay by Visa, Mastercard or PayPal<br>
								- No ID, contracts or paperwork<br>
								- No fees, interest or penalties<br>
								- Instant course access<br><br>
								Plus all payments made are eligible for our 60-day money back guarantee.<br><br>
								Simply select your preferred payment frequency and amount when checking out, then enjoy immediate access to your course.
								"
										data-html="true"
										data-placement="bottom"
										data-trigger="click"
										data-original-title=""
										title=""
										>Learn more</span
									>
										${popoverHtml}
								`;
        const eightPaymentsEl = createElement('span', 'titleAndPriceBlock__paymentPlanLink', eightPaymentsCont + popoverHtml);
        // add event listners to tooltip
        addPopoverHandlers(eightPaymentsEl);
        const paymentIcons = createElement('div', 'payment-icons', paymentIconsCont);
        const reviewsEl = createElement('div', 'reviews-rating v2', reviewsCont);
        // insert reviews
        courseTitle.after(reviewsEl);
        // insert mobile 'or'
        priceWrapper.insertAdjacentHTML('beforeend', `<div class="titleAndPriceBlock__mobileOr">-OR-</div>`);
        // insert eight payments text and new mobile button
        priceWrapper.append(eightPaymentsEl, newBtn);
        // insert payment icons in sidebar
        btnWrapper.after(paymentIcons);
        titleAndPriceBlock.insertAdjacentHTML('afterbegin', `<h5 class="paymentPlan">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="228 121.3 504 317.3" class="svg-payment"><path d="M694.7 121.3H265.3c-20.5 0-37.3 16.8-37.3 37.3v242.7c0 20.5 16.8 37.3 37.3 37.3h429.3c20.5 0 37.3-16.8 37.3-37.3V158.7c.1-20.6-16.7-37.4-37.2-37.4zm0 37.4V196H265.3v-37.3h429.4zM265.3 401.3V270.7h429.3v130.7H265.3z"></path><path d="M321.3 308h205.3v37.3H321.3z"></path></svg>

            Course Access for Life
        </h5>`);
        const buttonBottomOffset = newBtn.getBoundingClientRect().bottom + window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.innerWidth >= 768) {
                return;
            }
            // Check if the button is completely out of view
            if (window.scrollY >= buttonBottomOffset + 80) {
                newBtn.classList.add('btn-sticky');
            }
            else {
                newBtn.classList.remove('btn-sticky');
            }
        });
    };
    const addPopoverHandlers = (eightPaymentsEl) => {
        const popoverTrigger = eightPaymentsEl.querySelector('.opti_popover_trigger');
        const popover = eightPaymentsEl.querySelector('#opti_popover');
        popoverTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            popover.classList.toggle('opti_show_popover');
        });
        document.addEventListener('click', function (e) {
            if (!popover.contains(e.target) && !popoverTrigger.contains(e.target)) {
                popover.classList.remove('opti_show_popover');
            }
        });
    };
    const updateToolTipPosition = () => {
        const relativeEl = document.querySelector('#opti_price_wrapper .titleAndPriceBlock__paymentPlanLink');
        const relativeElHeight = relativeEl.offsetHeight;
        const popover = document.querySelector('#opti_price_wrapper #opti_popover');
        popover.style.top = `${relativeElHeight + 4}px`;
    };
    const createElement = (element, classes, htmlContent) => {
        if (!element)
            return;
        console.log(classes);
        const el = document.createElement(element);
        // Split the classes if necessary and spread into classList.add
        if (classes) {
            el.classList.add(...classes.split(' '));
        }
        el.innerHTML = htmlContent;
        return el;
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

