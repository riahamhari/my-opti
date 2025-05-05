/**
Developed by: Riah
Test name: Test 174 - Wiring Package Landing page
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-174', 'variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    let pageHeading, subHeading, ctaContainer, heroTicksContainer, youllLearn, wiringImage, motorsportSection, reviews, reviewsSubtitle, hero, motorWiringSection, heroEnrollBtn, memberReviews;
    const icons = {
        tick: `<img  class="opti_tick_icon" alt="tick icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png"/>`,
        cross: `<img  class="opti_cross_icon" alt="cross icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/delete-icon.png"/>`,
        facebook: `<img class="opti_fb_logo" alt="Facebook logo" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/Facebook_logo.png"/>`,
        outlineDollar: `<img class="opti_dollar_outline" alt="Dollar Outline logo" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/dollar_outline.png"/>`,
        hpa: '<img class="opti_hpa_logo" alt="HPA logo" src="/resources/themes/base/production/images/logo.png">',
        dollarSign: `<img class="opti_dollar_sign" alt="dollar sign icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/dollar_sign_icon.png"/>`,
        heroTick: `<img src="/assets/Content_Sections/1dff896ea1/DLP_Icon_Green_Tick__ScaleWidthWzE2XQ.png" alt="Applicable to all cars">`,
        refresh: `<img  class="opti_refresh_icon" alt="frequency icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/refresh%201.png"/>`,
        infoTt: `<img  class="opti_info_tooltip" alt="info tooltip icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/info%203.png"/>`,
        infoCircled: `<svg xmlns="http://www.w3.org/2000/svg" fill="#808184" width="18" height="18" viewBox="0 0 16 16" stroke="#808184" stroke-width="0.00016">
		<g id="SVGRepo_iconCarrier">
			<path d="M7.37 6.7h1.25v5H7.37z"/>
			<circle cx="8" cy="4.85" r=".65"/>
			<path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"/>
			</g>
	  </svg>`,
    };
    const myInterval = setInterval(() => {
        pageHeading = document.querySelector('h1');
        subHeading = document.querySelector('.header-subtitle p');
        ctaContainer = document.querySelector('.deals-page-header div:has(.btn)');
        hero = document.querySelector('.deals-page-header');
        heroTicksContainer = document.querySelector('.deals-page-header-extra');
        youllLearn = document.querySelector('.youll-learn');
        wiringImage = document.querySelector('.youll-learn img');
        motorsportSection = document.querySelector('.motorsport-wiring-section');
        reviews = document.querySelector('.reviews');
        reviewsSubtitle = document.querySelector('.reviews .section-subtitle');
        memberReviews = document.querySelector('.reviews .member-reviews');
        motorWiringSection = document.querySelector('.motorsport-wiring-section');
        heroEnrollBtn = document.querySelector('.DealsPage_Alternate2 .dealspage-alternate2 .deals-page-header-wrapper .deals-page-header .btn');
        if (pageHeading &&
            subHeading &&
            ctaContainer &&
            heroTicksContainer &&
            youllLearn &&
            hero &&
            wiringImage &&
            reviews &&
            reviewsSubtitle &&
            memberReviews &&
            motorWiringSection &&
            heroEnrollBtn &&
            motorsportSection) {
            clearInterval(myInterval);
            optiInit();
        }
    }, 300);
    const discountLabel = `<div class="opti_discount_label">${icons.outlineDollar} <span>Over 60% Off</span></div>`;
    const copyObj = {
        heading: 'Ultimate Wiring Package',
        subheading: `<strong>Learn motorsport wiring for $1</strong> — <span class="opti_line-through">usually $99</span> Learn the fundamentals of wiring your project car & building an EFI harness.`,
        aboveHeroCta: `<span class="opti_cta_price"><span class="opti_cta_price__currency">$</span>299</span><span class="opti_cta_price_brackets"> (or 8 payments of $37.38)</span>`,
        heroTicks: [],
    };
    const lifetimeToolTipHtml = ` <div class="opti-popover opti_lifetime_popover popover fade bottom in" role="tooltip">
	<div class="arrow"></div>
	<h3 class="popover-title" style="display: none;"></h3>
	<div class="popover-content">
		Gold Membership Includes:<br />
		- Exclusive access to the HPA member forums<br />
		- 200+ past webinars, with new webinars added weekly<br />
		- Full access to our technical articles archive<br />
	</div>
</div>`;
    const wiringBenefits = [
        'Motorsport Wiring Fundamentals',
        'Practical Wiring - Club Level',
        `24 Months Gold Membership <div class="popover-trigger">${icons.infoTt} ${lifetimeToolTipHtml}</div>`,
        '200+ Webinars (<strong>with 20 on wiring</strong>) including;',
    ];
    const wiringIncludes = [
        'CAN Communication Decoded',
        'How to use Autosport Connectors',
        'Pro vs. Club Level Harnesses',
    ];
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
    const tableData = [
        { feature: 'Start learning instantly', included: false },
        { feature: 'Access anywhere, anytime', included: false },
        { feature: 'Applicable to All Vehicles', included: true },
        { feature: 'Constantly Updated', included: true },
        { feature: 'Lifetime Access', included: false },
        { feature: 'Money Back Guarantee', included: false },
        // { feature: '39 Courses - One price', included: false },
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
    const optiInit = () => {
        // update hero
        hero.id = 'opti_wiring_package_hero';
        pageHeading.insertAdjacentHTML('beforebegin', discountLabel);
        pageHeading.innerText = copyObj.heading;
        // subHeading.innerHTML = copyObj.subheading;
        ctaContainer.insertAdjacentHTML('beforebegin', `<div>${copyObj.aboveHeroCta}</div>`);
        insertHeroTicks(heroTicksContainer);
        // update hero enroll cta link
        heroEnrollBtn.href = '/hpa-wiring-starter-package/purchase';
        // update the you'll learn
        youllLearn.id = 'opti_wiring_package_youll_learn';
        insertYoullLearnUpdate(youllLearn);
        // insert why learn motorsport wiring
        const whyLearn = createWhyLearn();
        motorWiringSection.insertAdjacentElement('afterbegin', whyLearn);
        // update cta below motorsport wiring boxes
        const motorsportCta = createEnrollCta();
        motorsportSection.append(motorsportCta);
        // add the ticks table - Why learn with HP Academy?
        const table = createTable();
        motorsportSection.insertAdjacentElement('afterend', table);
        // insert everything you'll need section
        const everythingYouNeedSect = createEverythingYouNeed();
        reviews.insertAdjacentElement('beforebegin', everythingYouNeedSect);
        reviews.setAttribute('id', 'opti_reviews_section');
        // update reviews section
        const reviewsCta = createEnrollCta();
        reviewsSubtitle.insertAdjacentHTML('afterend', fbReviewsHtml);
        memberReviews.append(reviewsCta);
    };
    const insertHeroTicks = (container) => {
        const heroTicks = `<div>${icons.heroTick}
                               <p>Lifetime access</p>
        </div>
		<div>${icons.dollarSign}
                               <p>60-day guarantee</p>
        </div>
			<div>${icons.refresh}
                               <p>Frequently updated</p>
        </div>
		`;
        container.innerHTML = heroTicks;
    };
    const insertYoullLearnUpdate = (wrapper) => {
        const enrollCta = createEnrollCta();
        const container = document.createElement('div');
        container.classList.add('opti_ultimate_wiring');
        container.setAttribute('id', 'opti_ultimate_wiring_card');
        container.innerHTML = `<div>
									${discountLabel}
									<div>${copyObj.aboveHeroCta}</div>
									<h3>Ultimate Wiring Package</h3>
									<ul class="opti_ultimate_wiring__benefits">
																${wiringBenefits
            .map((benefit) => {
            return `<li><span>${icons.tick}</span>${benefit}</li>`;
        })
            .join('')}
									</ul>
									<ul class="opti_ultimate_wiring__incl">
										${wiringIncludes.map((include) => `<li>${include}</li>`).join('')}
									</ul>
									
								
							   </div>`;
        const popoverTrigger = container.querySelector('.popover-trigger');
        const popover = popoverTrigger.querySelector('.popover');
        // Toggle the respective popover on trigger click
        popoverTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent the document click from immediately closing it
            popover.classList.toggle('opti_show_popover');
        });
        // Hide popovers when clicking outside
        document.addEventListener('click', function (e) {
            if (!popoverTrigger.contains(e.target)) {
                container.querySelectorAll('.popover').forEach((popover) => {
                    popover.classList.remove('opti_show_popover');
                });
            }
        });
        container.querySelector('div').append(enrollCta);
        wrapper.append(container);
    };
    const createEnrollCta = () => {
        const enrollCta = document.createElement('div');
        enrollCta.classList.add('opti_ultimate_wiring__enroll');
        enrollCta.innerHTML = `<div class="opti_ultimate_wiring__enroll">
										<div class="youll-learn-buttons opti_ultimate_wiring__enrollBtn">
											<a class="btn btn-primary" href="/hpa-wiring-starter-package/purchase" data-backurl="/ultimate-wiring-package/purchase" data-ga_productinfo="{&quot;id&quot;:&quot;4301&quot;,&quot;name&quot;:&quot;Wiring Fundamentals&quot;,&quot;price&quot;:&quot;49.50&quot;,&quot;quantity&quot;:1,&quot;category&quot;:&quot;DealsPage&quot;}" data-gtm-products="[{&quot;id&quot;:&quot;4301&quot;,&quot;name&quot;:&quot;Wiring Fundamentals&quot;,&quot;price&quot;:&quot;49.50&quot;,&quot;category&quot;:&quot;DealsPage&quot;,&quot;brand&quot;:&quot;&quot;,&quot;variant&quot;:&quot;&quot;}]">
												Enroll Now
											</a>     
										</div>
										<div class="opti_ultimate_wiring__ppLabel">
											<div class="popover-trigger">
													${icons.infoCircled} 
												<div class="popover opti-popover opti_payment_popover fade bottom in" role="tooltip">
														${eightPaymentsHtml}
												</div>
											</div>
											<p class="opti_vip_redesign__paymentPlan_text">Payment plans available. </p>
										</div>	
										<div class="payment-icons opti_payment_icons">
											<img src="/resources/themes/base/production/images/payment-icons.png">
										</div>	
									</div>`;
        const popoverTrigger = enrollCta.querySelector('.popover-trigger');
        const popover = popoverTrigger.querySelector('.popover');
        // Toggle the respective popover on trigger click
        popoverTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent the document click from immediately closing it
            popover.classList.toggle('opti_show_popover');
        });
        // Hide popovers when clicking outside
        document.addEventListener('click', function (e) {
            if (!popoverTrigger.contains(e.target)) {
                enrollCta.querySelectorAll('.popover').forEach((popover) => {
                    popover.classList.remove('opti_show_popover');
                });
            }
        });
        return enrollCta;
    };
    const createTable = () => {
        const enrollCta = createEnrollCta();
        const tableHtml = `<table id="opti_price_comparison_table">
								<tr>
									<th></th>
									<th>${icons.hpa}</th>
									<th>"Traditional"</br>Education</th>
								</tr>
								${tableData
            .map(({ feature, included }) => `<tr>
											<td>${feature}</td>
											<td>${icons.tick}</td>
											<td>${included ? icons.tick : icons.cross}</td>										
										</tr>`)
            .join('')}
							
								<tr>
									<td>Price (USD)</td>
									<td>$299 <p class="opti_table_cell_subtext">"Ultimate wiring</br> package" price</p></td>
									<td>$1,000+ <p class="opti_table_cell_subtext">minimum</p></td>
								</tr>
							</table>`;
        const tableContainer = document.createElement('div');
        tableContainer.id = 'opti_table_wrapper_uw';
        tableContainer.innerHTML = `<div class="opti_container_inner">
															<h3>Why Learn with HPA?</h3>
															<p class="opti_table_subtext">apart from just because <i>we're</i> cool.</p>
																${tableHtml}
															
														</div>`;
        tableContainer.querySelector('.opti_container_inner').append(enrollCta);
        return tableContainer;
    };
    const createEverythingYouNeed = () => {
        const enrollCta = createEnrollCta();
        const everythingYouNeed = document.createElement('div');
        everythingYouNeed.classList.add('opti_everything_you_need');
        everythingYouNeed.setAttribute('id', 'opti_everything_you_need_section');
        everythingYouNeed.innerHTML = `<div class="container-fluid">
											<div class="col-sm-12">
												<div class="section-1">
													<div class="row">
														<h2 class="section-title">Everything you need to get started</h2>
														<p class="section-subtitle">Keen to get wiring? Grab our ultimate wiring package!<br> No experience needed.</p>
													</div>
												</div>
											</div>
										</div>`;
        const youllLearnContainer = everythingYouNeed.querySelector('.row');
        insertYoullLearnUpdate(youllLearnContainer);
        return everythingYouNeed;
    };
    const createWhyLearn = () => {
        const whyLearn = document.createElement('div');
        whyLearn.setAttribute('id', 'opti_why_learn_motorsport');
        whyLearn.innerHTML = `<h3 class="opti_why_learn_motorsport__heading">Why learn motorsport wiring?</h3>
								<p class="opti_why_learn_motorsport__sub">apart from just because it's cool.</p>
								<p class="opti_why_learn_motorsport__info">Learning to design and build your own EFI wiring harness can be immensely</br> rewarding,
								and help you to keep your cabling clean, efficient and safe.</p>
							`;
        return whyLearn;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
