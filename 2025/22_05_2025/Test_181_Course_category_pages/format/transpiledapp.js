/**
Developed by: Riah
Test name: Test 181 - Course category pages
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-181', 'variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    let courseCards, courseSalesContainer, courseSeries, mainContainers, courseHeading, coreCourses;
    const coursesData = [
        {
            title: '3D Modeling & CAD for Motorsport',
            lessons: 74,
            totalStudents: 12036,
            vipStudents: 7503,
            nonVipStudents: 4533,
        },
        {
            title: 'Aerodynamics Fundamentals',
            lessons: 45,
            totalStudents: 7517,
            vipStudents: 7503,
            nonVipStudents: 14,
        },
        {
            title: 'Bare Minimum Diesel Tuning Knowledge',
            lessons: 5,
            totalStudents: 7520,
            vipStudents: 7503,
            nonVipStudents: 17,
        },
        {
            title: 'Bare Minimum Tuning Knowledge',
            lessons: 6,
            totalStudents: 7542,
            vipStudents: 7503,
            nonVipStudents: 39,
        },
        {
            title: 'Boost Control',
            lessons: 26,
            totalStudents: 12533,
            vipStudents: 7503,
            nonVipStudents: 5030,
        },
        {
            title: 'Brake System Design and Optimization',
            lessons: 46,
            totalStudents: 7962,
            vipStudents: 7503,
            nonVipStudents: 459,
        },
        {
            title: 'CAN Bus Communications Decoded',
            lessons: 58,
            totalStudents: 11468,
            vipStudents: 7503,
            nonVipStudents: 3965,
        },
        {
            title: 'Data Analysis Fundamentals',
            lessons: 83,
            totalStudents: 9034,
            vipStudents: 7503,
            nonVipStudents: 1531,
        },
        {
            title: 'Diesel Tuning Fundamentals',
            lessons: 29,
            totalStudents: 11513,
            vipStudents: 7503,
            nonVipStudents: 4010,
        },
        {
            title: 'EFI Tuning Fundamentals',
            lessons: 55,
            totalStudents: 52598,
            vipStudents: 7503,
            nonVipStudents: 45095,
        },
        {
            title: 'Engine Building Fundamentals',
            lessons: 73,
            totalStudents: 32327,
            vipStudents: 7503,
            nonVipStudents: 24824,
        },
        {
            title: 'Ethanol & Flex Fuel Tuning',
            lessons: 47,
            totalStudents: 9940,
            vipStudents: 7503,
            nonVipStudents: 2437,
        },
        {
            title: 'EV Fundamentals',
            lessons: 40,
            totalStudents: 7783,
            vipStudents: 7503,
            nonVipStudents: 280,
        },
        {
            title: 'Fundamentos de Ajuste EFI',
            lessons: 55,
            totalStudents: 7621,
            vipStudents: 7503,
            nonVipStudents: 118,
        },
        {
            title: 'How to Degree a Cam',
            lessons: 47,
            totalStudents: 16520,
            vipStudents: 7503,
            nonVipStudents: 9017,
        },
        {
            title: 'Introduction to Engine Tuning',
            lessons: 31,
            totalStudents: 18527,
            vipStudents: 7503,
            nonVipStudents: 11024,
        },
        {
            title: 'Launch Control',
            lessons: 26,
            totalStudents: 17953,
            vipStudents: 7503,
            nonVipStudents: 10450,
        },
        {
            title: 'Link G4 Plus Software Tutorial',
            lessons: 74,
            totalStudents: 9053,
            vipStudents: 7503,
            nonVipStudents: 1550,
        },
        {
            title: 'MoTeC M1 Software Tutorial',
            lessons: 85,
            totalStudents: 8303,
            vipStudents: 7503,
            nonVipStudents: 800,
        },
        {
            title: 'Motorsport Fabrication Fundamentals',
            lessons: 68,
            totalStudents: 14347,
            vipStudents: 7503,
            nonVipStudents: 6844,
        },
        {
            title: 'Motorsport Plumbing Systems',
            lessons: 60,
            totalStudents: 7977,
            vipStudents: 7503,
            nonVipStudents: 474,
        },
        {
            title: 'Motorsport Wheel Alignment',
            lessons: 83,
            totalStudents: 11813,
            vipStudents: 7503,
            nonVipStudents: 4310,
        },
        {
            title: 'PDM Installation & Configuration',
            lessons: 46,
            totalStudents: 8791,
            vipStudents: 7503,
            nonVipStudents: 1288,
        },
        {
            title: 'Practical 3D Scanning',
            lessons: 31,
            totalStudents: 7818,
            vipStudents: 7503,
            nonVipStudents: 315,
        },
        {
            title: 'Practical Corner Weighting',
            lessons: 48,
            totalStudents: 9160,
            vipStudents: 7503,
            nonVipStudents: 1657,
        },
        {
            title: 'Practical Diesel Tuning',
            lessons: 52,
            totalStudents: 10657,
            vipStudents: 7503,
            nonVipStudents: 3154,
        },
        {
            title: 'Practical Engine Building',
            lessons: 91,
            totalStudents: 14458,
            vipStudents: 7503,
            nonVipStudents: 6955,
        },
        {
            title: 'Practical Reflash Tuning',
            lessons: 129,
            totalStudents: 20232,
            vipStudents: 7503,
            nonVipStudents: 12729,
        },
        {
            title: 'Practical Standalone Tuning',
            lessons: 196,
            totalStudents: 21804,
            vipStudents: 7503,
            nonVipStudents: 14301,
        },
        {
            title: 'Practical TIG Welding',
            lessons: 52,
            totalStudents: 10511,
            vipStudents: 7503,
            nonVipStudents: 3008,
        },
        {
            title: 'Practical Transmission Tuning',
            lessons: 38,
            totalStudents: 7521,
            vipStudents: 7503,
            nonVipStudents: 18,
        },
        {
            title: 'Practical Wiring - Club Level',
            lessons: 37,
            totalStudents: 15448,
            vipStudents: 7503,
            nonVipStudents: 7945,
        },
        {
            title: 'Practical Wiring - Professional Motorsport',
            lessons: 49,
            totalStudents: 10856,
            vipStudents: 7503,
            nonVipStudents: 3353,
        },
        {
            title: 'Professional Motorsport Data Analysis',
            lessons: 63,
            totalStudents: 7929,
            vipStudents: 7503,
            nonVipStudents: 426,
        },
        {
            title: 'Race Driving Fundamentals',
            lessons: 54,
            totalStudents: 9744,
            vipStudents: 7503,
            nonVipStudents: 2241,
        },
        {
            title: 'Road Tuning',
            lessons: 67,
            totalStudents: 9007,
            vipStudents: 7500,
            nonVipStudents: 1507,
        },
        {
            title: 'Suspension Tuning & Optimization',
            lessons: 38,
            totalStudents: 10763,
            vipStudents: 7503,
            nonVipStudents: 3260,
        },
        {
            title: 'Understanding AFR',
            lessons: 36,
            totalStudents: 23679,
            vipStudents: 7503,
            nonVipStudents: 16176,
        },
        {
            title: 'Variable Cam Control Tuning',
            lessons: 48,
            totalStudents: 8627,
            vipStudents: 7503,
            nonVipStudents: 1124,
        },
        {
            title: 'Wheel and Tyre Fitment',
            lessons: 35,
            totalStudents: 7681,
            vipStudents: 7503,
            nonVipStudents: 178,
        },
        {
            title: 'WinOLS Mastery: Map Identification & Editing',
            lessons: 59,
            totalStudents: 8458,
            vipStudents: 7503,
            nonVipStudents: 955,
        },
        {
            title: 'Wiring Fundamentals',
            lessons: 66,
            totalStudents: 25109,
            vipStudents: 7503,
            nonVipStudents: 17606,
        },
    ];
    const copyForCategoryPages = {
        'tuning starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-starter-package/',
            courseLandingPages: ['https://www.hpacademy.com/courses/efi-tuning/'],
            savingCopy: '60%',
            price: '417',
            packageName: `Tuning 'How to' Starter Package`,
            coursesIncluded: [
                'EFI Tuning Fundamentals',
                'Understanding AFR',
                'Practical Standalone Tuning',
                'Practical Reflash Tuning',
            ],
            numOfCourses: '4',
            totalValue: '$1102.00',
        },
        'wiring starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-wiring-starter-package/',
            courseLandingPages: ['https://www.hpacademy.com/courses/learn-motorsport-wiring/'],
            savingCopy: '60%',
            price: '299',
            packageName: 'The Ultimate Wiring Package',
            coursesIncluded: ['Wiring Fundamentals', 'Practical Wiring - Club Level'],
            numOfCourses: '2',
            totalValue: '$784.00',
        },
        'engine building starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-engine-building-starter-package/',
            courseLandingPages: ['https://www.hpacademy.com/courses/learn-how-to-build-engines/'],
            savingCopy: '60%',
            price: '299',
            packageName: 'Engine Building Starter Package',
            coursesIncluded: ['Engine Building Fundamentals', 'Practical Engine Building', 'How to Degree a Cam'],
            numOfCourses: '3',
            totalValue: '$833.00',
        },
        'diesel tuning starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-diesel-tuning-starter-package/',
            courseLandingPages: ['https://www.hpacademy.com/courses/diesel-tuning/'],
            savingCopy: '60%',
            price: '299',
            packageName: 'The Ultimate Diesel Tuning Package',
            coursesIncluded: ['Diesel Tuning Fundamentals', 'Practical Diesel Tuning'],
            numOfCourses: '2',
            totalValue: '$814.00',
        },
        'track day package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-track-day-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/suspension-and-car-setup/',
                'https://www.hpacademy.com/courses/driver-training-and-improvement/',
            ],
            savingCopy: '50%',
            price: '397',
            packageName: 'Track Day Package',
            coursesIncluded: [
                'Race Driving Fundamentals',
                'Motorsport Wheel Alignment',
                'Practical Corner Weighting',
                'Data Analysis Fundamentals',
            ],
            numOfCourses: '4',
            totalValue: '$912.00',
        },
        'fabrication package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-fabrication-starter-package/',
            courseLandingPages: ['https://www.hpacademy.com/courses/motorsport-fabrication-and-design/'],
            savingCopy: '60%',
            price: '299',
            packageName: 'The Ultimate Motorsport Fabrication Education Package',
            coursesIncluded: ['Motorsport Fabrication Fundamentals', 'Practical TIG Welding'],
            numOfCourses: '2',
            totalValue: '$755.00',
        },
    };
    const icons = {
        students: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/students-2.png',
        play: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/play-button%201.png',
        heroTick: `<img src="/assets/Content_Sections/1dff896ea1/DLP_Icon_Green_Tick__ScaleWidthWzE2XQ.png" alt="Applicable to all cars">`,
        refresh: `<img  class="opti_refresh_icon" alt="frequency icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/refresh%201.png"/>`,
        dollarSign: `<img class="opti_dollar_sign" alt="dollar sign icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/dollar_sign_icon.png"/>`,
    };
    const myInterval = setInterval(() => {
        courseCards = [...document.querySelectorAll('.courseSeries__preview')];
        mainContainers = [...document.querySelectorAll('.courseSalesContainer .container-fluid')];
        coreCourses =
            document.getElementById('core-courses') ||
                document.querySelector('.courseSalesContainer .container-fluid:first-child .courseSeries:first-child');
        courseHeading = coreCourses === null || coreCourses === void 0 ? void 0 : coreCourses.querySelector('h1');
        courseSalesContainer = document.querySelector('.courseSalesContainer');
        courseSeries = [...document.querySelectorAll('.courseSeries')];
        if (courseCards.length &&
            courseSeries.length &&
            mainContainers.length &&
            coreCourses &&
            courseHeading &&
            courseSalesContainer) {
            clearInterval(myInterval);
            optiInit();
        }
    }, 300);
    const optiInit = () => {
        let upsellBlock;
        const categoryCourses = [];
        const currentUrl = window.location.href;
        const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
        const key = Object.keys(copyForCategoryPages).find((course) => copyForCategoryPages[course].courseLandingPages.some((page) => page.includes(baseUrl) // Compare against the base URL only
        ));
        if (document.getElementById('data-analysis-and-improvement')) {
            courseSalesContainer.classList.add('opti_driver_training_bg');
        }
        courseHeading.innerText += ' Courses';
        coreCourses.insertAdjacentHTML('beforeend', `<div class="opti_courseSeries__info"><p>Learn from <strong>Start to Finish</strong> with this selection of courses. Suitable for 
										<strong>any skill level, and any ECU/Engine combination</strong></p></div>`);
        coreCourses.append(createCourseTicks());
        if (key) {
            const matchingCourse = copyForCategoryPages[key];
            upsellBlock = createUpsellBlock(matchingCourse, key);
            // classlist to handle styling of background
            courseSalesContainer.classList.add(`opti_$${!1}{key.split(' ').join('_')}`);
        }
        // init course cards
        courseCards.forEach((card) => {
            let matchingCourseInfo;
            const courseTitle = card.querySelector('.courseSeries__preview__title').innerText;
            const coursePrice = card.querySelector('.courseSeries__preview__price h4').innerText.split('USD')[0];
            const videoMask = card.querySelector('.video-mask');
            const viewCourseBtn = card.querySelector('.btn-primary');
            const defaultBtn = card.querySelector('.btn-default');
            const bannerTitle = card.querySelector('.courseSeries__preview__banner h4');
            if (bannerTitle) {
                bannerTitle.innerText = 'Start here for FREE';
            }
            if (defaultBtn) {
                viewCourseBtn.href = defaultBtn.href;
            }
            viewCourseBtn.innerText = 'View Course';
            matchingCourseInfo = coursesData.find((course) => course.title.toLowerCase().trim() === courseTitle.toLowerCase().trim());
            videoMask.after(createCardInfo(matchingCourseInfo, coursePrice));
            categoryCourses.push(matchingCourseInfo);
        });
        const mostPopularCard = getMostPopularCard(categoryCourses);
        if (courseCards.length > 1) {
            insertPopularLabel(mostPopularCard);
        }
        if (document.getElementById('software-tutorials')) {
            // insert new container
            insertNewMainContainer();
            // reassign main containers
            mainContainers = [...document.querySelectorAll('.courseSalesContainer .container-fluid')];
        }
        // change to a three column layout
        changeLayout();
        if (upsellBlock) {
            mainContainers[0].append(upsellBlock);
        }
    };
    const createCardInfo = ({ title, lessons, totalStudents }, coursePrice) => {
        const cardInfo = document.createElement('div');
        cardInfo.classList.add('opti_course_card_info');
        cardInfo.innerHTML = `<div class="opti_course_card_title">
									<h3>$${!1}{title}</h3>
									<div class="opti_course_card_title__price">
										<h4>$${!1}{coursePrice}</h4>
									</div>
								</div>
								<div class="opti_course_card_details">
									<p><img alt="students icon" src="$${!1}{icons.students}"><span>$${!1}{Number(totalStudents).toLocaleString()} Students Enrolled</span></p>
									<p class="opti_course_video_lessons_text"><img alt="video icon" src="$${!1}{icons.play}"><span>$${!1}{lessons} Video Lessons</span></p>
								</div>
								`;
        return cardInfo;
    };
    const insertNewMainContainer = () => {
        const positionEl = document.querySelector('.container-fluid:has(#advanced-tuning-topics)');
        const softwareTutorialSection = document.getElementById('software-tutorials');
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('container-fluid');
        positionEl.after(mainContainer);
        mainContainer.append(softwareTutorialSection);
    };
    const getMostPopularCard = (categoryCourses) => {
        const mostPopularCourse = categoryCourses.reduce((a, c) => (a.totalStudents > c.totalStudents ? a : c)).title;
        const mostPopularCard = courseCards.find((card) => {
            const title = card.querySelector('.courseSeries__preview__title');
            return title.innerText.trim() === mostPopularCourse;
        });
        return mostPopularCard;
    };
    const insertPopularLabel = (mostPopularCard) => {
        if (mostPopularCard) {
            // add popular label
            const priceSect = mostPopularCard.querySelector('.opti_course_card_title__price');
            priceSect.insertAdjacentHTML('beforeend', `<div class="opti_popular_course_label"><p>Most Popular</p></div>`);
        }
    };
    const createCourseTicks = () => {
        const banner = document.createElement('div');
        banner.classList.add('opti_course_ticks_banner');
        banner.innerHTML = `<div class="opti_course_tick">$${!1}{icons.heroTick}
                               <p>Lifetime access</p>
        </div>
		<div class="opti_course_tick">$${!1}{icons.dollarSign}
                               <p>60-day guarantee</p>
        </div>
			<div class="opti_course_tick">$${!1}{icons.refresh}
                               <p>Frequently updated</p>
        </div>
		`;
        return banner;
    };
    const popoverInit = (popoverTrigger, popover) => {
        popoverTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            popover.classList.toggle('opti_show_popover');
        });
        document.addEventListener('click', function (e) {
            if (!popover.contains(e.target) && !popoverTrigger.contains(e.target)) {
                popover.classList.remove('opti_show_popover');
            }
        });
    };
    const changeLayout = () => {
        courseSeries.forEach((series) => {
            restructureToThreeColsPerRow(series);
        });
        mainContainers.forEach((container) => {
            repackVisibleCols(container);
        });
        matchCourseSeriesPreviewHeights();
    };
    const getEightPaymentsVal = (price) => {
        const priceNum = parseFloat(price);
        const eightPaymentsVal = (priceNum / 8).toFixed(2);
        return eightPaymentsVal;
    };
    const generatePriceBlockHtml = (price, totalValue) => {
        const priceBlockHtml = `<div class="col-sm-12 col-md-6 tittleAndPriceBlock__price">
			<h3 class="price"><span class="new-price">$$${!1}{price} USD</span></h3>
			<p class="opti_total_value">TOTAL VALUE <span>$${!1}{totalValue}</span></p>
			<span class="titleAndPriceBlock__paymentPlanLink">
				<div
					class="popover fade bottom"
					role="tooltip"
					id="opti_modal_popover_upsell_block">
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
						Simply select your preferred payment frequency and amount when checking out, then enjoy immediate access to
						your course.
					</div>
				</div>
			</span>
		</div>`;
        return priceBlockHtml;
    };
    const createUpsellBlock = ({ packageToLinkTo, savingCopy, coursesIncluded, price, totalValue }, courseName) => {
        const upsellBlock = document.createElement('div');
        upsellBlock.setAttribute('id', 'opti_upsell_block');
        const eightPaymentsVal = getEightPaymentsVal(price);
        upsellBlock.innerHTML = `	<span class="opti_slant corner-badge">Save $${!1}{savingCopy}</span>
								<span class="opti-upsell-cross opti_modal_close_icon" data-dismiss="modal">×</span>
					
					
								<div class="opti_upsell_content">
									<h4 class="opti-upsell-heading">Bundle these courses together and save!</h4>
									<div class="opti_upsell_content__includes">

										<p>Upgrade today for instant access to our $${!1}{coursesIncluded
            .map((course, i) => {
            return i === coursesIncluded.length - 1 ? `& $${!1}{course},` : `$${!1}{course},`;
        })
            .join(' ')} plus 24 months of Gold Membership.
											<a href="$${!1}{packageToLinkTo}" class="opti_upsell_content__includes__link">See what's included here</a>
										</p>
										
									</div>
								</div>
								<div class="opti_upsell_content__priceBlock">
									$${!1}{generatePriceBlockHtml(price, totalValue)}
									<div class="opti_upsell_content__cta">
											<a href="$${!1}{packageToLinkTo}?autoSubmit=true&OpenPaymentPlanOptions=1" class="btn btn-primary btn-large">SAVE NOW</a>
									</div>
									<p class="opti_price_subtext"><i>or use our <span class="opti_popover_trigger">payment plan</span> and break it into 8 payments of just $$${!1}{eightPaymentsVal}</i></p>
									
								</div>`;
        const popoverTrigger = upsellBlock.querySelector('.opti_popover_trigger');
        const popover = upsellBlock.querySelector('#opti_modal_popover_upsell_block');
        popoverInit(popoverTrigger, popover);
        const closeIcon = upsellBlock.querySelector('.opti_modal_close_icon');
        closeIcon.onclick = () => {
            upsellBlock.remove();
        };
        return upsellBlock;
    };
    function restructureToThreeColsPerRow(container) {
        if (!container)
            return;
        // Step 1: Collect all relevant column elements
        const allCols = [...container.querySelectorAll('.col-xs-12:has(.courseSeries__preview)')];
        // Step 2: Remove existing rows
        const rows = container.querySelectorAll('.row.equal-height');
        rows.forEach((row) => container.removeChild(row));
        // Step 3: Update class and rebuild rows with 3 cols per row
        for (let i = 0; i < allCols.length; i += 3) {
            const row = document.createElement('div');
            row.className = 'row equal-height';
            // Left spacer (you'll hide this in CSS if needed)
            const leftSpacer = document.createElement('div');
            leftSpacer.className = 'col-md-1 opti_spacer_hide';
            row.appendChild(leftSpacer);
            // Add up to 3 cols
            for (let j = 0; j < 3; j++) {
                const col = allCols[i + j];
                if (col) {
                    // col.classList.remove('col-md-5');
                    // col.classList.remove('col-md-6');
                    // // col.classlist.remove('col-sm-5');
                    // // col.classlist.add('col-sm-6');
                    // col.classList.add('col-md-4');
                    col.className = 'col-xs-12 col-sm-6 col-md-4';
                    row.appendChild(col);
                }
            }
            // Right spacer
            const rightSpacer = document.createElement('div');
            rightSpacer.className = 'col-md-1 opti_spacer_hide';
            row.appendChild(rightSpacer);
            // Append the new row
            container.appendChild(row);
        }
    }
    function repackVisibleCols(container) {
        if (!container)
            return;
        // Step 1: Collect all visible columns inside this container
        const allVisibleCols = [...container.querySelectorAll('.col-md-4')].filter((col) => col.offsetParent !== null); // Only keep visible ones
        // Step 2: Remove all existing row.equal-height nodes
        const existingRows = container.querySelectorAll('.row.equal-height');
        existingRows.forEach((row) => row.remove());
        // Step 3: Rebuild rows with exactly 3 visible columns per row
        for (let i = 0; i < allVisibleCols.length; i += 3) {
            const row = document.createElement('div');
            row.className = 'row equal-height';
            // Optional: Add left spacer
            const leftSpacer = document.createElement('div');
            leftSpacer.className = 'col-md-1 opti_spacer_hide';
            row.appendChild(leftSpacer);
            for (let j = 0; j < 3; j++) {
                const col = allVisibleCols[i + j];
                if (col) {
                    row.appendChild(col);
                }
            }
            // Optional: Add right spacer
            const rightSpacer = document.createElement('div');
            rightSpacer.className = 'col-md-1 opti_spacer_hide';
            row.appendChild(rightSpacer);
            container.appendChild(row);
        }
    }
    function matchCourseSeriesPreviewHeights() {
        const rows = document.querySelectorAll('.row.equal-height');
        rows.forEach((row) => {
            const previewDivs = Array.from(row.querySelectorAll('.col-md-4 .courseSeries__preview'));
            // Reset heights first in case it was previously set
            previewDivs.forEach((div) => (div.style.height = 'auto'));
            // Find the tallest
            const maxHeight = Math.max(...previewDivs.map((div) => div.offsetHeight));
            // Apply the max height to all
            previewDivs.forEach((div) => (div.style.height = `$${!1}{maxHeight}px`));
        });
    }
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

