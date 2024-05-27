module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobileSize: { max: '767px' },
    },

    extend: {
      color: {
        cardGradient:
          'linear-gradient(108.74deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%)',
      },
      animation: {
        flipX: 'leftToRight 1.5s linear ',
        flipXReverse: 'RightToLeft 1.2s linear ',

        'waving-hand': 'wave   2s linear infinite',
        fade: 'fadeOut 3s ease-in-out',
      },

      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '20%': { opacity: 0.2 },
          '40%': { opacity: 0.4 },
          '60%': { opacity: 0.6 },
          '80%': { opacity: 0.8 },
          '100%': { opacity: 1 },
        },
        leftToRight: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        RightToLeft: {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        wave: {
          '0%': { transform: 'scale(100%)' },
          '10%': { transform: 'scale(105%)' },
          '20%': { transform: 'scale(110%)' },
          '30%': { transform: 'scale(115%)' },
          '40%': { transform: 'scale(110%)' },
          '50%': { transform: 'scale(105%)' },
          '60%': { transform: 'scale(103%)' },
          '100%': { transform: 'scale(100%)' },
        },
      }),
    },
  },
};
// plugins: [
// function ({ addVariant }) {
//   addVariant('child', '& > *');
//   addVariant('child-hover', '& > *:hover');
// },
// ],
