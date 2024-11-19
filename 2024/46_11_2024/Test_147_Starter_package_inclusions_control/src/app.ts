/**
Developed by: Riah
Test name: Test 147 - Starter package inclusions control
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
		clarity?: any;
	}
}

const tagInterval = setInterval(() => {
	if (typeof window.clarity === 'function') {
		window.clarity('set', 'test-147', 'control');
		clearInterval(tagInterval);
	}
}, 300);
