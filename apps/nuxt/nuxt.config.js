// import * as deLang from './src/lang/de.json'
// import * as enLang from './src/lang/en.json'

export default {
    // universal = SSR
    // spa = SPA :-O
    mode: 'universal',
    /*
     ** Define root directory and override default
     ** See https://nuxtjs.org/api/configuration-rootdir
     */
    rootDir: '.',
    /*
     ** Define source directory and override default
     ** See https://nuxtjs.org/api/configuration-srcdir
     */
    srcDir: 'src',
    /*
     ** Define custom server configuration
     ** See https://nuxtjs.org/api/configuration-server
     */
    server: {
        host: '0.0.0.0',
        port: 3000,
        timing: false
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    styleResources: {
        scss: [
            '@/styles/_variables.scss',
            '@@/node_modules/@rd-internal/rd-pattern-lib-styles/src/Normalize/style.scss',
            '@@/node_modules/@rd-internal/rd-pattern-lib-styles/src/_utils/_index.scss'
        ]
    },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        ['@nuxtjs/stylelint-module', { configFile: '.stylelint.config.js' }]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        ['nuxt-env', {
            keys: [
                { key: 'APP_NAME', default: 'New Project' },
            ]
        }],
        '@nuxtjs/style-resources',
        //'nuxt-i18n'
    ],
    /*
    i18n: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
        vueI18n: {
            fallbackLocale: 'de',
            messages: {
                de: deLang,
                en: enLang
            }
        }
    },
     */
    router: {
        base: '/nuxt'
    },
    /*
     ** Build configuration
     */
    build: {
        publicPath: process.env.NODE_ENV === 'development' ? null : 'dist'
    },
    generate: {
        dir: 'build',
        exclude: [/\/.+/]
    }
}
