import { describe, test, expect, vi, Mock } from 'vitest';
import { render } from '@testing-library/react';
import { HomeCards } from '.';
import { fetchData, fetchedData } from '../../utils/requests';
import { LoadingIcon } from '../../assets/LoadingIcon';
import { Provider } from 'react-redux';
import store from '../../store/store';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fetchedData),
  })
) as Mock;

describe('Home Cards', () => {
  test('makes a GET request', async () => {
    const todoList = await fetchData(`https://api.jikan.moe/v4/anime?page=1`);
    expect(fetch).toHaveBeenCalledWith('https://api.jikan.moe/v4/anime?page=1');
    expect(todoList).toStrictEqual(todoList);
  });
  test('Renders Loading Icon', () => {
    render(
      <Provider store={store}>
        <HomeCards />
      </Provider>
    );
    expect(<LoadingIcon />);
  });
});
