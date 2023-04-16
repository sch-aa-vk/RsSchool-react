import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';
import { Provider } from 'react-redux';
import store from './store/store';

describe('App', () => {
  it('Renders Page404 if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/some-text']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Page 404')).toBeInTheDocument();
  });
  it('Renders Home Page if path is correct', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
  it('Renders About Us if path is correct', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
  it('Renders Forms Page if path is correct', () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Forms')).toBeInTheDocument();
  });
});
