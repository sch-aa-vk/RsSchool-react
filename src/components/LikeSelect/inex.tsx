import { Component } from 'react';

interface ILikeSelect {
  yesRef: React.RefObject<HTMLInputElement>;
  noRef: React.RefObject<HTMLInputElement>;
}

export class LikeSelect extends Component<ILikeSelect> {
  render() {
    return (
      <div className="form__block form__block-row form__block-start">
        <p className="form-text">Did you like our products?</p>
        <div className="form__block form__block-row">
          <label htmlFor="input-yes" className="label label-radio">
            yes
            <input
              defaultChecked
              ref={this.props.yesRef}
              type="radio"
              name="like"
              id="input-yes"
              required
            />
          </label>
          <label htmlFor="input-no" className="label label-radio">
            no <input type="radio" ref={this.props.noRef} name="like" id="input-no" required />
          </label>
        </div>
      </div>
    );
  }
}
