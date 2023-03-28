import { Component } from 'react';
import { FeedbackCard } from '../../components/FeedbackCard';
import { FormFeedback } from '../../layouts/FormFeedback';
import { IFeedback } from '../../utils/types';

import './style.css';

export class Forms extends Component {
  state: { data: Array<IFeedback>; status: string };
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      status: 'in process',
    };
  }

  onUpdateData = (data: Array<IFeedback>) => {
    this.setState({ data, status: 'confirmed' });
    setTimeout(() => {
      this.setState({ status: 'in process' });
    }, 1500);
  };

  render() {
    return (
      <div
        className="forms"
        style={{
          backgroundImage: `url(${
            this.state.status === 'confirmed'
              ? 'https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif'
              : ''
          })`,
        }}
      >
        <h2 className="forms__title">
          Please leave us your feedback.
          <span className="forms__title-thin">Feedback {this.state.status}</span>
        </h2>
        <div className="form__wrapper">
          <FormFeedback onUpdateData={this.onUpdateData} data={this.state.data} />
        </div>
        <h2 className="forms__title">Your last feedback</h2>
        <div className="feedback__wrapper">
          {this.state.data.length !== 0 ? (
            this.state.data.map((item, index) => {
              return <FeedbackCard key={index} {...item} />;
            })
          ) : (
            <p className="forms__text-not-found">There is no feedback</p>
          )}
        </div>
      </div>
    );
  }
}
