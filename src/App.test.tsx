import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
  it('Renders Page404 if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/some-text']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Page 404')).toBeInTheDocument();
  });
  it('Renders Home Page if path is correct', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
  it('Renders About Us if path is correct', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});

describe('AboutUs', () => {
  it('Render AboutUs component', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('This page is currently empty');
  });
});
