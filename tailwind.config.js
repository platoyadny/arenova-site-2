module.exports = {
  content: ["./**/*.{html,js}"], // make sure to scan all folders if not limited to /public
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poiret One', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Liberation Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
