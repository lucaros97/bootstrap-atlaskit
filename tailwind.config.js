// tailwind.config.js
require('./defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          '50': '#DEEBFF',
          '75': '#B3D4FF',
          '100': '#4C9AFF',
          '200': '#2684FF',
          '300': '#0065FF',
          '400': '#0052CC',
          '500': '#0747A6',
        },
        red: {
          '50': '#FFEBE6',
          '75': '#FFBDAD',
          '100': '#FF8F73',
          '200': '#FF7452',
          '300': '#FF5630',
          '400': '#DE350B',
          '500': '#BF2600',
        },
        yellow: {
          '50': '#FFFAE6',
          '75': '#FFF0B3',
          '100': '#FFE380',
          '200': '#FFC400',
          '300': '#FFAB00',
          '400': '#FF991F',
          '500': '#FF8B00',
        },
        green: {
          '50': '#E3FCEF',
          '75': '#ABF5D1',
          '100': '#79F2C0',
          '200': '#57D9A3',
          '300': '#36B37E',
          '400': '#00875A',
          '500': '#006644',
        },
        teal: {
          '50': '#E6FCFF',
          '75': '#B3F5FF',
          '100': '#79E2F2',
          '200': '#00C7E6',
          '300': '#00B8D9',
          '400': '#00A3BF',
          '500': '#008DA6',
        },
        purple: {
          '50': '#EAE6FF',
          '75': '#C0B6F2',
          '100': '#998DD9',
          '200': '#8777D9',
          '300': '#6554C0',
          '400': '#5243AA',
          '500': '#403294',
        },
        neutral: {
          '900': '#091E42',
          '800': '#172B4D',
          '700': '#253858',
          '600': '#344563',
          '500': '#42526E',
          '400': '#505F79',
          '300': '#5E6C84',
          '200': '#6B778C',
          '100': '#7A869A',
          '90': '#8993A4',
          '80': '#97A0AF',
          '70': '#A5ADBA',
          '60': '#B3BAC5',
          '50': '#C1C7D0',
          '40': '#DFE1E6',
          '30': '#EBECF0',
          '20': '#F4F5F7',
          '10': '#FAFBFC',
          '0': '#FFFFFF',
        },
      },
    },
  },
}
