/**
Developed by: Riah
Test name: Test 152  - VIP Discount Modal v1
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
		ap3c?: any;
		gtmMemberData?: any;
	}
}
const tagInterval = setInterval(() => {
	if (typeof window.clarity === 'function') {
		window.clarity('set', 'test-152', 'Variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	const myInterval = setInterval(() => {
		const gtmMemberData = window?.gtmMemberData;
		const ap3c = window?.ap3c;
		const customerFirstName = ap3c?.lastVar?.first;
		const customerValue = gtmMemberData?.value;
		const subscription = gtmMemberData?.subscription;
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
		} else if (value >= 250) {
			couponCode = discountCodes['$250 OFF'];
			discountAmount = '$250';
		} else {
			couponCode = discountCodes['$100 OFF'];
			discountAmount = '$100';
		}
		const discountModal = createModal(firstName, discountAmount, couponCode);

		document.body.appendChild(discountModal);

		document.body.classList.add('.modal-open');

		setTimeout(() => {
			const modal = document.getElementById('opti_discount_modal_parent');

			if (modal) {
				modal.querySelector<HTMLElement>('.modal').style.display = 'none';
			}
		}, 10000);
	};

	const createModal = (firstName, discountAmount, couponCode): HTMLElement => {
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
						<h2 class="info-modal-heading">${firstName}, here's a thanks from us (${discountAmount} OFF)</h2>
						<div class="info-modal-content">
								<div class="opti_coupon__code_container">
									<img class="opti_coupon__code__img" src="${discountIconUrl}" alt="discount icon">
									<div class="opti_coupon__code">
										<p>COUPON CODE:</p>
										<h3>${couponCode}</h3>
									</div>
									
								</div>
						</div>
						<p class="opti_vip_discount_details">
							VIP already saves you 72% OFF the individual price- but here's something to really sweeten the deal:
						</p>
						<p class="info-modal-bottomtext">
							For a limited time, you get an <strong>additional ${discountAmount} Credit</strong> to cover the cost of courses you've already purchased.
						</p>
						<a class="btn btn-primary info-modal-btn opti_discount_cta" href="https://www.hpacademy.com/vip-package/purchase/?hpa-acc=${couponCode}" data-dismiss="modal">CLAIM YOUR CREDIT <p class="opti_discount_info">${discountAmount} OFF AUTOMATICALLY APPLIES</p></a>
					</div>
				</div>
			</div>
		</div>`;

		const modalClose = modal.querySelector<HTMLElement>('.info-modal-cross');
		const modalMain = modal.querySelector<HTMLElement>('.modal');
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
