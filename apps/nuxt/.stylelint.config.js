module.exports = {
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-scss',
        'stylelint-order'
    ],
    // Rule lists:
    // - https://stylelint.io/user-guide/rules/
    // - https://github.com/kristerkari/stylelint-scss#list-of-rules
    rules: {
        'at-rule-no-unknown': null,
        'at-rule-empty-line-before': [
            'always',
            {
                ignore: [
                    'after-comment',
                    'inside-block',
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless'
                ]
            }
        ],
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'comment-no-empty': true,
        'custom-property-empty-line-before': null,
        'declaration-colon-space-after': 'always',
        'declaration-bang-space-before': 'always',
        'declaration-bang-space-after': 'never',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-no-important': true,
        'declaration-empty-line-before': null,
        'function-comma-space-after': 'always',
        indentation: 2,
        'max-empty-lines': 1,
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'no-descending-specificity': null,
        'no-extra-semicolons': true,
        'no-missing-end-of-source-newline': true,
        'no-empty-source': null,
        'property-case': 'lower',
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,
        // limit the number of universal selectors in a selector,
        // to avoid very slow selectors
        'selector-list-comma-newline-after': 'always',
        'unit-case': 'lower',
        'value-keyword-case': 'lower',
        'value-list-comma-space-after': 'always',
        'value-list-max-empty-lines': 0,
        'value-no-vendor-prefix': true,
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/selector-no-redundant-nesting-selector': true,
    }
}
