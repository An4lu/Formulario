import Select from 'react-select/creatable'
import { colorStyles } from './styles'

export function mySelect() {
  const selectOptions = [
    { label: 'M1', value: 'M1' },
    { label: 'OTL', value: 'OTL' },
    {
      label: 'GMR M+1 | PLANO TÁTICO M+1',
      value: 'GMR M+1 | PLANO TÁTICO M+1',
    },
  ]

  return (
    <Select
      options={selectOptions}
      isClearable
      styles={colorStyles}
      placeholder="Selecione"
    ></Select>
  )
}
