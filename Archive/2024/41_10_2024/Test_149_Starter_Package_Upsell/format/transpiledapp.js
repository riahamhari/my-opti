/**
Developed by: Riah
Test name: Test 149 - Starter Package Upsell
**/
// Global store and utag declaration
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const priceBlock = document.querySelector('.tittleAndPriceBlock');
        const priceBlockPrice = document.querySelector('.tittleAndPriceBlock .tittleAndPriceBlock__price');
        if (priceBlock && priceBlockPrice) {
            clearInterval(myInterval);
            optiInit(priceBlock, priceBlockPrice);
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
            copy: '🔥 Bundle this course and <strong>save over 60%</strong> with the Tuning Starter Package.',
        },
        'wiring starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-wiring-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/wiring-fundamentals/',
                'https://www.hpacademy.com/courses/practical-harness-construction-club-level/',
            ],
            copy: '🔥 Bundle this course and <strong>save over 60%</strong> with the Wiring Starter Package.',
        },
        'engine building starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-engine-building-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/how-to-degree-a-cam/',
                'https://www.hpacademy.com/courses/practical-engine-building/',
                'https://www.hpacademy.com/courses/engine-building-fundamentals/',
            ],
            copy: '🔥 Bundle this course and <strong>save over 60%</strong> with the Engine Building Starter Package.',
        },
        'diesel tuning starter package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-diesel-tuning-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/diesel-tuning-fundamentals/',
                'https://www.hpacademy.com/courses/practical-diesel-tuning/',
            ],
            copy: '🔥 Bundle this course and <strong>save over 60%</strong> with the Diesel Tuning Starter Package.',
        },
        'track day package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-track-day-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/motorsport-wheel-alignment-fundamentals/',
                'https://www.hpacademy.com/courses/practical-corner-weighting/',
                'https://www.hpacademy.com/courses/race-driving-fundamentals/',
                'https://www.hpacademy.com/courses/data-analysis-fundamentals/',
            ],
            copy: '🔥 Bundle this course and <strong>save over 50%</strong> with the Track Day Package.',
        },
        'fabrication package': {
            packageToLinkTo: 'https://www.hpacademy.com/hpa-fabrication-starter-package/',
            courseLandingPages: [
                'https://www.hpacademy.com/courses/motorsport-fabrication-fundamentals/',
                'https://www.hpacademy.com/courses/practical-tig-welding/',
            ],
            copy: '🔥 Bundle this course and <strong>save over 60%</strong> with the Fabrication Starter Package.',
        },
    };
    const optiInit = (priceBlock, priceBlockPrice) => {
        const currentUrl = window.location.href;
        const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
        const matchingCourse = Object.keys(copyForCoursePages).find((course) => copyForCoursePages[course].courseLandingPages.some((page) => page === baseUrl // Compare against the base URL only
        ));
        if (!matchingCourse) {
            return;
        }
        document.body.classList.add('opti_starter_package_upsell_test');
        const courseInfo = copyForCoursePages[matchingCourse];
        const packageLink = courseInfo.packageToLinkTo;
        const copy = courseInfo.copy;
        const upsellHtml = `<p id="opti_starter_package_upsell_desktop">$${!1}{copy} <a href=$${!1}{packageLink} class="opti_package_link">Learn More.</a></p>`;
        const mobileUpsellHtml = `<p id="opti_starter_package_upsell_mobile">$${!1}{copy} <a href=$${!1}{packageLink} class="opti_package_link">Learn More.</a></p>`;
        priceBlock.insertAdjacentHTML('beforeend', upsellHtml);
        priceBlockPrice.insertAdjacentHTML('beforebegin', mobileUpsellHtml);
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

