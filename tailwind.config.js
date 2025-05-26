/** @type {import('tailwindcss').Config} */
import   fluid ,{ screens, fontSize } from 'fluid-tailwind'
import daisyui from 'daisyui'

module.exports = {
  content: [
    './views/**/*.pug',     
    './assets/**/*.js', 
  ],
  theme: {
    screens,
    fontSize,
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    fluid,
    daisyui
  ],
  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}
