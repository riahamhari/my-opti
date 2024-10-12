/**
Developed by: Thomas K
Test name: TUI_ND_SEARCH_ND100_Search_bar_LMS/AI_v1
**/
const translations = {
    se: {
        title: 'Sommar - All Inclusive',
        url: 'https://www.tui.se/erbjudanden/all-inclusive-sommarresor/',
        oldCombo: 'Kombinationsresor',
        newCombo: 'Kombinations- resor',
    },
    dk: {
        title: 'Sommer charter',
        url: 'https://www.tui.dk/tilbud/sommer-alle-charter/',
        oldCombo: 'Kombinationsrejse',
        newCombo: 'Kombinations- rejse',
    },
    no: {
        title: 'Sommer All-inclusive',
        url: 'https://www.tui.no/tilbud/all-inclusive-rabatt-sommer/?',
        oldCombo: 'Kombinasjonsreise',
        newCombo: 'Kombinasjons- reise',
    },
    fi: {
        title: 'Kesan All-inclusive',
        url: 'https://www.tui.fi/matkatarjoukset/kesan-all-inclusive-hotellit/?',
        oldCombo: 'Yhdistelmälomat',
        newCombo: 'Yhdistelmä- lomat',
        oldPacket: 'Matkapaketti',
        newPacket: 'Matka- Paketti',
    },
};
(function optiIfee() {
    'use strict';
    const getLanguage = () => {
        return window.location.hostname.match(/(se|fi|no|dk)/i)[1];
    };
    const myInterval = setInterval(function () {
        const tabsContainer = document.querySelector('.UI__choiceSearchTabsContainer ul');
        if (tabsContainer) {
            clearInterval(myInterval);
            const language = getLanguage();
            const tabs = tabsContainer.querySelectorAll('li');
            //change Text of tabs to fit in small devices
            const replaceText = () => {
                tabs.forEach((el) => {
                    const tabLabel = el.querySelector('div.UI__choiceSearchTab > span.UI__label');
                    if (language === 'fi') {
                        if (window.innerWidth < 474) {
                            if (tabLabel.innerText === translations[language].oldPacket) {
                                console.log('----translate package to new');
                                tabLabel.innerText = translations[language].newPacket;
                            }
                            if (tabLabel.innerText === translations[language].oldCombo) {
                                tabLabel.innerText = translations[language].newCombo;
                                tabLabel.style.textTransform = 'initial';
                            }
                        }
                        else {
                            if (tabLabel.innerText === translations[language].newPacket) {
                                console.log('----translate package to old');
                                tabLabel.innerText = translations[language].oldPacket;
                            }
                            if (tabLabel.innerText === translations[language].newCombo) {
                                tabLabel.innerText = translations[language].oldCombo;
                                tabLabel.style.textTransform = 'capitalize';
                            }
                        }
                    }
                    else {
                        // Handling other languages based on width
                        if (window.innerWidth < getThreshold(language)) {
                            if (tabLabel.innerText === translations[language].oldCombo) {
                                tabLabel.innerText = translations[language].newCombo;
                                tabLabel.style.textTransform = 'initial';
                            }
                        }
                        else {
                            if (tabLabel.innerText === translations[language].newCombo) {
                                tabLabel.innerText = translations[language].oldCombo;
                                tabLabel.style.textTransform = 'capitalize';
                            }
                        }
                    }
                });
            };
            function getThreshold(language) {
                switch (language) {
                    case 'se':
                        return 476;
                    case 'dk':
                        return 430;
                    case 'no':
                        return 462;
                    case 'fi':
                        return 474;
                    default:
                        return 500;
                }
            }
            function debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }
            const sendEvent = () => {
                if (window.utag) {
                    let utag = window.utag;
                    utag.link({
                        eventAction: 'Optimisation Event',
                        eventCategory: 'Optimisation',
                        eventName: `Opti_clicked_Summer_All_inclusive_ND100`,
                        event: 'tiq.on',
                    }, '', [37]);
                }
            };
            const tabsLength = tabs.length;
            if (tabsLength < 5) {
                //create summer - all inclusive
                const summerTab = document.createElement('li');
                const lastLi = tabsContainer.querySelector('li:last-child');
                lastLi.after(summerTab);
                summerTab.innerHTML = `<div class="UI__choiceSearchTab"><span class="UI__icon"><svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 2" viewBox="0 0 427.3 427.3" width="2400" height="2400"><g fill="#1b115c" data-name="Capa 1"><path d="M213.65 427.3c-57.07 0-110.72-22.22-151.07-62.58S0 270.72 0 213.65C0 95.84 95.84 0 213.65 0S427.3 95.84 427.3 213.65 331.46 427.3 213.65 427.3zm0-410.3C105.22 17 17 105.22 17 213.65S105.22 410.3 213.65 410.3 410.3 322.08 410.3 213.65 322.08 17 213.65 17z"/><path d="M377.7 261.52c-4.69 0-8.5-3.81-8.5-8.5 0-34.92-28.41-63.32-63.32-63.32s-60.88 25.86-63.17 58.87a8.493 8.493 0 0 1-9.07 7.89 8.493 8.493 0 0 1-7.89-9.07c2.9-41.89 38.1-74.7 80.13-74.7 44.29 0 80.32 36.03 80.32 80.32 0 4.69-3.81 8.5-8.5 8.5zM210.21 209.54c-1.15 0-2.31-.23-3.43-.73-4.29-1.9-6.24-6.91-4.34-11.21 13.24-29.98-.38-65.14-30.36-78.38-29.98-13.24-65.14.38-78.38 30.37-1.9 4.3-6.92 6.24-11.21 4.34-4.29-1.9-6.24-6.91-4.34-11.21 17.02-38.56 62.24-56.07 100.8-39.05 38.55 17.03 56.06 62.24 39.04 100.8-1.4 3.18-4.52 5.07-7.78 5.07z"/><path d="M250.55 159.01c-3.41 0-6.62-2.06-7.93-5.43-11.84-30.56-46.33-45.79-76.89-33.96-12.59 4.88-22.87 13.59-29.71 25.19-2.38 4.04-7.6 5.39-11.64 3.01-4.04-2.38-5.39-7.6-3.01-11.64 8.8-14.93 22.02-26.14 38.21-32.41 39.3-15.22 83.66 4.37 98.88 43.67 1.7 4.38-.48 9.3-4.85 11a8.52 8.52 0 0 1-3.07.58z"/><path d="M173.94 190.99c-1.71 0-3.44-.51-4.93-1.58-3.82-2.73-4.71-8.04-1.98-11.86 7.83-10.96 11.62-23.89 10.97-37.38-1.58-32.73-29.53-58.07-62.23-56.5-4.69.22-8.67-3.39-8.9-8.08s3.39-8.67 8.08-8.9c42.1-2.04 78 30.56 80.03 72.66.84 17.35-4.05 33.97-14.12 48.08a8.493 8.493 0 0 1-6.92 3.56z"/><path d="M110.96 261.87c-1.17 0-2.35-.24-3.48-.75-4.28-1.92-6.19-6.96-4.27-11.24l61.77-137.45c1.92-4.28 6.95-6.19 11.24-4.27 4.28 1.92 6.19 6.96 4.27 11.24l-61.77 137.45a8.506 8.506 0 0 1-7.76 5.02z"/><path d="M14.26 270.63c-3.56 0-6.88-2.25-8.06-5.82-1.48-4.45.92-9.27 5.38-10.75l34.79-11.59c15.33-5.12 32.24-5.12 47.59 0l19.87 6.62c11.74 3.91 24.18 4.01 35.99.27l22.91-7.25c15.45-4.89 32.39-4.62 47.68.77l16.32 5.75c11.75 4.14 24.78 4.38 36.69.67l23.29-7.27c15.51-4.84 32.47-4.49 47.76.98l15.75 5.64c11.73 4.19 24.24 4.54 36.17 1l16.22-4.81c4.5-1.33 9.23 1.23 10.57 5.73s-1.23 9.23-5.73 10.57l-16.22 4.81c-15.42 4.57-31.58 4.12-46.73-1.29l-15.75-5.64c-11.83-4.23-24.96-4.5-36.97-.76l-23.29 7.27c-15.38 4.79-32.21 4.49-47.4-.86l-16.32-5.75c-11.84-4.17-24.95-4.38-36.91-.6l-22.91 7.25c-15.25 4.82-31.32 4.7-46.49-.35l-19.87-6.62c-11.88-3.97-24.96-3.97-36.83 0l-34.8 11.6c-.89.3-1.8.44-2.69.44zM132.23 311.06a75.06 75.06 0 0 1-23.78-3.88l-19.87-6.62c-11.88-3.97-24.96-3.97-36.83 0l-21.69 7.23c-4.45 1.48-9.27-.92-10.75-5.38-1.48-4.45.92-9.27 5.38-10.75l21.68-7.23c15.33-5.12 32.24-5.12 47.59 0l19.87 6.62c11.74 3.91 24.18 4.01 35.99.27l22.91-7.25c15.45-4.89 32.38-4.62 47.68.77l16.32 5.75c11.75 4.14 24.78 4.38 36.69.67l23.29-7.27c15.51-4.84 32.47-4.49 47.76.98l15.74 5.63c11.73 4.2 24.24 4.55 36.18 1.01l1.28-.38c4.51-1.33 9.23 1.25 10.56 5.75s-1.25 9.23-5.75 10.56l-1.26.37c-15.41 4.57-31.57 4.12-46.72-1.31l-15.74-5.63c-11.83-4.24-24.96-4.51-36.97-.76l-23.29 7.27c-15.38 4.79-32.21 4.49-47.4-.86l-16.32-5.75c-11.84-4.17-24.95-4.38-36.91-.6l-22.91 7.25c-7.44 2.35-15.08 3.53-22.71 3.53zM132.23 393.12a75.06 75.06 0 0 1-23.78-3.88l-19.87-6.63c-2.11-.7-4.27-1.28-6.41-1.73-4.6-.96-7.54-5.46-6.58-10.06s5.47-7.54 10.06-6.58c2.78.58 5.57 1.33 8.31 2.24l19.88 6.63c11.73 3.91 24.18 4.01 35.98.27l22.91-7.25c15.46-4.89 32.39-4.62 47.68.76l16.32 5.75c11.75 4.14 24.78 4.38 36.69.67l23.29-7.27c15.36-4.79 31.53-4.57 46.75.64 4.44 1.52 6.81 6.35 5.29 10.79-1.52 4.44-6.35 6.81-10.79 5.29-11.78-4.03-24.29-4.2-36.18-.5l-23.28 7.27c-15.38 4.79-32.21 4.49-47.4-.86l-16.32-5.75c-11.83-4.17-24.94-4.38-36.91-.59l-22.91 7.25c-7.44 2.35-15.08 3.53-22.71 3.53zM132.23 352.09a75.06 75.06 0 0 1-23.78-3.88l-19.87-6.63c-11.88-3.96-24.96-3.96-36.83 0l-1.53.51c-4.45 1.49-9.27-.9-10.76-5.36s.9-9.27 5.36-10.76l1.55-.52c15.35-5.12 32.25-5.12 47.6 0l19.87 6.63c11.73 3.91 24.18 4.01 35.98.27l22.91-7.25c15.45-4.89 32.39-4.62 47.68.77l16.32 5.74c11.77 4.15 24.8 4.38 36.69.67l23.29-7.27c15.5-4.84 32.47-4.48 47.76.99l15.74 5.63c4.34 1.55 8.85 2.59 13.44 3.08 4.67.5 8.05 4.69 7.55 9.36a8.497 8.497 0 0 1-9.36 7.55 75.403 75.403 0 0 1-17.36-3.97l-15.74-5.63c-11.84-4.24-24.97-4.51-36.97-.77l-23.29 7.27c-15.36 4.8-32.2 4.49-47.4-.86l-16.32-5.74c-11.85-4.17-24.96-4.39-36.91-.6l-22.91 7.25c-7.44 2.35-15.08 3.53-22.71 3.53z"/></g></svg></span><span class="UI__label">${translations[language].title}</span></div>`;
                summerTab.addEventListener('click', function openTab() {
                    sendEvent();
                    window.open(translations[language].url, '_blank');
                });
                window.addEventListener('resize', debounce(replaceText, 600));
                window.dispatchEvent(new Event('resize'));
            }
        }
    }, 300);
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
