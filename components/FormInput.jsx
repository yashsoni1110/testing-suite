import { useState } from 'react'

export default function FormInput() {
  const [value, setValue] = useState('')

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type here"
    />
  )
}