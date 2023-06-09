import { styled } from '../../styles'
import { StylesConfig } from 'react-select'

export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '14px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  width: '29.25rem',
  boxSizing: 'border-box',
  height: 'fit-content',
  gap: '20px',
})

export const CardAlignContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '4.325rem',
})

export const CardLineConteiner = styled('div', {
  display: 'flex',

  flexDirection: 'column',
  gap: '14px',
})

export const Status = styled('h3', {
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
})

export const PipeId = styled('h3', {
  fontSize: '14px',
  fontWeight: 400,
})

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$white',
  color: '$gray500',
  fontWeight: '700',
  fontSize: '14px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  boxShadow: '0px 0px 5px #888888 ',
  '&:hover': {
    backgroundColor: '$gray100',
  },
})

interface Option {
  readonly label: string
  readonly value: string
}

export const colorStyles: StylesConfig<Option> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '4px',
    height: '2.875rem',
    width: '27.5rem',
  }),
}

export const CardItemConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})
