/**
Developed by: Riah
Test name: Test 147 - Starter package inclusions
**/
// const tagInterval = setInterval(() => {
// 	if (typeof window.clarity === 'function') {
// 		window.clarity('set', 'test-147', 'Variation');
// 		clearInterval(tagInterval);
// 	}
// }, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const packageTitle = document.querySelector('.tittleAndPriceBlock__title');
        const packageEl = document.querySelector('.package');
        if (packageTitle && packageEl) {
            clearInterval(myInterval);
            optiInit(packageTitle, packageEl);
        }
    }, 300);
    const optiInit = (packageTitle, packageEl) => {
        const packageInclusion = packageEl.cloneNode(true);
        packageInclusion.setAttribute('id', 'opti_package_inclusion');
        const checkIcon = `<svg fill="#57B62B" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#57B62B" style="
"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"></path></g></svg>`;
        // remove descriptions
        const descriptions = [...packageInclusion.querySelectorAll('.package-course p')];
        descriptions.forEach((description) => {
            description.remove();
        });
        // amend the last package inclusion - 24 months gold membership
        const packageCourses = [...packageInclusion.querySelectorAll('.package-course')];
        const lastPackage = packageCourses[packageCourses.length - 1];
        const lastPackageTitle = lastPackage.querySelector('h4');
        const lastPackagePriceEl = lastPackage.querySelector('.course-price');
        const lastPackagePrice = lastPackagePriceEl === null || lastPackagePriceEl === void 0 ? void 0 : lastPackagePriceEl.innerText;
        if (lastPackageTitle.innerText === '24 Months of Gold Membership' && lastPackagePrice) {
            lastPackage.classList.add('opti_2_years_support');
            lastPackageTitle.innerHTML = `PLUS: bonus 2 years of dedicated support and webinar access <span>worth ${lastPackagePrice}<span>`;
        }
        packageTitle.insertAdjacentElement('afterend', packageInclusion);
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

