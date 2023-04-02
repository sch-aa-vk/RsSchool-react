/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import { IFeedback } from '../../utils/types';
import { ProductsChoose } from '../../components/ProductsChoose';

import './style.css';

type IFormFeedback = {
  onUpdateData: (data: Array<IFeedback>) => void;
  data: Array<IFeedback>;
};

export const FormFeedback: React.FC<IFormFeedback> = ({ data, onUpdateData }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [tv, setTV] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [jewelery, setJewelery] = useState(false);
  const [wclothes, setWclothes] = useState(false);
  const [mclothes, setMclothes] = useState(false);
  const initialFile = {} as File;
  const [file, setFile] = useState(initialFile);
  const [yes, setYes] = useState(true);
  const [no, setNo] = useState(false);

  const [warningProduct, setWarningProduct] = useState(false);
  const [warningName, setWarningName] = useState(false);
  const [warningFile, setWarningFile] = useState(false);
  const [warningDate, setWarningDate] = useState(false);
  const [image, setImage] = useState('');

  const handleFromData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)) {
      setWarningName(true);
    }
    if (!date) {
      setWarningDate(true);
    }
    if (!(tv || electronics || wclothes || mclothes || jewelery)) {
      setWarningProduct(true);
    }
    if (!file.name) {
      setWarningFile(true);
    }
    if (!warningDate && !warningFile && !warningName && !warningProduct && file.name) {
      const newData = {
        name: name,
        date: date,
        country: country,
        products: {
          tv: tv,
          electronics: electronics,
          jewelery: jewelery,
          wclothes: wclothes,
          mclothes: mclothes,
        },
        like: {
          yes: yes,
          no: no,
        },
        file: URL.createObjectURL(file),
      };
      const feedback = [...data, newData];
      onUpdateData(feedback);
      setInitialValues();
    }
  };

  const setInitialValues = () => {
    setName('');
    setDate('');
    setCountry('kz');
    setTV(false);
    setElectronics(false);
    setWclothes(false);
    setMclothes(false);
    setJewelery(false);
    setYes(true);
    setNo(false);
    setFile({} as File);
    setImage('');
  };

  return (
    <form className="form-feedback" onSubmit={(e) => handleFromData(e)} id="feedback-form">
      <label className="label label-fullsize">
        Your full name:
        <input
          className="input feedback__input"
          type="text"
          value={name}
          onChange={(e) => {
            setWarningName(false);
            setName(e.target.value);
          }}
        />
      </label>
      {warningName ? (
        <p className="form-text form-text__warning">enter name and surname in english</p>
      ) : (
        <></>
      )}
      <div className="form__block form__block-row">
        <label className="label label-fullsize">
          Order date:
          <input
            className="input feedback__input click__pointer"
            value={date}
            type="date"
            onChange={(e) => {
              setWarningDate(false);
              setDate(e.target.value);
            }}
          />
        </label>
        <label htmlFor="input-country" className="label label-fullsize">
          Country of order:
          <select
            id="input-name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input feedback__input click__pointer"
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
      {warningDate ? <p className="form-text form-text__warning">enter order date</p> : <></>}
      <ProductsChoose
        tv={tv}
        setTV={setTV}
        electronics={electronics}
        setElectronics={setElectronics}
        jewelery={jewelery}
        setJewelery={setJewelery}
        wclothes={wclothes}
        setWclothes={setMclothes}
        mclothes={mclothes}
        setMclothes={setMclothes}
        warningProduct={warningProduct}
        setWarningProduct={setWarningProduct}
      />
      <div className="form__block form__block-row form__block-start">
        <p className="form-text">Did you like our products?</p>
        <div className="form__block form__block-row form__block-no-margin">
          <label htmlFor="input-yes" className="label label-radio">
            yes
            <input
              type="radio"
              name="like"
              id="input-yes"
              checked={yes}
              onChange={() => setYes(!yes)}
            />
          </label>
          <label htmlFor="input-no" className="label label-radio">
            no
            <input
              type="radio"
              name="like"
              id="input-no"
              checked={no}
              onChange={() => setNo(!no)}
            />
          </label>
        </div>
      </div>
      <div className="form__block form__block-row">
        <p className="form-text">Image of your order:</p>
        <label className="input-file">
          <span className="input-file-text">{image}</span>
          <input
            type="file"
            name="file"
            onChange={(e) => {
              setImage(e.target.files![0].name);
              setWarningFile(false);
              setFile(e.target.files![0]);
            }}
          />
          <span className="input-file-btn">Choose file</span>
        </label>
      </div>
      {warningFile ? <p className="form-text form-text__warning">upload one image</p> : <></>}
      <button className="feedback-button" type="submit" form="feedback-form">
        Submit
      </button>
    </form>
  );
};
