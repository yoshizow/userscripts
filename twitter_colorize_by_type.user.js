// ==UserScript==
// @name         Twitter Colorize by Type
// @namespace    http://turtlewalk.org/
// @version      0.1
// @description  Change background color of RT or liked tweets
// @author       Yoshizow
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setInterval(() => {
        document.querySelectorAll('article[role=article]').forEach((e) => {
            var a = e.querySelector('a[role=link]');
            if (a) {
                if (a.innerText.indexOf("リツイート") != -1) {
                    e.parentElement.style.backgroundColor = '#f0f0ff';
                } else if (a.innerText.indexOf("いいね") != -1) {
                    e.parentElement.style.backgroundColor = '#ffffec';
                }
            }
            e.querySelector('a[role=link]').innerText.indexOf("リツイート");
        });

    }, 2000);
})();
