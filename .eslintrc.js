module.exports = {
  "extends": "airbnb",
  "quotes": [2, 'single'],
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
    "globals": {
      "SwaggerEditor": false
    },
    "env": {
      "browser": true,
      "jest": true
    },
    "rules": {
      "react/prop-types": 0,
      "linebreak-style": 0
  }
};