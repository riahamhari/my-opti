/**
Developed by: Riah
Test name: Test 153 - VIP Accordions
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-153', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const currentCourses = document.getElementById('vip-courses-current');
        const [instantAccessLi, freeAccessLi] = [...document.querySelectorAll('.main-content h3~ul .p1')];
        if (currentCourses && instantAccessLi && freeAccessLi) {
            clearInterval(myInterval);
            createAccordion(currentCourses);
            accordionFunction();
            insertAnchorLinks(instantAccessLi, freeAccessLi);
        }
    }, 300);
    const newWindowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24.00 24.00" fill="none">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"/>

<g id="SVGRepo_iconCarrier"> <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#808184" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>`;
    const coursesData = {
        tuning: {
            courseName: 'Tuning Course',
            courseImgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/tuningIcon.png',
            courses: [
                {
                    title: 'Introduction to Engine Tuning',
                    oldPrice: '$19',
                    lessons: '31 Lessons',
                    moreInfoLink: '/courses/introduction-to-engine-tuning/',
                    studentsEnrolled: '17,362',
                },
                {
                    title: 'EFI Tuning Fundamentals',
                    oldPrice: '$99',
                    lessons: '55 Lessons',
                    moreInfoLink: '/courses/efi-tuning-fundamentals/',
                    studentsEnrolled: '47,913',
                },
                {
                    title: 'Understanding AFR',
                    oldPrice: '$89',
                    lessons: '36 Lessons',
                    moreInfoLink: '/courses/understanding-afr/',
                    studentsEnrolled: '21,780',
                },
                {
                    title: 'Practical Reflash Tuning',
                    oldPrice: '$229',
                    lessons: '129 Lessons',
                    moreInfoLink: '/courses/practical-reflash-tuning/',
                    studentsEnrolled: '18,331',
                },
                {
                    title: 'Practical Standalone Tuning',
                    oldPrice: '$229',
                    lessons: '196 Lessons',
                    moreInfoLink: '/courses/practical-standalone-tuning/',
                    studentsEnrolled: '19,931',
                },
                {
                    title: 'Boost Control',
                    oldPrice: '$79',
                    lessons: '26 Lessons',
                    moreInfoLink: '/courses/boost-control/',
                    studentsEnrolled: '11,670',
                },
                {
                    title: 'Ethanol & Flex Fuel Tuning',
                    oldPrice: '$129',
                    lessons: '47 Lessons',
                    moreInfoLink: '/courses/ethanol-and-flex-fuel-tuning/',
                    studentsEnrolled: '9,157',
                },
                {
                    title: 'Launch Control',
                    oldPrice: '$39',
                    lessons: '26 Lessons',
                    moreInfoLink: '/courses/launch-control/',
                    studentsEnrolled: '17,029',
                },
                {
                    title: 'Variable Cam Control Tuning',
                    oldPrice: '$149',
                    lessons: '48 Lessons',
                    moreInfoLink: '/courses/variable-cam-control-tuning/',
                    studentsEnrolled: '7,841',
                },
                {
                    title: 'Data Analysis Fundamentals',
                    oldPrice: '$129',
                    lessons: '83 Lessons',
                    moreInfoLink: '/courses/data-analysis-fundamentals/',
                    studentsEnrolled: '8,176',
                },
            ],
        },
        wiring: {
            courseName: 'Wiring Course',
            courseImgSrc: 'https://www.hpacademy.com/resources/themes/base/production/images/motorsport-wiring.png',
            courses: [
                {
                    title: 'Wiring Fundamentals',
                    oldPrice: '$99',
                    lessons: '66 Lessons',
                    moreInfoLink: '/courses/wiring-fundamentals/',
                    studentsEnrolled: '23,541',
                },
                {
                    title: 'Practical Wiring - Club Level',
                    oldPrice: '$229',
                    lessons: '36 Lessons',
                    moreInfoLink: '/courses/practical-harness-construction-club-level/',
                    studentsEnrolled: '14,029',
                },
                {
                    title: 'Practical Wiring - Professional Motorsport',
                    oldPrice: '$299',
                    lessons: '48 Lessons',
                    moreInfoLink: '/courses/professional-motorsport-wiring-harness-construction/',
                    studentsEnrolled: '10,008',
                },
                {
                    title: 'CAN Bus Communications Decoded',
                    oldPrice: '$199',
                    lessons: '58 Lessons',
                    moreInfoLink: '/courses/canbus-communications-decoded/',
                    studentsEnrolled: '10,245',
                },
                {
                    title: 'PDM Installation & Configuration',
                    oldPrice: '$149',
                    lessons: '46 Lessons',
                    moreInfoLink: '/courses/pdm-installation-and-configuration/',
                    studentsEnrolled: '7,936',
                },
            ],
        },
        'engine building': {
            courseName: 'Engine Building Course',
            courseImgSrc: 'https://www.hpacademy.com/resources/themes/base/production/images/engine-building.png',
            courses: [
                {
                    title: 'Engine Building Fundamentals',
                    oldPrice: '$129',
                    lessons: '73 Lessons',
                    moreInfoLink: '/courses/engine-building-fundamentals/',
                    studentsEnrolled: '27,180',
                },
                {
                    title: 'Practical Engine Building',
                    oldPrice: '$199',
                    lessons: '91 Lessons',
                    moreInfoLink: '/courses/practical-engine-building/',
                    studentsEnrolled: '13,255',
                },
                {
                    title: 'How to Degree a Cam',
                    oldPrice: '$49',
                    lessons: '47 Lessons',
                    moreInfoLink: '/courses/how-to-degree-a-cam/',
                    studentsEnrolled: '15,316',
                },
            ],
        },
        'diesel tuning': {
            courseName: 'Diesel Tuning Course',
            courseImgSrc: 'https://www.hpacademy.com/resources/themes/base/production/images/diesel-tuning-course.gif',
            courses: [
                {
                    title: 'Diesel Tuning Fundamentals',
                    oldPrice: '$129',
                    lessons: '29 Lessons',
                    moreInfoLink: '/courses/diesel-tuning-fundamentals/',
                    studentsEnrolled: '10,454',
                },
                {
                    title: 'Practical Diesel Tuning',
                    oldPrice: '$229',
                    lessons: '52 Lessons',
                    moreInfoLink: '/courses/practical-diesel-tuning/',
                    studentsEnrolled: '9,596',
                },
            ],
        },
        'suspension and car setup': {
            courseImgSrc: 'https://www.hpacademy.com/resources/themes/base/production/images/Suspension.png',
            courseName: 'Suspension and Car Setup Course',
            courses: [
                {
                    title: 'Motorsport Wheel Alignment',
                    oldPrice: '$129',
                    lessons: '83 Lessons',
                    moreInfoLink: '/courses/motorsport-wheel-alignment-fundamentals/',
                    studentsEnrolled: '10,868',
                },
                {
                    title: 'Practical Corner Weighting',
                    oldPrice: '$99',
                    lessons: '48 Lessons',
                    moreInfoLink: '/courses/practical-corner-weighting/',
                    studentsEnrolled: '8,324',
                },
                {
                    title: 'Suspension Tuning & Optimization',
                    oldPrice: '$149',
                    lessons: '38 Lessons',
                    moreInfoLink: '/courses/suspension-tuning-and-optimization/',
                    studentsEnrolled: '9,673',
                },
                {
                    title: 'Brake System Design and Optimization',
                    oldPrice: '$149',
                    lessons: '46 Lessons',
                    moreInfoLink: '/courses/brake-system-design-and-optimization/',
                    studentsEnrolled: '7,185',
                },
                {
                    title: 'Wheel and Tyre Fitment',
                    oldPrice: '$99',
                    lessons: '35 Lessons',
                    moreInfoLink: '/courses/wheel-and-tyre-fitment/',
                    studentsEnrolled: '6,906',
                },
            ],
        },
        'driver training and improvement': {
            courseImgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/driverTrainingIcon.png',
            courseName: 'Driver Training and Improvement Course',
            courses: [
                {
                    title: 'Race Driving Fundamentals',
                    oldPrice: '$99',
                    lessons: '54 Lessons',
                    moreInfoLink: '/courses/race-driving-fundamentals/',
                    studentsEnrolled: '8,844',
                },
                {
                    title: 'Data Analysis Fundamentals',
                    oldPrice: '$129',
                    lessons: '83 Lessons',
                    moreInfoLink: '/courses/data-analysis-fundamentals/',
                    studentsEnrolled: '8,176',
                },
                {
                    title: 'Professional Motorsport Data Analysis',
                    oldPrice: '$197',
                    lessons: '63 Lessons',
                    moreInfoLink: '/courses/professional-motorsport-data-analysis/',
                    studentsEnrolled: '7,186',
                },
            ],
        },
        'motorsport fabrication': {
            courseImgSrc: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/fabricationIcon.png',
            courseName: 'Motorsport Fabrication Course',
            courses: [
                {
                    title: 'Motorsport Fabrication Fundamentals',
                    oldPrice: '$99',
                    lessons: '68 Lessons',
                    moreInfoLink: '/courses/motorsport-fabrication-fundamentals/',
                    studentsEnrolled: '12,446',
                },
                {
                    title: 'Practical TIG Welding',
                    oldPrice: '$199',
                    lessons: '52 Lessons',
                    moreInfoLink: '/courses/practical-tig-welding/',
                    studentsEnrolled: '9,515',
                },
                {
                    title: '3D Modeling & CAD for Motorsport',
                    oldPrice: '$199',
                    lessons: '74 Lessons',
                    moreInfoLink: '/courses/3d-modeling-and-cad-for-motorsport/',
                    studentsEnrolled: '10,325',
                },
                {
                    title: 'Motorsport Plumbing Systems',
                    oldPrice: '$129',
                    lessons: '60 Lessons',
                    moreInfoLink: '/courses/motorsport-plumbing-systems/',
                    studentsEnrolled: '7,154',
                },
                {
                    title: 'Practical 3D Scanning',
                    oldPrice: '$179',
                    lessons: '31 Lessons',
                    moreInfoLink: '/courses/practical-3d-scanning/',
                    studentsEnrolled: '6,807',
                },
            ],
        },
        'electric vehicles': {
            courseImgSrc: 'https://www.hpacademy.com/resources/themes/base/production/images/electric-vehicles.png',
            courseName: 'Electric Vehicle Courses',
            courses: [
                {
                    title: 'EV Fundamentals',
                    oldPrice: '$199',
                    lessons: '40 Lessons',
                    moreInfoLink: '/courses/ev-fundamentals/',
                    studentsEnrolled: '6,957',
                },
            ],
        },
    };
    const createAccordion = (currentCourses) => {
        const coursesArr = Object.values(coursesData);
        let accordionHtml = '<div id="opti_accordion_list" class="accordion__list">';
        coursesArr.forEach((category) => {
            const courses = category.courses.filter((course) => course.oldPrice !== 'No old price'); // Skip courses without oldPrice.
            accordionHtml += `
        <div class="accordion">
            <div class="accordion__title">
                <span><img class="opti_course_logo" src="${category.courseImgSrc}" alt="${category.courseName}"></span>
                <h4>${category.courseName} <span>(${category.courses.length})</span></h4>
                <span class="arrow"></span>
            </div>
            <div class="accordion__content-wrap">
                <div class="accordion__content">
                    <ul>
    `;
            courses.forEach((course) => {
                accordionHtml += `
            <li class="opti_course_list_item">
                <div class="opti_course_details">
                    <h5>${course.title} <span class="opti_course_worth">Worth ${course.oldPrice}</span></h5>
                    <p><span class="opti_course_modules">${course.lessons.replace('Lessons', 'Modules')}</span> • <span class="opti_course_students">${course.studentsEnrolled} Students enrolled</span></p>
                </div>
                <a href="https://www.hpacademy.com${course.moreInfoLink}" target="_blank">
                    <span class="opti_new_window_svg">${newWindowSvg}</span>
                </a>
            </li>
        `;
            });
            accordionHtml += `
                    </ul>
                </div>
            </div>
        </div>
    `;
        });
        accordionHtml += '</div>';
        const expandAllHtml = `<div id="opti_expand_all"><a href="javascript:void(0)">Expand all </a><span> (39)</span></div>`;
        currentCourses.insertAdjacentHTML('afterend', expandAllHtml + accordionHtml);
    };
    const accordionFunction = () => {
        const accordions = document.querySelectorAll('#opti_accordion_list .accordion');
        const expandAllBtn = document.querySelector('#opti_expand_all a');
        let allExpanded = false; // Track the current toggle state
        accordions.forEach((accordion) => {
            const heading = accordion.querySelector('div');
            const accordionContentWrap = accordion.querySelector('.accordion__content-wrap');
            // Ensure content wrap exists before proceeding
            if (!heading || !accordionContentWrap)
                return;
            const originalHeight = accordionContentWrap.offsetHeight;
            accordionContentWrap.style.height = '0';
            let accordionActiveClass = 'accordion__active';
            heading.addEventListener('click', function () {
                const parent = this.parentNode; // Assert that parentNode is an Element
                if (parent.classList.contains(accordionActiveClass)) {
                    handleClass(parent, accordionActiveClass, 'remove');
                    accordionContentWrap.style.height = '0px';
                }
                else {
                    handleClass(parent, accordionActiveClass);
                    accordionContentWrap.style.height = `${originalHeight}px`;
                }
            });
        });
        // Add functionality for the "Expand All" button
        if (expandAllBtn) {
            expandAllBtn.addEventListener('click', function () {
                allExpanded = !allExpanded; // Toggle the state
                accordions.forEach((accordion) => {
                    const accordionContentWrap = accordion.querySelector('.accordion__content-wrap');
                    const parent = accordion; // Treat accordion as the parent
                    if (!accordionContentWrap)
                        return;
                    if (allExpanded) {
                        // Expand all
                        handleClass(parent, 'accordion__active');
                        accordionContentWrap.style.height = `${accordionContentWrap.scrollHeight}px`;
                    }
                    else {
                        // Collapse all
                        handleClass(parent, 'accordion__active', 'remove');
                        accordionContentWrap.style.height = '0px';
                    }
                });
                // Update button text based on state
                expandAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
            });
        }
    };
    function handleClass(node, className, action = 'add') {
        node.classList[action](className);
    }
    const insertAnchorLinks = (instantAccessLi, freeAccessLi) => {
        const scrollToElement = (id) => {
            const targetElement = document.getElementById(id);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            else {
                console.warn(`Element with ID "${id}" not found.`);
            }
        };
        instantAccessLi.insertAdjacentHTML('beforeend', `<a class="opti_anchor_link" href="#opti_accordion_list">View list</a>`);
        freeAccessLi.insertAdjacentHTML('beforeend', `<a class="opti_anchor_link" href="#vip-courses-future">View list</a>`);
        // Add click event listeners for smooth scrolling
        instantAccessLi.querySelector('.opti_anchor_link').addEventListener('click', (e) => {
            e.preventDefault();
            scrollToElement('opti_accordion_list');
        });
        freeAccessLi.querySelector('.opti_anchor_link').addEventListener('click', (e) => {
            e.preventDefault();
            scrollToElement('vip-courses-future');
        });
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

