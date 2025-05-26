/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

module.exports = {
  content: [
    './views/**/*.pug',     
    './assets/**/*.js', 
  ],
  theme: {
    extend: {},
  },
  plugins: [
     daisyui
  ],
  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}
