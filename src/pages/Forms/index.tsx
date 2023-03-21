import { Component } from 'react';
import { FormFeedback } from '../../layouts/FormFeedback';

import './style.css';

export class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <h2>Please give us you`re feedback</h2>
        <FormFeedback />
      </div>
    );
  }
}
