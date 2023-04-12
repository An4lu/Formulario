import { CheckboxIndicator, CheckboxRoot, Flex, Label } from './styles'
import { ReactNode } from 'react'
import { Check } from '@phosphor-icons/react'

interface LabelProps {
  children: ReactNode
}
export const CheckBox = ({ children }: LabelProps) => {
  return (
    <Flex>
      <CheckboxRoot defaultChecked>
        <CheckboxIndicator>
          <Check size={12} color="#ffffff" />
        </CheckboxIndicator>
      </CheckboxRoot>
      {children}
    </Flex>
  )
}
