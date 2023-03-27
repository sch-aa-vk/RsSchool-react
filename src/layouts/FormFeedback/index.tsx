/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Component, createRef, RefObject } from 'react';
import { IFeedback } from '../../utils/types';
import { CountryDateSelect } from '../../components/CountryDateSelect';
import { ProductSelect } from '../../components/ProductSelect';
import { LikeSelect } from '../../components/LikeSelect/inex';
import { FileSelect } from '../../components/FileSelect';

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
        <CountryDateSelect dateRef={this.dateRef} countryRef={this.countryRef} />
        <ProductSelect
          warningProduct={this.state.warningProduct}
          handleCheckbox={this.handleCheckbox}
          tvRef={this.tvRef}
          electroRef={this.electroRef}
          jewRef={this.jewRef}
          wclthRef={this.wclthRef}
          mclthRef={this.mclthRef}
        />
        <LikeSelect yesRef={this.yesRef} noRef={this.noRef} />
        <FileSelect fileRef={this.fileRef} image={this.state.image} />
        <button className="feedback-button" type="submit" form="feedback-form">
          Submit
        </button>
      </form>
    );
  }
}
