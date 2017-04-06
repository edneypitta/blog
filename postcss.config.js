module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 2 versions",
    features: {
      customProperties: {
        // colors from
        // https://color.adobe.com/Cinnamon-Mint-color-theme-2647039/
        variables: {
          color: "#14A697",
          colorSecondary: "#0E7066",
          colorShadow: "#0F7F74",
          colorShadowHover: "#118A7D",
          tip: "#F25252",
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
