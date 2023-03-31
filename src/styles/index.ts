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
      yellow: '#D3AB3C',
      darkblue: '#122137',
      gray100: '#9D9D9D',
      gray300: '#9F9999',
      gray400: '#797777',
      gray500: '#2B2B2B',
      yellow600: '#C39D43',
      lightblue: '#5CC8FF',
      blueHover: '#21425F',
      red: '#EF4444',
      white: '#FFFFFF',
    },
  },
})
