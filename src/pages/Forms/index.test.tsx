import { render, screen } from '@testing-library/react';
import { Forms } from '.';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Forms component', () => {
  it('should display all inputs', async () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(screen.getByLabelText('Your full name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Day of feedback:')).toBeInTheDocument();
    expect(screen.getByText('Country of living:')).toBeInTheDocument();
    expect(screen.getByText('What type of anime(s) have you watched?')).toBeInTheDocument();
    expect(screen.getByText('Did you like what you saw?')).toBeInTheDocument();
    expect(screen.getByText('Upload an image from one anime:')).toBeInTheDocument();
  });
});
