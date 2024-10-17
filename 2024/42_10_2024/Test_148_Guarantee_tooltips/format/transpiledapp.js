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
    const lifetimeIcon = `<svg class="opti_lifetime_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  version="1.1" width="22" height="22" viewBox="0, 0, 400,400"><g ><path  d="M188.500 37.660 C 174.042 38.748,169.435 55.763,181.937 61.902 L 183.833 62.833 197.333 62.859 C 211.749 62.886,214.161 63.064,224.333 64.859 C 232.407 66.283,244.815 69.765,249.860 72.023 C 250.608 72.358,252.021 72.948,253.000 73.333 C 256.124 74.565,263.230 77.978,266.000 79.578 C 266.642 79.949,268.067 80.771,269.167 81.405 C 270.922 82.418,273.218 83.876,278.699 87.460 C 288.630 93.952,304.962 110.152,311.672 120.167 C 312.287 121.083,312.876 121.908,312.981 122.000 C 313.456 122.412,317.491 128.898,319.720 132.833 C 327.287 146.189,332.807 161.679,335.304 176.559 C 336.008 180.758,336.076 181.241,336.729 186.667 C 337.283 191.272,337.280 208.304,336.724 213.333 C 333.922 238.686,325.600 260.445,310.833 281.030 C 309.986 282.211,307.226 285.780,306.989 286.000 C 306.891 286.092,306.499 286.573,306.118 287.070 C 302.994 291.144,293.966 300.338,289.167 304.334 C 287.517 305.707,286.092 306.907,286.000 307.000 C 284.348 308.671,272.487 316.809,268.500 319.006 C 267.400 319.613,265.975 320.406,265.333 320.768 C 244.384 332.608,214.914 339.022,190.674 337.015 C 186.536 336.673,184.379 336.964,181.835 338.210 C 172.409 342.825,172.630 356.410,182.204 360.878 C 188.953 364.028,216.384 362.952,235.333 358.794 C 241.880 357.358,252.933 354.078,256.500 352.513 C 257.050 352.272,257.875 351.964,258.333 351.830 C 263.946 350.188,281.468 341.270,287.859 336.803 C 289.015 335.995,290.045 335.333,290.146 335.333 C 290.248 335.333,292.094 334.077,294.249 332.542 C 309.288 321.825,322.337 308.641,333.489 292.896 C 334.503 291.464,335.333 290.236,335.333 290.167 C 335.333 290.099,335.977 289.095,336.764 287.938 C 340.417 282.564,346.636 270.928,349.648 263.833 C 363.412 231.408,366.314 194.743,357.820 160.584 C 356.616 155.743,356.282 154.598,354.442 149.000 C 350.820 137.985,345.057 125.384,339.647 116.647 C 339.016 115.628,338.320 114.503,338.101 114.147 C 334.566 108.420,332.281 105.174,327.555 99.167 C 321.699 91.722,317.374 87.093,309.287 79.615 C 306.197 76.758,299.917 71.565,297.667 70.007 C 297.025 69.562,296.425 69.112,296.333 69.007 C 295.194 67.695,283.668 60.380,277.436 57.012 C 250.397 42.400,218.308 35.418,188.500 37.660 M132.167 52.122 C 131.067 52.536,128.442 53.781,126.333 54.889 C 104.728 66.237,99.635 71.457,101.829 80.002 C 104.388 89.971,113.929 92.438,123.926 85.716 C 126.688 83.859,130.475 81.546,133.833 79.664 C 134.567 79.253,137.194 77.898,139.672 76.653 C 146.258 73.344,148.540 70.751,149.363 65.642 C 150.881 56.217,141.298 48.682,132.167 52.122 M74.469 101.658 C 69.451 102.724,67.358 104.936,60.098 116.841 C 57.436 121.208,52.544 130.742,51.831 132.956 C 48.946 141.903,56.792 150.882,66.089 149.272 C 71.265 148.375,73.288 146.410,77.349 138.333 C 78.686 135.675,80.354 132.547,81.057 131.383 C 81.759 130.218,82.333 129.186,82.333 129.088 C 82.333 128.991,83.755 126.778,85.492 124.171 C 89.753 117.775,90.527 114.675,88.997 110.148 C 86.996 104.229,80.429 100.391,74.469 101.658 M196.279 112.951 C 192.657 114.151,190.211 116.313,188.477 119.844 L 187.500 121.833 187.500 162.500 L 187.500 203.167 188.445 205.092 C 189.962 208.181,189.703 207.960,223.632 235.103 C 256.935 261.745,257.057 261.835,260.559 262.439 C 272.124 264.433,280.018 249.101,271.557 241.078 C 270.669 240.235,240.332 215.878,237.002 213.333 C 236.402 212.875,235.644 212.275,235.317 212.000 C 234.109 210.984,233.465 210.464,232.008 209.329 C 231.188 208.690,230.340 208.017,230.124 207.833 C 229.908 207.650,225.891 204.444,221.199 200.710 L 212.667 193.920 212.665 158.710 C 212.664 134.984,212.548 123.065,212.310 122.167 C 210.396 114.942,203.037 110.712,196.279 112.951 M49.333 174.923 C 43.188 175.483,38.908 179.952,37.927 186.833 C 36.767 194.981,37.492 214.537,39.081 217.927 C 44.991 230.536,65.057 224.812,63.069 211.084 C 62.780 209.093,62.774 191.106,63.061 188.750 C 64.011 180.961,57.296 174.198,49.333 174.923 M61.667 250.661 C 55.057 251.896,51.037 257.154,51.420 264.064 C 51.608 267.456,52.746 270.005,59.502 282.167 C 66.707 295.137,71.895 299.463,78.883 298.325 C 89.159 296.653,92.548 286.568,86.086 276.888 C 85.214 275.582,84.350 274.255,84.167 273.941 C 83.983 273.626,83.095 272.123,82.192 270.601 C 81.289 269.079,79.247 265.300,77.654 262.204 C 72.521 252.231,68.562 249.372,61.667 250.661 M110.096 311.000 C 101.204 314.161,98.496 326.035,105.294 332.049 C 108.790 335.142,117.566 340.538,127.124 345.471 C 137.173 350.659,144.708 349.308,148.212 341.692 C 151.698 334.117,148.801 327.909,139.639 323.320 C 133.864 320.427,127.065 316.505,123.008 313.727 C 118.137 310.393,114.164 309.553,110.096 311.000 " stroke="none" fill="#848484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/><path  d="" stroke="none" fill="#888484" fill-rule="evenodd"/></g></svg>`;
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
			$${!1}{infoIcon}
			$${!1}{guaranteePopoverHtml}
			</div>
        </h5>
        <h5 class="paymentPlan">
            $${!1}{lifetimeIcon}
            Life time access guarantee
			<div class="opti_relative">
			$${!1}{infoIcon}
			$${!1}{lifetimePopoverHtml}
			</div>
        </h5>
</div>`;
    const optiInit = (priceBlockPoints) => {
        priceBlockPoints.insertAdjacentHTML('afterend', guaranteeLifetimeHtml);
        const waitForTrigger = setInterval(() => {
            const popoverTriggers = [
                ...document.querySelectorAll('.opti_tittleAndPriceBlock__points .opti_info_icon'),
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
                        document.addEventListener('click', function (e) {
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

