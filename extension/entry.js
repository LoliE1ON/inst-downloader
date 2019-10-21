const scriptElement = document.createElement('script');

scriptElement.setAttribute('type', 'module');
scriptElement.setAttribute('src', chrome.extension.getURL('extension/modules/index.js'));

document.head.insertBefore(scriptElement, document.head.lastChild);