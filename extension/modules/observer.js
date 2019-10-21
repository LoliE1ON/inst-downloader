import InjectButtons from 'injectButtons.js'

export default function Observer (watching_selector) {
    const watcher = function(mutationsList, observer) {
        if (document.querySelectorAll(watching_selector).length) {
            for (let mutation in mutationsList) {
                const source = [...mutationsList[mutation].addedNodes].filter(m => m.className === 'inst-button').length;

                source && setTimeout(InjectButtons, 500);
            }
        }
    };

    const observer = new MutationObserver(watcher);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}