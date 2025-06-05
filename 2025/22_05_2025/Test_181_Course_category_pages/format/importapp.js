/**
Developed by: Riah
Test name: Test 181 - Course category pages
**/
(() => {
    'use strict';
    let courseCards, twoCardRowCols, rowArr, courseSeries;
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
    const icons = {
        students: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/students-2.png',
        play: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/play-button%201.png',
    };
    const myInterval = setInterval(() => {
        courseCards = [...document.querySelectorAll('.courseSeries__preview')];
        twoCardRowCols = [...document.querySelectorAll('.col-md-5:not(.copyright)')];
        rowArr = [...document.querySelectorAll('.site-main .row.equal-height')];
        courseSeries = [...document.querySelectorAll('.courseSeries')];
        if (courseCards.length && twoCardRowCols && rowArr.length && courseSeries.length) {
            clearInterval(myInterval);
            optiInit();
        }
    }, 300);
    const optiInit = () => {
        const categoryCourses = [];
        courseCards.forEach((card) => {
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
            const matchingCourseInfo = coursesData.find((course) => course.title.toLowerCase().trim() === courseTitle.toLowerCase().trim());
            videoMask.after(createCardInfo(matchingCourseInfo, coursePrice));
            categoryCourses.push(matchingCourseInfo);
        });
        const mostPopularCourse = categoryCourses.reduce((a, c) => (a.totalStudents > c.totalStudents ? a : c)).title;
        const mostPopularCard = courseCards.find((card) => {
            const title = card.querySelector('.courseSeries__preview__title');
            console.log(title.innerText.trim());
            return title.innerText.trim() === mostPopularCourse;
        });
        if (mostPopularCard) {
            // add popular label
            const priceSect = mostPopularCard.querySelector('.opti_course_card_title__price');
            priceSect.insertAdjacentHTML('beforeend', `<div class="opti_popular_course_label"><p>Most Popular</p></div>`);
        }
        // get every vide card
        //
        courseSeries.forEach((series) => {
            restructureToThreeColsPerRow(series);
        });
    };
    const createCardInfo = ({ title, lessons, totalStudents }, coursePrice) => {
        const cardInfo = document.createElement('div');
        cardInfo.classList.add('opti_course_card_info');
        cardInfo.innerHTML = `<div class="opti_course_card_title">
									<h3>${title}</h3>
									<div class="opti_course_card_title__price">
										<h4>${coursePrice}</h4>
									</div>
								</div>
								<div class="opti_course_card_details">
									<p><img alt="students icon" src="${icons.students}"><span>${Number(totalStudents).toLocaleString()} Students Enrolled</span></p>
									<p><img alt="video icon" src="${icons.play}"><span>${lessons} Video Lessons</span></p>
								</div>
								`;
        return cardInfo;
    };
    const shuffleAlongColumns = (rowArr) => {
        let threeRowClass = 'col-xs-12 col-sm-6 col-md-4';
        twoCardRowCols.forEach((col) => (col.className = threeRowClass));
        rowArr.forEach((row, i) => {
            var _a;
            const lastBlock = (_a = [...row.querySelectorAll('.col-md-5:not(#opti_starter_block)')]) === null || _a === void 0 ? void 0 : _a[1];
            const rowBelow = rowArr[i + 1];
            if (lastBlock) {
                if (rowBelow) {
                    const rowBelowFirstCol = rowBelow.querySelector('.col-md-1');
                    rowBelowFirstCol.insertAdjacentElement('afterend', lastBlock);
                }
                else {
                    const numOfBlocksInRow = [...row.querySelectorAll('.col-md-5')].length;
                    if (numOfBlocksInRow == 2) {
                        return;
                    }
                    const newRow = document.createElement('div');
                    newRow.classList.add('row', 'equal-height');
                    newRow.insertAdjacentHTML('afterbegin', '<div class="col-md-1"></div>');
                    newRow.appendChild(lastBlock);
                    row.insertAdjacentElement('afterend', newRow);
                    return;
                }
            }
        });
        rowArr.forEach((row, i) => {
            var _a;
            const rowBelow = rowArr[i + 1];
            if (rowBelow) {
                const firstColInRowBelow = rowBelow.querySelector('.col-md-5');
                row.append(firstColInRowBelow);
            }
            const lastBlock = (_a = [...row.querySelectorAll('.col-md-5')]) === null || _a === void 0 ? void 0 : _a[1];
        });
    };
    function restructureToThreeColsPerRow(container) {
        // const container = document.querySelector('#advanced-tuning-topics');
        if (!container)
            return;
        // Step 1: Collect all relevant column elements
        const allCols = [...container.querySelectorAll('.col-md-5')];
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
                    col.classList.remove('col-md-5');
                    col.classList.add('col-md-4');
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
    // function restructureToThreeColsPerRow(rowArr: HTMLElement[]) {
    // 	if (!rowArr.length) return;
    // 	// Get the parent container (assumes all rows share the same parent)
    // 	const container = rowArr[0].parentElement;
    // 	if (!container) return;
    // 	// Step 1: Collect all content columns from the provided rows
    // 	const allCols = rowArr.flatMap((row) => Array.from(row.querySelectorAll<HTMLElement>('.col-md-5')));
    // 	// Step 2: Remove the original rows from the DOM
    // 	rowArr.forEach((row) => container.removeChild(row));
    // 	// Step 3: Rebuild layout with 3 columns per row
    // 	for (let i = 0; i < allCols.length; i += 3) {
    // 		const row = document.createElement('div');
    // 		row.className = 'row equal-height';
    // 		// Optional spacer (you can hide with CSS)
    // 		const leftSpacer = document.createElement('div');
    // 		leftSpacer.className = 'col-md-1 opti_spacer_hide';
    // 		row.appendChild(leftSpacer);
    // 		for (let j = 0; j < 3; j++) {
    // 			const col = allCols[i + j];
    // 			if (col) {
    // 				col.classList.remove('col-md-5');
    // 				col.classList.add('col-md-4');
    // 				row.appendChild(col);
    // 			}
    // 		}
    // 		const rightSpacer = document.createElement('div');
    // 		rightSpacer.className = 'col-md-1 opti_spacer_hide';
    // 		row.appendChild(rightSpacer);
    // 		container.appendChild(row);
    // 	}
    // }
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
