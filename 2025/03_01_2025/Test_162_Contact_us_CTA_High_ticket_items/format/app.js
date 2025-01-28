/**
Developed by: Riah
Test name: Test 162 - Contact us CTA - High ticket items
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-162', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const popUpBtn = document.getElementById('contact-us-popup-btn');
        const sendMsgBtn = document.querySelector('#contact-us-popup-wrapper button');
        const priceBlock = document.querySelector('.tittleAndPriceBlock__points');
        const priceWrapper = document.querySelector('.price-wrapper');
        if (popUpBtn && sendMsgBtn && priceBlock && priceWrapper) {
            clearInterval(myInterval);
            optiInit(popUpBtn, sendMsgBtn, priceBlock, priceWrapper);
        }
    }, 300);
    const optiInit = (popUpBtn, sendMsgBtn, priceBlock, priceWrapper) => {
        const contactUs = createContactUsEl(popUpBtn, sendMsgBtn, 'opti-contact-us-cta');
        const mobileContactUs = createContactUsEl(popUpBtn, sendMsgBtn, 'opti-contact-us-cta-mobile');
        priceBlock.append(contactUs);
        priceWrapper.append(mobileContactUs);
    };
    const createContactUsEl = (popUpBtn, sendMsgBtn, className) => {
        const contactUs = document.createElement('div');
        contactUs.classList.add(className);
        contactUs.innerHTML = `
				<div class="opti-contact-us-cta__content">
					<p>Need Help? Have a Question about <br> VIP?</p>
					<a href="javascript:void(0)">Click here to contact us</a>
				</div>
			
		`;
        const contactUsBtn = contactUs.querySelector('a');
        contactUsBtn.onclick = () => {
            popUpBtn.click();
            sendMsgBtn.click();
        };
        return contactUs;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
