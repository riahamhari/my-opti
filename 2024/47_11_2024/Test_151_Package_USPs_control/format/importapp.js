/**
Developed by: Riah
Test name: Test 151 - Package USPs control
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-151', 'Variation');
        clearInterval(tagInterval);
    }
}, 300);
export {};
