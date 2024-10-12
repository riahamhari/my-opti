/**
Developed by: Riah
Test name: TUI NR - BROWSE - [UK-329] - filter tagline control
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
	}
}

(function optiIfee() {
	'use strict';
	const myInterval = setInterval(function () {
		const hostEl = document.querySelector('tui-product-cards');
		const shadowRoot = hostEl?.shadowRoot;
		const sortingWrapper: HTMLElement = shadowRoot?.querySelector('.sorting-wrapper');
		if (hostEl && shadowRoot && sortingWrapper && window?.utag?.link) {
			clearInterval(myInterval);
			optiInit(shadowRoot);
		}
	}, 300);

	const optiInit = (shadowRoot) => {
		const site = getLanguage();

		const trackingNum: number = site === 'uk' ? 6 : 37;

		shadowRoot.querySelector('.filters-panel__filters').onclick = () => {
			window?.utag.link(
				{
					eventAction: 'Optimisation Event',
					eventCategory: 'Optimisation',
					eventName: 'opti_clicked_a_filter',
					event: 'tiq.on',
				},
				'',
				[trackingNum]
			);
		};
	};

	function getLanguage() {
		return window.location.hostname.match(/(uk|se|fi|no|dk)/i)[1];
	}

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
