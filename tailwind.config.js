/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/layoutes/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
       fontFamily : {
        "kalameh" : "kalameh"
       },
       screens : {
        s412 : "412px"
       }
    },
  },
  plugins: [],
}

