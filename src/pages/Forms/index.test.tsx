import { render, fireEvent, screen } from '@testing-library/react';
import { Forms } from '.';

describe('Forms component', () => {
  it('should display warnings', async () => {
    const { getByRole } = render(<Forms />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('enter name and surname in english'));
    expect(screen.getByText('enter order date'));
    expect(screen.getByText('choose minimum one product!'));
    expect(screen.getByText('upload one image'));
  });
});
