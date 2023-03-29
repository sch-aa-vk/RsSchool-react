import { Component } from 'react';
import { StarIcon } from '../../assets/StarIcon';
import { IProduct } from '../../database';

import './style.css';

interface ICard extends IProduct {
  height: string;
}

export class Card extends Component {
  state: ICard;
  constructor(props: IProduct) {
    super(props);
    this.state = {
      ...props,
      height: '55px',
    };
  }

  render() {
    const { title, price, description, image, category, rating } = this.state;
    const { count, rate } = rating;
    return (
      <div className="card">
        <div className="card__image-wrapper" style={{ backgroundImage: `url(${image})` }}>
          <div className="card__rate">
            <StarIcon />
            <p className="card__rate-text">{rate}</p>
          </div>
          <div className="card__category">
            <p className="card__category-text">category: {category}</p>
          </div>
        </div>
        <h3 className="card__title">{title}</h3>
        <div className="card__description">
          <p className="card__description-text">{description}</p>
        </div>
        <div className="card__info">
          <p className="card__info-text">{`price: $${price}`}</p>
          <p className="card__info-text">{`stoke: ${count}`}</p>
        </div>
      </div>
    );
  }
}
