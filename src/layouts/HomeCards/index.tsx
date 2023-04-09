import { useEffect, useState } from 'react';

import { HomeCard } from '../../components/HomeCard';
import { ICard } from '../../utils/types';
import { LoadingIcon } from '../../assets/LoadingIcon';
import { fetchData } from '../../utils/requests';

import './style.css';

interface IHomeCards {
  value: string;
}

export const HomeCards: React.FC<IHomeCards> = ({ value }: IHomeCards) => {
  const [data, setData] = useState<Array<ICard>>([]);
  const [isPending, setIsPending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDataFromApi();
  }, [value]);

  const getDataFromApi = async () => {
    setIsPending(true);
    try {
      const res = await fetchData(`https://api.jikan.moe/v4/anime?q=${value}&sfw`);
      // const res = await fetchData(`https://api.jikan.moe/v4/anime?page=1`);
      setData(res ? res.data : []);
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  const loadMoreData = async () => {
    const pageNum = Math.floor(data.length / 25) + 1;
    if (pageNum < 945) {
      setIsLoading(true);
      try {
        const res = await fetchData(`https://api.jikan.moe/v4/anime?sfw&page=${pageNum}`);
        setData(res ? [...data, ...res.data] : []);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
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
