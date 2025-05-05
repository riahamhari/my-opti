/**
Developed by: Riah
Test name: Test 173 - Course Page ATF Redesign
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
		window.clarity('set', 'test-174', 'variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	const icons = {
		tick: `<img  class="opti_tick_icon" alt="tick icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png"/>`,
		facebook: `<img class="opti_fb_logo" alt="Facebook logo" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/Facebook_logo.png"/>`,
		dollarSign: `<img class="opti_dollar_sign" alt="dollar sign icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/dollar_sign_icon.png"/>`,
		info: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="18" height="18" viewBox="0 0 16 16" stroke="#000000" stroke-width="0.00016">
							<g id="SVGRepo_iconCarrier">
								<path d="M7.37 6.7h1.25v5H7.37z"/>
								<circle cx="8" cy="4.85" r=".65"/>
								<path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"/>
								</g>
						  </svg>`,
	};

	let currentPriceEl: HTMLElement, prevPriceEl: HTMLElement, paymentPlanEl: HTMLElement, container: HTMLElement;

	const lifetimeToolTipHtml = ` <div id="opti_lifetime_popover" class="opti-popover popover fade bottom in" role="tooltip">
		<div class="arrow"></div>
		<h3 class="popover-title" style="display: none;"></h3>
		<div class="popover-content">
			Gold Membership Includes:<br />
			- Exclusive access to the HPA member forums<br />
			- 200+ past webinars, with new webinars added weekly<br />
			- Full access to our technical articles archive<br />
		</div>
	</div>`;
	const efiTuningBenefits = [
		'Access to all 40 HPA courses',
		'Every future course <strong>FREE</strong>',
		`Lifetime gold membership <div  class="popover-trigger">${icons.info} ${lifetimeToolTipHtml}</div>`,
		'T-shirt & sticker pack',
	];

	const fbReviewsHtml = `<div id="opti_fb_reviews">
	<div class="opti_fb_logo_container">${icons.facebook}</div>
	<div class="opti_fb_reviews_ratings">
		<div class="opti_reviews_flex">
			<span class="opti_rating">4.9</span>
			<div class="opti_stars">
				<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
				<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
				<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
				<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
				<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
			</div>
		</div>
		<p><a class="opti_fb_reviews_link" href="https://www.facebook.com/HPAcademy/reviews" target="_blank">Read our 1,216 reviews</a></p>
	</div>
</div>`;

	const eightPaymentsHtml = ` 
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
	`;

	const myInterval = setInterval(() => {
		currentPriceEl = document.querySelector('.price');
		prevPriceEl = document.querySelector('.saving span');
		paymentPlanEl = document.querySelector('.sidebar .btn-wrapper span');
		container = document.querySelector('.course-info .row.title-row .col-sm-12');
		if (currentPriceEl && prevPriceEl && paymentPlanEl) {
			clearInterval(myInterval);
			optiInit();
		}
	}, 300);

	const optiInit = () => {
		const vipRedesign = createVipRedesign();
		container.append(vipRedesign);
	};

	const createVipRedesign = () => {
		const newPrice = currentPriceEl.querySelector<HTMLElement>('.new-price');
		const prevPriceTxt = prevPriceEl.innerText.split('.')[0];

		const currPriceTxt = newPrice ? newPrice.innerText.split(' ')[0] : currentPriceEl.innerText.split(' ')[0];
		const prevPrice = formatCurrencyStr(prevPriceTxt);
		const currPrice = formatCurrencyStr(currPriceTxt);
		const paymentPlanText = paymentPlanEl.innerText.toLowerCase().replace('only', '');

		const vipRedesign = document.createElement('div');
		vipRedesign.id = 'opti_vip_package_redesign';
		vipRedesign.classList.add('opti_vip_redesign');
		vipRedesign.innerHTML = `<div class="opti_vip_redesign__main">
									<div class="opti_vip_redesign_heading">
										<h1 class="opti_vip_redesign_heading__main">EFI TUNING FUNDAMENTALS</h1>

									</div>
									<div class="opti_vip_redesign__infoText">
										<p>EFI Tuning Fundamentals is THE course to <strong>kick-start your tuning knowledge.</strong></p> 
										<p>Learn the core principles of engine operation, ECU function & tuning.</p> 
									</div>
									<div class="opti_vip_redesign__ticks">
										<ul>
											${efiTuningBenefits
												.map((benefit) => {
													return `<li><span>${icons.tick}</span>${benefit}</li>`;
												})
												.join('')}
										</ul>
									</div>
									${fbReviewsHtml}
								</div>
							<div class="opti_vip_redesign__side sidebar col-sm-4">
								  <div class="opti_vip_redesign_priceCont">
									  <p class="opti_vip_redesign__prevPrice">${prevPrice}</p>
									  <p class="opti_vip_redesign__currPrice">${currPrice} <span>(USD)</span></p>
									  <div class="opti_vip_redesign__paymentPlan">											
											<div class="opti_vip_redesign_popover_wrapper">
													<div class="popover-trigger">
														${icons.info} 
														<div id="opti_payment_popover" class="popover opti-popover fade bottom in" role="tooltip">
															${eightPaymentsHtml}
														</div>
													</div>
												<p class="opti_vip_redesign__paymentPlan_text">Payment plans available. </p>
											</div>
											<p class="opti_vip_redesign__paymentPlan_text">Make ${paymentPlanText}</span></p>
									  </div>
									  <div class="btn-wrapper opti_btn_wrapper">
											<div class="opti_sticky_cta">
												<span class="opti_sticky_cta__prevPrice">${prevPrice}</span>
												<span class="opti_sticky_cta__currPrice">${currPrice} <span>(USD)</span></span>
												<div class="opti_sticky_cta__paymentPlan">
													<div class="popover-trigger">
														${icons.info} 
														<div id="opti_payment_popover_bottom" class="popover opti-popover fade top in" role="tooltip">
															${eightPaymentsHtml}
														</div>
													</div>
													<span>Payment plans available over 8 weeks</span>
												</div>
											</div>
											<a class="btn btn-primary" href="/vip-package/purchase/">BECOME A VIP</a>
									  </div>
									  <div class="payment-icons">
											<img src="/resources/themes/base/production/images/payment-icons.png">
									  </div>
								  </div>
								  <div class="opti_vip_redesign__moneyBack">
										<span>${icons.dollarSign}</span>
										<div class="opti_vip_redesign__moneyBack_text">
											<h5>60-day money back guarantee</h5>
											<p>Not happy? Let us know within 60 days and we'll refund you in full.</p>
										</div>
								  </div>
							</div>`;

		const buttonWrapper: HTMLElement = vipRedesign.querySelector('.btn-wrapper');
		const buttonBottomOffset = buttonWrapper.offsetTop + buttonWrapper.offsetHeight;

		const popoverTriggers = [...vipRedesign.querySelectorAll('.popover-trigger')];

		popoverTriggers.forEach((trigger) => {
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
					vipRedesign.querySelectorAll('.popover').forEach((popover) => {
						popover.classList.remove('opti_show_popover');
					});
				}
			});
		});

		window.addEventListener('scroll', () => {
			if (window.innerWidth >= 768) {
				return;
			}
			// Check if the button is completely out of view
			if (window.scrollY >= buttonBottomOffset + 1060) {
				buttonWrapper.classList.add('btn-sticky');
			} else {
				buttonWrapper.classList.remove('btn-sticky');
			}
		});
		return vipRedesign;
	};

	const formatCurrencyStr = (text) => {
		const formatted = text.replace(/\$(\d+(?:\.\d{2})?)(\s?\w+)?/, (_, num, suffix) => {
			// Split integer and decimal parts
			const [intPart, decimalPart] = num.split('.');
			const withCommas = Number(intPart).toLocaleString();

			return `$${withCommas}${decimalPart ? '.' + decimalPart : ''}${suffix || ''}`;
		});

		console.log(formatted);
		return formatted;
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
