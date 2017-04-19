module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 2 versions",
    features: {
      customProperties: {
        // colors from
        // https://color.adobe.com/pink-peppermint-color-theme-109642/
        variables: {
          color: "#DE264C",
          colorSecondary: "#BC0D35",
          colorShadow: "#A20D1E",
          colorShadowHover: "#870B19",
          tip: "#F0788C",
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
