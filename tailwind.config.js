/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    maxWidth: {
      container: '1520px',
      contentContainer: '1280px',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
      colors: {
        BaseDarkestBlue: '#50B8E7',
        BaseDarkBlue: '#84CDEE',
        BaseLightBlue: '#DCF0FA',
        BaseLightestBlue: '#EDF7FC',

        SummerYellow: '#FFEFA0',
        SummerLightOrange: '#FFD57E',
        SummerOrange: '#FCA652',
        SummerBrown: '#AC4B1C',

        WinterWhite: '#EDE7D8',
        WinterBlue: '#BCEAE4',
        WinterLightPurp: '#B5C7F0',
        WinterDarkPurp: '#8293E7',

        SpringOrange: '#F9C499',
        SpringYellow: '#F0E59F',
        SpringGreen: '#AFD7A6',
        SpringBlue: '#75B9AD',

        FallWhite: '#FFF4E3',
        FallLightOrange: '#FFCDAB',
        FallOrange: '#FFA45C',
        FallGray: '#5D5D5A',

        MagePink: '#E336B4',
        MagePurple: '#0019D5',
      },
      boxShadow: {
        bannerShadow: '0 1px 2px 1px #00000026',
      },
    },
  },
  plugins: [],
};
