import React from 'react'
import { Selects, Option } from './styles'

interface SelectProps {
  options: string[]
  selectedIndex: number
  onSelectIndex: (index: number) => void
}

export function Select({ options, selectedIndex, onSelectIndex }: SelectProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value)
    onSelectIndex(index)
  }

  return (
    <Selects value={selectedIndex} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <Option key={index} value={index}>
          {option}
        </Option>
      ))}
    </Selects>
  )
}
