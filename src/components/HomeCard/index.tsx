import { useState } from 'react';
import { StarIcon } from '../../assets/StarIcon';
import { FullCardDescription } from '../../layouts/FullCardDescription';
import { ICard } from '../../utils/types';
import { Portal } from '../Portal';
import './style.css';

interface IHomeCard {
  item: ICard;
}

export const HomeCard: React.FC<IHomeCard> = ({ item }: IHomeCard) => {
  const image = item.images.jpg.large_image_url;
  const [isOpen, setIsOpen] = useState(false);

  const openFullCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-card" onClick={openFullCard}>
      <div className="home-card__image-wrapper" style={{ backgroundImage: `url(${image})` }}>
        <div className="home-card__rate">
          <StarIcon fill="#fff" />
          <p className="home-card__rate-text">{item.score || '?'}</p>
        </div>
      </div>
      <h3 className="home-card__title">{item.title}</h3>
      <div className="home-card__info">
        <p className="home-card__info-text">
          <span className="home-card__info-text home-card__info-text_blue">rating:</span>
          {item.rating}
        </p>
        <p className="home-card__info-text">
          <span className="home-card__info-text home-card__info-text_blue">episodes:</span>
          {item.episodes || '?'}
        </p>
      </div>
      {isOpen && (
        <Portal>
          <FullCardDescription item={item} setIsOpen={setIsOpen} />
        </Portal>
      )}
    </div>
  );
};
