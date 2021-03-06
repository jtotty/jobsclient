export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'jobsclient',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    server: {
        host: 'localhost',
        port: 3000,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        './plugins/vue-select'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/apollo'
    ],

    apollo: {
        clientConfigs: {
            default: {
                httpLinkOptions: {
                    credentials: 'include'
                },
                httpEndpoint: 'http://localhost:80/graphql',
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'http://localhost:3000',
        credentials: true
    },

    auth: {
        strategies: {
            'laravelSanctum': {
                provider: 'laravel/sanctum',
                url: 'http://localhost:80',
                endpoints: {
                    login: {
                        url: '/api/login',
                        method: 'post',
                        propertyName: false
                    },
                    logout: {
                        url: '/api/logout',
                        method: 'post'
                    },
                    user: {
                        url: '/api/user',
                        method: 'get',
                        propertyName: false
                    }
                }
            }
        },
        localStorage: false
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
