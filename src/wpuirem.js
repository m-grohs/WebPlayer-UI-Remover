chrome.runtime.onMessage.addListener((msg) => {
	try {
		if (msg.cmd === 'delete') {
			if (origin.includes('netflix')) {
				// class names for UI Elemente @ netflix
				// Base UI @ default-ltr-cache-1m81c36
				// Back Arrow @ default-ltr-cache-1npqywr
				// Ads Overlay @ default-ltr-cache-1btbqeg
				// Credits+Next Button @ default-ltr-cache-18ezbm2

				document.head.append(
					Object.assign(document.createElement('style'), {
						type: 'text/css',
						textContent: `
						.default-ltr-cache-1m81c36,
						.default-ltr-cache-1npqywr,
						.default-ltr-cache-1btbqeg,
						.default-ltr-cache-18ezbm2 {
							visibility: hidden !important;
						}`
					})
				);
			}

			if (origin.includes('amazon')) {
				// Amazon makes it simple with having one Container Class for their UI

				document.querySelector('.webPlayerUIContainer').remove();
			}

			if (origin.includes('disneyplus')) {
				// As does Disney
				console.log('on disney');
				document.querySelector('.btm-media-overlays-container').remove();
			}
		}
	} catch (err) {
		if (err) throw err;
	}
});
