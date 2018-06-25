/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
    title: 'BulkGate Helpdesk' /* title for your website */,
    tagline: 'Bulk SMS gateway help center',
    url: 'https://help.bulkgate.com' /* your website url */,
    baseUrl: '/' /* base url for your project */,
    gaTrackingId : "UA-113481971-3",
    gaGtag : true,
    projectName: 'test-site',
    disableHeaderTitle : true,
    onPageNav: "separate",
    algolia : {
        apiKey : "ff197e73cf40ebd0dc2af631fa0ba3e8",
        indexName : "bulkgate",
        algoliaOptions : {
            facetFilters : ["language:LANGUAGE"],
        }
    },
    headerLinks: [
        {languages: true},
        {search:true},
    ],
    /* path to images for header/footer */
    headerIcon: 'img/logo.svg',
    footerIcon: 'img/logo-foot.svg',
    favicon: 'img/favicon.ico',
    /* colors for website */
    colors: {
        primaryColor: "#202020",//'#00a79d',
        secondaryColor: "#be2166",
        button : "#be2166",
        highlight : "#ffe564",
        teal : "#37ab9c",
    },
    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'androidstudio',
    },
    scripts: ['https://buttons.github.io/buttons.js', 'https://www.bulkgate.com/wp-content/themes/bulkgate.com/js/cookies.js'],
    // You may provide arbitrary config keys to be used as needed by your template.
    repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
