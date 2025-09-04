function hideUI() {
	const SUPPORTED_SITES = ['amazon', 'disneyplus', 'netflix', 'wowtv'];

	if (SUPPORTED_SITES.some((site) => origin.includes(site))) {
		// AMAZON
		if (origin.includes(SUPPORTED_SITES[0])) {
			const container = document.querySelector('.f1bwtfkz');

			if (container) container.remove();

			// This works also but couldnt get rid of Ratings for now.
			// To revisit later.

			// const style = document.createElement('style');
			// style.textContent = `
			// 	.webPlayerUIContainer {
			// 		visibility: hidden !important; }

			// 	.webPlayerUIContainer .atvwebplayersdk-captions-overlay {
			// 		visibility: visible !important; }

			// 	.f11xjbzd {
			// 		display: none !important; }`;

			// document.head.appendChild(style);
		}

		// DISNEY+
		if (origin.includes(SUPPORTED_SITES[1])) {
			const container = document.querySelector('.btm-media-overlays-container');

			if (container) container.remove();
		}

		// NETFLIX
		if (origin.includes(SUPPORTED_SITES[2])) {
			const style = document.createElement('style');
			style.textContent = `
				html body .default-ltr-iqcdef-cache-gpipej,
					.playback-notification,
					.watch-video--advisories-container,
					.watch-video--evidence-overlay-container,
					.SeamlessControls--container {
						display: none !important;
						visibility: hidden !important; }`;

			document.head.appendChild(style);
		}

		// WOWTV
		if (origin.includes(SUPPORTED_SITES[3])) {
			const container = document.querySelector('[data-test-id="video-player-controls"');

			if (container) container.remove();
		}
	} else {
		console.error('This Site is not supported by the WebPlayer UI Remover Extension!');
	}
}

hideUI();
