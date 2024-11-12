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
        const buttonWrapper = document.querySelector('.btn-wrapper');
        if (packageTitle && packageEl && buttonWrapper) {
            clearInterval(myInterval);
            optiInit(packageTitle, packageEl);
        }
    }, 300);
    const optiInit = (packageTitle, packageEl) => {
        const packageInclusion = packageEl.cloneNode(true);
        packageInclusion.setAttribute('id', 'opti_package_inclusion');
        // remove descriptions
        const descriptions = [...packageInclusion.querySelectorAll('.package-course p')];
        descriptions.forEach((description) => {
            description.remove();
        });
        // remove empty divs
        const emptyDivs = [...packageInclusion.querySelectorAll('.package-course .package-course')];
        emptyDivs.forEach((emptyDiv) => {
            emptyDiv.remove();
        });
        // amend the last package inclusion - 24 months gold membership
        const packageCourses = [...packageInclusion.querySelectorAll('.package-course')];
        const lastPackage = packageCourses[packageCourses.length - 1];
        const lastPackageTitle = lastPackage.querySelector('h4');
        const lastPackagePriceEl = lastPackage.querySelector('.course-price');
        const lastPackagePrice = lastPackagePriceEl === null || lastPackagePriceEl === void 0 ? void 0 : lastPackagePriceEl.innerText;
        if (lastPackageTitle.innerText === '24 Months of Gold Membership' && lastPackagePrice) {
            lastPackage.classList.add('opti_2_years_support');
            lastPackageTitle.innerHTML = `PLUS: bonus 2 years of dedicated support and webinar access <span>worth ${lastPackagePrice}</span>`;
        }
        packageTitle.insertAdjacentElement('afterend', packageInclusion);
        const buttonWrapper = document.querySelector('.btn-wrapper');
        const buttonBottomOffset = buttonWrapper.offsetTop + buttonWrapper.offsetHeight;
        window.addEventListener('scroll', () => {
            // Check if the button is completely out of view
            if (window.scrollY >= buttonBottomOffset + 1280) {
                buttonWrapper.classList.add('btn-sticky');
            }
            else {
                buttonWrapper.classList.remove('btn-sticky');
            }
        });
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
