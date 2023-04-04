import { BrokenHeartIcon } from '../../assets/BrokenHeartIcon';
import { HeartIcon } from '../../assets/HeartIcon';
import { IFeedback } from '../../utils/types';

import './style.css';

export const FeedbackCard: React.FC<IFeedback> = (data) => {
  const { name, date, country, products, like, file } = data;
  const { tv, electronics, jewelery, wclothes, mclothes } = products;
  const items = [
    tv ? 'television' : '',
    electronics ? 'electronics' : '',
    jewelery ? 'jewelery' : '',
    wclothes ? 'women clothes' : '',
    mclothes ? 'men clothes' : '',
  ].filter((item) => item !== '');

  return (
    <div className="feedback__card">
      <h2 className="feedback__card-title">{name}</h2>
      <div
        className="feedback__card-image"
        style={{
          backgroundImage: `${file.length > 0 ? `url(${URL.createObjectURL(file[0])})` : ''}`,
        }}
      />
      <div className="feedback__card-products">
        <p className="feedback__card-text">
          <span className="feedback__card-text text-highlighted">Products:</span>
          {items.join(', ')}
        </p>
      </div>
      <div className="feedback__card-description">
        <p className="feedback__card-text">{country}</p>
        <p className="feedback__card-text">{date}</p>
        {like === 'yes' ? <HeartIcon /> : <BrokenHeartIcon />}
      </div>
    </div>
  );
};
