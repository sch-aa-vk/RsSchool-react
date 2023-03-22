import { Component } from 'react';
import { FormFeedback } from '../../layouts/FormFeedback';

import './style.css';

export class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <h2 className="forms__title">Please leave us your feedback</h2>
        <div className="form__wrapper">
          <FormFeedback />
        </div>
      </div>
    );
  }
}
