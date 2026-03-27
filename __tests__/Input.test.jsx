import { render, screen } from '@testing-library/react'
import Input from '../components/Input'

test('renders input with placeholder', () => {
  render(<Input placeholder="Enter name" />)
  expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
})