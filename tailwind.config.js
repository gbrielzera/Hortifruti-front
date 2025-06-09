// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textStyles: {
        'my-text': 'text-lg font-bold text-gray-600',
      },
    },
  },
  plugins: [],
};