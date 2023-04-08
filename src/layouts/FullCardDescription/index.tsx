import { CloseIcon } from '../../assets/CloseIcon';
import { ICard } from '../../utils/types';
import './style.css';

interface IFullCardDescription {
  item: ICard;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FullCardDescription: React.FC<IFullCardDescription> = ({
  item,
  setIsOpen,
}: IFullCardDescription) => {
  const genres: string = item.genres.map((genre) => genre.name).join(', ');
  const studios: string = item.studios.map((studio) => studio.name).join(', ');
  const producers: string = item.producers.map((producer) => producer.name).join(', ');

  const closeFullCard = () => {
    setIsOpen(false);
  };

  return (
    <div className="full-home-card" onClick={closeFullCard}>
      <div className="full-home-card__wrapper" onClick={(e) => e.stopPropagation()}>
        <CloseIcon fn={() => setIsOpen(false)} />
        <h3 className="full-home-card__title">
          {item.title} | {item.title_japanese}
        </h3>
        <div className="full-home-card__video">
          <iframe
            className="full-home-card__video-iframe"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/${item.trailer.youtube_id}?autoplay=0`}
          />
        </div>
        <h4 className="full-home-card__title full-home-card__title-center">
          Information about title
        </h4>
        <div className="full-home-card__descriptions">
          <div className="full-home-card__description">
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Rating:</span>
              {item.rating.toLowerCase() || '?'}
            </p>
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Genres:</span>
              {genres.toLowerCase() || '?'}
            </p>
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Studios:</span>
              {studios.toLowerCase() || '?'}
            </p>
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Producers:</span>
              {producers.toLowerCase() || '?'}
            </p>
          </div>
          <div className="full-home-card__description">
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Episodes:</span>
              {item.episodes || '?'}
            </p>
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Duration:</span>
              {item.duration || '?'}
            </p>
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Year:</span>
              {item.year || '?'}
            </p>
            <p className="full-home-card__text">
              <span className="full-home-card__text-blue">Favorites:</span>
              {item.favorites || '?'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
