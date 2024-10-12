/**
Developed by: Dave Bennett
Test name: HACK - crystal update phone number group
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
	}
}

(function optiIfee() {
	'use strict';

	const messageData = {
		uk: 'You can search and book for groups of up to 12 online. For 13 or more, please give our friendly team a call on 020 3451 2821.',
		ie: 'You can search and book for groups of up to 12 online. For 13 or more, please give our friendly team a call on 01 653 3504.',
	};

	const waitForDom = setInterval(function () {
		if (window?.store?.getState()?.search_passengerErrors?.value) {
			clearInterval(waitForDom);

			const debouncedCheck = debounce(checkForPaxError, 300, false);

			window.store.subscribe(debouncedCheck);
			window.addEventListener('resize', debouncedCheck);
		}
	}, 300);

	const checkForPaxError = () => {
		const paxErrors = window.store.getState().search_passengerErrors.value;

		if (!paxErrors.error) return;

		const waitForError = setInterval(() => {
			const paxPanelError: HTMLElement = document.querySelector(
				'.RoomAndPaxOverlay__roomAndPaxWrappper .alerts__message span'
			);

			if (paxPanelError) {
				clearInterval(waitForError);

				const errorText = paxPanelError.innerText;

				if (/Group sizes of more than 12/gi.test(errorText)) {
					const country = /co\.uk/g.test(window.location.host) ? 'uk' : 'ie';

					if (!country || !messageData[country]) return;

					paxPanelError.innerText = messageData[country];
				}
			}
		}, 300);
	};

	const debounce = (func, wait, immediate) => {
		var timeout;
		return function () {
			var context = this,
				args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	setTimeout(function () {
		if (waitForDom) {
			clearInterval(waitForDom);
		}
	}, 15000);
})();
