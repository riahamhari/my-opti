/**
Developed by: Riah
Test name: Test 175 - Standardised Below Fold Format
**/

import { Course, CoursesContent, FAQ, Instructor } from './types';

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
		window.clarity('set', 'test-175', 'variation');
		clearInterval(tagInterval);
	}
}, 300);

(() => {
	'use strict';
	let videoContainer: HTMLElement,
		videoTrigger: HTMLElement,
		faqColumns: HTMLElement[],
		pathname: string,
		faqComponent: HTMLElement,
		courseCurriculum: HTMLElement,
		videoId: string,
		mainContent: HTMLElement;

	const instructor: Instructor = {
		name: 'Andre Simon',
		image:
			'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
		role: 'HP Academy Co-Founder',
	};

	const coursesContent: CoursesContent = [
		{
			courseName: 'Engine Building Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/engine-building-fundamentals',
			introduction: {
				heading: 'Building an Engine Right Isn’t Just About Bolting Parts Together',
				text: `Whether you're building your first engine or have some experience, getting the critical details right is challenging. Without a clear understanding of tolerances, machining, and assembly techniques, even small mistakes can compromise reliability and performance.`,
			},
			courseDescription:
				'Engine Building Fundamentals is a theory-based course that teaches the core principles behind successful engine assembly. You’ll learn how to measure clearances, understand machining processes, and plan your build properly — no matter what engine you’re working with. It’s designed to give you the foundational knowledge every builder needs before picking up a spanner.',
			topics: [
				'What engine blueprinting is and why it matters',
				'How to use precision measuring tools accurately',
				'Choosing the correct clearances for your application',
				'How to check bearing oil clearances and file piston rings',
				'Understanding essential engine machining operations',
				'How to work with engine machinists and specify machining requirements',
				'Foundational theory applicable to all engine builds',
			],
			audienceTypes: [
				'First-time builders wanting to assemble their own engine correctly',
				'Performance enthusiasts and tuners stepping into engine internals',
				'Intermediate builders looking to tighten their understanding of best practices',
				'Anyone working with a machine shop to build a high-performance engine',
			],
			result: `You’ll finish with a solid theoretical foundation in engine assembly. You’ll be able to make informed decisions, communicate effectively with machinists, and verify clearances and tolerances with confidence — ready to step into our <i>Practical Engine Building</i> course for real-world application.
					You’ll also receive a certification of completion to showcase your newfound skills.
					`,
		},
		{
			courseName: 'EFI Tuning Fundamentals',
			courseUrl: 'https://www.hpacademy.com/courses/efi-tuning-fundamentals',
			introduction: {
				heading: 'Confident, Reliable Tuning Starts With a Solid Foundation',
				text: `Whether you're starting out or already tuning, it’s easy to rely on trial-and-error without truly understanding engine needs. Without strong EFI fundamentals, progress slows, reliability suffers, and mistakes become costly.`,
			},
			courseDescription: `<strong>EFI Tuning Fundamentals</strong> is a comprehensive theory course that teaches how engines and ECUs work together to manage fuel and ignition. You’ll gain a deep understanding of AFRs, ignition timing, table resolution, and compensation strategies — allowing you to approach any EFI tuning task with confidence, no matter the engine.`,
			topics: [
				'How EFI systems and engine management work',
				'Understanding fuel and ignition table resolution',
				'Core engine operation and power production principles',
				'Interpolation, compensation tables, and tuning accuracy',
				'Choosing the correct air-fuel ratio',
				'Optimising ignition timing',
				'How to avoid common mistakes and guesswork',
			],
			audienceTypes: [
				'Complete beginners wanting to break into tuning',
				'DIY tuners and enthusiasts looking to understand the "why"',
				'Intermediate tuners wanting to strengthen their fundamentals',
				'Anyone tuning a 4-stroke gasoline EFI engine — naturally aspirated or boosted',
			],
			result: `By course completion, you’ll understand EFI theory inside and out. You’ll be able to tune more confidently, spot and correct errors faster, and lay the foundation for live tuning work with our <i>Practical Tuning</i> courses. You’ll also receive a certification of completion to showcase your newfound skills`,
		},

		{
			courseName: '3D Modelling & CAD for Motorsport',
			courseUrl: 'https://www.hpacademy.com/courses/3d-modeling-and-cad-for-motorsport',
			introduction: {
				heading: 'Great Builds Deserve Parts Designed to Fit and Perform Perfectly',
				text: `Whether you're new to CAD or have some experience, creating accurate, fabrication-ready models can be a real challenge. Without a structured approach and solid design knowledge, even simple parts can turn into frustrating projects.`,
			},
			courseDescription: `3D Modelling & CAD for Motorsport is your complete introduction to computer-aided design, tailored for real-world motorsport and performance projects. You’ll start with the basics of CAD software and part design, then move into more advanced modelling, design analysis, and preparation for fabrication. Whether you're designing simple brackets or entire vehicle systems, this course will teach you how to bring your ideas to life.`,
			topics: [
				'How to model solid and sheet metal parts in CAD software',
				'How to scan and measure your project for perfect-fit parts',
				'Preparing models for fabrication or 3D printing',
				'Design fundamentals for motorsport-grade strength and safety',
				'Basic analysis techniques including FEA (Finite Element Analysis)',
				'An introduction to generative design and CAM (Computer Aided Manufacturing)',
				'The full end-to-end design workflow: from idea to manufacture',
			],
			audienceTypes: [
				'Complete beginners with zero CAD experience',
				'DIY builders wanting custom-fit, functional parts',
				'Motorsport enthusiasts looking to reduce weight and improve design',
				'Intermediate users wanting to sharpen their workflows and pick up advanced tools',
			],
			result: `You'll finish the course capable of using CAD to design and validate parts for real-world use. Whether it’s a custom bracket or a full 3D model of your build, you'll be ready to manufacture with confidence and explore advanced design tools as your projects grow. You’ll also receive a certification of completion to showcase your newfound skills.`,
		},
	];

	const myInterval = setInterval(() => {
		videoContainer = document.querySelector('.video-mask');
		videoTrigger = videoContainer?.querySelector('.video-trigger');
		videoId = videoTrigger?.getAttribute('data-vimeoid');
		faqColumns = [...document.querySelectorAll<HTMLElement>('.common-questions .row .col-sm-6')];
		mainContent = document.querySelector('.row:has(>.main-content:not(.tittleAndPriceBlock))');
		faqComponent = document.querySelector('.common-questions');
		courseCurriculum = document.querySelector('.course-curriculum');
		pathname = window?.location?.pathname;
		if (videoContainer && videoTrigger && faqColumns.length && pathname && mainContent && courseCurriculum && videoId) {
			clearInterval(myInterval);
			optiInit();
		}
	}, 300);

	const videoHtml = `<div
		class="video-mask sales-page"
		style="margin-top: 20px; margin-bottom: 20px; display: block;">
		<a
			class="video-trigger imgLiquid_bgSize imgLiquid_ready"
			href="/courses/advanced-tuning/#"
			data-vimeo-title="Course video"
			data-vimeo-id="123456789"
			id="vimeo-id-123456789"
			data-vimeo-audiotrack=""
			style=" background-image: none; background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;"
			data-triggered="true"
			data-vimeo-initialized="true">
			<div class="fluid-width-video-wrapper" style="padding-top: 56.25%;">
				<iframe
					src=""
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
					title="Course Video"
					scrolling="no"
					style="width: 100%; height: 100%;"
					data-ready="true"
					name="fitvid1"></iframe>
			</div>
		</a>
	</div> `;

	const optiInit = () => {
		const currentUrl = window.location.href;
		const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
		const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
		const matchingCourse = coursesContent.find((course: Course) => course.courseUrl === normalizedBaseUrl);

		if (!matchingCourse) {
			return;
		}

		const modal = createModal();
		document.body.appendChild(modal);

		resizeVideo(videoTrigger);
		updateVideoTrigger(videoContainer, videoTrigger);
		const faqData: FAQ[] = extractFAQData();
		const newLayout = createNewLayout(matchingCourse, instructor);
		const newFaqSection = createFAQsection(faqData);

		mainContent.after(newLayout);
		faqComponent.append(newFaqSection);
		courseCurriculum.after(faqComponent);
	};

	const resizeVideo = (videoTrigger: HTMLElement) => {
		videoTrigger.style.height = '200px';
	};

	const createNewLayout = (course: Course, { name, role, image }: Instructor) => {
		const layout = document.createElement('div');
		layout.id = 'opti_standardised_layout';
		layout.innerHTML = `<div class="row">
									<div class="opti_course_intro_wrapper">
										<div class="opti_course_intro col-sm-8">
											<h3>${course.introduction.heading}</h3>
											<p>${course.introduction.text}</p>
										<div class="opti_course_description">
											<h3>Course description</h3>
											<p>${course.courseDescription}</p>
										</div>
										</div>
										<div class="sidebar col-sm-4"></div>
									</div>
								<div class="opti_main_content main-content--adjustMargin">					
							
									<div class="opti_course_info_instructor">
										<img src="${image}" alt="HP Academy Co-Founder ${name} image" />
										<div class="opti_course_info_instructor__details">
											<p class="opti_course_info_instructor__name">${name}</p>
											<p class="opti_course_info_instructor__label">${role}</p>	
										</div>
									</div>
									<div class="opti_course_topics">
										<h3>What you'll learn</h3>
										<ul>
                                       
											${course.topics
												.map((topic) => {
													return `<li>${topic}</li>`;
												})
												.join('')}
										</ul>
									</div>
									<div class="opti_course_audienceTypes">
										<h3>Who this course is for</h3>
										<ul>
                                       
											${course.audienceTypes
												.map((audienceType) => {
													return `<li>${audienceType}</li>`;
												})
												.join('')}
										</ul>
									</div>
									<div class="opti_course_result">
										<h3>Where your knowledge will end up</h3>
										<p>${course.result}</p>
									</div>
								</div>
								
							</div>`;
		const sidebar = layout.querySelector('.sidebar');
		sidebar.append(videoContainer);

		return layout;
	};

	const updateVideoTrigger = (videoContainer, videoTrigger) => {
		const modalMain: HTMLElement = document.querySelector('#opti_video_modal_parent .modal');

		videoTrigger.addEventListener('click', function (e) {
			// if on smaller screen sizes, dont show modal
			if (window.innerWidth < 768) {
				return;
			}
			e.preventDefault();
			e.stopPropagation();
			handleModalOpen(modalMain);
		});

		document.addEventListener('click', function (e: any) {
			if (e.target === videoContainer && videoContainer.classList.contains('modal')) {
				videoContainer.classList.remove('modal', 'fade', 'in', 'opti-modal');
			}
		});
	};

	const createModal = (): HTMLElement => {
		const modal = document.createElement('div');
		modal.id = 'opti_video_modal_parent';

		modal.innerHTML = `
		<div
			class="modal fade"
			id="opti_video_modal"
			tabindex="-1"
			role="dialog"
			aria-hidden="false"
			>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<span class="info-modal-cross" data-dismiss="modal">×</span>
						${videoHtml}
					</div>
				</div>
			</div>
		</div>`;

		const modalClose = modal.querySelector<HTMLElement>('.info-modal-cross');
		const modalMain = modal.querySelector<HTMLElement>('.modal');

		modalClose.addEventListener('click', () => {
			handleModalClose(modalMain);
		});

		// Clicking outside modal content (backdrop)
		modal.addEventListener('click', (e) => {
			const modalContent = modal.querySelector('.modal-content');
			if (modalContent && !modalContent.contains(e.target as Node)) {
				handleModalClose(modalMain);
			}
		});

		return modal;
	};

	const handleModalClose = (modalMain) => {
		const iframe: HTMLIFrameElement = document.querySelector('#opti_video_modal_parent .modal iframe');

		modalMain.style.display = 'none';
		modalMain.classList.remove('in');
		document.body.classList.remove('modal-open');
		iframe.setAttribute('src', '');
	};

	const handleModalOpen = (modalMain) => {
		const iframe: HTMLIFrameElement = document.querySelector('#opti_video_modal_parent .modal iframe');
		const originalSrc = `https://player.vimeo.com/video/${videoId}?byline=0&portrait=0&color=ff9933&playsinline=0&autoplay=1&transparent=0&app_id=122963&audiotrack=main`;

		modalMain.style.display = 'flex';
		modalMain.classList.add('in');
		document.body.classList.add('modal-open');

		iframe.setAttribute('src', originalSrc!);
	};

	function extractFAQData(): { heading: string; answer: string }[] {
		const faqItems: { heading: string; answer: string }[] = [];

		faqColumns.forEach((col) => {
			const children = Array.from(col.children);
			let currentHeading: string | null = null;
			let answerParts: string[] = [];

			children.forEach((el) => {
				if (el.tagName.toLowerCase() === 'h4') {
					// Save previous Q&A if we were collecting one
					if (currentHeading && answerParts.length > 0) {
						faqItems.push({
							heading: currentHeading,
							answer: answerParts.join(' ').trim(),
						});
					}

					// Start new Q&A
					currentHeading = el.textContent?.trim() || '';
					answerParts = [];
				} else if (el.tagName.toLowerCase() === 'p') {
					const text = el.textContent?.trim();
					if (text) {
						answerParts.push(text);
					}
				}
			});

			// Add last Q&A block
			if (currentHeading && answerParts.length > 0) {
				faqItems.push({
					heading: currentHeading,
					answer: answerParts.join(' ').trim(),
				});
			}
		});

		return faqItems;
	}

	const createFAQsection = (faqData: FAQ[]) => {
		const faqSection = document.createElement('div');
		faqSection.classList.add('opti_faq_container', 'container-fluid');

		faqSection.innerHTML = `<div class="opti-curriculum-content col-sm-12">
									<div class="faqs-list">
										<h2 class="section-title">FAQs</h2>
										<p>Still have question, or need help or advice?</p>
										<a href="/contact-us/" class="btn btn-primary">GET IN CONTACT</a>
									</div>
									<div class="curriculum">
										<div class="hpa-accordion2 opti_faq_accordion" id="hpa-accordion-common-questions">
												${faqData
													.map(({ heading, answer }, index) => {
														return `<div class="hpa-section2">
																<div class="panel-heading">
																	<a data-toggle="collapse" data-parent="#hpa-accordion-common-questions" href="${pathname}#common-question-${index}" class="panel-title collapsed">
																		<h5>${heading}</h5>
																		<div class="chevron">
																			<svg xmlns="http://www.w3.org/2000/svg" viewBox="364.3 212.8 231.5 134.4" class="svg-chevron-down" style="display: block;"><path d="M593.9 237.1L485.6 345.3c-1.9 1.9-3.7 1.9-5.6 1.9-1.9 0-3.7 0-5.6-1.9L366.1 237.1c-1.9-1.9-1.9-3.7-1.9-5.6 0-1.9 1.9-3.7 1.9-5.6l11.2-11.2c1.9-1.9 3.7-1.9 5.6-1.9 1.9 0 3.7 1.9 5.6 1.9l91.5 91.5 91.5-91.5c1.9-1.9 3.7-1.9 5.6-1.9 1.9 0 3.7 1.9 5.6 1.9l11.2 11.2c1.9 1.9 1.9 3.7 1.9 5.6-.1 1.8-.1 3.7-1.9 5.6z"></path></svg>

																			<svg xmlns="http://www.w3.org/2000/svg" viewBox="364.3 212.8 231.5 134.4" class="svg-chevron-up" style="display: none;"><path d="M366.1 322.9l108.3-108.2c1.9-1.9 3.7-1.9 5.6-1.9 1.9 0 3.7 0 5.6 1.9l108.3 108.2c1.9 1.9 1.9 3.7 1.9 5.6 0 1.9-1.9 3.7-1.9 5.6l-11.2 11.2c-1.9 1.9-3.7 1.9-5.6 1.9-1.9 0-3.7-1.9-5.6-1.9L480 253.8l-91.5 91.5c-1.9 1.9-3.7 1.9-5.6 1.9-1.9 0-3.7-1.9-5.6-1.9l-11.2-11.2c-1.9-1.9-1.9-3.7-1.9-5.6.1-1.8.1-3.7 1.9-5.6z"></path></svg>

																		</div>
																	</a>
																</div>
																<div id="common-question-${index}" class="panel-collapse collapse" style="height: 0px;">
																	<div class="panel-body">
																		<p>${answer}</p>
																	</div>
																</div>
															</div>`;
													})
													.join('')}
										</div>
									</div>
                				</div>`;

		const collapseLinks = faqSection.querySelectorAll('.panel-title');
		collapseLinks.forEach((link) => {
			link.addEventListener('click', () => {
				const downIcon: HTMLElement = link.querySelector('.svg-chevron-down');
				const upIcon: HTMLElement = link.querySelector('.svg-chevron-up');

				if (downIcon.style.display === 'block') {
					console.log('clicked down icon');

					downIcon.style.display = 'none';
					upIcon.style.display = 'block';
				} else {
					downIcon.style.display = 'block';
					upIcon.style.display = 'none';
				}
			});
		});
		return faqSection;
	};
	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
