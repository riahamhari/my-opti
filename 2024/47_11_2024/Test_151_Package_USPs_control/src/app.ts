/**
Developed by: Riah
Test name: Test 151 - Package USPs control
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
		window.clarity('set', 'test-151', 'Variation');
		clearInterval(tagInterval);
	}
}, 300);
