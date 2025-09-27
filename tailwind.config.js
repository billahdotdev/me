// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // make sure your content paths are correct
  ],
  plugins: [
    require('@tailwindcss/forms'), // make sure this line exists
  ],
};
