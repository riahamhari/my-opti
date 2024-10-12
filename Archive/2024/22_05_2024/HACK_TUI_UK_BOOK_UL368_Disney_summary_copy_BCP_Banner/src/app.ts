/**
Developed by: Riah
Test name: HACK - TUI UK - BOOK - [UL-368] Disney summary copy & BCP Banner
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		dataLayer?: any;
		jsonData?: any;
	}
}

const bannerCopy = {
	notAdded: {
		heading: '2025 Disney Dining & Drinks Offer not currently included',
		details: `The 2025 Disney Dining & Drinks Offer gives you credits for food & drinks at Disney parks and restaurants, so
		you can enjoy meals without extra costs. To get this offer, select an eligible room and purchase the 14 for 7
		Disney Magic Tickets. It's a great way to make your Disney stay more convenient and enjoyable.`,
	},
	added: {
		heading: 'Boost your Disney holiday to the next level with an upgraded dining plan',
		details: `Thanks for booking the 2025 Free Disney Dining & Drinks Offer with us. If you'd like to enquire about adding an upgraded dining plan to your holiday, please call us on 0203 451 2688, option 3 so we can give you a quote.`,
	},
};

const disneyOfferData = {
	X8900016: {
		name: 'All Star Movies (VALUE)',
		roomCodes: ['XD255', 'XD261'],
		type: 'value',
	},
	X8900006: {
		name: 'All Star Music (VALUE)',
		roomCodes: ['XD076', 'XD086', 'XD077'],
		type: 'value',
	},
	X8900019: {
		name: 'All Star Sports (VALUE)',
		roomCodes: ['XD291', 'XD296'],
		type: 'value',
	},
	X8900011: {
		name: 'Pop Century (VALUE)',
		roomCodes: ['XD173', 'XD182', 'XD185', 'XD186'],
		type: 'value',
	},
	X8900007: {
		name: 'Art of Animation (VALUE)',
		roomCodes: ['XD111', 'XD097', 'XD107', 'XD105'],
		type: 'value',
	},
	X8900008: {
		name: 'Coronado Springs (MODERATE)',
		roomCodes: ['XD127', 'XD128', 'XD129', 'XD130', 'XD136', 'XD138', 'XD140', 'XD144', 'XD145', 'XD146', 'XD148'],
		type: 'moderate',
	},
	X8900018: {
		name: 'Caribbean Beach (MODERATE)',
		roomCodes: ['XD266', 'XD271', 'XD280', 'XD281'],
		type: 'moderate',
	},
	X8900014: {
		name: 'Port Orleans Riverside (MODERATE)',
		roomCodes: ['XD219', 'XD220', 'XD234', 'XD235', 'XD236', 'XD237', 'XD238', 'XD239', 'XD243', 'XD244', 'XD245'],
		type: 'moderate',
	},
	X8900005: {
		name: 'Port Orleans French Quarter (MODERATE)',
		roomCodes: ['XD063', 'XD064', 'XD066', 'XD068'],
		type: 'moderate',
	},
	X8900012: {
		name: 'Animal Kingdom Lodge (DELUXE)',
		roomCodes: ['XD192', 'XD194', 'XD200', 'XD201', 'XD202', 'XD205'],
		type: 'deluxe',
	},
	X8900022: {
		name: 'Wilderness Lodge (DELXUE)',
		roomCodes: ['XD325', 'XD328', 'XD329', 'XD332', 'XD334', 'XD335'],
		type: 'deluxe',
	},
	X8900026: {
		name: 'Boardwalk Inn (DELXUE)',
		roomCodes: ['XD356', 'XD355', 'XD352'],
		type: 'deluxe',
	},
	X8900003: {
		name: 'Yacht Club (DELUXE)',
		roomCodes: ['XD039', 'XD040'],
		type: 'deluxe',
	},
	X8900009: {
		name: 'Beach Club (DELUXE)',
		roomCodes: ['XD152', 'XD153', 'XD160'],
		type: 'deluxe',
	},
	X8900029: {
		name: 'Polynesian Resort (DELUXE)',
		roomCodes: ['XD367', 'XD368', 'XD369'],
		type: 'deluxe',
	},
	X8900004: {
		name: 'Contemporary Resort (DELUXE)',
		roomCodes: ['XD053', 'XD059'],
		type: 'deluxe',
	},
	X8900010: {
		name: 'Grand Floridian (DELUXE)',
		roomCodes: ['XD164', 'XD165', 'XD166', 'XD167', 'XD169', 'XD170', 'XD171'],
		type: 'deluxe',
	},
	X8900002: {
		name: 'Saratoga Springs (DELUXE)',
		roomCodes: ['XD014', 'XD015', 'XD016', 'XD021', 'XD022', 'XD023'],
		type: 'deluxe',
	},
	X8900001: {
		name: 'Riviera Resort (DELUXE)',
		roomCodes: ['XD001', 'XD002', 'XD004', 'XD005', 'XD008', 'XD009'],
		type: 'deluxe',
	},
	X8900025: {
		name: 'Kidani Village (DELUXE)',
		roomCodes: ['XD341', 'XD342', 'XD343', 'XD345', 'XD346', 'XD347'],
		type: 'deluxe',
	},
	X8900015: {
		name: 'Boulder Ridge (DELUXE)',
		roomCodes: ['XD247', 'XD248', 'XD249'],
		type: 'deluxe',
	},
	X8900030: {
		name: 'Copper Creek (DELUXE)',
		roomCodes: ['XD376', 'XD377', 'XD378', 'XD379'],
		type: 'deluxe',
	},
	X8900017: {
		name: 'Boardwalk Villas (DELUXE)',
		roomCodes: ['XD262', 'XD263'],
		type: 'deluxe',
	},
	X8900013: {
		name: 'Beach Club Villas (DELUXE)',
		roomCodes: ['XD207', 'XD208', 'XD209'],
		type: 'deluxe',
	},
	X8900020: {
		name: 'Bay Lake Tower (DELUXE)',
		roomCodes: ['XD304', 'XD303'],
		type: 'deluxe',
	},
};

// pax details
(function optiIfee() {
	'use strict';
	const myInterval = setInterval(function () {
		const headerSection = document.querySelector('.sectionWrapper:has(h1)');
		const durData =
			window?.store?.getState()?.retail_noticeBoardKeys?.value?.summaryData?.packageViewData?.accomViewData?.[0]
				?.duration;
		const stringDateFromStore =
			window?.store?.getState()?.bookflow_flightAvailability?.records?.[0]?.outbound?.[0]?.schedule?.departureDate;
		const extrasTextArr = [...document.querySelectorAll<HTMLElement>('span.opti-extras-text')];
		if (
			headerSection &&
			stringDateFromStore &&
			durData &&
			extrasTextArr &&
			extrasTextArr.length &&
			window?.dataLayer?.[0]?.basket?.items?.ratePlan &&
			window?.dataLayer?.[0]?.basket?.items?.sellingCode &&
			window?.store?.getState()?.bookflow_navigation?.links?.[0]?.pageUrl &&
			window?.store?.getState()?.bookflow_flightAvailability?.records?.[0]?.outbound?.[0]?.schedule?.departureDate
		) {
			clearInterval(myInterval);

			optiInit();
		}
	}, 300);

	const attentionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g stroke="#1B115C" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="11"/>
        <circle cx="12" cy="6" r="1"/>
        <path d="M12 18v-7"/>
    </g>
</svg>`;

	const downIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="m6 10 6 6 6-6" stroke="#3567F6" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

	const validDates = [
		{
			from: new Date('2025-01-07'),
			to: new Date('2025-04-05'),
		},
		{
			from: new Date('2025-04-23'),
			to: new Date('2025-10-02'),
		},
		{
			from: new Date('2025-10-18'),
			to: new Date('2025-12-17'),
		},
	];

	const codes = ['7N8MC', '9XNLC', '9TMPC'];

	const optiInit = () => {
		const productCode = window?.dataLayer[0].basket.items.sellingCode;

		const duration = getDuration();
		if (!disneyOfferData[productCode]) {
			return;
		}

		const ratePlan = window?.dataLayer?.[0]?.basket.items.ratePlan;
		const valid = isOfferValid(duration, ratePlan);

		if (!valid) {
			return;
		}

		if (isDisneyAdded()) {
			const extrasTextArr = [...document.querySelectorAll<HTMLElement>('span.opti-extras-text')];
			extrasTextArr.forEach((extraEl) => {
				if (/magic/i.test(extraEl.innerText)) {
					extraEl
						.closest('li')
						.insertAdjacentHTML(
							'afterend',
							`<p class="opti_included_disney_offer_text">Including the 2025 Free Disney Dining & Drinks Offer</p>`
						);
				}
			});
		}

		let added: string;

		const isOfferInc = codes.includes(ratePlan);
		if (isOfferInc) {
			added = isDisneyAdded() ? 'added' : 'notAdded';
		} else {
			added = 'notAdded';
		}

		const copy = bannerCopy[added];

		const disneyBanner = `<div class="opti_disneyOffer_banner">
			<div class="opti_disneyOffer_banner_header">
				<span class="opti_attention_icon">${attentionIcon}</span>
				<h5>${copy.heading}</h5>
				<span class="opti_expand_icon">${downIcon}</span>
			</div>
			<div class="opti_disneyOffer_banner_details opti_details_hidden">
				${copy.details}
			</div>
		</div>`;
		const headerSection = document.querySelector('.sectionWrapper:has(h1)');
		headerSection.insertAdjacentHTML('beforeend', disneyBanner);

		const waitForBanner = setInterval(() => {
			const banner: HTMLElement = document.querySelector('.opti_disneyOffer_banner');
			const bannerExpandIcon: HTMLElement = banner?.querySelector('.opti_expand_icon');
			const bannerHeader: HTMLElement = banner?.querySelector('.opti_disneyOffer_banner_header');
			const bannerDetails: HTMLElement = banner?.querySelector('.opti_disneyOffer_banner_details');
			if (banner && bannerExpandIcon && bannerDetails && bannerHeader) {
				clearInterval(waitForBanner);

				bannerHeader.onclick = () => {
					bannerExpandIcon.classList.toggle('opti_expanded');
					bannerDetails.classList.toggle('opti_details_hidden');
				};
			}
		}, 300);
	};

	const formatDateString = (inputString) => {
		const dateObject = new Date(inputString);
		const year = dateObject.getFullYear();
		const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
		const day = dateObject.getDate().toString().padStart(2, '0');
		const formattedDateString = `${year}-${month}-${day}`;

		return formattedDateString;
	};

	function checkDates(duration) {
		const stringDateFromStore =
			window?.store.getState().bookflow_flightAvailability.records[0].outbound[0].schedule.departureDate;
		const stringDate = formatDateString(stringDateFromStore);
		const startDate = new Date(stringDate);
		let endDate = new Date(stringDate);
		endDate.setDate(endDate.getDate() + duration);
		let valid = false;
		validDates.forEach((el) => {
			if (el.from <= startDate && startDate <= el.to && el.from <= endDate && endDate <= el.to) {
				valid = true;
			}
		});

		return valid;
	}
	function isDisneyAdded() {
		let added = false;
		const extrasArr = window?.store.getState().bookflow_extrasSelection.records;
		if (extrasArr && extrasArr.length > 0) {
			extrasArr.forEach((el) => {
				const description = el.description.toLowerCase();
				if (/magic ticket/.test(description)) {
					let ticketsNo = el.quantity;

					added = true;
				}
			});
		}
		return added;
	}

	const isOfferValid = (duration, ratePlan) => {
		return checkDates(duration) && duration >= 5 && duration < 22 && new Date() < new Date('2024-11-07T00:00:00Z');
	};

	function getDuration() {
		const durData =
			window?.store.getState().retail_noticeBoardKeys.value.summaryData.packageViewData.accomViewData[0].duration;

		return durData;
	}

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();

// booking confirmation page

(function optiIfee() {
	'use strict';
	const myInterval = setInterval(function () {
		const headerSection = document.querySelector(
			'.BookingReference__bookingReference p:has(.BookingReference__referenceID)'
		);
		const accomName: HTMLElement = document.querySelector('.Summary__title span');
		const durationEl: HTMLElement = document.querySelector('.Summary__selectList [aria-label="duration"]');
		const stringDateFromStoreEl = document.querySelector<HTMLElement>('.Summary__flight [aria-label="departure date"]');
		if (
			headerSection &&
			accomName &&
			durationEl &&
			stringDateFromStoreEl &&
			window?.dataLayer?.[0]?.basket?.items?.ratePlan &&
			window?.dataLayer?.[0]?.transactions?.items?.sellingCode &&
			window?.dataLayer?.[0]?.transactions?.items?.subItems
		) {
			clearInterval(myInterval);
			optiInit();
		}
	}, 300);

	const attentionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g stroke="#1B115C" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="11"/>
        <circle cx="12" cy="6" r="1"/>
        <path d="M12 18v-7"/>
    </g>
</svg>`;

	const downIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="m6 10 6 6 6-6" stroke="#3567F6" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

	const validDates = [
		{
			from: new Date('2025-01-07'),
			to: new Date('2025-04-05'),
		},
		{
			from: new Date('2025-04-23'),
			to: new Date('2025-10-02'),
		},
		{
			from: new Date('2025-10-18'),
			to: new Date('2025-12-17'),
		},
	];

	const codes = ['7N8MC', '9XNLC', '9TMPC'];

	const optiInit = () => {
		const accomName: HTMLElement = document.querySelector('.Summary__title span');
		const duration = getDuration();

		if (!containsDisney(accomName.innerText)) {
			return;
		}

		const ratePlan = window?.dataLayer?.[0]?.basket.items.ratePlan;

		const valid = isOfferValid(duration, ratePlan);

		if (!valid) {
			return;
		}

		if (isDisneyAdded()) {
			const extrasTextArr = [...document.querySelectorAll<HTMLElement>('.Summary__listItem')];
			extrasTextArr.forEach((extraEl) => {
				if (/magic/i.test(extraEl.innerText)) {
					extraEl
						.closest('li')
						.insertAdjacentHTML(
							'afterend',
							`<p class="opti_included_disney_offer_text">Including the 2025 Free Disney Dining & Drinks Offer</p>`
						);
				}
			});
		}
		let added: string;

		const isOfferInc = codes.includes(ratePlan);
		if (isOfferInc) {
			added = isDisneyAdded() ? 'added' : 'notAdded';
		} else {
			added = 'notAdded';
		}
		const copy = bannerCopy[added];

		const disneyBanner = `<div class="opti_disneyOffer_banner">
			<div class="opti_disneyOffer_banner_header">
				<span class="opti_attention_icon">${attentionIcon}</span>
				<h5>${copy.heading}</h5>
				<span class="opti_expand_icon">${downIcon}</span>
			</div>
			<div class="opti_disneyOffer_banner_details opti_details_hidden">
				${copy.details}
			</div>
		</div>`;

		const headerSection = document.querySelector(
			'.BookingReference__bookingReference p:has(.BookingReference__referenceID)'
		);
		headerSection.insertAdjacentHTML('afterend', disneyBanner);

		const waitForBanner = setInterval(() => {
			const banner: HTMLElement = document.querySelector('.opti_disneyOffer_banner');
			const bannerExpandIcon: HTMLElement = banner?.querySelector('.opti_expand_icon');
			const bannerHeader: HTMLElement = banner?.querySelector('.opti_disneyOffer_banner_header');
			const bannerDetails: HTMLElement = banner?.querySelector('.opti_disneyOffer_banner_details');
			if (banner && bannerExpandIcon && bannerDetails) {
				clearInterval(waitForBanner);

				bannerHeader.onclick = () => {
					bannerExpandIcon.classList.toggle('opti_expanded');
					bannerDetails.classList.toggle('opti_details_hidden');
				};
			}
		}, 300);
	};

	const isOfferValid = (duration, ratePlan) => {
		return (
			checkDates(duration) &&
			codes.includes(ratePlan) &&
			duration >= 5 &&
			duration < 22 &&
			new Date() < new Date('2024-11-07T00:00:00Z')
		);
	};

	function isDisneyAdded() {
		let added = false;
		const extrasArr = window.dataLayer[0].transactions.items.subItems;
		if (extrasArr && extrasArr.length > 0) {
			extrasArr.forEach((el) => {
				const description = el.productName.toLowerCase();
				if (/magic ticket/.test(description)) {
					let ticketsNo = el.quantity;

					added = true;
				}
			});
		}
		if (!window.dataLayer[0].transactions.items.ratePlan) {
			added = false;
		}
		return added;
	}
	const formatDateString = (inputString) => {
		const dateObject = new Date(inputString);
		const year = dateObject.getFullYear();
		const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
		const day = dateObject.getDate().toString().padStart(2, '0');
		const formattedDateString = `${year}-${month}-${day}`;

		return formattedDateString;
	};
	function checkDates(duration) {
		const stringDateFromStore = document
			.querySelector<HTMLElement>('.Summary__flight [aria-label="departure date"]')
			.innerText.split('.')[0];
		const stringDate = formatDateString(stringDateFromStore);
		const startDate = new Date(stringDate);
		let endDate = new Date(stringDate);
		endDate.setDate(endDate.getDate() + duration);
		let valid = false;
		validDates.forEach((el) => {
			if (el.from <= startDate && startDate <= el.to && el.from <= endDate && endDate <= el.to) {
				valid = true;
			}
		});

		return valid;
	}

	function getDuration() {
		const durationEl: HTMLElement = document.querySelector('.Summary__selectList [aria-label="duration"]');
		const durData = parseFloat(durationEl.innerText);

		return durData;
	}
	function containsDisney(str: string) {
		return str.toLowerCase().includes('disney');
	}
	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
