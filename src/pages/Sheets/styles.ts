import { styled } from '../../styles'

export const StyledFlex = styled('div', {
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  marginTop: '42px',
})

export const ItemFlexConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})

export const LineFlexConteiner = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  marginTop: '50px',
})

export const TitleFlexConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})
