/**
Developed by: Riah
Test name: Test 161 New user discount - Modal vs Banner V1
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-161', 'Variation1');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const homepage = document.querySelector('.HomePage ');
        const headerACCBanner = $('.header-acc-banner');
        if (homepage &&
            (window === null || window === void 0 ? void 0 : window.globalNmdApplyDiscount) &&
            (window === null || window === void 0 ? void 0 : window.globalNmdShowBanner) &&
            headerACCBanner &&
            headerACCBanner.length) {
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
    const optiInit = (headerACCBanner) => {
        const couponCode = headerACCBanner.data('acc'), days = 0.25, cookieName = 'HPAAutoCouponCode', currentCookieValue = hpaTestGetCookie(cookieName);
        if (!currentCookieValue) {
            hpaTestSetCookie(cookieName, couponCode, days);
        }
        // Add your code to close the modal here
        const modal = createModal();
        document.body.appendChild(modal);
    };
    const createModal = () => {
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
						</div>
						<div class="opti_modal_img_container"><img src=${imgUrl}></div>
					</div>
				</div>
			</div>
		</div>`;
        const modalClose = modal.querySelector('.info-modal-cross');
        const modalMain = modal.querySelector('.modal');
        const ctaBtn = modal.querySelector('.opti_modal_form_content_cta button');
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Get the email value
            const emailInputEl = modal.querySelector('#email');
            const banner = document.querySelector('.header-acc-banner');
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
    const handleEmailInput = (emailInput) => {
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
            }
            else {
                console.error('Error sending email:', response.statusText);
            }
        })
            .catch((error) => console.error('Network error:', error));
    };
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
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
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
export {};
