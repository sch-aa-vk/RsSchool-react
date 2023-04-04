import { useEffect, useState } from 'react';

import data, { IProduct } from '../../database';
import { Search } from '../../layouts/Search';
import { Card } from '../../components/Card';

import './style.css';

export const Home: React.FC = () => {
  const initialValue = localStorage['input-value'] ? localStorage['input-value'] : '';
  const [value, setValue] = useState(initialValue);

  const onUpdateSearch = (value: string) => {
    setValue(value);
  };

  const filterItems = (item: IProduct) => {
    if (value.length === 0) {
      return true;
    }
    const { title, category, price, description } = item;
    return (
      title.includes(value) ||
      category.includes(value) ||
      price.toString().includes(value) ||
      description.toLowerCase().includes(value)
    );
  };

  const [products, setProducts] = useState(data.filter(filterItems));

  useEffect(() => {
    setProducts(data.filter(filterItems));
  }, [value]);

  return (
    <div className="home">
      <Search onUpdateSearch={onUpdateSearch} />
      <div className="cards__wrapper">
        {products.length === 0 ? (
          <p className="cards__wrapper-text">Sorry, we don`t have this products</p>
        ) : (
          products.map((product) => {
            return <Card key={product.id} {...product} />;
          })
        )}
      </div>
    </div>
  );
};
