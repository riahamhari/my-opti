/**
Developed by: Thomas K
Test name: TUI_ND_SEARCH_ND100_Search_bar_LMSAI_v2
**/
const translations = {
    se: {
        title: 'Sista minuten',
        url: 'https://www.tui.se/erbjudanden/sista-minuten/',
        oldCombo: 'Kombinationsresor',
        newCombo: 'Kombinations- resor',
    },
    dk: {
        title: 'Afbudsrejser',
        url: 'https://www.tui.dk/tilbud/afbudsrejser/',
        oldCombo: 'Kombinationsrejse',
        newCombo: 'Kombinations- rejse',
    },
    no: {
        title: 'Restplasser',
        url: 'https://www.tui.no/tilbud/restplass/',
        oldCombo: 'Kombinasjonsreise',
        newCombo: 'Kombinasjons- reise',
    },
    fi: {
        title: 'Äkkilähdöt',
        url: 'https://www.tui.fi/matkatarjoukset/akkilahdot/',
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
                                tabLabel.innerText = translations[language].newPacket;
                            }
                            if (tabLabel.innerText === translations[language].oldCombo) {
                                tabLabel.innerText = translations[language].newCombo;
                                tabLabel.style.textTransform = 'initial';
                            }
                        }
                        else {
                            if (tabLabel.innerText === translations[language].newPacket) {
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
                        eventName: `Opti_clicked_Last_Minute_ND100`,
                        event: 'tiq.on',
                    }, '', [37]);
                }
            };
            const tabsLength = tabs.length;
            if (tabsLength < 5) {
                //create last minute tab
                const summerTab = document.createElement('li');
                const lastLi = tabsContainer.querySelector('li:last-child');
                lastLi.after(summerTab);
                summerTab.innerHTML = `<div class="UI__choiceSearchTab"><span class="UI__icon"><svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 2" viewBox="0 0 427.5 427.5" width="2400" height="2400"><g fill="#1b115c" data-name="Capa 1"><path d="M213.75 427.5c-57.09 0-110.77-22.23-151.14-62.61C22.23 324.52 0 270.84 0 213.75S22.23 102.98 62.61 62.61C102.98 22.23 156.65 0 213.75 0s110.77 22.23 151.14 62.61 62.61 94.05 62.61 151.14-22.23 110.77-62.61 151.14-94.05 62.61-151.14 62.61zm0-410.49c-108.49 0-196.74 88.26-196.74 196.74s88.26 196.74 196.74 196.74 196.74-88.26 196.74-196.74S322.23 17.01 213.75 17.01z"/><path d="M213.75 79.22a8.5 8.5 0 0 1-8.5-8.5V50.23a8.5 8.5 0 1 1 17 0v20.49a8.5 8.5 0 0 1-8.5 8.5zM213.75 386.52a8.5 8.5 0 0 1-8.5-8.5v-20.49a8.5 8.5 0 1 1 17 0v20.49a8.5 8.5 0 0 1-8.5 8.5zM377.64 222.63h-20.49a8.5 8.5 0 1 1 0-17h20.49a8.5 8.5 0 1 1 0 17zM70.34 222.63H49.85a8.5 8.5 0 1 1 0-17h20.49a8.5 8.5 0 1 1 0 17zM329.64 338.52c-2.18 0-4.35-.83-6.01-2.49l-14.49-14.49a8.51 8.51 0 0 1 0-12.03 8.51 8.51 0 0 1 12.03 0L335.66 324a8.51 8.51 0 0 1 0 12.03 8.481 8.481 0 0 1-6.01 2.49zM112.34 121.22c-2.18 0-4.35-.83-6.01-2.49l-14.49-14.49a8.51 8.51 0 0 1 0-12.03 8.51 8.51 0 0 1 12.03 0l14.49 14.49a8.51 8.51 0 0 1 0 12.03 8.481 8.481 0 0 1-6.01 2.49zM315.15 121.22c-2.18 0-4.35-.83-6.01-2.49a8.51 8.51 0 0 1 0-12.03l14.49-14.49a8.51 8.51 0 0 1 12.03 0 8.51 8.51 0 0 1 0 12.03l-14.49 14.49a8.481 8.481 0 0 1-6.01 2.49zM97.86 338.52c-2.18 0-4.35-.83-6.01-2.49a8.51 8.51 0 0 1 0-12.03l14.49-14.49a8.51 8.51 0 0 1 12.03 0 8.51 8.51 0 0 1 0 12.03l-14.49 14.49a8.481 8.481 0 0 1-6.01 2.49zM213.75 222.63h-55.11a8.5 8.5 0 1 1 0-17h46.6v-98.01a8.5 8.5 0 1 1 17 0v106.51a8.5 8.5 0 0 1-8.5 8.5z"/></g></svg></span><span class="UI__label">${translations[language].title}</span></div>`;
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
