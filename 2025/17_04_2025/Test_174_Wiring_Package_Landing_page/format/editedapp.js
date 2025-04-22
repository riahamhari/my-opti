/**
Developed by: Riah
Test name: Test 174 - Wiring Package Landing page
**/
(() => {
    'use strict';
    let pageHeading, subHeading, ctaContainer, heroTicksContainer;
    const icons = {
        tick: `<img  class="opti_tick_icon" alt="tick icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png"/>`,
        facebook: `<img class="opti_fb_logo" alt="Facebook logo" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/Facebook_logo.png"/>`,
        outlineDollar: `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000">
				<g id="SVGRepo_bgCarrier" stroke-width="0"/>

				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

				<g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.272"/> <path d="M12 17V17.5V18" stroke="#000000" stroke-width="1.272" stroke-linecap="round"/> <path d="M12 6V6.5V7" stroke="#000000" stroke-width="1.272" stroke-linecap="round"/> <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#000000" stroke-width="1.272" stroke-linecap="round"/> </g>

				</svg></span>`,
        dollarSign: `<img class="opti_dollar_sign" alt="dollar sign icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/dollar_sign_icon.png"/>`,
        heroTick: `<img src="/assets/Content_Sections/1dff896ea1/DLP_Icon_Green_Tick__ScaleWidthWzE2XQ.png" alt="Applicable to all cars">`,
    };
    const discountLabel = `<div class="opti_discount_label">${icons.outlineDollar} Over 60% Off</div>`;
    const copyObj = {
        heading: 'Ultimate Wiring Package',
        subheading: `<strong>Learn motorsport wiring for $1</strong> - <span class="opti_line-through">usually $99</span> Learn the fundamentals of wiring your project car & building an EFI harness.`,
        aboveHeroCta: `<span class="opti_cta_price">$299</span><span> (or 8 payments of $37.38)</span>`,
        heroTicks: [],
    };
    const myInterval = setInterval(() => {
        pageHeading = document.querySelector('h1');
        subHeading = document.querySelector('.header-subtitle p');
        ctaContainer = document.querySelector('.deals-page-header div:has(.btn)');
        heroTicksContainer = document.querySelector('.deals-page-header-extra');
        if (pageHeading && subHeading && ctaContainer && heroTicksContainer) {
            clearInterval(myInterval);
        }
    }, 300);
    const optiInit = () => {
        // update hero
        pageHeading.insertAdjacentHTML('beforebegin', discountLabel);
        pageHeading.innerText = copyObj.heading;
        subHeading.innerHTML = copyObj.subheading;
        ctaContainer.insertAdjacentHTML('beforebegin', `<div>${copyObj.aboveHeroCta}</div>`);
        insertHeroTicks(heroTicksContainer);
        // update the you'll learn
        // update cta below benefit boxes
        // add the ticks table - Why learn with HP Academy?
        // update reviews section
    };
    const insertHeroTicks = (container) => {
        const heroTicks = `<div>${icons.heroTick}
                               <p>Lifetime access</p>
        </div>
		<div>${icons.dollarSign}
                               <p>Applicable to all cars</p>
        </div>
			<div>${icons.dollarSign}
                               <p>Applicable to all cars</p>
        </div>
		`;
        container.innerHTML = heroTicks;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

