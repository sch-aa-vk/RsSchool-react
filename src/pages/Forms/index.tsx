import { Component } from 'react';
import { FeedbackCard } from '../../components/FeedbackCard';
import { FormFeedback } from '../../layouts/FormFeedback';
import { IFeedback } from '../../utils/types';

import './style.css';

export class Forms extends Component {
  state: { data: Array<IFeedback> };
  constructor(props: {}) {
    super(props);
    this.state = {
      data: localStorage['input-feedback'] ? JSON.parse(localStorage['input-feedback']) : '',
    };
  }

  onUpdateData = (data: Array<IFeedback>) => {
    this.setState({ data });
  };

  render() {
    if (!localStorage['input-feedback']) {
      localStorage['input-feedback'] = '[]';
    }
    return (
      <div className="forms">
        <h2 className="forms__title">Please leave us your feedback</h2>
        <div className="form__wrapper">
          <FormFeedback onUpdateData={this.onUpdateData} />
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
