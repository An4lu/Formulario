import { StylesConfig } from 'react-select'

interface ColourOption {
  readonly value: string
  readonly label: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const colorStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '4px',
    borderStyle: 'none',
    height: '2.875rem',
    width: '56.25rem',
    marginTop: '14px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: '#EF4444',
    }
  },
  multiValueRemove: (styles) => ({
    ...styles,
    color: 'white',
    ':hover': {
      backgroundColor: '#EF4444',
      color: 'black',
    },
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontFamily: 'Inter',
  }),
}
