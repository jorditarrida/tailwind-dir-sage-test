module.exports = {
  purge: {
    content: [
      './app/**/*.php',
      './resources/views/**/*.blade.php',
      './resources/assets/scripts/**/*.js'
    ],
    options: {
      whitelistPatternsChildren: [ /embed-responsive/ ],
    },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  variants: {
    margin: ['responsive', 'direction']
  },
  plugins: [
    require("tailwindcss-dir")(),
  ],
}
