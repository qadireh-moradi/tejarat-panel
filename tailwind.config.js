/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js.css}", "*.html"],
  theme: {
    extend: {
      colors: {

        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'tertiary': 'var(--tertiary)',
        'text': 'var(--text)',
        'textgray': 'var(--textgray)',
        'textred': 'var(--textred)',
        'bghead': 'var(--bghead)',
        'tertiarylight': 'var(--tertiarylight)',
        'inputBorder':'var(--inputBorder)'
      },
      
    },
    fontFamily: {
      IRANSansWeb: ['IRANSans']
    },
  },
  plugins: [],
}