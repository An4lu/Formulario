import { StylesConfig } from 'react-select'

export const colorStyles: StylesConfig<Option> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    width: '484px',
    height: '46px',
    borderRadius: '4px',
    borderStyle: 'none',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  }),
}
