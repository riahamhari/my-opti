/**
Developed by: Riah
Test name: Test 152  - VIP Discount Modal v1
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-152', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        var _a;
        const gtmMemberData = window === null || window === void 0 ? void 0 : window.gtmMemberData;
        const ap3c = window === null || window === void 0 ? void 0 : window.ap3c;
        const customerFirstName = (_a = ap3c === null || ap3c === void 0 ? void 0 : ap3c.lastVar) === null || _a === void 0 ? void 0 : _a.first;
        const customerValue = gtmMemberData === null || gtmMemberData === void 0 ? void 0 : gtmMemberData.value;
        const subscription = gtmMemberData === null || gtmMemberData === void 0 ? void 0 : gtmMemberData.subscription;
        if (gtmMemberData && ap3c && customerFirstName && customerValue && subscription) {
            clearInterval(myInterval);
            if (subscription === 'VIP') {
                return;
            }
            // wait 15 seconds
            setTimeout(() => {
                optiInit(customerFirstName, customerValue);
            }, 15000);
        }
    }, 300);
    const discountCodes = {
        '$100 OFF': 'U6P5AV',
        '$250 OFF': '6AMAY9',
        '$400 OFF': 'BVMF7U',
    };
    // go to tuning starter package incog and scroll down and wait
    // in class make modal show
    // show modal after 15 seconds and close in 10 seconds
    // get the name from the ap3c
    // only people that do not have a vip subscription
    // CTA link goes to: https://www.hpacademy.com/vip-package/purchase/?hpa-acc=[couponCode]
    // 0-250 (100$), 250-400($250), 400+ ($400)
    const optiInit = (firstName, customerValue) => {
        const value = parseInt(customerValue);
        let couponCode = '';
        let discountAmount = '';
        if (value >= 400) {
            couponCode = discountCodes['$400 OFF'];
            discountAmount = '$400';
        }
        else if (value >= 250) {
            couponCode = discountCodes['$250 OFF'];
            discountAmount = '$250';
        }
        else {
            couponCode = discountCodes['$100 OFF'];
            discountAmount = '$100';
        }
        const discountModal = createModal(firstName, discountAmount, couponCode);
        document.body.appendChild(discountModal);
        document.body.classList.add('.modal-open');
        setTimeout(() => {
            const modal = document.getElementById('opti_discount_modal_parent');
            if (modal) {
                modal.querySelector('.modal').style.display = 'none';
            }
        }, 10000);
    };
    const createModal = (firstName, discountAmount, couponCode) => {
        const modal = document.createElement('div');
        modal.id = 'opti_discount_modal_parent';
        const discountIconUrl = `https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/discount-icon.png`;
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
						<h2 class="info-modal-heading">$${!1}{firstName}, here's a thanks from us ($${!1}{discountAmount} OFF)</h2>
						<div class="info-modal-content">
								<div class="opti_coupon__code_container">
									<img class="opti_coupon__code__img" src="$${!1}{discountIconUrl}" alt="discount icon">
									<div class="opti_coupon__code">
										<p>COUPON CODE:</p>
										<h3>$${!1}{couponCode}</h3>
									</div>
									
								</div>
						</div>
						<p class="opti_vip_discount_details">
							VIP already saves you 72% OFF the individual price- but here's something to really sweeten the deal:
						</p>
						<p class="info-modal-bottomtext">
							For a limited time, you get an <strong>additional $${!1}{discountAmount} Credit</strong> to cover the cost of courses you've already purchased.
						</p>
						<a class="btn btn-primary info-modal-btn opti_discount_cta" href="https://www.hpacademy.com/vip-package/purchase/?hpa-acc=$${!1}{couponCode}" data-dismiss="modal">CLAIM YOUR CREDIT <p class="opti_discount_info">$${!1}{discountAmount} OFF AUTOMATICALLY APPLIES</p></a>
					</div>
				</div>
			</div>
		</div>`;
        const modalClose = modal.querySelector('.info-modal-cross');
        const modalMain = modal.querySelector('.modal');
        modalClose.addEventListener('click', () => {
            handleModalClose(modalMain);
        });
        return modal;
    };
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

