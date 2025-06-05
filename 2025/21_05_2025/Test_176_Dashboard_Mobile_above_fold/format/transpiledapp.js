/**
Developed by: Riah
Test name: Test 176 - Dashboard Mobile above fold
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-176', 'variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    let bannerType, userDetailsHeading, dashboardSidebar, userFirstName, mainHeader;
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
        var _a, _b;
        bannerType = document.querySelector('.user-details .banner-type');
        userDetailsHeading = document.querySelector('.user-details .row');
        dashboardSidebar = document.querySelector('.dashboard-sidebar');
        userFirstName = (_b = (_a = window === null || window === void 0 ? void 0 : window.ap3c) === null || _a === void 0 ? void 0 : _a.lastVar) === null || _b === void 0 ? void 0 : _b.first;
        mainHeader = document.querySelector('.main-header__main__top');
        if (userDetailsHeading && dashboardSidebar && userFirstName && mainHeader) {
            clearInterval(myInterval);
            optiInit();
        }
    }, 300);
    const defaultSrc = '/resources/themes/base/production/images/avatar-placeholder.png';
    const optiInit = () => {
        document.body.classList.add('opti_dashboard_mobile_above_fold');
        const vipOffer = document.querySelector('.vip-offer');
        const mobileUserDetails = createMobileUserDetails();
        const dashboardIcon = createIconDropDown();
        mainHeader.append(dashboardIcon);
        dashboardSidebar.insertAdjacentElement('afterbegin', mobileUserDetails);
        if (vipOffer) {
            const vipOfferClone = vipOffer.cloneNode(true);
            vipOfferClone.classList.add('opti_vip_offer');
            dashboardSidebar.before(vipOfferClone);
        }
    };
    const createIconDropDown = () => {
        const iconDropDown = document.createElement('div');
        iconDropDown.id = 'opti_icon_dashboard_nav';
        const profileImage = document.querySelector('.user-details img');
        const imgSrc = profileImage ? profileImage.src : defaultSrc;
        iconDropDown.innerHTML = `<div class="opti_image_mask">
									<img id="opti_profile_image" class="opti_profile_image" src="$${!1}{imgSrc}" alt="$${!1}{userFirstName}'s profile image">
								</div>
								<div class="opti_dashboard_nav">
									<ul class="opti_dashboard_nav_list">
										$${!1}{mobileNavItems
            .map((item) => {
            return `<li><a href="$${!1}{item.link}"><img class="opti_nav_icon" src="$${!1}{item.iconSrc}" alt="$${!1}{item.itemName} icon"><span>$${!1}{item.itemName}</span></a></li>`;
        })
            .join('')}
									</ul>
								</div>
								`;
        const profileLink = iconDropDown.querySelector('.opti_image_mask');
        const dashboardNav = iconDropDown.querySelector('.opti_dashboard_nav');
        profileLink.onclick = () => {
            dashboardNav.classList.toggle('opti_show_dropdown');
        };
        document.body.addEventListener('click', (e) => {
            const target = e.target;
            if (dashboardNav.classList.contains('opti_show_dropdown') && !iconDropDown.contains(target)) {
                dashboardNav.classList.remove('opti_show_dropdown');
            }
        });
        return iconDropDown;
    };
    const createMobileUserDetails = () => {
        const userDetails = document.createElement('div');
        userDetails.setAttribute('id', 'opti_user_details_mobile');
        userDetails.innerHTML = `$${!1}{bannerType ? bannerType === null || bannerType === void 0 ? void 0 : bannerType.outerHTML : ''}
								$${!1}{userDetailsHeading.outerHTML}
								`;
        const welcomeMsg = userDetails.querySelector('.details h3');
        welcomeMsg.innerText = `Welcome back, $${!1}{userFirstName}`;
        return userDetails;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

