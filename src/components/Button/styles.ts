import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$yellow',
  color: '$white',
  fontWeight: '500',
  fontSize: '14px',
  border: 'none',
  borderRadius: '4px',
  gap: '10px',
  boxShadow: '8px 1px 8px $grey100, rgba(17,17,26, 0.1) 0px 0px 0px',
  '&:hover': {
    backgroundColor: '#D6AC4A',
  },
})
