import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../store/slices/feedbackCards.slice';
import { FeedbackCheckbox } from '../../components/FeedbackCheckbox';

import './style.css';

interface IFeedbackData {
  name: string;
  date: string;
  country: string;
  like: string;
  file: FileList;
}

interface IFormFeedback {
  onUpdateData: () => void;
}

export const FormFeedback: React.FC<IFormFeedback> = ({ onUpdateData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFeedbackData>();
  const [fileName, setFileName] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const checkboxes = [
    {
      id: 0,
      name: 'Comedy',
      state: checkbox1,
      fnState: setCheckbox1,
    },
    {
      id: 1,
      name: 'Romance',
      state: checkbox2,
      fnState: setCheckbox2,
    },
    {
      id: 2,
      name: 'Seinen',
      state: checkbox3,
      fnState: setCheckbox3,
    },
    {
      id: 3,
      name: 'Horor',
      state: checkbox4,
      fnState: setCheckbox4,
    },
    {
      id: 4,
      name: 'Drama',
      state: checkbox5,
      fnState: setCheckbox5,
    },
  ];
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFeedbackData> = (feedbackData) => {
    const newData = {
      ...feedbackData,
      products: [
        checkbox1 ? checkboxes[0].name : '',
        checkbox2 ? checkboxes[1].name : '',
        checkbox3 ? checkboxes[2].name : '',
        checkbox4 ? checkboxes[3].name : '',
        checkbox5 ? checkboxes[4].name : '',
      ],
    };
    dispatch(addFeedback(newData));
    onUpdateData();
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
    setCheckbox1(false);
    setCheckbox2(false);
    setCheckbox3(false);
    setCheckbox4(false);
    setCheckbox5(false);
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
          Day of feedback:
          <input
            className="input feedback__input click__pointer"
            type="date"
            {...register('date', { required: true })}
          />
        </label>
        <label htmlFor="input-country" className="label label-fullsize">
          Country of living:
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
        <p className="form-text">What type of anime(s) have you watched?</p>
        {!(checkbox1 || checkbox2 || checkbox3 || checkbox4 || checkbox5) && errors.file ? (
          <p className="form-text form-text__warning">choose minimum one anime!</p>
        ) : (
          <></>
        )}
        {checkboxes.map((checkbox) => {
          return <FeedbackCheckbox key={checkbox.id} {...checkbox} />;
        })}
      </div>
      <div className="form__block form__block-row form__block-start">
        <p className="form-text">Did you like what you saw?</p>
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
        <p className="form-text">Upload an image from one anime:</p>
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
