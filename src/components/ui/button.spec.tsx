import { render, screen } from '@testing-library/react';
import { Button } from './button';

test('SHOULD render a button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
