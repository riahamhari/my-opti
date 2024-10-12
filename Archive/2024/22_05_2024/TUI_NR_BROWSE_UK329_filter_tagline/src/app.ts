/**
Developed by: Riah
Test name: TUI NR - BROWSE - [UK-329] - filter tagline
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
		if (
			hostEl &&
			shadowRoot &&
			sortingWrapper &&
			window?.utag?.link &&
			shadowRoot?.querySelector('.filters-panel__filters')
		) {
			clearInterval(myInterval);
			optiInit(sortingWrapper, shadowRoot);
		}
	}, 300);

	const translations = {
		uk: {
			filterDealsBy: 'Filter deals by',
			filterToSee: 'Filter to refine your deals',
		},
		fi: {
			filterDealsBy: 'Lajitteluperuste',
			filterToSee: 'Suodata tarjouksia',
		},
		dk: {
			filterDealsBy: 'Filtrér tilbud efter',
			filterToSee: 'Filtrér og find dine tilbud',
		},
		se: {
			filterDealsBy: 'Filtrera erbjudanden efter:',
			filterToSee: 'Filtrera för att hitta dina erbjudanden',
		},
		no: {
			filterDealsBy: 'Filtrer tilbud etter:',
			filterToSee: 'Filtrer for å finne dine tilbud',
		},
	};

	const optiInit = (sortingWrapper: HTMLElement, shadowRoot) => {
		const site = getLanguage();
		const translation = translations[site];
		sortingWrapper.insertAdjacentHTML('afterbegin', `<p id="opti_filter_tagline">${translation.filterToSee}:</p>`);

		const style = document.createElement('style');

		const styleText = `#opti_filter_tagline {
			margin-right: auto;
			font-family: Ambit;
			font-size: 16px;
			font-weight: 600;
			font-stretch: normal;
			font-style: normal;
			line-height: normal;
			letter-spacing: normal;
			color: #1b115c;
		}
		`;

		style.innerText = styleText;
		shadowRoot.appendChild(style);

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
