import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>);

    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary Button</Button>);

    let button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-secondary');

    rerender(<Button variant="outline">Outline Button</Button>);
    button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toHaveClass('border');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);

    let button = screen.getByRole('button', { name: /small button/i });
    expect(button).toHaveClass('h-9');

    rerender(<Button size="lg">Large Button</Button>);
    button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('h-11');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class');
  });

  it('forwards other props to button element', () => {
    render(<Button type="submit" disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('type', 'submit');
  });
});
