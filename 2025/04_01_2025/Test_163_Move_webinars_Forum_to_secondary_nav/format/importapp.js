/**
Developed by: Riah
Test name: Test 163 - Move webinars + Forum to secondary nav
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-163', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const secondaryNav = document.querySelector('.header__top__nav__items_second');
        const mainNav = document.querySelector('.header__top__nav__items_first');
        const articlesLink = document.querySelector('.header__top__nav__items_second [href="/technical-articles/"]');
        if (secondaryNav && articlesLink && mainNav) {
            clearInterval(myInterval);
            const webinarHtml = `<a href="/previous-webinars/">
                                    Webinars   
                                </a>`;
            const forumHtml = `<a href="/forum/">
                                    Forum  
                                </a>`;
            const reviewsNavHtml = `<div class="link">
										<a href="/reviews/">
											Reviews
										</a>
									</div>`;
            const aboutUsNavHtml = `<div class="link">
										<a href="/about-us/">
											About Us
										</a>
									</div>`;
            articlesLink.insertAdjacentHTML('afterend', webinarHtml + forumHtml);
            mainNav.insertAdjacentHTML('beforeend', aboutUsNavHtml + reviewsNavHtml);
        }
    }, 300);
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
