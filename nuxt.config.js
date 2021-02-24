require('dotenv').config();
export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'PSLC-20',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'PSLC-20 E-book' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/dotenv',
        '@nuxtjs/strapi',
        '@nuxtjs/pwa'
    ],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql'
            }
        }
    },
    strapi: {
        entities: [
            'members',
            'galleries',
        ]
    },

    pwa: {
        meta: {
            title: 'PSLC 20',
            author: 'Matthew',
        },
        manifest: {
            name: 'PSLC 20',
            short_name: 'PSLC 20',
            lang: 'en',
            display: 'standalone',
        },
        workbox: {
            runtimeCaching: [{
                    urlPattern: 'https://fonts.googleapis.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                    strategyPlugins: [{
                        use: 'Expiration',
                        config: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }]
                },
                {
                    urlPattern: 'https://fonts.gstatic.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                    strategyPlugins: [{
                        use: 'Expiration',
                        config: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }]
                },
                {
                    urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                    strategyPlugins: [{
                        use: 'Expiration',
                        config: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }]
                }
            ]
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}