import { render, screen } from '@testing-library/react';
import { Forms } from '.';

describe('Forms component', () => {
  it('should display warnings', async () => {
    render(<Forms />);

    screen.debug();
  });
});
