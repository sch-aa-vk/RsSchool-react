import { render, screen } from '@testing-library/react';
import { Forms } from '.';

describe('Forms component', () => {
  it('should display all inputs', async () => {
    render(<Forms />);
    expect(screen.getByLabelText('Your full name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Order date:')).toBeInTheDocument();
    expect(screen.getByText('Country of order:')).toBeInTheDocument();
    expect(screen.getByText('What type of product(s) did you order?')).toBeInTheDocument();
    expect(screen.getByText('Did you like our products?')).toBeInTheDocument();
    expect(screen.getByText('Image of your order:')).toBeInTheDocument();
  });
});
