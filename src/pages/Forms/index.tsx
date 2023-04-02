import { useState } from 'react';
import { FeedbackCard } from '../../components/FeedbackCard';
import { FormFeedback } from '../../layouts/FormFeedback';
import { IFeedback } from '../../utils/types';

import './style.css';

export const Forms: React.FC = () => {
  const initialData: Array<IFeedback> = [];
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState('in process');

  const onUpdateData = (data: Array<IFeedback>) => {
    setData(data);
    setStatus('confirmed');
    setTimeout(() => {
      setStatus('in process');
    }, 1500);
  };

  return (
    <div
      className="forms"
      style={{
        backgroundImage: `url(${
          status === 'confirmed'
            ? 'https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif'
            : ''
        })`,
      }}
    >
      <h2 className="forms__title">
        Please leave us your feedback.
        <span className="forms__title-thin">Feedback {status}</span>
      </h2>
      <div className="form__wrapper">
        <FormFeedback onUpdateData={onUpdateData} data={data} />
      </div>
      <h2 className="forms__title">Your last feedback</h2>
      <div className="feedback__wrapper">
        {data.length !== 0 ? (
          data.map((item, index) => {
            return <FeedbackCard key={index} {...item} />;
          })
        ) : (
          <p className="forms__text-not-found">There is no feedback</p>
        )}
      </div>
    </div>
  );
};
