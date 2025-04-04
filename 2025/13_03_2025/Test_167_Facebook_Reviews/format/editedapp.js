/**
Developed by: Riah
Test name: Test 167 - Facebook Reviews
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-167', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const facebookLogo = `<img class="opti_fb_logo" alt="Facebook logo" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/Facebook_logo.png"/>`;
    const fbReviewsHtml = `<div id="opti_fb_reviews">
							<div class="opti_fb_logo_container">${facebookLogo}</div>
							<div class="opti_fb_reviews_ratings">
								<div class="opti_reviews_flex">
									<span class="opti_rating">4.9</span>
									<div class="opti_stars">
										<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
										<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
										<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
										<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
										<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
									</div>
								</div>
								<p><a class="opti_fb_reviews_link" href="https://www.facebook.com/HPAcademy/reviews" target="_blank">Read our 1,216 reviews</a></p>
							</div>
						</div>`;
    const myInterval = setInterval(() => {
        const defaultReviews = document.querySelector('.reviews-rating.v2');
        if (defaultReviews) {
            clearInterval(myInterval);
            optiInit(defaultReviews);
        }
    }, 300);
    const optiInit = (defaultReviews) => {
        defaultReviews.insertAdjacentHTML('afterend', fbReviewsHtml);
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

