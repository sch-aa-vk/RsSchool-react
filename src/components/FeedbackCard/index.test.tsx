import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FeedbackCard } from '.';

describe('FeedbackCard', () => {
  it('Render feedback card component', () => {
    const data = {
      name: 'amina',
      date: '2023-04-06',
      country: 'kz',
      like: 'yes',
      file: {} as FileList,
      products: { tv: false, electronics: true, jewelery: false, wclothes: true, mclothes: false },
    };
    render(<FeedbackCard {...data} />);
    expect(screen.debug());
  });
});
