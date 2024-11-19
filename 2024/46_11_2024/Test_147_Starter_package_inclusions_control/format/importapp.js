/**
Developed by: Riah
Test name: Test 147 - Starter package inclusions control
**/
const tagInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
        window.clarity('set', 'test-147', 'control');
        clearInterval(tagInterval);
    }
}, 300);
export {};
