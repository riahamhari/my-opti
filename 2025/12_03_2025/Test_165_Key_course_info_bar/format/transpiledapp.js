/**
Developed by: Riah
Test name: Test 165 - Key course info bar
**/
const tagInterval = setInterval(() => {
    if (typeof (window === null || window === void 0 ? void 0 : window.clarity) === 'function') {
        window.clarity('set', 'test-165', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
(() => {
    'use strict';
    const icons = {
        calendar: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/calendar%20icon.png',
        level: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/Level%20icon.png',
        person: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/noun-person-1683897.png',
        time: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/time%20commitment.png',
        video: 'https://cdn.jsdelivr.net/gh/riahamhari/hpa-resources@main/images/video%20icon.png',
    };
    const courseInfo = {
        'Introduction to Engine Tuning': {
            'Course URL': 'https://www.hpacademy.com/courses/introduction-to-engine-tuning',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 31,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1-2 weeks',
            'Perfect For': 'Anyone learning engine tuning principles',
        },
        'EFI Tuning Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/efi-tuning-fundamentals',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 55,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2–3 weeks',
            'Perfect For': 'Anyone starting with EFI tuning',
        },
        'Understanding AFR': {
            'Course URL': 'https://www.hpacademy.com/courses/understanding-afr/',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 36,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone starting with EFI tuning',
        },
        'Practical Reflash Tuning': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-reflash-tuning',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 129,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3-4 weeks',
            'Perfect For': 'Anyone tuning factory ECUs',
        },
        'Practical Standalone Tuning': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-standalone-tuning',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 196,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3-4 weeks',
            'Perfect For': 'Anyone tuning standalone ECUs',
        },
        'WinOLS Mastery: Map Identification & Editing': {
            'Course URL': 'https://www.hpacademy.com/courses/winols-mastery-map-identification-and-editing',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 59,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3 weeks',
            'Perfect For': 'Anyone specializing in ECU remapping',
        },
        'Ethanol & Flex Fuel Tuning': {
            'Course URL': 'https://www.hpacademy.com/courses/ethanol-and-flex-fuel-tuning/',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 47,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone looking to tune Ethanol',
        },
        'Boost Control': {
            'Course URL': 'https://www.hpacademy.com/courses/boost-control/',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 26,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone starting with EFI tuning',
        },
        'Launch Control': {
            'Course URL': 'https://www.hpacademy.com/courses/launch-control/',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 26,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone starting with EFI tuning',
        },
        'Variable Cam Control Tuning': {
            'Course URL': 'https://www.hpacademy.com/courses/variable-cam-control-tuning/',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 48,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone looking to Tune Variable timing systems',
        },
        'Wiring Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/wiring-fundamentals',
            'Instructor Name': 'Zac Perston',
            'Instructor Image': 'https://www.hpacademy.com/assets/Taz-Articles-and-Blogs/PDM/f0943aa0e3/zac-hpa2__ResizedImageWzc4Miw0OTJd.jpg',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 66,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3 weeks',
            'Perfect For': 'Anyone learning automotive wiring',
        },
        'Practical Wiring - Club Level': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-harness-construction-club-level/',
            'Instructor Name': 'Zac Perston',
            'Instructor Image': 'https://www.hpacademy.com/assets/Taz-Articles-and-Blogs/PDM/f0943aa0e3/zac-hpa2__ResizedImageWzc4Miw0OTJd.jpg',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 36,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone learning automotive wiring',
        },
        'Professional Motorsport Wiring Harness Construction': {
            'Course URL': 'https://www.hpacademy.com/courses/professional-motorsport-wiring-harness-construction',
            'Instructor Name': 'Zac Perston',
            'Instructor Image': 'https://www.hpacademy.com/assets/Taz-Articles-and-Blogs/PDM/f0943aa0e3/zac-hpa2__ResizedImageWzc4Miw0OTJd.jpg',
            'Content Level': 'Advanced',
            'Modules Inside': 48,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone wanting to build high level wiring',
        },
        'CAN Bus Communications Decoded': {
            'Course URL': 'https://www.hpacademy.com/courses/canbus-communications-decoded',
            'Instructor Name': 'Zac Perston',
            'Instructor Image': 'https://www.hpacademy.com/assets/Taz-Articles-and-Blogs/PDM/f0943aa0e3/zac-hpa2__ResizedImageWzc4Miw0OTJd.jpg',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 58,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2–3 weeks',
            'Perfect For': 'Anyone wanting to understand CAN bus',
        },
        'PDM Installation & Configuration': {
            'Course URL': 'https://www.hpacademy.com/courses/pdm-installation-and-configuration/',
            'Instructor Name': 'Zac Perston',
            'Instructor Image': 'https://www.hpacademy.com/assets/Taz-Articles-and-Blogs/PDM/f0943aa0e3/zac-hpa2__ResizedImageWzc4Miw0OTJd.jpg',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 46,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': "Anyone wanting to understand PDM's",
        },
        'Engine Building Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/engine-building-fundamentals',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 73,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3–4 weeks',
            'Perfect For': 'Anyone seeking engine building knowledge',
        },
        'Practical Engine Building': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-engine-building',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 91,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '4–5 weeks',
            'Perfect For': 'Anyone building engines',
        },
        'How to Degree a Cam': {
            'Course URL': 'https://www.hpacademy.com/courses/how-to-degree-a-cam',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 47,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone optimizing camshaft timing',
        },
        'Diesel Tuning Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/diesel-tuning-fundamentals',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 29,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone learning diesel tuning basics',
        },
        'Practical Diesel Tuning': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-diesel-tuning',
            'Instructor Name': 'Nick Priegnitz',
            'Instructor Image': 'https://i.ytimg.com/vi/gpkdhRQDmg8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrUDmDA06f3tG9IZHWAgQK2pCwZA',
            'Content Level': 'Experienced',
            'Modules Inside': 52,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2–3 weeks',
            'Perfect For': 'Anyone tuning diesel engines',
        },
        'Suspension Tuning & Optimization': {
            'Course URL': 'https://www.hpacademy.com/courses/suspension-tuning-and-optimization',
            'Instructor Name': 'Tim White',
            'Instructor Image': 'https://media.licdn.com/dms/image/v2/C5603AQFeYbeT7qJ2aA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633393000742?e=2147483647&v=beta&t=sTHuaekGxm-thVk4s4YhlXbB78vWrRklpCTqXXqgjUw',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 38,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone optimizing vehicle suspension',
        },
        'Motorsport Wheel Alignment Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/motorsport-wheel-alignment-fundamentals',
            'Instructor Name': 'Tim White',
            'Instructor Image': 'https://media.licdn.com/dms/image/v2/C5603AQFeYbeT7qJ2aA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633393000742?e=2147483647&v=beta&t=sTHuaekGxm-thVk4s4YhlXbB78vWrRklpCTqXXqgjUw',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 83,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '4 weeks',
            'Perfect For': 'Anyone mastering wheel alignment',
        },
        'Practical Corner Weighting': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-corner-weighting/',
            'Instructor Name': 'Tim White',
            'Instructor Image': 'https://media.licdn.com/dms/image/v2/C5603AQFeYbeT7qJ2aA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633393000742?e=2147483647&v=beta&t=sTHuaekGxm-thVk4s4YhlXbB78vWrRklpCTqXXqgjUw',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 48,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone looking to corner weight their car',
        },
        'Wheel & Tyre Fitment': {
            'Course URL': 'https://www.hpacademy.com/courses/wheel-and-tyre-fitment',
            'Instructor Name': 'Connor Anderson',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/b52e5af09e/Staff-Photos-About_Connor__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 35,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone focusing on wheel and tire setups',
        },
        'Brake System Design & Optimization': {
            'Course URL': 'https://www.hpacademy.com/courses/brake-system-design-and-optimization',
            'Instructor Name': 'Connor Anderson',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/b52e5af09e/Staff-Photos-About_Connor__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 46,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone interested in brake systems',
        },
        'Race Driving Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/race-driving-fundamentals/',
            'Instructor Name': 'Andrew Waite',
            'Instructor Image': 'https://i.vimeocdn.com/video/1170200604-f649e107a8fa1ecece3b26bd8cecade6974bf7e18670a526b014ff66f3ef5fb0-d_640x360?r=pad',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 54,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2–3 weeks',
            'Perfect For': 'Anyone looking to race faster',
        },
        'Data Analysis Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/data-analysis-fundamentals/',
            'Instructor Name': 'Tim White',
            'Instructor Image': 'https://media.licdn.com/dms/image/v2/C5603AQFeYbeT7qJ2aA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633393000742?e=2147483647&v=beta&t=sTHuaekGxm-thVk4s4YhlXbB78vWrRklpCTqXXqgjUw',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 83,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '4 weeks',
            'Perfect For': 'Anyone using data to go faster',
        },
        'Professional Motorsport Data Analysis': {
            'Course URL': 'https://www.hpacademy.com/courses/professional-motorsport-data-analysis/',
            'Instructor Name': 'Tim White',
            'Instructor Image': 'https://media.licdn.com/dms/image/v2/C5603AQFeYbeT7qJ2aA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633393000742?e=2147483647&v=beta&t=sTHuaekGxm-thVk4s4YhlXbB78vWrRklpCTqXXqgjUw',
            'Content Level': 'Advanced',
            'Modules Inside': 63,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3 weeks',
            'Perfect For': 'Anyone Serious about Data Analysis',
        },
        'Motorsport Fabrication Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/motorsport-fabrication-fundamentals',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 68,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3 weeks',
            'Perfect For': 'Anyone new to motorsport fabrication',
        },
        'Practical TIG Welding': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-tig-welding',
            'Instructor Name': 'Andre Simon',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/8d9a485da7/Staff-Photos-About_Andre__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 52,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2–3 weeks',
            'Perfect For': 'Anyone mastering TIG welding',
        },
        '3D Modeling & CAD for Motorsport': {
            'Course URL': 'https://www.hpacademy.com/courses/3d-modeling-and-cad-for-motorsport',
            'Instructor Name': 'Connor Anderson',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/b52e5af09e/Staff-Photos-About_Connor__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 74,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3–4 weeks',
            'Perfect For': 'Anyone looking to learn CAD',
        },
        'Motorsport Plumbing Systems': {
            'Course URL': 'https://www.hpacademy.com/courses/motorsport-plumbing-systems',
            'Instructor Name': 'Connor Anderson',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/b52e5af09e/Staff-Photos-About_Connor__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 60,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '3 weeks',
            'Perfect For': 'Anyone designing vehicle plumbing',
        },
        'Practical 3D Scanning': {
            'Course URL': 'https://www.hpacademy.com/courses/practical-3d-scanning',
            'Instructor Name': 'Connor Anderson',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/team-members/b52e5af09e/Staff-Photos-About_Connor__FillWzMyNywyOTld.png',
            'Content Level': 'Experienced',
            'Modules Inside': 31,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '1–2 weeks',
            'Perfect For': 'Anyone interested in 3D scanning',
        },
        'EV Fundamentals': {
            'Course URL': 'https://www.hpacademy.com/courses/ev-fundamentals/',
            'Instructor Name': 'Sasha Anis',
            'Instructor Image': 'https://www.hpacademy.com/assets/Uploads/blog-posts/1878342509/sasha-anis__FillWzYwMCw0MDBd.jpg',
            'Content Level': 'Essential Knowledge',
            'Modules Inside': 40,
            'Time Commitment': '10-30 Minutes a Day',
            'Time to Finish': '2 weeks',
            'Perfect For': 'Anyone starting with EV tuning',
        },
    };
    const myInterval = setInterval(() => {
        const titleAnPriceBlock = document.querySelector('.tittleAndPriceBlock');
        if (titleAnPriceBlock) {
            clearInterval(myInterval);
            optiInit(titleAnPriceBlock);
        }
    }, 300);
    const optiInit = (titleAnPriceBlock) => {
        const currentUrl = window.location.href;
        const baseUrl = new URL(currentUrl).origin + new URL(currentUrl).pathname;
        const course = Object.values(courseInfo).find((info) => baseUrl.includes(info['Course URL']));
        if (!course)
            return;
        const infoBar = createInfoBar(course);
        titleAnPriceBlock.append(infoBar);
    };
    const createInfoBar = ({ 'Instructor Image': instructorImage, 'Instructor Name': instructorName, 'Content Level': contentLevel, 'Modules Inside': modulesInside, 'Time Commitment': timeCommitment, 'Time to Finish': timeToFinish, 'Perfect For': perfectFor, }) => {
        const infoBar = document.createElement('div');
        infoBar.id = 'opti_course_info_bar';
        infoBar.classList.add('opti_course_info_bar');
        // Helper function to create a course info item
        const createInfoItem = (icon, label, value, additionalText) => {
            return `
				<div class="opti_course_info_item">
					<span class="opti_course_info_item__icon"><img src="$${!1}{icon}" /></span>
					<div class="opti_course_info_item_details">
						<p class="opti_course_info_item__label">$${!1}{label}</p>
						<p class="opti_course_info_item__value">$${!1}{value}</p>
						$${!1}{additionalText ? `<p class="opti_course_info_item__demand">$${!1}{additionalText}</p>` : ''}
					</div>
				</div>
			`;
        };
        infoBar.innerHTML = `
			<div class="opti_course_info_instructor">
				<img src="$${!1}{instructorImage}" alt="Instructor $${!1}{instructorName} image" />
				<div class="opti_course_info_instructor__details">
					<p class="opti_course_info_instructor__label">Instructor</p>
					<p class="opti_course_info_instructor__name">$${!1}{instructorName}</p>
				</div>
			</div>
			<div class="opti_course_info">
				$${!1}{createInfoItem(icons.level, 'Content Level', contentLevel)}
				$${!1}{createInfoItem(icons.video, 'Modules Inside', `$${!1}{modulesInside} Video Lessons`)}
				$${!1}{createInfoItem(icons.time, 'Time Commitment', timeCommitment, '(on-demand)')}
				$${!1}{createInfoItem(icons.calendar, 'Time to Finish', timeToFinish)}
				$${!1}{createInfoItem(icons.person, 'Perfect for', perfectFor)}
				
			</div>
		`;
        return infoBar;
    };
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

