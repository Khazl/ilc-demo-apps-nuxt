module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/essential',
        'plugin:vue-a11y/base',
        'plugin:vue-i18n/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:cypress/recommended',
    ],
    parser: 'vue-eslint-parser',
    plugins: [
        'vue',
        'vue-a11y',
    ],
    settings: {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.vue'],
            },
        },
        'vue-i18n': {
            localeDir: './src/lang/*.json',
        },
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 7,
        sourceType: 'module',
    },
    // add your custom rules here
    rules: {
        'func-names': 0,
        'import/first': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'max-len': ['error', {
            ignoreComments: true,
            code: 120,
        }],
        'no-underscore-dangle': 0,
        'vue/require-prop-types': 0,
        'vue/order-in-components': 'error',
        'vue-i18n/no-dynamic-keys': 'error',
        'vue-i18n/no-unused-keys': ['error', {
            extensions: ['.vue'],
        }],
        'vue-a11y/click-events-have-key-events': 1,
        'no-param-reassign': [
        // In a vuex store mutation, the state is passed as
        // a parameter and must be mutated - that is how vuex
        // works. That parameter is usually called `state`,
        // so we ignore parameter reassignments for this
        // single variable name.
                'error',
                {
                    props: true,
                    ignorePropertyModificationsFor: [
                        'state',
                    ],
                },
            ],
            'import/no-extraneous-dependencies': 1,
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'vue/script-indent': [
                    'error',
                    4,
                    {
                        baseIndent: 1,
                    },
                ],
                'vue/html-indent': [
                    'error',
                    4,
                    {
                        alignAttributesVertically: false,
                    },
                ],
            },
        },
        {
            files: ['**/test/*.spec.js'],
            parserOptions: {
                parser: 'babel-eslint',
                sourceType: 'module',
            },
            env: {
                jest: true,
            },
            globals: {
                createLocalVue: true,
                mount: true,
                shallowMount: true,
            },
        },
    ],
}
