// ==UserScript==
// @name         Twitter PWA statusbar fixer
// @namespace    https://github.com/hyperstown/twitter-pwa-fix/
// @version      1.1
// @description  Enables dark background in twitter
// @author       hyperstown
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    let metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'theme-color');
    metaTag.setAttribute('content', '#181a1b');
    document.head.appendChild(metaTag);
})();
