module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "buttonShadow": "0 5px 0px rgba(149, 165, 166, 0.8)",
        "borderShadow": "15px 0 0px rgba(1, 97, 199, 1)",
        "formShadow": "0 0px 15px rgba(149, 165, 166, 0.8)",
      },
      colors: {
        "blueBg": "#4088ff",
        "blueTitle": "#4288fb",
        "blueShadow": "#0161c7", 
      }
    },
  },
  plugins: [],
}

