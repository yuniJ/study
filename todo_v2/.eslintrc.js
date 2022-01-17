module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ['airbnb-base'],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    rules: {
      'linebreak-style': 'off',
      'import/extensions': ['warn', 'always'],
      'import/prefer-default-export': 'off',
      'no-restricted-syntax': 'off',
    },
};
