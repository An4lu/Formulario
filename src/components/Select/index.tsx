import ReactSelect from 'react-select/creatable'
import { colorStyles } from './styles'

interface SelectProps {
  onValueChange: (value: string) => void
  id: string
}

export function Select(props: SelectProps) {
  const selectOptions = [
    { label: 'M1', value: 'M1' },
    { label: 'OTL', value: 'OTL' },
    {
      label: 'GMR M+1 | PLANO TÁTICO M+1',
      value: 'GMR M+1 | PLANO TÁTICO M+1',
    },
  ]

  function handleChange(dados) {
    props.onValueChange(dados.value)
  }

  return (
    <ReactSelect
      onChange={handleChange}
      options={selectOptions}
      isClearable
      styles={colorStyles}
      placeholder="Selecione"
      id={props.id}
    ></ReactSelect>
  )
}
