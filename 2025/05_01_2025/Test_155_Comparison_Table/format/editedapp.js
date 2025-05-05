/**
Developed by: Riah
Test name: Test 155 - Comparison Table
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-155', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const positionEl = document.querySelector('.CourseEntry .courses-info-box-wrapper') ||
            document.getElementById('vip-courses-future') ||
            document.querySelector('.main-content:has(.video-mask) h3');
        const coursePrice = document.querySelector('.new-price') ||
            document.querySelector('.total span') ||
            document.querySelector('.price');
        const enrollBtn = document.querySelector('.btn-wrapper .btn');
        if (positionEl && coursePrice && enrollBtn) {
            clearInterval(myInterval);
            optiInit();
        }
    }, 300);
    const courseData = {
        'Tuning Starter Package': {
            price: '208.50',
            numOfCourses: '4',
            pageLink: 'https://www.hpacademy.com/hpa-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/introduction-to-engine-tuning/',
                'https://www.hpacademy.com/courses/efi-tuning-fundamentals/',
                'https://www.hpacademy.com/courses/understanding-afr/',
                'https://www.hpacademy.com/courses/practical-reflash-tuning/',
                'https://www.hpacademy.com/courses/practical-standalone-tuning/',
            ],
        },
        'Wiring Starter Package': {
            price: '149.50',
            numOfCourses: '2',
            pageLink: 'https://www.hpacademy.com/hpa-wiring-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/wiring-fundamentals/',
                'https://www.hpacademy.com/courses/practical-harness-construction-club-level/',
            ],
        },
        'Engine Building Starter Package': {
            price: '149.50',
            numOfCourses: '3',
            pageLink: 'https://www.hpacademy.com/hpa-engine-building-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/how-to-degree-a-cam/',
                'https://www.hpacademy.com/courses/practical-engine-building/',
                'https://www.hpacademy.com/courses/engine-building-fundamentals/',
            ],
        },
        'Diesel Tuning Starter Package': {
            price: '149.50',
            numOfCourses: '2',
            pageLink: 'https://www.hpacademy.com/hpa-diesel-tuning-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/diesel-tuning-fundamentals/',
                'https://www.hpacademy.com/courses/practical-diesel-tuning/',
            ],
        },
        'Track Day Package': {
            price: '397',
            numOfCourses: '4',
            pageLink: 'https://www.hpacademy.com/hpa-track-day-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/motorsport-wheel-alignment-fundamentals/',
                'https://www.hpacademy.com/courses/practical-corner-weighting/',
                'https://www.hpacademy.com/courses/race-driving-fundamentals/',
                'https://www.hpacademy.com/courses/data-analysis-fundamentals/',
            ],
        },
        'Fabrication Package': {
            price: '149.50',
            numOfCourses: '2',
            pageLink: 'https://www.hpacademy.com/hpa-fabrication-starter-package/',
        },
        'VIP Package': {
            price: '1997',
            numOfCourses: '39+',
            pageLink: 'https://www.hpacademy.com/vip-package/',
            courseLandingPages: [],
        },
    };
    const icons = {
        tickIcon: `https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png`,
        crossIcon: `https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/delete-icon.png`,
    };
    const tableData = [
        { feature: 'Start Learning Instantly', included: false },
        { feature: 'Access Anytime', included: false },
        { feature: 'Applicable to All Vehicles', included: true },
        { feature: 'Constantly Updated', included: true },
        { feature: 'Lifetime Access', included: false },
        { feature: 'Money Back Guarantee', included: false },
        // { feature: '39 Courses - One price', included: false },
    ];
    const optiInit = () => {
        const currentUrl = window.location.href;
        const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
        const key = Object.keys(courseData).find((course) => { var _a, _b; return courseData[course].pageLink === baseUrl || ((_b = (_a = courseData[course]) === null || _a === void 0 ? void 0 : _a.courseLandingPages) === null || _b === void 0 ? void 0 : _b.includes(baseUrl)); } // Compare against the base URL only
        );
        const enrollBtn = document.querySelector('.btn-wrapper .btn');
        const isCoursePage = currentUrl.includes('courses');
        const isVipPage = currentUrl.includes('vip');
        const courseName = key || document.querySelector('h2').innerText;
        const coursePriceEL = document.querySelector('.new-price') ||
            document.querySelector('.total span') ||
            document.querySelector('.price');
        const coursePrice = coursePriceEL === null || coursePriceEL === void 0 ? void 0 : coursePriceEL.innerText.split(' ')[0];
        const tableHtml = createTable(isCoursePage, courseName, key, coursePrice);
        const tableContainer = document.createElement('div');
        tableContainer.id = 'opti_table_wrapper';
        tableContainer.innerHTML = `<div class="opti_container_inner">
										<h3>Why Learn with HPA?</h3>
											${tableHtml}
									</div>`;
        const priceBtn = createPriceBtn(enrollBtn);
        tableContainer.querySelector('.opti_container_inner').appendChild(priceBtn);
        let positionEl;
        if (isCoursePage) {
            positionEl = document.querySelector('.CourseEntry .courses-info-box-wrapper');
        }
        else if (isVipPage) {
            positionEl = document.getElementById('vip-courses-future');
        }
        else {
            positionEl = document.querySelector('.main-content:has(.video-mask) h3');
        }
        positionEl.insertAdjacentElement('beforebegin', tableContainer);
    };
    const createTable = (isCoursePage, courseName, key = undefined, price) => {
        let numOfCourses = undefined;
        if (key) {
            numOfCourses = courseData[key].numOfCourses;
        }
        const tableHtml = `<table id="opti_price_comparison_table">
								<tr>
									<th></th>
									<th>Traditional Education</th>
									<th>${courseName}</th>
								</tr>
								${tableData
            .map(({ feature, included }) => `<tr>
											<td>${feature}</td>
											<td>${included
            ? `<img src="${icons.tickIcon}" alt="tick icon">`
            : `<img src="${icons.crossIcon}" alt="cross icon">`}</td>
											<td>${`<img src="${icons.tickIcon}" alt="tick icon">`}</td>
										</tr>`)
            .join('')}
								
									${!isCoursePage
            ? `	<tr>
												<td>${numOfCourses} Courses</td>
												<td><img src="${icons.crossIcon}" alt="cross icon"></td>
												<td><img src="${icons.tickIcon}" alt="tick icon"></td>
											</tr>
										`
            : ''}
							
								<tr>
									<td>Price</td>
									<td>$10,000+</td>
									<td>Only ${price}</td>
								</tr>
							</table>`;
        return tableHtml;
    };
    const createPriceBtn = (enrollBtn) => {
        var _a;
        const eightPaymentsTxt = (_a = enrollBtn.querySelector('span')) === null || _a === void 0 ? void 0 : _a.innerText;
        const ctaWrapper = document.createElement('div');
        ctaWrapper.classList.add('cta-wrapper');
        const ctaHtml = `<div class="sidebar col-sm-4 tittleAndPriceBlock">
			<div class="row">
				<div class="col-sm-12">
					<div class="btn-wrapper">
						<button
							class="btn btn-primary btn-large js-addProductDetail js-ga_addProductToCart loggedIn-starterPackage">
							Enroll Now

							<br />
							<span>${eightPaymentsTxt ? eightPaymentsTxt : ''}</span>
						</button>
						
					</div>

					<div class="payment-icons">
						<img src="/resources/themes/base/production/images/payment-icons.png" />
					</div>
				</div>
			</div>

			<div class="tittleAndPriceBlock__points">
				<h5 class="paymentPlan">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="228 121.3 504 317.3" class="svg-payment">
						<path
							d="M694.7 121.3H265.3c-20.5 0-37.3 16.8-37.3 37.3v242.7c0 20.5 16.8 37.3 37.3 37.3h429.3c20.5 0 37.3-16.8 37.3-37.3V158.7c.1-20.6-16.7-37.4-37.2-37.4zm0 37.4V196H265.3v-37.3h429.4zM265.3 401.3V270.7h429.3v130.7H265.3z"></path>
						<path d="M321.3 308h205.3v37.3H321.3z"></path>
					</svg>

					Course Access for Life
				</h5>

				<h5 class="guarantee">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="280.3 63.5 401.3 434.9" class="svg-like">
						<path
							d="M666.7 306.1c1.9 5.6 1.9 11.2 1.9 18.7 0 13.1-3.7 26.1-9.3 37.3v11.2c0 16.8-5.6 33.6-14.9 46.7 0 48.5-33.6 78.4-82.1 78.4h-31.8c-37.3 0-70.9-11.2-106.4-22.4-7.5-1.9-28-11.2-35.5-11.2h-74.7c-18.7 0-33.6-14.9-33.6-33.6V265.1c0-18.7 14.9-33.6 33.6-33.6h70.9c9.3-7.5 28-29.9 35.5-41.1 9.3-11.2 18.7-22.4 28-33.6 14.9-16.8 7.5-57.9 33.6-84 5.6-5.6 14.9-9.3 24.3-9.3 28 0 52.3 9.3 65.3 35.5 7.5 16.8 9.3 31.7 9.3 48.5 0 18.7-5.6 33.6-13.1 50.4h46.7c35.5 0 67.2 29.9 67.2 67.2-1.9 13-5.6 28-14.9 41zm-336 89.6c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8zm281.8-166.1H521c0-29.9 24.3-52.3 24.3-84 0-29.9-5.6-50.4-41.1-50.4-16.8 16.8-7.5 56-33.6 84-7.5 7.5-13.1 14.9-20.5 24.3-11.2 14.9-42.9 59.7-63.5 59.7h-7.5v166.1h7.5c14.9 0 39.2 9.3 52.3 14.9 28 9.3 57.9 18.7 89.6 18.7h31.7c29.9 0 50.4-11.2 50.4-42.9 0-5.6 0-9.3-1.9-14.9 11.2-5.6 16.8-20.5 16.8-33.6 0-5.6-1.9-13.1-5.6-18.7 9.3-7.5 13.1-18.7 13.1-31.7 0-7.5-3.7-20.5-9.3-26.1 13.1 0 18.7-24.3 18.7-33.6 3.7-15-11.2-31.8-29.9-31.8z"></path>
					</svg>

					60 day money back guarantee
				</h5>
			</div>
		</div>`;
        ctaWrapper.innerHTML = ctaHtml;
        const ctaBtn = ctaWrapper.querySelector('.btn');
        ctaBtn.onclick = () => {
            enrollBtn.click();
        };
        return ctaWrapper;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

