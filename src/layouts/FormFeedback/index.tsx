import { SubmitHandler, useForm } from 'react-hook-form';
import './style.css';
import React, { useState } from 'react';
import { IFeedback } from '../../utils/types';

interface IFeedbackData {
  name: string;
  date: string;
  country: string;
  like: string;
  file: FileList;
}

interface IFormFeedback {
  onUpdateData: (data: Array<IFeedback>) => void;
  data: Array<IFeedback>;
}

export const FormFeedback: React.FC<IFormFeedback> = ({ data, onUpdateData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFeedbackData>();
  const [fileName, setFileName] = useState('');
  const [checkboxTV, setCheckboxTV] = useState(false);
  const [checkboxJewelery, setCheckboxJewelery] = useState(false);
  const [checkboxElectronics, setCheckboxElectronics] = useState(false);
  const [checkboxWclothes, setCheckboxWclothes] = useState(false);
  const [checkboxMclothes, setCheckboxMclothes] = useState(false);

  const onSubmit: SubmitHandler<IFeedbackData> = (feedbackData) => {
    const newData = {
      ...feedbackData,
      products: {
        tv: checkboxTV,
        electronics: checkboxElectronics,
        jewelery: checkboxJewelery,
        wclothes: checkboxWclothes,
        mclothes: checkboxMclothes,
      },
    };
    onUpdateData([...data, newData]);
    clearForm();
  };

  const clearForm = () => {
    reset({
      name: '',
      date: '',
      country: '',
      like: 'yes',
      file: undefined,
    });
    setCheckboxTV(false);
    setCheckboxElectronics(false);
    setCheckboxJewelery(false);
    setCheckboxWclothes(false);
    setCheckboxMclothes(false);
    setFileName('');
  };

  return (
    <form className="form-feedback" id="feedback-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="label label-fullsize">
        Your full name:
        <input
          className="input feedback__input"
          type="text"
          {...register('name', { required: true })}
        />
      </label>
      {errors.name ? (
        <p className="form-text form-text__warning">enter name and surname in english</p>
      ) : (
        <></>
      )}
      <div className="form__block form__block-row">
        <label className="label label-fullsize">
          Order date:
          <input
            className="input feedback__input click__pointer"
            type="date"
            {...register('date', { required: true })}
          />
        </label>
        <label htmlFor="input-country" className="label label-fullsize">
          Country of order:
          <select
            id="input-name"
            className="input feedback__input click__pointer"
            {...register('country')}
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
      {errors.date ? <p className="form-text form-text__warning">enter order date</p> : <></>}
      <div className="form__block">
        <p className="form-text">What type of product(s) did you order?</p>
        {!(
          checkboxElectronics ||
          checkboxJewelery ||
          checkboxMclothes ||
          checkboxTV ||
          checkboxWclothes
        ) && errors.file ? (
          <p className="form-text form-text__warning">choose minimum one product!</p>
        ) : (
          <></>
        )}
        <div className="block-fullsize block__with-margin">
          <input
            className="checkbox"
            id="checkbox-tv"
            type="checkbox"
            checked={checkboxTV}
            onChange={() => setCheckboxTV(!checkboxTV)}
            value="tv"
            name="order"
          />
          <label htmlFor="checkbox-tv" className="label label-fullsize label-checkbox">
            TV
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            id="checkbox-electronics"
            type="checkbox"
            checked={checkboxElectronics}
            onChange={() => setCheckboxElectronics(!checkboxElectronics)}
            value="electronics"
            name="order"
          />
          <label htmlFor="checkbox-electronics" className="label label-fullsize label-checkbox">
            Electronics
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            id="checkbox-jewelery"
            type="checkbox"
            checked={checkboxJewelery}
            onChange={() => setCheckboxJewelery(!checkboxJewelery)}
            value="jewelery"
            name="order"
          />
          <label htmlFor="checkbox-jewelery" className="label label-fullsize label-checkbox">
            Jewelery
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            id="checkbox-wclothes"
            type="checkbox"
            checked={checkboxWclothes}
            onChange={() => setCheckboxWclothes(!checkboxWclothes)}
            value="women-clothes"
            name="order"
          />
          <label htmlFor="checkbox-wclothes" className="label label-fullsize label-checkbox">
            Women clothes
          </label>
        </div>
        <div className="block-fullsize">
          <input
            className="checkbox"
            id="checkbox-mclothes"
            type="checkbox"
            checked={checkboxMclothes}
            onChange={() => setCheckboxMclothes(!checkboxMclothes)}
            value="men-clothes"
            name="order"
          />
          <label htmlFor="checkbox-mclothes" className="label label-fullsize label-checkbox">
            Men clothes
          </label>
        </div>
      </div>
      <div className="form__block form__block-row form__block-start">
        <p className="form-text">Did you like our products?</p>
        <div className="form__block form__block-row form__block-no-margin">
          <label htmlFor="input-yes" className="label label-radio">
            yes
            <input
              type="radio"
              value="yes"
              {...register('like', { required: true })}
              id="input-yes"
              defaultChecked={true}
            />
          </label>
          <label htmlFor="input-no" className="label label-radio">
            no
            <input
              type="radio"
              value="no"
              {...register('like', { required: true })}
              id="input-no"
              defaultChecked={false}
            />
          </label>
        </div>
      </div>
      <div className="form__block form__block-row">
        <p className="form-text">Image of your order:</p>
        <label className="input-file">
          <span className="input-file-text">{fileName}</span>
          <input
            type="file"
            {...register('file', { required: true })}
            onChange={(e) => setFileName(e.target.files ? e.target.files?.[0].name : '')}
          />
          <span className="input-file-btn">Choose file</span>
        </label>
      </div>
      {errors.file ? <p className="form-text form-text__warning">upload one image</p> : <></>}
      <button className="feedback-button" type="submit" form="feedback-form">
        Submit
      </button>
    </form>
  );
};
