/**
Developed by: Riah
Test name: Test 151 - Package USPs V1
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-151', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const mainContent = document.querySelector('.main-content.starter-content.col-sm-8:has(p)');
        const packageTitle = document.querySelector('h1');
        if (mainContent && packageTitle) {
            clearInterval(myInterval);
            optiInit(mainContent);
        }
    }, 300);
    const packageCopy = {
        'hpa starter package': {
            students: `Join <a href="javascript:(0)">11,864 Students</a> already enrolled in the Tuning Starter Package`,
            upsell: [
                {
                    heading: 'Massive Value',
                    copy: 'You can save up to 77% off the individual course price by choosing a package',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-savings-4495505-69B3E5.png',
                },
                {
                    heading: 'Perfect for Beginners',
                    copy: 'Not sure where to start? This package takes you from zero to hero.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-complete-6870669-69B3E5.png',
                },
                {
                    heading: 'Two Years of Support',
                    copy: 'Our extensive webinar library and active forum for any questions you have.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-forum-7273643-69B3E5.png',
                },
            ],
        },
        'wiring starter package': {
            students: `Join <a href="javascript:(0)">11,864 Students</a> already enrolled in the Wiring Starter Package`,
            upsell: [
                {
                    heading: 'Massive Value',
                    copy: 'You can save up to 77% off the individual course price by choosing a package',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-savings-4495505-69B3E5.png',
                },
                {
                    heading: 'Perfect for Beginners',
                    copy: 'Not sure where to start? This package takes you from zero to hero.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-complete-6870669-69B3E5.png',
                },
                {
                    heading: 'Two Years of Support',
                    copy: 'Our extensive webinar library and active forum for any questions you have.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-forum-7273643-69B3E5.png',
                },
            ],
        },
        'engine building starter package': {
            students: `Join <a href="javascript:(0)">11,864 Students</a> already enrolled in the Engine Building Starter Package`,
            upsell: [
                {
                    heading: 'Massive Value',
                    copy: 'You can save up to 77% off the individual course price by choosing a package',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-savings-4495505-69B3E5.png',
                },
                {
                    heading: 'Perfect for Beginners',
                    copy: 'Not sure where to start? This package takes you from zero to hero.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-complete-6870669-69B3E5.png',
                },
                {
                    heading: 'Two Years of Support',
                    copy: 'Our extensive webinar library and active forum for any questions you have.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-forum-7273643-69B3E5.png',
                },
            ],
        },
        'the ultimate diesel tuning package': {
            students: `Join <a href="javascript:(0)">11,864 Students</a> already enrolled in the Ultimate Diesel Tuning Package`,
            upsell: [
                {
                    heading: 'Massive Value',
                    copy: 'You can save up to 77% off the individual course price by choosing a package',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-savings-4495505-69B3E5.png',
                },
                {
                    heading: 'Perfect for Beginners',
                    copy: 'Not sure where to start? This package takes you from zero to hero.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-complete-6870669-69B3E5.png',
                },
                {
                    heading: 'Two Years of Support',
                    copy: 'Our extensive webinar library and active forum for any questions you have.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-forum-7273643-69B3E5.png',
                },
            ],
        },
        'fabrication starter package': {
            students: `Join <a href="javascript:(0)">11,864 Students</a> already enrolled in the Fabrication Starter Package`,
            upsell: [
                {
                    heading: 'Massive Value',
                    copy: 'You can save up to 77% off the individual course price by choosing a package',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-savings-4495505-69B3E5.png',
                },
                {
                    heading: 'Perfect for Beginners',
                    copy: 'Not sure where to start? This package takes you from zero to hero.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-complete-6870669-69B3E5.png',
                },
                {
                    heading: 'Two Years of Support',
                    copy: 'Our extensive webinar library and active forum for any questions you have.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-forum-7273643-69B3E5.png',
                },
            ],
        },
        'vip package': {
            students: `Join <a href="javascript:(0)">8,543 VIP Members</a> already enrolled in the Tuning Starter Package`,
            upsell: [
                {
                    heading: 'Massive Value',
                    copy: 'You can save up to 72% off the individual course price by choosing a package',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-savings-4495505-69B3E5.png',
                },
                {
                    heading: 'Lifetime Access',
                    copy: 'Get lifetime access to all current courses, and all future courses.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-complete-6870669-69B3E5.png',
                },
                {
                    heading: 'Unlimited Support',
                    copy: 'Unlock lifetime access to our extensive webinar library and active forum.',
                    imgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-forum-7273643-69B3E5.png',
                },
            ],
        },
    };
    const optiInit = (mainContent) => {
        const packageTitle = document.querySelector('h1');
        const packageTitleText = packageTitle === null || packageTitle === void 0 ? void 0 : packageTitle.innerText.toLowerCase().trim();
        const key = packageTitleText.split(' - ')[0];
        const vipCoursesCurrent = document.getElementById('vip-courses-current');
        const packageCourse = packageCopy[key];
        const packageUspsHtml = `<div class="row" id="opti_package_usps_container">
									<div class="col-xs-12">
										<div class="courses-info-box-wrapper">
											<div class="close-x">x</div>
											<h2>
												$${!1}{packageCourse.students}
											</h2>
											<div class="courses-info-boxes">
												$${!1}{packageCourse.upsell
            .map((upsell) => {
            return `<div class="courses-info-box">
																		<img src="$${!1}{upsell.imgSrc}" alt="" />
																		<h2>$${!1}{upsell.heading}</h2>
																		<p>$${!1}{upsell.copy}</p>
																	</div>`;
        })
            .join('')}
								
											</div>
										</div>
									</div>
								</div>`;
        if (key === 'vip package') {
            if (vipCoursesCurrent) {
                vipCoursesCurrent.insertAdjacentHTML('beforebegin', packageUspsHtml);
            }
        }
        else {
            mainContent.insertAdjacentHTML('afterbegin', packageUspsHtml);
        }
        const waitForCloseIcon = setInterval(() => {
            const closeIcon = document.querySelector('#opti_package_usps_container .close-x');
            if (closeIcon) {
                clearInterval(waitForCloseIcon);
                closeIcon.addEventListener('click', () => {
                    document.querySelector('#opti_package_usps_container .courses-info-box-wrapper').style.display =
                        'none';
                });
            }
        }, 300);
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

