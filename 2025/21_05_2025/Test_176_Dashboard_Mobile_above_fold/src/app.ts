/**
Developed by: Riah
Test name: Test 176 - Dashboard Mobile above fold
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
		ap3c?: any;
	}
}

const tagInterval = setInterval(() => {
	if (typeof window?.clarity === 'function') {
		window.clarity('set', 'test-176', 'variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';

	let bannerType: HTMLElement,
		userDetailsHeading: HTMLElement,
		dashboardSidebar: HTMLElement,
		userFirstName: string,
		mainHeader: HTMLElement;

	const mobileNavItems = [
		{
			itemName: 'Home',
			iconSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/home-outline.png',
			link: '/dashboard/',
		},
		{
			itemName: 'My Courses',
			iconSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/student-outline.png',
			link: '/dashboard/courses/',
		},
		{
			itemName: 'Account',
			iconSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/user-outline.png',
			link: '/dashboard/profile/',
		},
		{
			itemName: 'My Garage',
			iconSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/car-outline.png',
			link: '/dashboard/garage/',
		},
	];

	const myInterval = setInterval(() => {
		bannerType = document.querySelector('.user-details .banner-type');
		userDetailsHeading = document.querySelector('.user-details .row');
		dashboardSidebar = document.querySelector('.dashboard-sidebar');
		userFirstName = window?.ap3c?.lastVar?.first;
		mainHeader = document.querySelector('.main-header__main__top');
		if (userDetailsHeading && dashboardSidebar && userFirstName && mainHeader) {
			clearInterval(myInterval);
			optiInit();
		}
	}, 300);

	const defaultSrc = '/resources/themes/base/production/images/avatar-placeholder.png';

	const optiInit = () => {
		document.body.classList.add('opti_dashboard_mobile_above_fold');
		const mobileUserDetails = createMobileUserDetails();
		const dashboardIcon = createIconDropDown();
		mainHeader.append(dashboardIcon);
		dashboardSidebar.insertAdjacentElement('afterbegin', mobileUserDetails);
	};

	const createIconDropDown = () => {
		const iconDropDown = document.createElement('div');
		iconDropDown.id = 'opti_icon_dashboard_nav';
		const profileImage: HTMLImageElement = document.querySelector('.user-details img');
		const imgSrc = profileImage ? profileImage.src : defaultSrc;

		iconDropDown.innerHTML = `<div class="opti_image_mask">
									<img id="opti_profile_image" class="opti_profile_image" src="${imgSrc}" alt="${userFirstName}'s profile image">
								</div>
								<div class="opti_dashboard_nav">
									<ul class="opti_dashboard_nav_list">
										${mobileNavItems
											.map((item) => {
												return `<li><a href="${item.link}"><img class="opti_nav_icon" src="${item.iconSrc}" alt="${item.itemName} icon"><span>${item.itemName}</span></a></li>`;
											})
											.join('')}
									</ul>
								</div>
								`;
		const profileLink: HTMLElement = iconDropDown.querySelector('.opti_image_mask');
		const dashboardNav: HTMLElement = iconDropDown.querySelector('.opti_dashboard_nav');
		profileLink.onclick = () => {
			dashboardNav.classList.toggle('opti_show_dropdown');
		};

		document.body.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			if (dashboardNav.classList.contains('opti_show_dropdown') && !iconDropDown.contains(target)) {
				dashboardNav.classList.remove('opti_show_dropdown');
			}
		});

		return iconDropDown;
	};

	const createMobileUserDetails = () => {
		const userDetails = document.createElement('div');
		userDetails.setAttribute('id', 'opti_user_details_mobile');

		userDetails.innerHTML = `${bannerType ? bannerType?.outerHTML : ''}
								${userDetailsHeading.outerHTML}
								`;

		const welcomeMsg: HTMLElement = userDetails.querySelector('.details h3');
		welcomeMsg.innerText = `Welcome back, ${userFirstName}`;

		return userDetails;
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
