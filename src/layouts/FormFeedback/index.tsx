import { Component } from 'react';
import { InputText } from '../../components/InputText';

import './style.css';

export class FormFeedback extends Component {
  state: { name: string; date: string };
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      date: '',
    };
  }
  render() {
    return (
      <form className="form-feedback" id="feedback-form">
        <label className="label label-fullsize">
          Your full name:
          <InputText
            classname="feedback__input"
            value={this.state.name}
            fn={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
          />
        </label>
        <div className="form__block form__block-row">
          <label className="label label-fullsize">
            Order date: <input className="input feedback__input click__pointer" type="date" />
          </label>
          <label htmlFor="input-country" className="label label-fullsize">
            Country of order:
            <select id="input-name" className="input feedback__input click__pointer">
              <option value="kz">Kazakhstan</option>
              <option value="kz">Ukrain</option>
              <option value="kz">Belarus</option>
              <option value="kz">Russia</option>
            </select>
          </label>
        </div>
        <div className="form__block">
          <p className="form-text form-text__with-margin">What type of product(s) did you order?</p>
          <div className="block-fullsize">
            <input className="checkbox" type="checkbox" id="input-tv" name="order" />
            <label htmlFor="input-tv" className="label label-fullsize label-checkbox">
              TV
            </label>
          </div>
          <div className="block-fullsize">
            <input className="checkbox" type="checkbox" id="input-electronics" name="order" />
            <label htmlFor="input-electronics" className="label label-fullsize label-checkbox">
              Electronics
            </label>
          </div>
          <div className="block-fullsize">
            <input className="checkbox" type="checkbox" id="input-jewelery" name="order" />
            <label htmlFor="input-jewelery" className="label label-fullsize label-checkbox">
              Jewelery
            </label>
          </div>
          <div className="block-fullsize">
            <input className="checkbox" id="input-women-clothes" type="checkbox" name="order" />
            <label htmlFor="input-women-clothes" className="label label-fullsize label-checkbox">
              Women clothes
            </label>
          </div>
          <div className="block-fullsize">
            <input className="checkbox" id="input-men-clothes" type="checkbox" name="order" />
            <label htmlFor="input-men-clothes" className="label label-fullsize label-checkbox">
              Men clothes
            </label>
          </div>
        </div>
        <div className="form__block form__block-row form__block-start">
          <p className="form-text">Did you like our products?</p>
          <div className="form__block form__block-row">
            <label htmlFor="input-yes" className="label label-radio">
              yes <input type="radio" name="like" id="input-yes" />
            </label>
            <label htmlFor="input-no" className="label label-radio">
              no <input type="radio" name="like" id="input-no" />
            </label>
          </div>
        </div>
        <div className="form__block form__block-row">
          <p className="form-text form-text-not-important">Image of your order:</p>
          <label className="input-file">
            <span className="input-file-text" />
            <input type="file" name="file" />
            <span className="input-file-btn">Choose file</span>
          </label>
        </div>
        <button className="feedback-button" type="submit" form="feedback-form">
          Submit
        </button>
      </form>
    );
  }
}
