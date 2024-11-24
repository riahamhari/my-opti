/**
Developed by: Riah
Test name: Test 157 - Black Friday Sale Landing page v1
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-157', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const header = document.querySelector('header');
        const dealsGrid = document.querySelector('.course-sales-pages');
        if (header) {
            clearInterval(myInterval);
            optiInit(header, dealsGrid);
        }
    }, 300);
    const blackFridayBannerHtml = `<article id="opti_black_friday_banner" class="home-banner">
		<div class="container-fluid">
			<div class="home-banner-inner">
				<div class="row opti_banner_row">
					<div class="col-sm-6 hp-banner-content">
						<h3>BLACK FRIDAY SALE</h3>
						<p class="opti_black_friday_discount">50% OFF</p>
						<h4 class="opti_black_friday_all_courses">
							ALL COURSES
						</h4>
						<a class="btn btn-primary scrollto opti_scroll_to_deals" href="javascript:void(0)" 
							>VIEW DEALS</a
						>
					</div>
				</div>
				<div class="opti_social_proofing_flex">
					<div class="join-students row">
						<h4>LEARN HOW TO BUILD CARS THE <span class="opti_text_underline">RIGHT</span> WAY.</h4>
						<div class="col-xs-12 join-students-content">
							<div class="hp-banner-students-img">
								<img src="/resources/themes/base/production/images/hp-banner-students.png" alt="Bannet students" />
							</div>
							<div class="hp-banner-text-and-stars">
								<div class="text">Join <span>176,822</span> other car enthusiasts</div>
								<div class="stars">
									<img src="/resources/themes/base/production/images/hp-banner-stars.png" alt="Banner stars" />
								</div>
							</div>
						</div>
					</div>
					<div class="opti_sale_end_timer">
						<div class="opti_sale_end_timer_inner">
							<div class="opti_sale_end_timer_inner_content">
								<div class="opti_sale_end_timer_inner_content_text">
									<h5>SALE ENDS SOON</h5>
								</div>
								<div class="opti_sale_end_timer_inner_content_timer">
									<div class="opti_sale_end_timer_units opti_sale_end_timer_inner_content_timer_days">
										<div class="opti_sale_end_timer_units_number opti_sale_end_timer_inner_content_timer_days_number">00</div>
										<div class="opti_sale_end_timer_units_text opti_sale_end_timer_inner_content_timer_days_text">DAYS</div>
									</div>
									<div class="opti_sale_end_timer_units opti_sale_end_timer_inner_content_timer_hours">
										<div class="opti_sale_end_timer_units_number opti_sale_end_timer_inner_content_timer_hours_number">00</div>
										<div class="opti_sale_end_timer_units_text opti_sale_end_timer_inner_content_timer_hours_text">HOURS</div>
									</div>
									<div class="opti_sale_end_timer_units opti_sale_end_timer_inner_content_timer_minutes">
										<div class="opti_sale_end_timer_units_number opti_sale_end_timer_inner_content_timer_minutes_number">00</div>
										<div class="opti_sale_end_timer_units_text opti_sale_end_timer_inner_content_timer_minutes_text">MINUTES</div>
									</div>
									<div class="opti_sale_end_timer_units opti_sale_end_timer_inner_content_timer_seconds">
										<div class="opti_sale_end_timer_units_number opti_sale_end_timer_inner_content_timer_seconds_number">00</div>
										<div class="opti_sale_end_timer_units_text opti_sale_end_timer_inner_content_timer_seconds_text">SECONDS</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="join-students"></div>
	</article>`;
    const bonusBlackFridayDealHtml = `<div id="opti_bonus_black_friday_deal">
										<div class="row">
											<div class="col-xs-12">
												<h5>Bonus Black Friday Deal 🔥</h5>
												<div class="opti_bonus_black_friday_deal_content">
													<p>Want to never pay for a training course again?</p>	
													<p>Get $600 OFF the VIP Package<span class="opti_fullstop">.</span><a href="https://www.hpacademy.com/vip-package/"> Claim here</a></p>
												</div>
											</div>
										</div>
									</div>`;
    // TIMER SET TO FINISH ON 30TH NOVEMBER (PACIFIC TIME)
    const optiInit = (header, dealsGrid) => {
        header.insertAdjacentHTML('afterend', blackFridayBannerHtml + bonusBlackFridayDealHtml);
        initializeCountdownTimer();
        const waitForCTA = setInterval(() => {
            const viewDealsCTA = document.querySelector('#opti_black_friday_banner .opti_scroll_to_deals');
            if (viewDealsCTA) {
                clearInterval(waitForCTA);
                viewDealsCTA.onclick = () => {
                    dealsGrid.scrollIntoView({ behavior: 'smooth' });
                };
            }
        }, 300);
    };
    // Countdown Timer
    function initializeCountdownTimer() {
        // Target date: 30th November, Pacific Time
        const targetDate = new Date('2024-11-30T23:59:59-08:00').getTime();
        // Select timer elements
        const daysElement = document.querySelector('.opti_sale_end_timer_inner_content_timer_days_number');
        const hoursElement = document.querySelector('.opti_sale_end_timer_inner_content_timer_hours_number');
        const minutesElement = document.querySelector('.opti_sale_end_timer_inner_content_timer_minutes_number');
        const secondsElement = document.querySelector('.opti_sale_end_timer_inner_content_timer_seconds_number');
        function updateTimer() {
            const currentTime = new Date().getTime();
            const timeDifference = targetDate - currentTime;
            if (timeDifference <= 0) {
                // Timer has ended
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
                clearInterval(timerInterval);
                return;
            }
            // Calculate time components
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            // Update the HTML content
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
        // Start the timer with a 1-second interval
        const timerInterval = setInterval(updateTimer, 1000);
        // Initial update to prevent delay
        updateTimer();
    }
    // Initialize the countdown timer when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initializeCountdownTimer);
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
