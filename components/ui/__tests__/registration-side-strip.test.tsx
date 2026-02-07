import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import RegistrationSideStrip from '../registration-side-strip';

// Mock Next.js useRouter since we're using window interactions
const mockWindowInnerWidth = 1024;
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  value: mockWindowInnerWidth,
});

describe('RegistrationSideStrip', () => {
  beforeEach(() => {
    // Reset window dimensions before each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });
  });

  it('renders with default desktop styling', () => {
    render(<RegistrationSideStrip />);
    const button = screen.getByRole('button', { name: /online registration/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-[#002B6B]');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveTextContent('Online Registration');
  });

  it('renders with mobile styling on small screens', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 600,
    });
    render(<RegistrationSideStrip />);
    const button = screen.getByRole('button', { name: /online registration/i });
    expect(button).toHaveClass('w-4');
    expect(button).toHaveClass('h-48');
    expect(button).toHaveClass('text-xs');
  });

  it('opens QR modal when clicked', async () => {
    render(<RegistrationSideStrip />);
    const button = screen.getByRole('button', { name: /online registration/i });

    // Modal should not be visible initially
    expect(screen.queryByAltText('Popup')).not.toBeInTheDocument();

    // Click the strip
    fireEvent.click(button);

    // Modal should appear
    await waitFor(() => {
      const qrImage = screen.getByAltText('Popup');
      expect(qrImage).toBeInTheDocument();
      expect(qrImage).toHaveAttribute('src', '/images/qrcode.png');
    });
  });

  it('closes QR modal when close button is clicked', async () => {
    render(<RegistrationSideStrip />);
    const button = screen.getByRole('button', { name: /online registration/i });

    // Open modal
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByAltText('Popup')).toBeInTheDocument();
    });

    // Close modal
    const closeButton = screen.getByRole('button', { name: /close popup/i });
    fireEvent.click(closeButton);

    // Modal should be gone
    await waitFor(() => {
      expect(screen.queryByAltText('Popup')).not.toBeInTheDocument();
    });
  });

  it('closes QR modal when backdrop is clicked', async () => {
    render(<RegistrationSideStrip />);
    const registrationButton = screen.getByRole('button', { name: /online registration/i });

    // Open modal
    fireEvent.click(registrationButton);
    await waitFor(() => {
      expect(screen.getByAltText('Popup')).toBeInTheDocument();
    });

    // Click the modal backdrop (the outer container)
    const modalBackdrop = document.querySelector('.fixed.inset-0.z-50.flex.items-center.justify-center.bg-black\\/50');
    if (modalBackdrop) {
      fireEvent.click(modalBackdrop);
    }

    // Modal should be gone
    await waitFor(() => {
      expect(screen.queryByAltText('Popup')).not.toBeInTheDocument();
    });
  });

  it('has correct positioning classes', () => {
    render(<RegistrationSideStrip />);
    const button = screen.getByRole('button', { name: /online registration/i });

    expect(button).toHaveClass('fixed');
    expect(button).toHaveClass('top-1/2');
    expect(button).toHaveClass('-translate-y-1/2');
    expect(button).toHaveClass('right-0');
  });

  it('has hover animations', () => {
    render(<RegistrationSideStrip />);
    const button = screen.getByRole('button', { name: /online registration/i });

    expect(button).toHaveClass('hover:scale-105');
    expect(button).toHaveClass('hover:shadow-2xl');
  });

  it('responds to window resize events', () => {
    act(() => {
      render(<RegistrationSideStrip />);
    });

    // Start with desktop
    let button = screen.getByRole('button', { name: /online registration/i });
    expect(button).toHaveClass('w-6');

    // Change to mobile and trigger resize
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        value: 600,
      });
      window.dispatchEvent(new Event('resize'));
    });

    // Check mobile classes are applied after resize
    button = screen.getByRole('button', { name: /online registration/i });
    expect(button).toHaveClass('w-4');
  });
});
