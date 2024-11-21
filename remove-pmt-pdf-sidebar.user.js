// ==UserScript==
// @name         Remove PMT PDF Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically removes the PDF sidebar on PMT PDF viewer pages.
// @author       S3NT13NT
// @match        https://www.physicsandmathstutor.com/pdf-pages/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the DOM to load completely
    window.addEventListener('load', () => {
        const sidebar = document.querySelector('.pdf-sidebar');
        if (sidebar) {
            sidebar.remove();
        }
    });
})();
