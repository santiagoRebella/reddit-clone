module.exports = {
    extends: "eslint:recommended",
    "plugins": [
        "react"
    ],

    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.0"
        }
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "ecmaFeatures": {
        "modules": true
    },
    "env": {
        "es6": true,
        'commonjs': true,
        'browser': true,
        'mocha': true
    },
    "rules": {
        //More rules in: http://eslint.org/docs/rules/
        "no-undef": 2,
        "no-unused-vars": [2, {"args": "after-used"}],
        "no-use-before-define": 1,
        "no-cond-assign": 2,
        "no-console": 0,
        "no-debugger": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-unreachable": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-new": 2,
        "no-param-reassign": 2,
        "no-plusplus": 2,
        "no-return-assign": 2,
        "no-sequences": 2,
        "no-var": 2,
        "react/no-danger": 1,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 1,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1,

        //React JSX rules
        "jsx-quotes": 1, // standard: [2, "prefer-single"]
        "react/jsx-closing-bracket-location": 0,
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-handler-names": 1,
        "react/jsx-indent-props": 1,
        "react/jsx-indent": [1, 2],
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": [2, {
            "allowArrowFunctions": true,
            "allowBind": false,
            "ignoreRefs": true
        }],
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 1,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-wrap-multilines": 1
    },
    "globals": {
        'require': false,
        'process': false,
        '__dirname': false,
        'expect': false,
        'jest': false
    }
};
