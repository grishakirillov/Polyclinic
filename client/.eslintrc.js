module.exports = {
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'globals': {
        __SERVER_ORIGIN__: true,
        __CLIENT_ORIGIN__: true,
    },
    'plugins': [
        'react',
        'react-hooks',
    ],
    'parserOptions': {
        'ecmaVersion': 2019,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    'rules': {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],

        // codestyle
        'arrow-spacing': ['error'],
        'prefer-arrow-callback': ['error'],
        'prefer-const': ['error'],
        'camelcase': ['error'],
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error'],
        'key-spacing': ['error'],
        'no-trailing-spaces': ['error'],
        'handle-callback-err': ['error'],
        'max-len': ['warn', {code: 120}],
        'no-console': ['error'],
        'object-curly-spacing': ['error', 'never'],

        'react/prop-types': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'off',
        'react/destructuring-assignment': 'error',
        'react/no-deprecated': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
