import { Component } from 'react';

import data, { IProduct } from '../../database';
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

  onUpdateSearch = (value: string) => {
    this.setState({ value });
  };

  filterItems = (item: IProduct) => {
    const val = this.state.value;
    if (val.length === 0) {
      return true;
    }
    const { title, category, price } = item;
    return title.includes(val) || category.includes(val) || price.toString().includes(val);
  };

  render() {
    const products = this.state.products.filter(this.filterItems);
    return (
      <>
        <div className="home">
          <Search onUpdateSearch={this.onUpdateSearch} />
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
      </>
    );
  }
}
