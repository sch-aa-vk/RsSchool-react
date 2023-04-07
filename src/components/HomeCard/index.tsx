import { ICard } from '../../utils/types';
import './style.css';

interface IHomeCard {
  item: ICard;
}

export const HomeCard: React.FC<IHomeCard> = ({ item }: IHomeCard) => {
  return (
    <div className="home-card">
      <p className="home-card__text">{item.title}</p>
    </div>
  );
};
