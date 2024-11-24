/**
Developed by: Riah
Test name: Test 157 - Black Friday Sale Landing page control
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
		window.clarity('set', 'test-157', 'Control');
		clearInterval(tagInterval);
	}
}, 300);
