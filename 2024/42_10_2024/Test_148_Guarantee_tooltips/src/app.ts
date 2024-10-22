/**
Developed by: Riah
Test name: Test 148 - Guarantee tooltips
**/

(() => {
	'use strict';
	const myInterval = setInterval(() => {
		const priceBlockPoints = document.querySelector('.tittleAndPriceBlock__points');
		if (priceBlockPoints) {
			clearInterval(myInterval);
			optiInit(priceBlockPoints);
		}
	}, 300);

	const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="opti_info_icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0, 0, 400,400"><g ><path  d="M186.000 17.031 C 162.489 18.856,140.613 24.853,119.167 35.354 C 113.034 38.356,112.318 38.744,105.667 42.668 C 85.080 54.812,63.423 74.848,50.404 93.795 C 45.505 100.924,43.635 103.901,39.283 111.500 C 37.788 114.112,33.670 122.327,32.685 124.667 C 32.260 125.675,31.571 127.250,31.155 128.167 C 12.018 170.274,11.952 228.821,30.993 271.500 C 31.321 272.233,32.074 273.958,32.667 275.333 C 35.160 281.110,41.697 293.219,44.994 298.167 C 45.483 298.900,46.471 300.399,47.191 301.498 C 49.709 305.343,53.198 310.110,56.828 314.667 C 62.480 321.762,70.400 330.125,77.167 336.144 C 79.000 337.774,81.025 339.576,81.667 340.148 C 87.480 345.330,98.912 353.438,106.833 358.000 C 107.383 358.317,108.358 358.888,109.000 359.270 C 112.900 361.590,123.322 366.838,127.333 368.502 C 132.366 370.591,133.700 371.116,137.525 372.515 C 161.716 381.364,194.297 385.513,217.500 382.698 C 219.150 382.497,221.850 382.170,223.500 381.970 C 238.877 380.105,258.248 374.872,271.500 369.002 C 272.233 368.677,273.958 367.926,275.333 367.332 C 284.798 363.243,305.535 351.086,308.333 347.986 C 308.425 347.884,309.025 347.446,309.667 347.012 C 310.861 346.203,316.370 341.855,318.166 340.302 C 328.042 331.768,336.717 322.858,343.287 314.500 C 344.584 312.850,345.764 311.350,345.908 311.167 C 348.344 308.071,352.928 301.413,356.291 296.086 C 359.805 290.521,365.919 278.798,368.505 272.667 C 369.007 271.475,369.613 270.050,369.851 269.500 C 383.178 238.707,387.147 194.459,379.507 161.833 C 379.249 160.733,378.722 158.483,378.335 156.833 C 377.571 153.579,374.524 142.830,374.016 141.595 C 373.843 141.176,372.998 138.883,372.138 136.500 C 371.277 134.117,370.313 131.567,369.995 130.833 C 369.677 130.100,368.701 127.850,367.827 125.833 C 365.815 121.195,360.999 111.797,358.515 107.667 C 357.468 105.925,356.361 104.067,356.056 103.537 C 354.678 101.150,349.792 94.065,346.952 90.335 C 345.237 88.083,343.228 85.445,342.488 84.473 C 338.759 79.570,328.469 68.796,322.332 63.367 C 317.455 59.053,317.328 58.944,314.667 56.826 C 309.538 52.744,299.695 45.667,299.146 45.667 C 299.040 45.667,298.326 45.236,297.560 44.709 C 296.274 43.825,292.371 41.474,289.167 39.653 C 286.784 38.299,277.216 33.480,275.333 32.686 C 274.325 32.260,272.750 31.575,271.833 31.163 C 265.531 28.330,254.658 24.597,246.667 22.523 C 227.464 17.539,205.305 15.533,186.000 17.031 M208.500 50.497 C 211.250 50.596,213.950 50.742,214.500 50.822 C 215.050 50.902,216.925 51.137,218.667 51.343 C 236.044 53.404,260.260 61.280,272.243 68.769 C 272.935 69.200,274.517 70.109,275.760 70.788 C 279.257 72.698,286.347 77.535,291.647 81.627 C 311.587 97.021,327.842 118.021,337.783 141.230 C 338.819 143.648,339.667 145.726,339.667 145.846 C 339.667 145.967,339.875 146.539,340.130 147.116 C 342.344 152.136,345.587 163.627,347.199 172.163 C 354.157 208.995,346.702 248.665,327.103 279.099 C 325.946 280.894,325.000 282.479,325.000 282.619 C 325.000 282.759,324.732 283.165,324.403 283.520 C 324.075 283.876,322.797 285.592,321.563 287.333 C 314.944 296.674,305.098 307.376,296.833 314.215 C 290.154 319.741,289.436 320.276,282.667 324.773 C 242.414 351.511,191.011 357.267,146.667 340.001 C 145.658 339.608,144.308 339.090,143.667 338.849 C 136.839 336.287,120.021 327.246,116.158 324.062 C 115.970 323.907,115.370 323.492,114.825 323.141 C 112.789 321.828,104.279 315.310,103.333 314.338 C 103.242 314.244,101.967 313.119,100.500 311.840 C 93.432 305.671,83.694 294.896,78.405 287.388 C 72.953 279.650,69.018 273.058,65.493 265.759 C 64.097 262.867,62.802 260.220,62.617 259.878 C 58.052 251.457,52.179 228.715,50.856 214.333 C 50.763 213.325,50.597 211.476,50.487 210.225 C 48.768 190.715,52.599 165.767,60.426 145.500 C 62.876 139.156,67.286 130.181,71.304 123.361 C 73.393 119.815,80.653 109.157,81.313 108.667 C 81.437 108.575,82.066 107.800,82.712 106.943 C 88.302 99.533,100.032 87.862,107.710 82.071 C 108.855 81.207,111.077 79.567,112.646 78.427 C 137.974 60.030,173.174 48.857,201.500 50.221 C 202.600 50.274,205.750 50.398,208.500 50.497 M194.667 100.762 C 176.790 106.903,181.118 133.333,200.000 133.333 C 213.263 133.333,221.130 119.129,214.192 107.708 C 210.301 101.303,201.846 98.295,194.667 100.762 M194.957 150.636 C 189.630 152.340,185.433 156.631,183.864 161.977 C 183.053 164.742,183.053 285.258,183.864 288.023 C 188.622 304.240,211.909 303.864,216.305 287.500 C 217.067 284.664,216.782 164.108,216.008 161.618 C 213.302 152.918,203.618 147.866,194.957 150.636 " stroke="none" fill="#848484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/></g></svg>`;
	const lifetimeImg = `<img width="22" height="22" src="https://trello.com/1/cards/670ef2226f1f1b280b793393/attachments/6716c0c41803b2e5fd4b4316/download/noun-access-4994800-808184.png">`;
	const lifetimePopoverHtml = `<div class="popover fade bottom in" role="tooltip" id="opti_lifetime_popover">
		<div class="arrow"></div>
		<h3 class="popover-title" style="display: none;"></h3>
		<div class="popover-content">
			<p>High Performance Academy has been in business for 12 years, we have grown to 14 staff, two workshops, two studios
			and from a small startup to a professional organisation.</p>
			<p>Suffice to say, we aren’t going out of business any time soon.</p>
			<p>However, in the unlikely scenario we close, we will continue to guarantee you lifetime access with a download link
			to all of our courses.</p>
		</div>
	</div>`;

	const guaranteePopoverHtml = `<div class="popover fade bottom in" role="tooltip" id="opti_guarantee_popover">
		<div class="arrow"></div>
		<h3 class="popover-title" style="display: none;"></h3>
		<div class="popover-content">
			<p>HPA students have a 99% satisfaction rate when enrolled, so you can be sure you’ll love your course.</p>
			<p>Otherwise, get in contact within 60days for a full refund. No questions asked.</p>
		</div>
	</div>`;

	const guaranteeLifetimeHtml = `<div class="opti_tittleAndPriceBlock__points">
	        <h5 class="guarantee">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="280.3 63.5 401.3 434.9" class="svg-like"><path d="M666.7 306.1c1.9 5.6 1.9 11.2 1.9 18.7 0 13.1-3.7 26.1-9.3 37.3v11.2c0 16.8-5.6 33.6-14.9 46.7 0 48.5-33.6 78.4-82.1 78.4h-31.8c-37.3 0-70.9-11.2-106.4-22.4-7.5-1.9-28-11.2-35.5-11.2h-74.7c-18.7 0-33.6-14.9-33.6-33.6V265.1c0-18.7 14.9-33.6 33.6-33.6h70.9c9.3-7.5 28-29.9 35.5-41.1 9.3-11.2 18.7-22.4 28-33.6 14.9-16.8 7.5-57.9 33.6-84 5.6-5.6 14.9-9.3 24.3-9.3 28 0 52.3 9.3 65.3 35.5 7.5 16.8 9.3 31.7 9.3 48.5 0 18.7-5.6 33.6-13.1 50.4h46.7c35.5 0 67.2 29.9 67.2 67.2-1.9 13-5.6 28-14.9 41zm-336 89.6c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8zm281.8-166.1H521c0-29.9 24.3-52.3 24.3-84 0-29.9-5.6-50.4-41.1-50.4-16.8 16.8-7.5 56-33.6 84-7.5 7.5-13.1 14.9-20.5 24.3-11.2 14.9-42.9 59.7-63.5 59.7h-7.5v166.1h7.5c14.9 0 39.2 9.3 52.3 14.9 28 9.3 57.9 18.7 89.6 18.7h31.7c29.9 0 50.4-11.2 50.4-42.9 0-5.6 0-9.3-1.9-14.9 11.2-5.6 16.8-20.5 16.8-33.6 0-5.6-1.9-13.1-5.6-18.7 9.3-7.5 13.1-18.7 13.1-31.7 0-7.5-3.7-20.5-9.3-26.1 13.1 0 18.7-24.3 18.7-33.6 3.7-15-11.2-31.8-29.9-31.8z"></path></svg>

            60 day money back guarantee
			<div class="opti_relative">
			${infoIcon}
			${guaranteePopoverHtml}
			</div>
        </h5>
        <h5 class="paymentPlan">
            ${lifetimeImg}
            Life time access guarantee
			<div class="opti_relative">
			${infoIcon}
			${lifetimePopoverHtml}
			</div>
        </h5>
</div>`;

	const optiInit = (priceBlockPoints) => {
		priceBlockPoints.insertAdjacentHTML('afterend', guaranteeLifetimeHtml);

		const waitForTrigger = setInterval(() => {
			const popoverTriggers = [
				...document.querySelectorAll<HTMLElement>('.opti_tittleAndPriceBlock__points .opti_info_icon'),
			];

			if (popoverTriggers && popoverTriggers.length) {
				clearInterval(waitForTrigger);

				popoverTriggers.forEach((popoverTrigger) => {
					const popover = popoverTrigger.nextElementSibling;
					if (popover) {
						popoverTrigger.addEventListener('click', function (e) {
							e.preventDefault();
							popover.classList.toggle('opti_show_popover');
						});
						document.addEventListener('click', function (e: any) {
							if (!popover.contains(e.target) && !popoverTrigger.contains(e.target)) {
								popover.classList.remove('opti_show_popover');
							}
						});
					}
				});
			}
		}, 300);
	};

	setTimeout(function () {
		if (myInterval) {
			clearInterval(myInterval);
		}
	}, 15000);
})();
