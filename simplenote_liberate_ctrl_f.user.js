// ==UserScript==
// @name         SimpleNote Liberate Ctrl+F
// @namespace    https://turtlewalk.org/
// @version      0.1
// @description  Prevent from overriding ctrl+f shortcut for SimpleNote
// @author       yoshizow
// @match        https://app.simplenote.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;

    window.addEventListener = (type, listener, ...options) => {
        let newListener;
        if (type == "keydown") {
            console.log("Replacing keydown event listener: ", listener);
            newListener = event => {
                const { ctrlKey, metaKey, shiftKey } = event;
                const key = event.key.toLowerCase();
                if (ctrlKey && key == "f") {
                    // ignore Ctrl+f key down event
                } else {
                    listener(event);
                }
            };
            listener.__listenerToRemove = newListener;
        } else {
            newListener = listener;
        }
        origAddEventListener(type, newListener, ...options);
    };

    window.removeEventListener = (type, listener, ...options) => {
        if (listener.__listenerToRemove) {
            listener = listener.__listenerToRemove;
        }
        origRemoveEventListener(type, listener, ...options);
    };
})();
