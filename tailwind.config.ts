import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    border: {
      adjective: '#18FEFE',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        inner: '0 0 0 1px var(--tw-shadow-color)',
        innerBlack: 'inset 0 0 150px 10px #000',
      },
      textShadow: {
       blue: '0 0 10px #1890ff',
      }
    },
  },
  // plugins: [
  //   plugin(function ({ matchUtilities, theme }) {
  //     matchUtilities(
  //       {
  //         'text-shadow': (value) => ({
  //           textShadow: value,
  //         }),
  //       },
  //       { values: theme('textShadow') }
  //     )
  //   }),
  // ],
}
export default config
