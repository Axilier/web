module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier/react",
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  "rules": {
    "indent": ["error",4],
    "react/jsx-filename-extension": [1, {"extensions":  [".tsx"]}],
    "import/extensions": "off",
    "react/jsx-indent": [2, 4]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
