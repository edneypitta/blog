module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 2 versions",
    features: {
      customProperties: {
        // colors from https://color.adobe.com/cool-one-color-theme-3403796/
        variables: {
          color: "#EF5411",
          colorSecondary: "#FF6517",
          colorShadow: "#FF822E",
          colorShadowHover: "#FF6D1F",
          tip: "#ED5276",
          neutral: "#7f8c8d",
          text: "#2c3e50"
        }
      },
      customMedia: {
        extensions: {
          '--large': '(min-width: 700px)',
          '--small': '(max-width: 700px)'
        }
      }
    }
  }),
  require("postcss-reporter")(),
  ...!config.production ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
