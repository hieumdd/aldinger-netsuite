module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: ['@typescript-eslint'],
    rules: { 'no-useless-catch': 0, '@typescript-eslint/no-unused-vars': 0, '@typescript-eslint/no-explicit-any': 0 },
};
