/**
Developed by: Riah
Test name: Test 160 - Upsell Modal
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-160', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const enrollBtn = document.querySelector('.btn-wrapper .btn');
        if (enrollBtn) {
            clearInterval(myInterval);
            optiInit(enrollBtn);
        }
    }, 300);
    const copyForCoursePages = {
        'tuning starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/introduction-to-engine-tuning/',
                'https://www.hpacademy.com/courses/efi-tuning-fundamentals/',
                'https://www.hpacademy.com/courses/understanding-afr/',
                'https://www.hpacademy.com/courses/practical-reflash-tuning/',
                'https://www.hpacademy.com/courses/practical-standalone-tuning/',
            ],
            packageIncludes: [
                'EFI Tuning Fundamentals',
                'Understanding AFR',
                'Practical Standalone Tuning',
                'Practical Reflash Tuning',
            ],
            saving: '60%',
            price: '208.50',
            totalValue: '1102.00',
            videoInfo: {
                href: '/hpa-starter-package/#',
                vimeoTitle: 'Introduction to Engine Tuning',
                vimeoId: '557409982',
                imageSrc: 'https://i.vimeocdn.com/video/1152957103-53cebbcc800d670d4804c878b7fd293e43174b8d012dd92971f4774e183ad168-d_960x540?r=pad',
            },
        },
        'wiring starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-wiring-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/wiring-fundamentals/',
                'https://www.hpacademy.com/courses/practical-harness-construction-club-level/',
            ],
            packageIncludes: ['Wiring Fundamentals', 'Practical Wiring - Club Level'],
            saving: '60%',
            price: '149.50',
            totalValue: '784.00',
            videoInfo: {
                href: '/hpa-wiring-starter-package/#',
                vimeoTitle: 'Wiring Starter Package',
                vimeoId: '294276966',
                imageSrc: 'https://i.vimeocdn.com/video/1084542389-cf58b324c9c4677a6931c41c7c37e111be42623fcf7a8269d4c441e9811cbb68-d_960x540?r=pad',
            },
        },
        'engine building starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-engine-building-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/how-to-degree-a-cam/',
                'https://www.hpacademy.com/courses/practical-engine-building/',
                'https://www.hpacademy.com/courses/engine-building-fundamentals/',
            ],
            packageIncludes: ['How to Degree a Cam', 'Engine Building Fundamentals', 'Practical Engine Building'],
            saving: '60%',
            price: '149.50',
            totalValue: '833.00',
            videoInfo: {
                href: '/hpa-engine-building-starter-package/#',
                vimeoTitle: 'Engine Building Starter Package',
                vimeoId: '229938870',
                imageSrc: 'https://i.vimeocdn.com/video/1349796295-36871d6dfbf75a0d3688641ec4dfa06adf97e0e0fda0a4708018d25977ccc275-d_960x540?r=pad',
            },
        },
        'diesel tuning starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-diesel-tuning-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/diesel-tuning-fundamentals/',
                'https://www.hpacademy.com/courses/practical-diesel-tuning/',
            ],
            packageIncludes: ['Diesel Tuning Fundamentals', 'Practical Diesel Tuning'],
            saving: '60%',
            price: '149.50',
            totalValue: '814.00',
            videoInfo: {
                href: '/hpa-diesel-tuning-starter-package/#',
                vimeoTitle: 'The Ultimate Diesel Tuning Package',
                vimeoId: '394300677',
                imageSrc: 'https://i.vimeocdn.com/video/860118533-cd211c7521efa23b741b48812123c452cdf5e977d800b043d78df3395e9c2497-d_960x540?r=pad',
            },
        },
        'track day package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-track-day-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/motorsport-wheel-alignment-fundamentals/',
                'https://www.hpacademy.com/courses/practical-corner-weighting/',
                'https://www.hpacademy.com/courses/race-driving-fundamentals/',
                'https://www.hpacademy.com/courses/data-analysis-fundamentals/',
            ],
            packageIncludes: [
                'Motorsport Wheel Alignment Fundamentals',
                'Practical Corner Weighting',
                'Race Driving Fundamentals',
                'Data Analysis Fundamentals',
            ],
            saving: '50%',
            price: '397',
            totalValue: '912',
            videoInfo: {
                href: '/hpa-track-day-starter-package/#',
                vimeoTitle: 'Track Day Package',
                vimeoId: '579226829',
                imageSrc: 'https://i.vimeocdn.com/video/1198489022-8e6106394944e17fbb28690e7ebd7b60cfe3fa0ca64cf55c1cb738e0bd169217-d_960x540?r=pad',
            },
        },
        'fabrication package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-fabrication-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/motorsport-fabrication-fundamentals/',
                'https://www.hpacademy.com/courses/practical-tig-welding/',
            ],
            packageIncludes: ['Motorsport Fabrication Fundamentals', 'Practical TIG Welding'],
            saving: '60%',
            price: '149.50',
            totalValue: '755.00',
            videoInfo: {
                href: '/hpa-fabrication-starter-package/#',
                vimeoTitle: 'Fabrication Starter Package',
                vimeoId: '673340115',
                imageSrc: 'https://i.vimeocdn.com/video/1398466820-4939383c651822380a2aa46e6798fa0f2c6391c6ca71b51aa6fe3a4a2924bce7-d_960x540?r=pad',
            },
        },
    };
    const optiInit = (enrollBtn) => {
        const currentUrl = window.location.href;
        const enrollBtnUrl = enrollBtn.href;
        const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
        const key = Object.keys(copyForCoursePages).find((course) => copyForCoursePages[course].courseLandingPages.some((page) => page === baseUrl // Compare against the base URL only
        ));
        if (!key) {
            return;
        }
        const matchingCourse = copyForCoursePages[key];
        const modal = createModal(matchingCourse, key, enrollBtnUrl);
        const newCta = createNewBtn(enrollBtn, modal);
        const popoverTrigger = modal.querySelector('.opti_popover_trigger');
        const popover = modal.querySelector('#opti_modal_popover');
        popoverInit(popoverTrigger, popover);
        if (!document.getElementById('opti_modal_btn')) {
            enrollBtn.insertAdjacentElement('afterend', newCta);
        }
        if (!document.getElementById('opti_package_upsell_modal')) {
            document.body.appendChild(modal);
        }
    };
    const createNewBtn = (enrollBtn, modal) => {
        const btnCopy = enrollBtn.innerHTML;
        const newBtn = document.createElement('a');
        newBtn.classList.add('btn', 'btn-primary', 'btn-large', 'loggedIn-starterPackage');
        newBtn.id = 'opti_modal_btn';
        newBtn.innerHTML = btnCopy;
        const modalMain = modal.querySelector('.info-modal');
        newBtn.onclick = () => {
            modalMain.classList.toggle('in');
            modalMain.style.display = 'flex';
        };
        return newBtn;
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
    // const linke = `href="/hpa-wiring-starter-package/?autoSubmit=true&OpenPaymentPlanOptions=1"`;
    const createModal = ({ packageToLinkTo, saving, packageIncludes, price, totalValue, videoInfo }, courseName, enrollBtnUrl) => {
        const modal = document.createElement('div');
        modal.id = 'opti_discount_modal_parent';
        const tickIcon = `https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png`;
        modal.innerHTML = `
		<div
			class="modal fade info-modal"
			id="opti_package_upsell_modal"
			tabindex="-1"
			role="dialog"
			aria-hidden="false"
			>
			<div class="modal-dialog">
				<div class="modal-content">
				
					<div class="modal-body">
						<span class="opti_slant corner-badge">Upgrade Offer!</span>
						<span class="info-modal-cross opti_modal_close_icon" data-dismiss="modal">×</span>
						<h2 class="info-modal-heading">Bundle and Save!</h2>
						<div class="opti_modal_subheading">
							<h3>Add the <a class="opti_upsell_link" href=${packageToLinkTo}>${courseName}</a> to get ${saving} OFF</h3>
						</div>
						<div class="info-modal-content">
							<div class="info-modal-content__videoContainer">
								${generateVideoHtml(videoInfo)}
							</div>
							<div class="info-modal-content__includes">
								<h4 class="info-modal-content__includes__heading">Upgrade today for instant access to:</h4>
								<ul class="info-modal-content__includes__list">
									${packageIncludes.map((course) => `<li><span class="opti_tick_icon"></span>${course}</li>`).join('')}
									<li><span class="opti_tick_icon"></span>and 24 months of Gold Support</li>
								</ul>
								<a href="${packageToLinkTo}" class="info-modal-content__includes__link">See what's included here</a>
							</div>
						</div>
						<div class="info-modal-content__priceBlock">
							${generatePriceBlockHtml(price, totalValue)}
							<div class="info-modal-content__cta">
									<a href="${packageToLinkTo}?autoSubmit=true&OpenPaymentPlanOptions=1" class="btn btn-primary btn-large">Upgrade Now <p>60 DAY MONEY BACK GUARANTEE</p></a>
							</div>
							<a href="${enrollBtnUrl}purchase" class="opti_no_thanks">No thanks, I just want the one course</a>
						</div>
					</div>
				</div>
			</div>
		</div>`;
        const modalClose = modal.querySelector('.info-modal-cross');
        const overlay = modal.querySelector('.modal');
        modalClose.addEventListener('click', () => {
            // handleModalClose(modalMain);
            window.location.href = `${enrollBtnUrl}purchase`;
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                window.location.href = `${enrollBtnUrl}purchase`;
            }
        });
        return modal;
    };
    function generateVideoHtml({ href, vimeoTitle, vimeoId, imageSrc }) {
        return `
			<div class="video-mask">
				<a class="video-trigger imgLiquid_bgSize imgLiquid_ready" href="${href}" data-vimeo-title="${vimeoTitle}" data-vimeoid="${vimeoId}" style="background-image: url('${imageSrc}'); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat; height: 240px;">
					<img src="${imageSrc}" width="1140" height="600" alt="" style="display: none;">
					<span class="play-arrow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0.5 561.9 559.5" class="svg-play"><path d="M752.5 268.8L218.7 1.9c-3.7-1.9-9.3-1.9-13.1 0-3.7 1.9-5.6 5.6-5.6 11.2V547c0 3.7 1.9 7.5 5.6 11.2 1.9 1.9 3.7 1.9 7.5 1.9 1.9 0 3.7 0 5.6-1.9l535.7-266.9c3.7-1.9 7.5-5.6 7.5-11.2-1.9-3.8-3.8-9.4-9.4-11.3z"></path></svg>
					</span>
				</a>
			</div>`;
    }
    const generatePriceBlockHtml = (price, totalValue) => {
        const priceNum = parseFloat(price);
        const eightPaymentsVal = (priceNum / 8).toFixed(2);
        const priceBlockHtml = `<div class="col-sm-12 col-md-6 tittleAndPriceBlock__price">
			<h3 class="price"><span class="new-price">$${price} USD</span></h3>
			<p class="opti_total_value">TOTAL VALUE <span>$${totalValue}</span></p>


			<span class="titleAndPriceBlock__paymentPlanLink">
			
				<a class="line1 js_paymentPlanPurchase">8 easy payments of only $${eightPaymentsVal}</a>
				<a class="line2 js_paymentPlanPurchase"
					>Instant access. Easy checkout. No fees.</a
				>
				<span class="popover-trigger opti_popover_trigger show-button" data-html="true" data-placement="bottom" data-trigger="click" data-original-title="" title="">Learn more</span>
				<div
					class="popover fade bottom"
					role="tooltip"
					id="opti_modal_popover">
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
    const handleModalClose = (modalMain) => {
        modalMain.style.display = 'none';
        modalMain.classList.remove('in');
        document.body.classList.remove('.modal-open');
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

