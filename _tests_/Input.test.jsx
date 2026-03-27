import { render, screen } from '@testing-library/react'
import Input from '../components/input'

test('renders input with placeholder', () => {
  render(<Input placeholder="Enter name" />)
  expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
})