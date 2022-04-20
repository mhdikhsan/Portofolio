module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#3730A3',
        dark: '#312E81',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
