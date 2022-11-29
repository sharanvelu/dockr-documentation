// .vitepress/config.js
export default {
    title: 'DockR',
    description: 'An awesome docs template built by me',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    srcDir: '../src',
    outDir: './.build',
    head: [
        ['link', {rel: "icon", sizes: "16x16", href: "assets/small.ico"}],
    ],
    themeConfig: {
        logo: "/assets/small.png",
        siteTitle: "DockR Docs",

        nav: [
            {text: "About", link: "/docs/introduction"},
            {text: "Contact", link: "/contact-us"},
            {text: "Changelog", link: "/changelog"},
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/sharanvelu/dockr"},
        ],

        sidebar: [
            {
                text: "Overview",
                collapsible: true,
                items: [
                    {text: "Introduction", link: "/docs/introduction"},
                    {text: "Concept", link: "/docs/concept"},
                    {text: "Comparison", link: "/docs/comparison"},
                ],
            },
            {
                text: "Installation",
                collapsible: true,
                items: [
                    {text: "MacOS", link: "/docs/install/mac-os"},
                    {text: "Linux", link: "/docs/install/linux"},
                    {text: "Windows", link: "/docs/install/windows"},
                ],
            },
            {
                text: "Getting Started",
                collapsible: true,
                items: [
                    {text: "Getting Started", link: "/docs/getting-started"},
                    {text: "Options", link: "/docs/options"},
                    {text: "Usage", link: "/docs/usage"},
                ],
            },
            {
                text: "Commands",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "dockr up", link: "/docs/commands/up"},
                    {text: "dockr down", link: "/docs/commands/down"},
                    {text: "dockr stop", link: "/docs/commands/stop"},
                    {text: "dockr config", link: "/docs/commands/config"},
                    {text: "dockr asset", link: "/docs/commands/asset"},
                    {text: "dockr composer", link: "/docs/commands/composer"},
                    {text: "dockr artisan", link: "/docs/commands/artisan"},
                    {text: "dockr art", link: "/docs/commands/art"},
                    {text: "dockr bin", link: "/docs/commands/bin"},
                    {text: "dockr tinker", link: "/docs/commands/tinker"},
                    {text: "dockr migrate", link: "/docs/commands/migrate"},
                    {text: "dockr seed", link: "/docs/commands/seed"},
                    {text: "dockr make", link: "/docs/commands/make"},
                    {text: "dockr queue", link: "/docs/commands/queue"},
                    {text: "dockr bash", link: "/docs/commands/bash"},
                    {text: "dockr shell", link: "/docs/commands/shell"},
                    {text: "dockr phpunit", link: "/docs/commands/phpunit"},
                    {text: "dockr image", link: "/docs/commands/image"},
                    {text: "dockr mysql", link: "/docs/commands/mysql"},
                    {text: "dockr postgres", link: "/docs/commands/postgres"},
                    {text: "dockr redis", link: "/docs/commands/redis"},
                    {text: "dockr help", link: "/docs/commands/help"},
                ],
            },
            {
                text: "Asset Connection",
                collapsible: false,
                items: [
                    {text: "Asset Connection", link: "/docs/asset-connection"},
                ],
            },
            {
                text: "Others",
                collapsible: false,
                items: [
                    {text: "Changelog", link: "/changelog"},
                    {text: "Contribution", link: "/contribution"},
                    {text: "Repository Links", link: "/repository-links"},
                    {text: "Contact Us", link: "/contact-us"},
                ],
            },
        ],

        editLink: {
            pattern: 'https://github.com/sharanvelu/dockr-documentation/tree/master/src/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present DockR",
        },
    },
}
