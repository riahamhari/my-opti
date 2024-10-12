/**
Developed by: Dave Bennett
Test name: HACK - CRYSTAL - MMB - amends ancillary banner
**/
(function optiIfee() {
    'use strict';
    const waitForAmendElement = setInterval(function () {
        const amendElement = document.querySelector('.linksDisplay .amendComponent .travelLinkBg');
        if (amendElement) {
            clearInterval(waitForAmendElement);
            const bannerHtml = `
        <div id="opti-amends-banner">
          <p>If you didn’t make your booking online, or you have more than 9 passengers in your party, please call <strong>020 3451 2821</strong> to make any changes</p>
        </div>`;
            amendElement.insertAdjacentHTML('beforeend', bannerHtml);
        }
    }, 300);
    setTimeout(function () {
        if (waitForAmendElement) {
            clearInterval(waitForAmendElement);
        }
    }, 15000);
})();
export {};
