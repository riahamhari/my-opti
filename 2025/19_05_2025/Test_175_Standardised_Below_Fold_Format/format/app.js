/**
Developed by: Riah
Test name: Test 175 - Standardised Below Fold Format
**/
(() => {
    'use strict';
    let videoContainer, videoTrigger, faqColumns, pathname;
    const instructor = {
        name: 'Andre Simon',
        image: 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
        role: 'HP Academy Co-Founder',
    };
    const icons = {
        tick: `<img  class="opti_tick_icon" alt="tick icon" src="https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/green-tick-icon.png"/>`,
    };
    const coursesContent = [
        {
            courseName: 'Engine Building Fundamentals',
            courseUrl: 'https://www.hpacademy.com/courses/engine-building-fundamentals',
            introduction: {
                heading: 'Building an Engine Right Isn’t Just About Bolting Parts Together',
                text: `Whether you're building your first engine or have some experience, getting the critical details right is challenging. Without a clear understanding of tolerances, machining, and assembly techniques, even small mistakes can compromise reliability and performance.`,
            },
            courseDescription: 'Engine Building Fundamentals is a theory-based course that teaches the core principles behind successful engine assembly. You’ll learn how to measure clearances, understand machining processes, and plan your build properly — no matter what engine you’re working with. It’s designed to give you the foundational knowledge every builder needs before picking up a spanner.',
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
                'Core engine operation and power production principles',
                'Choosing the correct air-fuel ratio',
                'Optimising ignition timing',
                'Understanding fuel and ignition table resolution',
                'Interpolation, compensation tables, and tuning accuracy',
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
        var _a;
        videoContainer = document.querySelector('.video-mask');
        videoTrigger = videoContainer === null || videoContainer === void 0 ? void 0 : videoContainer.querySelector('.video-trigger');
        faqColumns = [...document.querySelectorAll('.common-questions .row .col-sm-6')];
        pathname = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname;
        if (videoContainer && videoTrigger && faqColumns.length && pathname) {
            clearInterval(myInterval);
            optiInit();
        }
    }, 300);
    const optiInit = () => {
        const currentUrl = window.location.href;
        const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
        const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
        const matchingCourse = coursesContent.find((course) => course.courseUrl === normalizedBaseUrl);
        if (!matchingCourse) {
            return;
        }
        resizeVideo(videoTrigger);
        const faqData = extractFAQData();
        const newLayout = createNewLayout(matchingCourse, instructor);
        const newFaqSection = createFAQsection(faqData);
    };
    const resizeVideo = (videoTrigger) => {
        videoTrigger.style.height = '200px';
    };
    const createNewLayout = (course, { name, role, image }) => {
        const layout = document.createElement('div');
        layout.id = 'opti_standardised_layout';
        layout.innerHTML = `<div class="row">
								<div class="opti_main_content main-content col-sm-8  main-content--adjustMargin">
									<div class="opti_course_intro">
										<h3>${course.introduction.heading}</h3>
										<p>${course.introduction.text}</p>
									</div>
									<div class="opti_course_description">
										<h3>Course description</h3>
										<p>${course.courseDescription}</p>
									</div>
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
            return `<li><span>${icons.tick}</span>${topic}</li>`;
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
								<div class="sidebar col-sm-4"></div>
							</div>`;
        const sidebar = layout.querySelector('.sidebar');
        sidebar.append(videoContainer);
        return layout;
    };
    function extractFAQData() {
        const faqItems = [];
        faqColumns.forEach((col) => {
            const children = Array.from(col.children);
            let currentHeading = null;
            let answerParts = [];
            children.forEach((el) => {
                var _a, _b;
                if (el.tagName.toLowerCase() === 'h4') {
                    // Save previous Q&A if we were collecting one
                    if (currentHeading && answerParts.length > 0) {
                        faqItems.push({
                            heading: currentHeading,
                            answer: answerParts.join(' ').trim(),
                        });
                    }
                    // Start new Q&A
                    currentHeading = ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                    answerParts = [];
                }
                else if (el.tagName.toLowerCase() === 'p') {
                    const text = (_b = el.textContent) === null || _b === void 0 ? void 0 : _b.trim();
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
    const createFAQsection = (faqData) => {
        const faqSection = document.createElement('div');
        faqSection.innerHTML = `<div class="curriculum-content col-sm-12">
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
        return faqSection;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
