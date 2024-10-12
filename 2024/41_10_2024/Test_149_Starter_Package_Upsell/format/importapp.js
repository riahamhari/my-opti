/**
Developed by: Riah
Test name: Test 149 - Starter Package Upsell
**/
// Global store and utag declaration
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const myElement = document.querySelector('selector');
        if (myElement) {
            clearInterval(myInterval);
        }
    }, 300);
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();
export {};
