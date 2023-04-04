import { styled } from '@stitches/react'

export const Selects = styled('select', {
  backgroundColor: '#F5F5F5',
  borderRadius: '8px',
  border: 'none',
  padding: '12px 16px',
  fontSize: '16px',
  color: '#333',
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px #4B89FF',
  },
})

export const Option = styled('option', {
  backgroundColor: '#F5F5F5',
  borderRadius: '8px',
  border: 'none',
  padding: '12px 16px',
  fontSize: '16px',
  color: '#333',
})
