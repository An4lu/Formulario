import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 20px',
  backgroundColor: '$white',
  color: '$gray500',
  fontWeight: '400',
  fontSize: '14px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  gap: '15px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  '&:hover': {
    backgroundColor: '$gray100',
  },
})
