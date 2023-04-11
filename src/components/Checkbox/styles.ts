import { styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: '$white',
  width: 20,
  height: 20,
  borderRadius: 2,
  borderColor: '$gray250',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #979797',
  outline: 'none',
  cursor: 'pointer',
  '&[data-state="checked"]': {
    backgroundColor: '$yellow600',
    border: 'none',
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
