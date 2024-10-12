/**
Developed by: Riah
Test name: TUI UK&I - BOOK - [UK173] Pax details page - validating invalid email addresses i2 updated UX
**/
(function optiIfee() {
    'use strict';
    const myInterval = setInterval(function () {
        var _a;
        const leadPaxSection = document.querySelector('[aria-label="ADULT 1"]');
        const importantInfoEl = document.querySelector('#importantInformation__component');
        const emailInputField = document.querySelector('#paxInfoEmail');
        if (importantInfoEl && emailInputField && (emailInputField === null || emailInputField === void 0 ? void 0 : emailInputField.value) && leadPaxSection && ((_a = window === null || window === void 0 ? void 0 : window.utag) === null || _a === void 0 ? void 0 : _a.link)) {
            clearInterval(myInterval);
            optiInit(importantInfoEl, emailInputField);
            const debouncedInit = debounce(() => {
                optiInit(importantInfoEl, emailInputField);
            }, 300, false);
            window === null || window === void 0 ? void 0 : window.store.subscribe(debouncedInit);
        }
    }, 300);
    const attentionIcon = `<span class="opti_attention_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g stroke="#1B115C" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="11"/>
        <circle cx="12" cy="6" r="1"/>
        <path d="M12 18v-7"/>
    </g>
</svg></span>`;
    const optiInit = (importantInfoEl, emailInputField) => {
        const leadPaxSection = document.querySelector('[aria-label="ADULT 1"]');
        const isEmailValid = emailInputField.classList.contains('inputs__success');
        if (!isEmailValid) {
            return;
        }
        const emailEntered = emailInputField.value;
        const paxEmailConfirmHtml = `<div id="opti_email_confirm_container">
		${attentionIcon}
		<p>Booking confirmation will be sent to: <span class="opti_email_entered">${emailEntered}</span><a href="#paxInfoEmail">Edit</a></p>
			</div>`;
        const confirmEmailEl = document.querySelector('.opti_email_entered');
        if (!confirmEmailEl) {
            importantInfoEl.insertAdjacentHTML('afterend', paxEmailConfirmHtml);
        }
        else {
            confirmEmailEl.innerText = emailEntered;
        }
        const waitForEl = setInterval(() => {
            const passengerLink = document.querySelector('#opti_email_confirm_container a');
            if (passengerLink) {
                clearInterval(waitForEl);
                passengerLink.onclick = (e) => {
                    e.preventDefault();
                    window.utag.link({
                        eventAction: 'Optimisation Event',
                        eventCategory: 'Optimisation',
                        eventName: 'opti_clicked_edit_email',
                        event: 'tiq.on',
                    }, '', [6]);
                    const debounceScroll = debounce(() => {
                        emailInputField.focus();
                        leadPaxSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300, false);
                    debounceScroll();
                };
            }
        }, 300);
    };
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    }
})();
export {};
