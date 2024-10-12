/**
Developed by: Dave Bennett
Test name: HACK - crystal update phone number group 10 to 12
**/
// For packages to Japan, USA, Canada
(function optiIfee() {
    'use strict';
    const waitForDom = setInterval(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const main = document.querySelector('.main');
        const allGone = document.getElementById('allGoneBanner');
        if (main &&
            allGone &&
            ((_d = (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.dataLayer) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.page) === null || _c === void 0 ? void 0 : _c.search) === null || _d === void 0 ? void 0 : _d.noOfPax) &&
            ((_h = (_g = (_f = (_e = window === null || window === void 0 ? void 0 : window.dataLayer) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.page) === null || _g === void 0 ? void 0 : _g.search) === null || _h === void 0 ? void 0 : _h.destinationName)) {
            clearInterval(waitForDom);
            const numOfPax = window.dataLayer[0].page.search.noOfPax;
            const destinations = window.dataLayer[0].page.search.destinationName;
            const destinationsToHide = [
                'Japan',
                'Furano',
                'United States of America',
                'Canada',
                'Banff',
                'Fernie',
                'Jasper',
                'Panorama',
                'Tremblant',
                'Whistler',
                'Niseko',
                'Tomamu',
                'Breckenridge',
                'Lake Louise',
                'Vail',
            ];
            let showBanner = true;
            destinations.split('|').forEach((dest) => {
                if (!destinationsToHide.includes(dest)) {
                    showBanner = false;
                }
            });
            if (numOfPax < 10 || numOfPax > 12 || !showBanner)
                return;
            document.body.classList.add('opti-pax-banner');
            const country = /co\.uk/g.test(window.location.host) ? 'uk' : 'ie';
            const textMap = {
                uk: "<p>We're not able to help with your holiday search online right now.</p><p>Please give our friendly team a call on <span class='opti-phone__desktop'><strong>020 3451 2821</strong></span><a href='tel:020 3451 2821' class='opti-phone__mobile'>020 3451 2821</a>.</p>",
                ie: "<p>We're not able to help with your holiday search online right now.</p><p>Please give our friendly team a call on <span class='opti-phone__desktop'><strong>01 653 3504</strong></span><a href='tel:01 653 3504' class='opti-phone__mobile'>01 653 3504</a>.</p>",
            };
            const text = textMap[country];
            if (!text)
                return;
            const bannerHtml = `
			<div id="opti-contact-banner">
				<div class="contentWidth">
					<div class="opti-contact">
						$${!1}{text}
					</div>
				</div>
			</div>`;
            main.insertAdjacentHTML('afterbegin', bannerHtml);
        }
    }, 300);
    setTimeout(function () {
        if (waitForDom) {
            clearInterval(waitForDom);
        }
    }, 15000);
})();

