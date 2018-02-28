module.exports = {
  plugins: ['import'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    quotes: [2, 'single', { allowTemplateLiterals: true }]
  },
  overrides: [
    {
      files: ['test.spec.js'],
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
      }
    }
  ]
};
