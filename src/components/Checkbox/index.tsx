import { CheckboxIndicator, CheckboxRoot } from './styles'
import { Check } from '@phosphor-icons/react'

interface LabelProps {
  id: string
  onValueChange: (value: boolean) => void
}

export const CheckBox = ({ id, onValueChange }: LabelProps) => {
  return (
    <CheckboxRoot id={id} onCheckedChange={onValueChange}>
      <CheckboxIndicator>
        <Check size={12} color="#ffffff" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}
