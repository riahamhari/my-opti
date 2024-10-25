/**
Developed by: Riah
Test name: Test 150 - Starter Package Upsell (Category pages)v2
**/

(() => {
	'use strict';

	const myInterval = setInterval(() => {
		const firstRow: HTMLElement = document.querySelector('.row.equal-height');
		const rowArr = [...document.querySelectorAll('.site-main .row.equal-height')];
		if (firstRow && rowArr.length && document.body) {
			clearInterval(myInterval);

			// hide to reduce the flickering while dom changes take place
			document.body.style.display = 'none';

			optiInit(firstRow);
			// Use a setTimeout to allow modifications to complete before showing
			setTimeout(() => {
				document.body.style.display = '';
			}, 270);
		}
	});

	const copyForCategoryPages = {
		'tuning starter package': {
			packageToLinkTo: 'https://www.hpacademy.com/hpa-starter-package/',
			courseLandingPages: ['https://www.hpacademy.com/courses/efi-tuning/'],
			savingCopy: 'Save over 60%',
			price: '$417 USD',
			alreadyHasBlock: true,
			packageName: `Tuning 'How to' Starter Package`,
			vimeoEmbed: `<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="/hpa-starter-package/#" data-vimeo-title="HPA Starter Package" data-vimeoid="557409982" style="background-image: url(&quot;https://i.vimeocdn.com/video/1152957103-53cebbcc800d670d4804c878b7fd293e43174b8d012dd92971f4774e183ad168-d_960x540?r=pad&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;">
                    <img src="https://i.vimeocdn.com/video/1152957103-53cebbcc800d670d4804c878b7fd293e43174b8d012dd92971f4774e183ad168-d_960x540?r=pad" width="1140" height="600" alt="" style="display: none;">
                    <span class="play-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>

                    </span>
                </a>`,
			numOfCourses: '4',
		},
		'wiring starter package': {
			packageToLinkTo: 'https://www.hpacademy.com/hpa-wiring-starter-package/',
			courseLandingPages: ['https://www.hpacademy.com/courses/learn-motorsport-wiring/'],
			savingCopy: 'Save over 60%',
			price: '$299 USD',
			alreadyHasBlock: false,
			packageName: 'The Ultimate Wiring Package',
			vimeoEmbed: `<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="/hpa-wiring-starter-package/#" data-vimeo-title="Wiring Starter Package" data-vimeoid="294276966" style="background-image: url(&quot;https://i.vimeocdn.com/video/1084542389-cf58b324c9c4677a6931c41c7c37e111be42623fcf7a8269d4c441e9811cbb68-d_960x540?r=pad&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;">
        <img src="https://i.vimeocdn.com/video/1084542389-cf58b324c9c4677a6931c41c7c37e111be42623fcf7a8269d4c441e9811cbb68-d_960x540?r=pad" width="1140" height="600" alt="" style="display: none;">
        <span class="play-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>

        </span>
    </a>`,
			numOfCourses: '2',
		},
		'engine building starter package': {
			packageToLinkTo: 'https://www.hpacademy.com/hpa-engine-building-starter-package/',
			courseLandingPages: ['https://www.hpacademy.com/courses/learn-how-to-build-engines/'],
			savingCopy: 'Save over 60%',
			price: '$299 USD',
			alreadyHasBlock: false,
			packageName: 'Engine Building Starter Package',
			vimeoEmbed: `<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="/hpa-engine-building-starter-package/#" data-vimeo-title="Engine Building Starter Package" data-vimeoid="229938870" style="background-image: url(&quot;https://i.vimeocdn.com/video/1349796295-36871d6dfbf75a0d3688641ec4dfa06adf97e0e0fda0a4708018d25977ccc275-d_960x540?r=pad&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;">
        <img src="https://i.vimeocdn.com/video/1349796295-36871d6dfbf75a0d3688641ec4dfa06adf97e0e0fda0a4708018d25977ccc275-d_960x540?r=pad" width="1140" height="600" alt="" style="display: none;">
        <span class="play-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>

        </span>
    </a>`,
			numOfCourses: '3',
		},
		'diesel tuning starter package': {
			packageToLinkTo: 'https://www.hpacademy.com/hpa-diesel-tuning-starter-package/',
			courseLandingPages: ['https://www.hpacademy.com/courses/diesel-tuning/'],
			savingCopy: 'Save over 60%',
			price: '$299 USD',
			alreadyHasBlock: true,
			packageName: 'The Ultimate Diesel Tuning Package',
			vimeoEmbed: `<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="/hpa-diesel-tuning-starter-package/#" data-vimeo-title="The Ultimate Diesel Tuning Package" data-vimeoid="394300677" style="background-image: url(&quot;https://i.vimeocdn.com/video/860118533-cd211c7521efa23b741b48812123c452cdf5e977d800b043d78df3395e9c2497-d_960x540?r=pad&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;">
        <img src="https://i.vimeocdn.com/video/860118533-cd211c7521efa23b741b48812123c452cdf5e977d800b043d78df3395e9c2497-d_960x540?r=pad" width="1140" height="600" alt="" style="display: none;">
        <span class="play-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>

        </span>
    </a>`,
			numOfCourses: '2',
		},
		'track day package': {
			packageToLinkTo: 'https://www.hpacademy.com/hpa-track-day-starter-package/',
			courseLandingPages: [
				'https://www.hpacademy.com/courses/suspension-and-car-setup/',
				'https://www.hpacademy.com/courses/driver-training-and-improvement/',
			],
			savingCopy: 'Save over 50%',
			price: '$397 USD',
			alreadyHasBlock: false,
			packageName: 'Track Day Package',
			vimeoEmbed: `<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="/hpa-track-day-starter-package/#" data-vimeo-title="Track Day Package " data-vimeoid="579226829" style="background-image: url(&quot;https://i.vimeocdn.com/video/1198489022-8e6106394944e17fbb28690e7ebd7b60cfe3fa0ca64cf55c1cb738e0bd169217-d_960x540?r=pad&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;">
        <img src="https://i.vimeocdn.com/video/1198489022-8e6106394944e17fbb28690e7ebd7b60cfe3fa0ca64cf55c1cb738e0bd169217-d_960x540?r=pad" width="1140" height="600" alt="" style="display: none;">
        <span class="play-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>

        </span>
    </a>`,
			numOfCourses: '4',
		},

		'fabrication package': {
			packageToLinkTo: 'https://www.hpacademy.com/hpa-fabrication-starter-package/',
			courseLandingPages: ['https://www.hpacademy.com/courses/motorsport-fabrication-and-design/'],
			savingCopy: 'Save over 60%',
			price: '$299 USD',
			alreadyHasBlock: false,
			packageName: 'The Ultimate Motorsport Fabrication Education Package',
			vimeoEmbed: `<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="/hpa-fabrication-starter-package/#" data-vimeo-title="Fabrication Starter Package " data-vimeoid="673340115" style="background-image: url(&quot;https://i.vimeocdn.com/video/1398466820-4939383c651822380a2aa46e6798fa0f2c6391c6ca71b51aa6fe3a4a2924bce7-d_960x540?r=pad&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;">
        <img src="https://i.vimeocdn.com/video/1398466820-4939383c651822380a2aa46e6798fa0f2c6391c6ca71b51aa6fe3a4a2924bce7-d_960x540?r=pad" width="1140" height="600" alt="" style="display: none;">
        <span class="play-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>

        </span>
    </a>`,
			numOfCourses: '2',
		},
	};

	const optiInit = (firstRow) => {
		const rowArr = [...document.querySelectorAll('.site-main .row.equal-height')];
		const currentUrl = window.location.href;

		const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;

		const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

		const matchingCourse = Object.keys(copyForCategoryPages).find((course) =>
			copyForCategoryPages[course].courseLandingPages.some((page) => {
				const normalizedPage = page.endsWith('/') ? page.slice(0, -1) : page;
				return normalizedPage === normalizedBaseUrl;
			})
		);

		if (!matchingCourse) {
			return;
		}

		const freeBlockExists =
			matchingCourse === 'tuning starter package' || matchingCourse === 'diesel tuning starter package';

		document.body.classList.add('opti_starter_package_upsell_category_test');
		firstRow.classList.add('opti_row');
		const firstCol = firstRow.querySelector('div:first-child');

		const courseInfo = copyForCategoryPages[matchingCourse];
		const packageLink = courseInfo.packageToLinkTo;
		const copy = courseInfo.copy;
		const vimeoEmbed = courseInfo.vimeoEmbed;
		const courseName = courseInfo.packageName;
		const savingCopy = courseInfo.savingCopy;
		const price = courseInfo.price;
		const numOfCourses = courseInfo.numOfCourses;

		const starterBlock = `<div id="opti_starter_block" class="col-xs-12 col-sm-6 col-md-5">
			<div class="courseSeries__preview   courseSeries__preview--thumbs " data-course-id="1845">
				<div class="courseSeries__preview__banner">
					<a href=${packageLink}><h4>Bundle & Save!</h4></a>
				</div>

				<div class="courseSeries__preview__step">
					<h5>${savingCopy}</h5>
				</div>

				<div class="courseSeries__preview__price">
					<h4>${price}</h4>
				</div>
				<h3 class="courseSeries__preview__title equal">${courseName}</h3>
				<div class="video-mask">${vimeoEmbed}</div>
				<div class="courseSeries__preview__bottom">
					<div class="row courseSeries__preview__bottom__fistRow">
						<div class="col-xs-6">
							<h5 class="courseSeries__preview__time"><span class="number">48 </span> Months Support</h5>
						</div>
						<div class="col-xs-6">
							<h5 class="courseSeries__preview__lessons"><span class="number">${numOfCourses}</span> Courses</h5>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<a
								class="btn btn-primary courseSeries__preview__bottom__full_btn"
								href=${packageLink}
								>Learn More</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>`;

		firstCol.insertAdjacentHTML('afterend', starterBlock);

		if (freeBlockExists) {
			const freeBlock = firstRow.querySelectorAll('.col-md-5:not(#opti_starter_block)')[0];
			freeBlock.classList.add('opti_hide_free_block');
			equalHeight(rowArr);
			return;
		}

		const is2Columns = firstRow.querySelectorAll('.col-md-5:not(#opti_starter_block)').length === 2;

		if (is2Columns) {
			shuffleAlongColumns(rowArr);
			equalHeight(rowArr);
			return;
		}

		const waitForStarterBlock = setInterval(() => {
			const starterBlock = document.getElementById('opti_starter_block');
			if (starterBlock) {
				clearInterval(waitForStarterBlock);

				const [first, , third, fourth] = [...firstRow.children];

				const thirdH3 = third.querySelector('.courseSeries__preview__title');

				first.className = 'col-md-1';
				third.className = 'col-xs-12 col-sm-6 col-md-5';
				thirdH3.style.height = '';

				fourth.className = 'col-md-1';
			}
		}, 300);
	};

	const shuffleAlongColumns = (rowArr) => {
		rowArr.forEach((row, i) => {
			const lastBlock = [...row.querySelectorAll('.col-md-5:not(#opti_starter_block)')]?.[1];
			const rowBelow = rowArr[i + 1];

			if (lastBlock) {
				if (rowBelow) {
					const rowBelowFirstCol = rowBelow.querySelector('.col-md-1');
					rowBelowFirstCol.insertAdjacentElement('afterend', lastBlock);
				} else {
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
	};

	const equalHeight = (rowArr) => {
		rowArr.forEach((row) => {
			const headingsArr = [...row.querySelectorAll('.courseSeries__preview__title')];
			// Get the largest height from the style property
			const largestHeight = headingsArr.reduce((maxHeight, heading) => {
				const height = parseFloat(heading.style.height) || 0; // Parse the height from the style property
				return Math.max(maxHeight, height); // Compare and store the larger value
			}, 0);

			headingsArr.forEach((heading) => {
				heading.style.height = `${largestHeight}px`;
			});
		});
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 5000);
})();
