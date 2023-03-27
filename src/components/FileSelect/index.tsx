/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, ReactNode } from 'react';

interface IFileSelect {
  fileRef: React.RefObject<HTMLInputElement>;
  image: string;
}

export class FileSelect extends Component<IFileSelect> {
  render(): ReactNode {
    return (
      <div className="form__block form__block-row">
        <p className="form-text form-text-not-important">Image of your order:</p>
        <label className="input-file">
          <span className="input-file-text">{this.props.image}</span>
          <input
            type="file"
            name="file"
            ref={this.props.fileRef}
            onChange={() => this.setState({ image: this.props.fileRef.current?.files![0].name })}
          />
          <span className="input-file-btn">Choose file</span>
        </label>
      </div>
    );
  }
}
