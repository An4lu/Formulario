import Select from 'react-select/creatable'
import { colorStyles } from './styles'

export function mySelect() {
  const selectOptions = [
    { label: 'Arquivos Disponiveis', value: 'Arquivos Disponiveis' },
    { label: 'Localidades faltando', value: 'Localidades faltando' },
    { label: 'Materiais faltando', value: 'Materiais faltando' },
    { label: 'DOHs faltando', value: 'DOHs faltando' },
  ]

  return (
    <Select options={selectOptions} isClearable styles={colorStyles}></Select>
  )
}
