import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormInput from '../components/Forminput'

test('updates input value on typing', async () => {
  render(<FormInput />)

  const input = screen.getByPlaceholderText('Type here')

  await userEvent.type(input, 'Hello')

  expect(input).toHaveValue('Hello')
})