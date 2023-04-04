import { styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: '$yellow600',
  width: 20,
  height: 20,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px gray500`,
  border: 'none',
  outline: 'none',
  '&:focus': {
    boxShadow: `rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px`,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
})

export const Label = styled('label', {
  color: '$gray500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 14,
  paddingLeft: 15,
})

export const Flex = styled('div', { display: 'flex', marginRight: '70px' })
