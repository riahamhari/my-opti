/**
Developed by: Riah
Test name: Test 173 - Course Page ATF Redesign
**/

import { Course, CourseInfo } from './types';

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
		window.clarity('set', 'test-173', 'variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	const icons = {
		tick: `<img  class="opti_tick_icon" alt="tick icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png"/>`,
		people: `<img class="opti_people_icon" alt="people icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/people%201.png"/>`,
		play: `<img class="opti_play_icon" alt="play icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/play-button%201.png"/>`,
		dollarSign: `<img class="opti_dollar_sign" alt="dollar sign icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/dollar_sign_icon.png"/>`,
		info: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="18" height="18" viewBox="0 0 16 16" stroke="#000000" stroke-width="0.00016">
							<g id="SVGRepo_iconCarrier">
								<path d="M7.37 6.7h1.25v5H7.37z"/>
								<circle cx="8" cy="4.85" r=".65"/>
								<path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"/>
								</g>
						  </svg>`,
	};

	const courseInfo: CourseInfo = [
		{
			courseName: 'Introduction to Engine Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/introduction-to-engine-tuning',
			subheading:
				'Brand new to tuning? This course gives you the basic knowledge required before tuning your own car, and what to look for when choosing an ECU.',

			firstPoint: 'Applicable to any engine',
			lessons: 31,
			students: 18527,
		},
		{
			courseName: 'EFI Tuning Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/efi-tuning-fundamentals',
			subheading:
				'Kick-start your tuning knowledge here. Learn how an EFI system works, how to set ignition timing and AFR, then get started tuning.',

			firstPoint: 'Applicable to any engine',
			lessons: 55,
			students: 52598,
		},
		{
			courseName: 'Understanding AFR',
			courseUrl: 'https://www.hpacademy.com/courses/understanding-afr',
			subheading:
				'Every engine is different. Learn how and where to set the Air Fuel Ratio, and a simple 4-step approach on deciding AFR for your engine.',

			firstPoint: 'Applicable to any engine',
			lessons: 36,
			students: 23679,
		},
		{
			courseName: 'Practical Reflash Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/practical-reflash-tuning',
			subheading:
				'Gain the hands-on skills you need to successfully reflash a stock ECU, and learn a 6-step proccess to apply to any tuning job.',

			firstPoint: 'Applys to any reflash job',
			lessons: 129,
			students: 20232,
		},
		{
			courseName: 'Practical Standalone Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/practical-standalone-tuning',
			subheading:
				'Learn to tune your standalone ECU start-to-finish, and a 10-step process to reach peak power and torque while retaining reliability.',

			firstPoint: 'Applicable to all ECUs',
			lessons: 196,
			students: 21804,
		},
		{
			courseName: 'WinOLS Mastery: Map Identification & Editing',
			courseUrl: 'https://www.hpacademy.com/courses/winols-mastery-map-identification-and-editing',
			subheading:
				'Master OLS: Gain the knowledge to find, define & edit ECU maps, and apply this to any tuning process with a 6-step process and worked examples.',

			firstPoint: 'Applicable to all vehicles',
			lessons: 59,
			students: 8458,
		},
		{
			courseName: 'Ethanol & Flex Fuel Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/ethanol-and-flex-fuel-tuning',
			subheading:
				'Learn how to approach tuning with ethanol fuel blends, how ethanol affects engine operation, and the correct steps to tune a flex fuel sytem.',

			firstPoint: 'Applicable to ethanol fuels',
			lessons: 47,
			students: 9940,
		},
		{
			courseName: 'Boost Control',
			courseUrl: 'https://www.hpacademy.com/courses/boost-control',
			subheading:
				'Learn boost control tuning in easy-to-understand language, including PID basics & a step-by-step process to optimise closed-loop boost control.',

			firstPoint: 'Applicable to turbo vehicles',
			lessons: 26,
			students: 12533,
		},
		{
			courseName: 'Launch Control',
			courseUrl: 'https://www.hpacademy.com/courses/launch-control',
			subheading:
				'Learn general principles behind launch control, and how to properly configure and optimise launch control for your own ECU & car.',

			firstPoint: 'Applicable to any engine',
			lessons: 26,
			students: 17953,
		},
		{
			courseName: 'Variable Cam Control Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/variable-cam-control-tuning',
			subheading:
				'Learn to optimise your cam timing, the advantages variable cam timing offers, how PID control works and a 5 step process to use for any engine.',

			firstPoint: 'Suits 4-stroke piston engines',
			lessons: 48,
			students: 8627,
		},
		{
			courseName: 'Practical Transmission Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/practical-transmission-tuning',
			subheading:
				'Learn how an automatic transmission works, how to calibrate shifts & drive modes, and a 5-step process to tune any automatic transmission.',

			firstPoint: 'Suits automatic transmissions',
			lessons: 38,
			students: 7521,
		},
		{
			courseName: 'Wiring Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/wiring-fundamentals',
			subheading:
				'Learn the electrical principles of an EFI harness, how to wire ECU inputs/outputs and how to design a robust power supply and grounding system.',

			firstPoint: 'Applicable to all ECUs',
			lessons: 66,
			students: 25109,
		},
		{
			courseName: 'Practical Wiring - Club Level',
			courseUrl: 'https://www.hpacademy.com/courses/practical-harness-construction-club-level',
			subheading:
				'Gain the skills to design, spec and build a robust, affordable (and good looking) EFI wiring harness for your own car from scratch.',

			firstPoint: 'Applicable to all ECUs',
			lessons: 37,
			students: 15448,
		},
		{
			courseName: 'Professional Motorsport Wiring Harness Construction',
			courseUrl: 'https://www.hpacademy.com/courses/professional-motorsport-wiring-harness-construction',
			subheading:
				'Build your own pro level wiring harness. Learn concentric twisting, how to use race-spec connectors, pro level crimping, potting and moulding.',

			firstPoint: 'Applicable to all ECUs',
			lessons: 63,
			students: 7929,
		},
		{
			courseName: 'CAN Bus Communications Decoded',
			courseUrl: 'https://www.hpacademy.com/courses/canbus-communications-decoded',
			subheading:
				'Learn the fundamentals of CAN, how to plan & construct a CAN Bus network, and facilitate seamless communication between CAN-based devices.',

			firstPoint: 'Covers all CAN Bus systems',
			lessons: 58,
			students: 11468,
		},
		{
			courseName: 'PDM Installation & Configuration',
			courseUrl: 'https://www.hpacademy.com/courses/pdm-installation-and-configuration',
			subheading:
				'Learn start-to-finish how a PDM works and is configured with common worked examples, and how to set up your PDM exactly how you want.',

			firstPoint: 'Applicable to any PDM',
			lessons: 46,
			students: 8791,
		},
		{
			courseName: 'Engine Building Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/engine-building-fundamentals',
			subheading:
				'Build the essential knowledge to confidently assemble any engine, and how to use specialised measuring equipment to confirm critical clearances.',

			firstPoint: 'Suits 4-stroke engines',
			lessons: 73,
			students: 32327,
		},
		{
			courseName: 'Practical Engine Building',
			courseUrl: 'https://www.hpacademy.com/courses/practical-engine-building',
			subheading:
				'Follow the practical steps to assemble a high performance engine, with a real build examples broken down into easy to follow 10-step process.',

			firstPoint: 'Applicable to any engine',
			lessons: 91,
			students: 14458,
		},
		{
			courseName: 'How to Degree a Cam',
			courseUrl: 'https://www.hpacademy.com/courses/how-to-degree-a-cam',
			subheading:
				'Learn camshaft fundamentals & terminology, and how to confidently degree your own camshaft with a 6-step, easy-to-follow process.',

			firstPoint: 'Suits 4-stroke piston engines',
			lessons: 47,
			students: 16520,
		},
		{
			courseName: 'Diesel Tuning Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/diesel-tuning-fundamentals',
			subheading:
				'Become one of the few recognised diesel-tuners: learn the core principles, solve unique diesel issues, and get the most from diesel engines.',

			firstPoint: 'Applicable to any diesel engine',
			lessons: 29,
			students: 11513,
		},
		{
			courseName: 'Practical Diesel Tuning',
			courseUrl: 'https://www.hpacademy.com/courses/practical-diesel-tuning',
			subheading:
				'Gain a deeper understanding of diesel tuning with practical examples & options for your own tune, while staying legal & emission-compliant.',

			firstPoint: 'Applicable to any diesel engine',
			lessons: 52,
			students: 10657,
		},
		{
			courseName: 'Suspension Tuning & Optimization',
			courseUrl: 'https://www.hpacademy.com/courses/suspension-tuning-and-optimization',
			subheading:
				'Learn the basics of motorsport suspension: from choosing springs, to tuning your dampers & calculating adjustments to improve chassis balance.',

			firstPoint: 'Applicable to any vehicle',
			lessons: 38,
			students: 10763,
		},
		{
			courseName: 'Motorsport Wheel Alignment Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/motorsport-wheel-alignment-fundamentals',
			subheading:
				'Everything you need to know about Motorsport Wheel alignment. Learn expert techniques to align ANY car, right up to LMP2, LMP1 and F1.',

			firstPoint: 'Applicable to any vehicle',
			lessons: 83,
			students: 11813,
		},
		{
			courseName: 'Practical Corner Weighting',
			courseUrl: 'https://www.hpacademy.com/courses/practical-corner-weighting',
			subheading:
				"Learn how to use corner weighting to optimise your car's balance, including the essential equipment & a 6 step process to apply to any vehicle.",

			firstPoint: 'Applicable to any vehicle',
			lessons: 48,
			students: 9160,
		},
		{
			courseName: 'Wheel & Tyre Fitment',
			courseUrl: 'https://www.hpacademy.com/courses/wheel-and-tyre-fitment',
			subheading:
				'Become a fitment expert. Learn how to measure a wheel correctly, check clearences, and choose a top-performing setup (that also looks great).',

			firstPoint: 'Applicable to any vehicle',
			lessons: 48,
			students: 8627,
		},
		{
			courseName: 'Brake System Design & Optimization',
			courseUrl: 'https://www.hpacademy.com/courses/brake-system-design-and-optimization',
			subheading:
				'Learn the core principles of automotive brake systems and the practical skills to upgrade brake pads. calipers, brake lines, pedal boxes and more.',

			firstPoint: 'Beneficial for any vehicle',
			lessons: 26,
			students: 12533,
		},
		{
			courseName: 'Race Driving Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/race-driving-fundamentals',
			subheading:
				'Improve your lap times through by your laps, trail braking, understanding weight transfer, driver vision and the perfect racing line.',

			firstPoint: 'Taught by professionals',
			lessons: 54,
			students: 9744,
		},
		{
			courseName: 'Data Analysis Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/data-analysis-fundamentals',
			subheading:
				'Go faster with data, not opinions. Learn to confidently analyse your logged data, alongside examples from a range of cars and systems.',

			firstPoint: 'Taught by professionals',
			lessons: 83,
			students: 9034,
		},
		{
			courseName: 'Professional Motorsport Data Analysis',
			courseUrl: 'https://www.hpacademy.com/courses/professional-motorsport-data-analysis',
			subheading:
				'Build on your data analysis skills with top-level techniques. Learn from Tim White, race engineer & industry expert (IMSA, WEC, Le mans, BTCC).',

			firstPoint: 'Taught by professionals',
			lessons: 63,
			students: 7929,
		},
		{
			courseName: 'Motorsport Fabrication Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/motorsport-fabrication-fundamentals',
			subheading:
				'Grow a solid understanding of the materials, tools, techniques and practical skills required to perform your own motorsport fabrication tasks.',

			firstPoint: 'Aplicable to any project',
			lessons: 68,
			students: 14347,
		},
		{
			courseName: 'Practical TIG Welding',
			courseUrl: 'https://www.hpacademy.com/courses/practical-tig-welding',
			subheading:
				'Grow the fundamental knowledge & skills needed for TIG welding, before starting your first weld with a reliable 6-step process & worked examples.',

			firstPoint: 'Aplicable to any project',
			lessons: 52,
			students: 10511,
		},
		{
			courseName: '3D Modeling & CAD for Motorsport',
			courseUrl: 'https://www.hpacademy.com/courses/3d-modeling-and-cad-for-motorsport',
			subheading:
				'Learn to master 3D modeling and CAD so you can design lighter, stronger, and better-fitting custom parts for your project.',

			firstPoint: 'Aplicable to any project',
			lessons: 74,
			students: 12036,
		},
		{
			courseName: 'Motorsport Plumbing Systems',
			courseUrl: 'https://www.hpacademy.com/courses/motorsport-plumbing-systems',
			subheading:
				'Build the knowledge and skills needed to design and plumb your own coolant, fuel, brakes, steering, and charge air systems with confidence.',

			firstPoint: 'Applicable to all vehicles',
			lessons: 60,
			students: 7977,
		},
		{
			courseName: 'Practical 3D Scanning',
			courseUrl: 'https://www.hpacademy.com/courses/practical-3d-scanning',
			subheading:
				"Learn to choose the right scanner for your project and use it to it's full potential, giving you massive gains in the accuracy of your designs.",

			firstPoint: 'Applicable to all vehicles',
			lessons: 31,
			students: 7818,
		},
		{
			courseName: 'EV Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/ev-fundamentals',
			subheading:
				'EVs are here to stay. Learn about EV architecture, how to maximise output & efficiency, electric drivetrains, and starting your own EV project.',

			firstPoint: 'Applicable to any EV project',
			lessons: 40,
			students: 7783,
		},
		{
			courseName: 'Aerodynamics Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/aerodynamics-fundamentals',
			subheading:
				'This course will teach you how to develop, test and optimise your aero. Including: wings, splitters, underfloor and cooling considerations.',

			firstPoint: 'Applicable to all vehicles',
			lessons: 45,
			students: 7517,
		},
	];

	let currentPriceEl: HTMLElement,
		prevPriceEl: HTMLElement,
		paymentPlanEl: HTMLElement,
		container: HTMLElement,
		btnWrapper: HTMLElement;

	const myInterval = setInterval(() => {
		currentPriceEl = document.querySelector('.price');
		paymentPlanEl = document.querySelector('.sidebar .btn-wrapper span');
		btnWrapper = document.querySelector('.sidebar .btn-wrapper');
		container = document.querySelector('.course-info .row.title-row div');
		if (currentPriceEl && btnWrapper && container) {
			clearInterval(myInterval);
			console.log('int cleared');

			optiInit();
		}
	}, 300);

	const courseBenefits = ['Get started instantly', 'Learn at your pace'];

	const eightPaymentsHtml = ` 
		<div class="arrow"></div>
		<h3 class="popover-title" style="display: none;"></h3>
		<div class="popover-content">
			Spreading out your payments cost no more than paying the full amount, and is just as quick and easy:<br />
			- Use the same checkout as normal<br />
			- Pay by Visa, Mastercard or PayPal<br />
			- No ID, contracts or paperwork<br />
			- No fees, interest or penalties<br />
			- Instant course access<br /><br />
			Plus all payments made are eligible for our 60-day money back guarantee.<br /><br />
			Simply select your preferred payment frequency and amount when checking out, then enjoy immediate access to your
			course.
		</div>
	`;

	const optiInit = () => {
		container.className = 'col-sm-12';
		const currentUrl = window.location.href;

		const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;

		const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

		const matchingCourse = courseInfo.find((course: Course) => course.courseUrl === normalizedBaseUrl);
		console.log(matchingCourse);

		if (!matchingCourse) {
			return;
		}
		const courseRedesign = createCourseRedesign(matchingCourse);
		container.insertAdjacentElement('afterbegin', courseRedesign);
	};

	const createCourseRedesign = ({ courseName, subheading, firstPoint, lessons, students }: Course) => {
		const newPrice = currentPriceEl.querySelector<HTMLElement>('.new-price');
		// const prevPriceTxt = prevPriceEl.innerText.split('.')[0];
		const formattedStudentNums = students.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		const currPriceTxt = newPrice ? newPrice.innerText.split(' ')[0] : currentPriceEl.innerText.split(' ')[0];
		// const prevPrice = formatCurrencyStr(prevPriceTxt);
		const currPrice = formatCurrencyStr(currPriceTxt);
		const paymentPlanText = paymentPlanEl?.innerText?.toLowerCase()?.replace('only', '');

		const courseRedesign = document.createElement('div');
		courseRedesign.id = 'opti_vip_package_redesign';
		courseRedesign.classList.add('opti_vip_redesign');
		courseRedesign.innerHTML = `<div class="opti_vip_redesign__main">
									<div class="opti_vip_redesign_heading">
										<h1 class="opti_vip_redesign_heading__main">${courseName}</h1>

									</div>
									<div class="opti_vip_redesign__infoText">
										<p>${subheading}</p> 
										
										<div class="opti_students_info">
											<span class="opti_icon_container">${icons.play} ${lessons} lessons</span>
											<span class="opti_icon_container">${icons.people} ${formattedStudentNums} students</span>
										</div>
									</div>
									<div class="opti_vip_redesign__ticks">
										<ul>
                                            <li><span>${icons.tick}</span>${firstPoint}</li>
											${courseBenefits
												.map((benefit) => {
													return `<li><span>${icons.tick}</span>${benefit}</li>`;
												})
												.join('')}
										</ul>
									</div>
									
								</div>
							<div class="opti_vip_redesign__side sidebar col-sm-4">
								  <div class="opti_vip_redesign_priceCont">
									 
									  <p class="opti_vip_redesign__currPrice">${currPrice} <span>(USD)</span></p>
                                      ${
																				paymentPlanText
																					? `		  <div class="opti_vip_redesign__paymentPlan">											
											<div class="opti_vip_redesign_popover_wrapper">
													<div class="popover-trigger">
														${icons.info} 
														<div id="opti_payment_popover" class="popover opti-popover fade bottom in" role="tooltip">
															${eightPaymentsHtml}
														</div>
													</div>
												<p class="opti_vip_redesign__paymentPlan_text">Payment plans available. </p>
											</div>
											<p class="opti_vip_redesign__paymentPlan_text">Make ${paymentPlanText}</span></p>
									  </div>`
																					: ''
																			}
							
									  <div class="btn-wrapper opti_btn_wrapper">
											<div class="opti_sticky_cta">
											
												<span class="opti_sticky_cta__currPrice">${currPrice} <span>(USD)</span></span>
                                                ${
																									paymentPlanText
																										? `					<div class="opti_sticky_cta__paymentPlan">
													<div class="popover-trigger">
														${icons.info} 
														<div id="opti_payment_popover_bottom" class="popover opti-popover fade top in" role="tooltip">
															${eightPaymentsHtml}
														</div>
													</div>
													<span>Payment plans available over 8 weeks</span>
												</div>`
																										: ''
																								}
							
											</div>
											<a class="btn btn-primary" href="/vip-package/purchase/">BECOME A VIP</a>
									  </div>
									  <div class="payment-icons">
											<img src="/resources/themes/base/production/images/payment-icons.png">
									  </div>
								  </div>
								  <div class="opti_vip_redesign__moneyBack">
										<span>${icons.dollarSign}</span>
										<div class="opti_vip_redesign__moneyBack_text">
											<h5>60-day money back guarantee</h5>
											<p>Not happy? Let us know within 60 days and we'll refund you in full.</p>
										</div>
								  </div>
							</div>`;

		const buttonWrapper: HTMLElement = courseRedesign.querySelector('.btn-wrapper');
		const buttonBottomOffset = buttonWrapper.offsetTop + buttonWrapper.offsetHeight;

		const popoverTriggers = [...courseRedesign.querySelectorAll('.popover-trigger')];

		popoverTriggers.forEach((trigger) => {
			const popover = trigger.querySelector('.popover');
			// Toggle the respective popover on trigger click
			trigger.addEventListener('click', function (e) {
				e.preventDefault();
				e.stopPropagation(); // Prevent the document click from immediately closing it
				popover.classList.toggle('opti_show_popover');
			});

			// Hide popovers when clicking outside
			document.addEventListener('click', function (e: any) {
				if (!trigger.contains(e.target)) {
					courseRedesign.querySelectorAll('.popover').forEach((popover) => {
						popover.classList.remove('opti_show_popover');
					});
				}
			});
		});

		window.addEventListener('scroll', () => {
			if (window.innerWidth >= 768) {
				return;
			}
			// Check if the button is completely out of view
			if (window.scrollY >= buttonBottomOffset + 1060) {
				buttonWrapper.classList.add('btn-sticky');
			} else {
				buttonWrapper.classList.remove('btn-sticky');
			}
		});
		return courseRedesign;
	};

	const formatCurrencyStr = (text) => {
		const formatted = text.replace(/\$(\d+(?:\.\d{2})?)(\s?\w+)?/, (_, num, suffix) => {
			// Split integer and decimal parts
			const [intPart, decimalPart] = num.split('.');
			const withCommas = Number(intPart).toLocaleString();

			return `$${withCommas}${decimalPart ? '.' + decimalPart : ''}${suffix || ''}`;
		});

		return formatted;
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
