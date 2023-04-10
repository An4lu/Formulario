import { CheckboxIndicator, CheckboxRoot, Flex, Label } from './styles'
import { ReactNode } from 'react'
import { Check } from '@phosphor-icons/react'

interface LabelProps {
  children: ReactNode
}
export const CheckBox = ({ children }: LabelProps) => {
  return (
    <Flex>
      <CheckboxRoot defaultChecked id="c1">
        <CheckboxIndicator>
          <Check size={12} color="#ffffff" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label htmlFor="c1">{children}</Label>
    </Flex>
  )
}
