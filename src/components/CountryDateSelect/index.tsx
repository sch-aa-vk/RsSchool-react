import { Component } from 'react';

interface ICountryDateSelect {
  dateRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
}

export class CountryDateSelect extends Component<ICountryDateSelect> {
  render() {
    return (
      <div className="form__block form__block-row">
        <label className="label label-fullsize">
          Order date:
          <input
            className="input feedback__input click__pointer"
            ref={this.props.dateRef}
            type="date"
            required
          />
        </label>
        <label htmlFor="input-country" className="label label-fullsize">
          Country of order:
          <select
            id="input-name"
            ref={this.props.countryRef}
            className="input feedback__input click__pointer"
            required
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
    );
  }
}
