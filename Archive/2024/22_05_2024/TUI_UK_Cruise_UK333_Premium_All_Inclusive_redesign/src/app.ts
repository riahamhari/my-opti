/**
Developed by: Riah
Test name: (Dev) UK - [UK-333] - Premium All Inclusive redesign - Cruise
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
	}
}

interface Board {
	selected: boolean;
	id: string;
}

(function optiIfee() {
	'use strict';
	const myInterval = setInterval(function () {
		const boardOptionsCont: HTMLElement = document.querySelector('#boardBasisBreakdown__component .WCMS_component');
		const sectionHeading: HTMLElement = document.querySelector('#boardBasisBreakdown__component .sectionHeading');
		const addMoreCabinsBtn: HTMLElement = document.querySelector(
			'#roomAllocation__component .RoomAllocation__buttonContainer button'
		);
		if (
			window?.store &&
			window?.store?.getState()?.bookflow_roomSelection?.records?.length &&
			window?.store?.getState()?.bookflow_boardSelection?.records?.[0]?.id &&
			window?.store?.getState()?.boards?.PI?.price?.total &&
			window?.store?.getState()?.boards?.PI.price.perPerson &&
			window?.store?.dispatch &&
			window?.utag?.link &&
			boardOptionsCont &&
			addMoreCabinsBtn &&
			sectionHeading
		) {
			clearInterval(myInterval);
			optiInit();

			const debouncedInit = debounce(
				() => {
					optiInit();
				},
				300,
				false
			);
			window?.store.subscribe(debouncedInit);
		}
	}, 300);

	const boardParagraphEl = `<p class="opti_boardOptions_info">All cruises include breakfast, lunch, and dinner, selected beers and cider, house wines, soft drinks, selected spirits and a range of cocktails</p>`;

	const checkMarkIcon = `<span class="opti_check_icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
        <path d="m6.773 10.933 6.563-9.382c.586-.838 1.859-.023 1.344.86L7.69 14.404a.799.799 0 0 1-1.255.163L1.442 9.569c-.666-.666.168-1.736.976-1.25l4.355 2.614z" id="mtnmh6fxta"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <mask id="r5cpwud20b" fill="#fff">
            <use xlink:href="#mtnmh6fxta"/>
        </mask>
        <use fill="#082A5E" xlink:href="#mtnmh6fxta"/>
        <g mask="url(#r5cpwud20b)" fill="#30B675">
            <path d="M0 0h16v16H0z"/>
        </g>
    </g>
</svg></span>`;

	const cabinIcon = `<span class="opti_cabin_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<g stroke="#1B115C" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
	<path d="M4 11h16a2 2 0 0 1 2 2v6h0H2v-6a2 2 0 0 1 2-2zM2 19v3M22 19v3M6 2h12a2 2 0 0 1 2 2v7h0H4V4a2 2 0 0 1 2-2z"/>
	<path d="M6 7h4a2 2 0 0 1 2 2v2h0-8V9a2 2 0 0 1 2-2zM14 7h4a2 2 0 0 1 2 2v2h0-8V9a2 2 0 0 1 2-2z"/>
</g>
</svg></span>`;

	const selectBtn = `<button type="" role="button" aria-label="button" class="opti_add_premiumAi_btn buttons__button buttons__senary buttons__fill" data-di-id="di-id-953f2a1a-aa964301">Add</button>`;

	const removeLink = `<a class="opti_BoardOptionsBreakdown__removeLink" href="javascript:void(0)" data-di-id="di-id-8f0ae898-bf4426c8">Remove package</a>`;
	const whatsIncludedArr = [
		'Soft drinks<span> (in cans and by the glass)</span>',
		'Upgraded cocktails<span> (e.g. Mojitos and Champagne cocktails)</span>',
		'Premium spirits<span> (e.g. Bombay Sapphire, Jack Daniels, Absolut Vodka + whiskies, brandies and cognacs)</span>',
		'Fresh Juices',
		'Premium Lavazza coffee',
		'1.5 litre bottle of water<span> (per cabin per day)</span>',
	];

	const cardTriangle = `<div class="cards__triangle"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1024 1024" class="cards__tick" data-di-res-id="4b911a87-ed6cfe6" data-di-rand="1717163407298"><path d="M998.451 152.883c-33.195-33.195-87.501-33.195-120.678 0l-535.040 535.040-197.171-197.171c-33.195-33.195-87.501-33.195-120.678 0-33.195 33.195-33.195 87.501 0 120.678l256.29 256.29c16.896 16.896 39.287 25.088 61.559 24.781 22.272 0.307 44.663-7.868 61.559-24.781l594.159-594.159c33.178-33.178 33.178-87.484 0-120.678z"></path></svg></div>`;

	const optiInit = () => {
		const store = window.store;
		const isPremiumSelected = /PI/.test(store.getState().bookflow_boardSelection.records[0].id);

		const boardArray: Board[] = Object.values(store.getState().boards);
		const [unSelectedBoard] = boardArray.filter((board) => {
			return !board.selected;
		});
		const selectedId = unSelectedBoard.id;
		const totalPrice = extractPrice(store.getState().boards[`${selectedId}`].price.total);

		const waitForCabins = setInterval(() => {
			const roomListEl: HTMLElement = document.querySelector('.RoomAllocation__roomsList ul');
			const numOfCabins = store.getState().bookflow_roomSelection.records.length;
			const addMoreCabinsBtn: HTMLElement = document.querySelector(
				'#roomAllocation__component .RoomAllocation__buttonContainer button'
			);

			const perPersonPrice = extractPrice(store.getState().boards[`${selectedId}`].price.perPerson);
			const boardOptionsCont: HTMLElement = document.querySelector('#boardBasisBreakdown__component .WCMS_component');
			const sectionHeading: HTMLElement = document.querySelector('#boardBasisBreakdown__component .sectionHeading');

			if (roomListEl && numOfCabins && addMoreCabinsBtn && perPersonPrice && boardOptionsCont && sectionHeading) {
				clearInterval(waitForCabins);

				const premiumAllInc = `<div class="opti_premiumAI_container ${
					isPremiumSelected ? 'opti_premium_selected' : ''
				}" aria-label='premium all inclusive list'>
										<h5><span class="opti_premiumAI_copy">Why not upgrade to</span>Premium All Inclusive<span class="opti_premiumAI_question">?</span></h5>
										<div class="opti_premiumAI_included">
											<ul>
												${whatsIncludedArr
													.map((item) => {
														return `<li class="opti_included_list_item">${checkMarkIcon} <span class="opti_included_list_item_details">${item}</span></li>`;
													})
													.join('')}
											</ul>
										</div>
										<div class="opti_premiumAI_selection">
											<p class="opti_premiumAI_price"><span class="opti_pp_price">${perPersonPrice}pp</span> per night <span class="opti_tt_price">(${totalPrice})</span></p>
											${removeLink} ${selectBtn}
																		
										</div>
										${cardTriangle}
									</div>`;

				if (!boardOptionsCont?.classList.contains('opti_premiumAI_redesign')) {
					boardOptionsCont.classList.add('opti_premiumAI_redesign');
					sectionHeading.insertAdjacentHTML('afterend', boardParagraphEl);
					boardOptionsCont.insertAdjacentHTML('beforeend', premiumAllInc);
				}

				if (!roomListEl.querySelector('.opti_num_of_cabin_listItem')) {
					roomListEl.insertAdjacentHTML(
						'afterbegin',
						`<li class="opti_num_of_cabin_listItem">${cabinIcon}<p class="opti_number_of_cabins">Number of cabins: <span>${numOfCabins}</span></p></li>`
					);

					addMoreCabinsBtn.innerText = 'Add more cabins';
				} else {
					const numOfCabinEl: HTMLElement = document.querySelector('.opti_number_of_cabins span');
					numOfCabinEl.innerText = `${numOfCabins}`;
				}

				const waitForEls = setInterval(() => {
					const premiumAICont: HTMLElement = document.querySelector('.opti_premiumAI_container');
					const addPremiumBtn: HTMLElement = premiumAICont?.querySelector('.opti_add_premiumAi_btn');
					const removePremiumLink: HTMLElement = premiumAICont?.querySelector(
						'.opti_BoardOptionsBreakdown__removeLink'
					);
					if (premiumAICont && addPremiumBtn && removePremiumLink) {
						clearInterval(waitForEls);

						let selection: string;

						addPremiumBtn.onclick = () => {
							selection = 'PI';
							updateStore(selection);
							premiumAICont.classList.add('opti_premium_selected');
							window.utag.link(
								{
									eventAction: 'Optimisation Event',
									eventCategory: 'Optimisation',
									eventName: 'opti_added_premium_all_inclusive',
									event: 'tiq.on',
								},
								'',
								[6]
							);
						};

						removePremiumLink.onclick = () => {
							selection = 'AI';
							updateStore(selection);
							premiumAICont.classList.remove('opti_premium_selected');
						};
					}
				}, 300);
			}
		}, 300);
	};

	/**
	 * Takes board selection and fires dispatch object to update the store
	 * @param selection
	 */
	const updateStore = (selection: string) => {
		const dispatchObj = {
			type: 'BOOKFLOW/BOARD_SELECTION_REQESTED',
			data: [`${selection}`],
		};

		window.store.dispatch(dispatchObj);
	};
	const extractPrice = (priceStr: string) => {
		let extractedPrice;
		if (priceStr.includes('+')) {
			extractedPrice = priceStr.split('+')?.[1];
		} else {
			extractedPrice = priceStr.split('-')?.[1];
		}

		return extractedPrice;
	};

	function debounce(func, wait, immediate) {
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
	}

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
