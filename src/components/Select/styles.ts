import { StylesConfig } from 'react-select'

interface Option {
  label: string
  value: string
}

export const colorStyles: StylesConfig<Option> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'white',
    width: '457px',
    height: '46px',
    borderRadius: '4px',
    borderStyle: 'none',
    cursor: 'pointer',
    zIndex: '99.9',
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
    color: isSelected ? 'gray' : '#4E4E4E',
  }),
}
