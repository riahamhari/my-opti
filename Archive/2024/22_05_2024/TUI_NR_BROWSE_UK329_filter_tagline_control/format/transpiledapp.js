/**
Developed by: Riah
Test name: TUI NR - BROWSE - [UK-329] - filter tagline control
**/
(function optiIfee() {
    'use strict';
    const myInterval = setInterval(function () {
        var _a;
        const hostEl = document.querySelector('tui-product-cards');
        const shadowRoot = hostEl === null || hostEl === void 0 ? void 0 : hostEl.shadowRoot;
        const sortingWrapper = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('.sorting-wrapper');
        if (hostEl && shadowRoot && sortingWrapper && ((_a = window === null || window === void 0 ? void 0 : window.utag) === null || _a === void 0 ? void 0 : _a.link)) {
            clearInterval(myInterval);
            optiInit(shadowRoot);
        }
    }, 300);
    const optiInit = (shadowRoot) => {
        const site = getLanguage();
        const trackingNum = site === 'uk' ? 6 : 37;
        shadowRoot.querySelector('.filters-panel__filters').onclick = () => {
            window === null || window === void 0 ? void 0 : window.utag.link({
                eventAction: 'Optimisation Event',
                eventCategory: 'Optimisation',
                eventName: 'opti_clicked_a_filter',
                event: 'tiq.on',
            }, '', [trackingNum]);
        };
    };
    function getLanguage() {
        return window.location.hostname.match(/(uk|se|fi|no|dk)/i)[1];
    }
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

