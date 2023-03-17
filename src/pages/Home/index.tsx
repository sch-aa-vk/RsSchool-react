import { Component } from 'react';

import data, { IProduct } from '../../database';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Card } from '../../components/Card';

import './style.css';

export class Home extends Component {
  state: { value: string; products: IProduct[] };
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      value: localStorage['input-value'] ? localStorage['input-value'] : '',
      products: data,
    };
  }

  render() {
    return (
      <>
        <Header path="/" />
        <div className="home">
          <Search />
          <div className="cards__wrapper">
            {this.state.products.map((product) => {
              return <Card key={product.id} {...product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
