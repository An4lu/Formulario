import { styled } from '../../styles'

export const Container = styled('div', {
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  marginTop: '42px',
})

export const LabelText = styled('label', {
  fontSize: '16px',
  color: '$gray200',
  fontWeight: '500',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
})

export const LineFormItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '70px',
  marginTop: '40px',
})

export const ItemFormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '14px',
})

export const CheckboxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})

export const CheckboxItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '14px',
})

export const CheckText = styled('label', {
  color: '$gray500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '13px',
  fontSize: 14,
})

export const LineMultiSelect = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const SelectItem = styled('div', {
  width: '100%',
  height: '46px',
  borderStyle: 'none',
  borderRadius: '4px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
})

export const LineTextArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
