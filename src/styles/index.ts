import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      yellow100: '#D3AB3C',
      yellow600: '#C39D43',
      blue50: '#5CC8FF',
      blue100: '#21425F',
      blue500: '#122137',
      gray100: '#9D9D9D',
      gray200: '#616161',
      gray250: '#555555',
      gray300: '#9F9999',
      gray400: '#797777',
      gray450: '#4E4E4E',
      gray500: '#2B2B2B',
      gray550: '#2A2A2A',
      white: '#FFFFFF',
    },
  },
})
