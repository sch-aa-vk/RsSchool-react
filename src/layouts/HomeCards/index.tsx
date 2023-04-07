import { useEffect, useState } from 'react';

import { HomeCard } from '../../components/HomeCard';
import { ICard } from '../../utils/types';

import './style.css';

interface IHomeCards {
  value: string;
}

export const HomeCards: React.FC<IHomeCards> = ({ value }: IHomeCards) => {
  const [data, setData] = useState<Array<ICard>>([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    getDataFromApi();
  }, [value]);

  const getDataFromApi = async () => {
    setIsPending(true);
    try {
      await fetch(` https://api.jikan.moe/v4/anime?q=${value}&sfw`)
        .then((res) => res.json())
        .then((res) => (res ? setData(res.data) : setData([])));
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="cards__wrapper">
        {data.length > 0 ? (
          data.map((item) => {
            return <HomeCard key={item.mal_id} item={item} />;
          })
        ) : (
          <p>anime not found</p>
        )}
      </div>
      {isPending && <p>is loading...</p>}
    </>
  );
};
