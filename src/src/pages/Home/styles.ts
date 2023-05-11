import { styled } from '../../styles'

export const StyledFlex = styled('div', {
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  marginTop: '42px',
})

export const Title = styled('h1', {
  color: '$gray500',
  fontSize: '36px',
  fontWeight: 'bold',
})

export const ItemFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start',
  gap: '90px',
})

export const LineFormConteiner = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  marginTop: '50px',
  marginBottom: '48px',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  width: '100%',
  justifyContent: 'flex-start',
  gap: '100px',
})

export const TitleFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const CardFormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  marginTop: '12px',
  justifyContent: 'flex-start',
  gap: '40px',
})
