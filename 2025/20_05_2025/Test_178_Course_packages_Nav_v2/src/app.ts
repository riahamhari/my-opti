/**
Developed by: Riah
Test name: Test 178 - Course packages Nav v2
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
	}
}

const tagInterval = setInterval(() => {
	if (typeof window?.clarity === 'function') {
		window.clarity('set', 'test-178', 'variation2');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	let articlesLink: HTMLElement, courseDropdown: HTMLElement;
	const myInterval = setInterval(() => {
		articlesLink = document.querySelector('.header__top__nav__items_second [href="/technical-articles/"]');
		courseDropdown = document.querySelector('.cre-drop-item:has([href="/courses/"]) .cre-dropdown ul');
		if (articlesLink && courseDropdown) {
			clearInterval(myInterval);
			optiInit();
		}
	}, 300);

	const coursePackagesHtml = `<li class="cre-el opti_starter_packages_link">
                                                <a href="/starter-packages/">
                                                    
                                                    <span class="badge-best-value">Bundle & Save</span><br>
                                                    
                                                   Course Packages
                                                </a>
                                                
                                                <p class="pakages-submenu-info">Save up to 70% when bundling courses across Tuning, Wiring, Engines & more.</p>
                                                
                                            </li>`;

	const forumHtml = `<a href="/forum/">
											Forum  
										</a>`;

	const optiInit = () => {
		if (document.querySelector('.opti_course_packages_nav')) return;
		articlesLink.insertAdjacentHTML('afterend', forumHtml);
		courseDropdown.insertAdjacentHTML('afterbegin', coursePackagesHtml);
		document.body.classList.add('opti_course_packages_nav');
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
