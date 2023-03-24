import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FeedbackCard } from '.';

describe('FeedbackCard', () => {
  it('Render feedback card component', () => {
    const data = {
      name: 'Test Name',
      date: '01-03-2023',
      country: 'ru',
      products: {
        tv: false,
        electronics: true,
        jewelery: true,
        wclothes: false,
        mclothes: false,
      },
      like: {
        yes: true,
        no: false,
      },
      file: 'test.jpeg',
    };
    render(<FeedbackCard {...data} />);
    expect(screen.debug());
  });
  it('Render alternative filename', () => {
    const data = {
      name: 'Test Name',
      date: '01-03-2023',
      country: 'ru',
      products: {
        tv: false,
        electronics: true,
        jewelery: true,
        wclothes: false,
        mclothes: false,
      },
      like: {
        yes: false,
        no: true,
      },
      file: '',
    };
    render(<FeedbackCard {...data} />);
    expect(screen.getByText('There is no photo')).toBeInTheDocument();
  });
});
