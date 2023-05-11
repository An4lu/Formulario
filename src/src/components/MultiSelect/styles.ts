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
    width: '100%',
    marginTop: '14px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
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
      color: 'white',
    },
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontFamily: 'Inter',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? '#D3AB3C' : 'transparent',
    ':hover': {
      backgroundColor: '#D3AB3C',
      color: 'white',
    },
    color: isSelected ? 'white' : '#111827',
  }),
}
