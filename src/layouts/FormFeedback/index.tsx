/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Component, createRef, RefObject } from 'react';
import { IFeedback } from '../../utils/types';

import './style.css';

type IFormFeedback = {
  onUpdateData: (data: Array<IFeedback>) => void;
};

export class FormFeedback extends Component<IFormFeedback> {
  nameRef: RefObject<HTMLInputElement>;
  dateRef: RefObject<HTMLInputElement>;
  countryRef: RefObject<HTMLSelectElement>;
  tvRef: RefObject<HTMLInputElement>;
  electroRef: RefObject<HTMLInputElement>;
  jewRef: RefObject<HTMLInputElement>;
  wclthRef: RefObject<HTMLInputElement>;
  mclthRef: RefObject<HTMLInputElement>;
  yesRef: RefObject<HTMLInputElement>;
  noRef: RefObject<HTMLInputElement>;
  fileRef: RefObject<HTMLInputElement>;
  state: { warningProduct: boolean; warningName: boolean; image: string };
  constructor(props: IFormFeedback) {
    super(props);
    this.nameRef = createRef();
    this.dateRef = createRef();
    this.countryRef = createRef();
    this.tvRef = createRef();
    this.electroRef = createRef();
    this.jewRef = createRef();
    this.wclthRef = createRef();
    this.mclthRef = createRef();
    this.yesRef = createRef();
    this.noRef = createRef();
    this.fileRef = createRef();
    this.state = {
      warningProduct: false,
      warningName: false,
      image: '',
    };
  }

  handleFromData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      name: this.nameRef.current?.value,
      date: this.dateRef.current?.value,
      country: this.countryRef.current?.value,
      products: {
        tv: this.tvRef.current?.checked,
        electronics: this.electroRef.current?.checked,
        jewelery: this.jewRef.current?.checked,
        wclothes: this.wclthRef.current?.checked,
        mclothes: this.mclthRef.current?.checked,
      },
      like: {
        yes: this.yesRef.current?.checked,
        no: this.noRef.current?.checked,
      },
      file: this.state.image,
    };
    const { tv, electronics, wclothes, mclothes } = data.products;
    if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.name!)) {
      this.setState({ warningName: true });
    } else if (!(tv || electronics || wclothes || mclothes)) {
      this.setState({ warningProduct: true });
    } else {
      const feedback = JSON.parse(localStorage['input-feedback']);
      feedback.push(data);
      localStorage['input-feedback'] = JSON.stringify(feedback);
      this.props.onUpdateData(JSON.parse(localStorage['input-feedback']));
      this.nameRef.current!.value = '';
      this.dateRef.current!.value = '';
      this.countryRef.current!.value = 'kz';
      this.tvRef.current!.checked = false;
      this.electroRef.current!.checked = false;
      this.jewRef.current!.checked = false;
      this.wclthRef.current!.checked = false;
      this.mclthRef.current!.checked = false;
      this.yesRef.current!.checked = true;
      this.noRef.current!.checked = false;
      this.fileRef.current!.value = '';
      this.setState({ image: '' });
    }
  };

  handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      this.setState({ warningProduct: false });
    }
  };

  render() {
    return (
      <form className="form-feedback" onSubmit={this.handleFromData} id="feedback-form">
        <label className="label label-fullsize">
          Your full name:
          <input
            className="input feedback__input"
            ref={this.nameRef}
            type="text"
            onChange={() => this.setState({ warningName: false })}
            required
          />
        </label>
        {this.state.warningName ? (
          <p className="form-text form-text__warning">enter name and surname in english</p>
        ) : (
          <></>
        )}
        <div className="form__block form__block-row">
          <label className="label label-fullsize">
            Order date:
            <input
              className="input feedback__input click__pointer"
              ref={this.dateRef}
              type="date"
              required
            />
          </label>
          <label htmlFor="input-country" className="label label-fullsize">
            Country of order:
            <select
              id="input-name"
              ref={this.countryRef}
              className="input feedback__input click__pointer"
              required
            >
              <option value="kz" defaultChecked>
                Kazakhstan
              </option>
              <option value="uk">Ukrain</option>
              <option value="by">Belarus</option>
              <option value="ru">Russia</option>
            </select>
          </label>
        </div>
        <div className="form__block">
          <p className="form-text">What type of product(s) did you order?</p>
          {this.state.warningProduct ? (
            <p className="form-text form-text__warning">choose minimum one product!</p>
          ) : (
            <></>
          )}
          <div className="block-fullsize block__with-margin">
            <input
              className="checkbox"
              ref={this.tvRef}
              type="checkbox"
              id="input-tv"
              name="order"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="input-tv" className="label label-fullsize label-checkbox">
              TV
            </label>
          </div>
          <div className="block-fullsize">
            <input
              className="checkbox"
              ref={this.electroRef}
              type="checkbox"
              id="input-electronics"
              name="order"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="input-electronics" className="label label-fullsize label-checkbox">
              Electronics
            </label>
          </div>
          <div className="block-fullsize">
            <input
              className="checkbox"
              ref={this.jewRef}
              type="checkbox"
              id="input-jewelery"
              name="order"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="input-jewelery" className="label label-fullsize label-checkbox">
              Jewelery
            </label>
          </div>
          <div className="block-fullsize">
            <input
              className="checkbox"
              ref={this.wclthRef}
              id="input-women-clothes"
              type="checkbox"
              name="order"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="input-women-clothes" className="label label-fullsize label-checkbox">
              Women clothes
            </label>
          </div>
          <div className="block-fullsize">
            <input
              className="checkbox"
              ref={this.mclthRef}
              id="input-men-clothes"
              type="checkbox"
              name="order"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="input-men-clothes" className="label label-fullsize label-checkbox">
              Men clothes
            </label>
          </div>
        </div>
        <div className="form__block form__block-row form__block-start">
          <p className="form-text">Did you like our products?</p>
          <div className="form__block form__block-row">
            <label htmlFor="input-yes" className="label label-radio">
              yes
              <input
                defaultChecked
                ref={this.yesRef}
                type="radio"
                name="like"
                id="input-yes"
                required
              />
            </label>
            <label htmlFor="input-no" className="label label-radio">
              no <input type="radio" ref={this.noRef} name="like" id="input-no" required />
            </label>
          </div>
        </div>
        <div className="form__block form__block-row">
          <p className="form-text form-text-not-important">Image of your order:</p>
          <label className="input-file">
            <span className="input-file-text">{this.state.image}</span>
            <input
              type="file"
              name="file"
              ref={this.fileRef}
              onChange={() => this.setState({ image: this.fileRef.current?.files![0].name })}
            />
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
