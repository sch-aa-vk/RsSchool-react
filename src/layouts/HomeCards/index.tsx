import { useEffect, useState } from 'react';
import store from '../../store/store';
import { fetchDataFromApi } from '../../store/slices/inputSearch.slice';
import { useAppDispatch } from '../../store/store.dispatch';
import { fetchMoreDataFromApi } from '../../store/slices/inputSearchMore.slice';
import { HomeCard } from '../../components/HomeCard';
import { ICard } from '../../utils/types';
import { LoadingIcon } from '../../assets/LoadingIcon';

import './style.css';

interface IHomeCards {
  value: string;
}

export const HomeCards: React.FC<IHomeCards> = ({ value }: IHomeCards) => {
  const { data: initialData } = store.getState().inputSearch;
  const [data, setData] = useState<Array<ICard>>(initialData);
  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDataFromApi();
  }, [value]);

  const getDataFromApi = async () => {
    setIsPending(true);
    await dispatch(fetchDataFromApi(value));
    setData(store.getState().inputSearch.data);
    setIsPending(false);
  };

  const loadMoreData = async () => {
    const pageNum = Math.floor(data.length / 25) + 1;
    if (pageNum < 945) {
      setIsLoading(true);
      await dispatch(fetchMoreDataFromApi(pageNum));
      setData([...data, ...store.getState().inputSearchMore.data]);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="cards__wrapper">
        {data.length > 0 && !isPending ? (
          data.map((item) => {
            return <HomeCard key={item.mal_id} item={item} />;
          })
        ) : !isPending ? (
          <p className="cards__wrapper-text">anime not found</p>
        ) : null}
      </div>
      {value.length === 0 && !isLoading && !isPending ? (
        <button className="cards__button" onClick={loadMoreData}>
          Load More...
        </button>
      ) : null}
      {(isPending || isLoading) && <LoadingIcon />}
    </>
  );
};
