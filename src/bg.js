chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: hideUI
	});
});

function hideUI() {
	const SUPPORTED_SITES = ['amazon', 'disneyplus', 'netflix'];

	if (SUPPORTED_SITES.some((site) => origin.includes(site))) {
		// AMAZON
		if (origin.includes(SUPPORTED_SITES[0])) {
			const container = document.querySelector('.webPlayerUIContainer');

			if (container) container.remove();
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
        		.ltr-1m81c36,
				.ltr-1npqywr,
				.ltr-1btbqeg,
				.ltr-18ezbm2,
				.ltr-1st24vv,
				.advisory-container {
            	visibility: hidden !important;}`;

			document.head.appendChild(style);
		}
	} else {
		console.error('This Site is not supported by the WebPlayer UI Remover Extension!');
	}
}
