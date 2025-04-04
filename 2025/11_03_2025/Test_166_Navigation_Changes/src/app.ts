/**
Developed by: Riah
Test name: Test 166 - Navigation Changes
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
		gtmMemberData?: any;
	}
}

const tagInterval = setInterval(() => {
	if (typeof window?.clarity === 'function') {
		window.clarity('set', 'test-166', 'Variation');
		clearInterval(tagInterval);
	}
}, 300);

// (() => {
// 	'use strict';
// 	const myInterval = setInterval(() => {
// 		const btnsContainer = document.querySelector('.header__top__nav__items__attn');
// 		const loginBtn: HTMLElement = document.querySelector('.header__top__nav__items_first .js-displayLoginPrompt');
// 		const starterPackageDropdownVip: HTMLElement = document.querySelector(
// 			'[href="/hpa-starter-package/"] ~ .cre-nav-dropdown .cre-dropdown'
// 		);
// 		const secondaryNavContactUs: HTMLElement = document.querySelector(
// 			'.header__top__nav__items_second [href="/contact-us/"]'
// 		);
// 		if (btnsContainer && starterPackageDropdownVip && secondaryNavContactUs) {
// 			clearInterval(myInterval);

// 			optiInit(loginBtn, btnsContainer, secondaryNavContactUs);
// 		}
// 	}, 300);

// 	const optiInit = (loginBtn: HTMLElement, btnsContainer, secondaryNavContactUs: HTMLElement) => {
// 		secondaryNavContactUs.insertAdjacentHTML('beforebegin', `<a href="/forum/" class="">Forum</a>`);

// 		const starterPackageDropdownVip: HTMLElement = document.querySelector(
// 			'[href="/hpa-starter-package/"] ~ .cre-nav-dropdown .cre-dropdown .cre-el'
// 		);
// 		const vipLink = starterPackageDropdownVip?.querySelector('a');
// 		const vipText = starterPackageDropdownVip?.querySelector('p');
// 		if (vipLink && vipText) {
// 			vipLink.append(vipText);
// 		}
// 		if (loginBtn) {
// 			loginBtn.innerText = 'Login';
// 		} else {
// 			document.body.classList.add('opti_nav_changes_not_logged_in');
// 		}

// 		const newVipBtn = `<a class="btn btn-primary scrollto opti_vip_btn" href="/vip-package/" id="opti_vip_btn"><span class="opti_vip_btn__label">MOST POPULAR 🔥</span>VIP PACKAGE</a>`;
// 		btnsContainer.insertAdjacentHTML('afterbegin', newVipBtn);
// 	};

// 	setTimeout(function () {
// 		if (myInterval) {
// 			clearInterval(myInterval);
// 		}
// 	}, 15000);
// })();

(() => {
	'use strict';
	const myInterval = setInterval(() => {
		const btnsContainer = document.querySelector('.header__top__nav__items__attn');
		const loginBtn = document.querySelector('.header__top__nav__items_first .js-displayLoginPrompt');
		const dashboardBtn = document.querySelector('.header__top__nav__items_first [href="/dashboard/"]');
		const starterPackageDropdownVip = document.querySelector(
			'[href="/hpa-starter-package/"] ~ .cre-nav-dropdown .cre-dropdown'
		);
		const secondaryNavContactUs: HTMLElement = document.querySelector(
			'.header__top__nav__items_second [href="/contact-us/"]'
		);
		if (btnsContainer && starterPackageDropdownVip && secondaryNavContactUs) {
			clearInterval(myInterval);
			optiInit(loginBtn || dashboardBtn, btnsContainer, secondaryNavContactUs);
		}
	}, 300);

	const optiInit = (actionBtn, btnsContainer, secondaryNavContactUs) => {
		// Early return if no button exists
		if (!actionBtn) return;

		secondaryNavContactUs.insertAdjacentHTML('beforebegin', `<a href="/forum/" class="">Forum</a>`);

		const starterPackageDropdownVip = document.querySelector(
			'[href="/hpa-starter-package/"] ~ .cre-nav-dropdown .cre-dropdown .cre-el'
		);
		const vipLink =
			starterPackageDropdownVip === null || starterPackageDropdownVip === void 0
				? void 0
				: starterPackageDropdownVip.querySelector('a');
		const vipText =
			starterPackageDropdownVip === null || starterPackageDropdownVip === void 0
				? void 0
				: starterPackageDropdownVip.querySelector('p');
		if (vipLink && vipText) {
			vipLink.append(vipText);
		}

		// Only change text if it's the login button
		if (actionBtn.classList.contains('js-displayLoginPrompt')) {
			actionBtn.innerText = 'Login';
		} else {
			document.body.classList.add('opti_nav_changes_not_logged_in');
		}

		const newVipBtn = `<a class="btn btn-primary scrollto opti_vip_btn" href="/vip-package/" id="opti_vip_btn"><span class="opti_vip_btn__label">MOST POPULAR 🔥</span>VIP PACKAGE</a>`;
		btnsContainer.insertAdjacentHTML('afterbegin', newVipBtn);

		// Now that everything is ready, show the container
		setTimeout(() => {
			btnsContainer.classList.add('variation-ready');
			// Remove the temporary style after animation completes
			setTimeout(() => {
				const tempStyle = document.getElementById('variation-style-temp');
				if (tempStyle) tempStyle.remove();
			}, 300);
		}, 10);
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
			// If we reach timeout, still show elements to avoid permanently hiding them
			const btnsContainer = document.querySelector('.header__top__nav__items__attn');
			if (btnsContainer) btnsContainer.classList.add('variation-ready');
			// Remove the temporary style
			const tempStyle = document.getElementById('variation-style-temp');
			if (tempStyle) tempStyle.remove();
		}
	}, 15000);
})();
