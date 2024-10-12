/**
Developed by: Dave Bennett
Test name: HACK - crystal update phone number group 10 to 12
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		dataLayer?: any;
	}
}

// For packages to Japan, USA, Canada

(function optiIfee() {
	'use strict';
	const waitForDom = setInterval(function () {
		const main = document.querySelector('.main');
		const allGone = document.getElementById('allGoneBanner');
		if (
			main &&
			allGone &&
			window?.dataLayer?.[0]?.page?.search?.noOfPax &&
			window?.dataLayer?.[0]?.page?.search?.destinationName
		) {
			clearInterval(waitForDom);

			const numOfPax = window.dataLayer[0].page.search.noOfPax;
			const destinations = window.dataLayer[0].page.search.destinationName;

			const destinationsToHide: string[] = [
				'Japan',
				'Furano',
				'United States of America',
				'Canada',
				'Banff',
				'Fernie',
				'Jasper',
				'Panorama',
				'Tremblant',
				'Whistler',
				'Niseko',
				'Tomamu',
				'Breckenridge',
				'Lake Louise',
				'Vail',
			];

			let showBanner: boolean = true;

			destinations.split('|').forEach((dest) => {
				if (!destinationsToHide.includes(dest)) {
					showBanner = false;
				}
			});

			if (numOfPax < 10 || numOfPax > 12 || !showBanner) return;

			document.body.classList.add('opti-pax-banner');

			const country = /co\.uk/g.test(window.location.host) ? 'uk' : 'ie';

			const textMap = {
				uk: "<p>We're not able to help with your holiday search online right now.</p><p>Please give our friendly team a call on <span class='opti-phone__desktop'><strong>020 3451 2821</strong></span><a href='tel:020 3451 2821' class='opti-phone__mobile'>020 3451 2821</a>.</p>",
				ie: "<p>We're not able to help with your holiday search online right now.</p><p>Please give our friendly team a call on <span class='opti-phone__desktop'><strong>01 653 3504</strong></span><a href='tel:01 653 3504' class='opti-phone__mobile'>01 653 3504</a>.</p>",
			};

			const text = textMap[country];

			if (!text) return;

			const bannerHtml = `
			<div id="opti-contact-banner">
				<div class="contentWidth">
					<div class="opti-contact">
						${text}
					</div>
				</div>
			</div>`;

			main.insertAdjacentHTML('afterbegin', bannerHtml);
		}
	}, 300);

	setTimeout(function () {
		if (waitForDom) {
			clearInterval(waitForDom);
		}
	}, 15000);
})();
