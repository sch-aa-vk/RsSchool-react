import { Component } from 'react';

interface IProductSelect {
  warningProduct: boolean;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tvRef: React.RefObject<HTMLInputElement>;
  electroRef: React.RefObject<HTMLInputElement>;
  jewRef: React.RefObject<HTMLInputElement>;
  wclthRef: React.RefObject<HTMLInputElement>;
  mclthRef: React.RefObject<HTMLInputElement>;
}

export class ProductSelect extends Component<IProductSelect> {
  render() {
    return (
      <div className="form__block">
        <p className="form-text">What type of product(s) did you order?</p>
        {this.props.warningProduct ? (
          <p className="form-text form-text__warning">choose minimum one product!</p>
        ) : (
          <></>
        )}
        <div className="block-fullsize block__with-margin">
          <input
            className="checkbox"
            ref={this.props.tvRef}
            type="checkbox"
            id="input-tv"
            name="order"
            onChange={this.props.handleCheckbox}
          />
          <label htmlFor="input-tv" className="label label-fullsize label-checkbox">
            TV
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            ref={this.props.electroRef}
            type="checkbox"
            id="input-electronics"
            name="order"
            onChange={this.props.handleCheckbox}
          />
          <label htmlFor="input-electronics" className="label label-fullsize label-checkbox">
            Electronics
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            ref={this.props.jewRef}
            type="checkbox"
            id="input-jewelery"
            name="order"
            onChange={this.props.handleCheckbox}
          />
          <label htmlFor="input-jewelery" className="label label-fullsize label-checkbox">
            Jewelery
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            ref={this.props.wclthRef}
            id="input-women-clothes"
            type="checkbox"
            name="order"
            onChange={this.props.handleCheckbox}
          />
          <label htmlFor="input-women-clothes" className="label label-fullsize label-checkbox">
            Women clothes
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            ref={this.props.mclthRef}
            id="input-men-clothes"
            type="checkbox"
            name="order"
            onChange={this.props.handleCheckbox}
          />
          <label htmlFor="input-men-clothes" className="label label-fullsize label-checkbox">
            Men clothes
          </label>
        </div>
      </div>
    );
  }
}
