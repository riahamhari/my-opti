/**
Developed by: Riah
Test name: Test 157 - Black Friday Sale Landing page control
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-157', 'Control');
        clearInterval(tagInterval);
    }
}, 300);
export {};
