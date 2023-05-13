import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store.dispatch';
import { fetchDataFromApi } from '../../store/slices/inputSearch.slice';
import { inputValueSetOld } from '../../store/slices/inputValue.slice';
import { HomeCard } from '../../components/HomeCard';
import { IStore } from '../../utils/types';
import { LoadingIcon } from '../../assets/LoadingIcon';

import './style.css';

export const HomeCards: React.FC = () => {
  const { data: cards, pending } = useSelector((state: IStore) => state.inputSearch);
  const { isNew, input: value } = useSelector((state: IStore) => state.inputValue);
  const dispatch = useAppDispatch();

  const updateCards = async () => {
    if (isNew) {
      await dispatch(fetchDataFromApi(value));
      dispatch(inputValueSetOld());
    }
  };

  useEffect(() => {
    updateCards();
  }, [isNew]);

  return (
    <>
      <div className="cards__wrapper">
        {cards.length > 0 && !pending ? (
          cards.map((item) => {
            return <HomeCard key={item.mal_id} item={item} />;
          })
        ) : !pending ? (
          <p className="cards__wrapper-text">anime not found</p>
        ) : null}
      </div>
      {pending && <LoadingIcon />}
    </>
  );
};
