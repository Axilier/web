module.exports = {
    ignorePatterns: ["./src/serviceWorker.ts"],
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier/react",
        "plugin:prettier/recommended",
        "prettier",
    ],
    rules: {
        "prettier/prettier": "error",
        indent: ["error", 4, { SwitchCase: 1 }],
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
        "react/jsx-curly-brace-presence": 0,
        "import/extensions": "off",
        "react/jsx-indent": [2, 4],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-nested-ternary": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/interactive-supports-focus": 0,
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
