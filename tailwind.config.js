/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#eef3f9",
        "custom-sky": "#e8f2ff",
      },
    },
    backgroundSize: {
      "50%": "50%",
    },
    plugins: [require("flowbite/plugin")],
  },
};
