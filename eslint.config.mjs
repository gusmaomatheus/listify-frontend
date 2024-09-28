export default {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
                semi: true,
                printWidth: 120,
                tabWidth: 4,
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    },
};
