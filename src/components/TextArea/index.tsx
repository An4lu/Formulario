import React, { useState } from 'react'
import { TextArea } from './styles'

const MyTextarea = () => {
  const [text, setText] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  return (
    <TextArea rows={7} value={text} onChange={handleInputChange}></TextArea>
  )
}

export default MyTextarea
