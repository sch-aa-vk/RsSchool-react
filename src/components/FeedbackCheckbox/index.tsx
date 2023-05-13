interface IFeedbackCheckbox {
  id: number;
  name: string;
  state: boolean;
  fnState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FeedbackCheckbox: React.FC<IFeedbackCheckbox> = ({
  id,
  name,
  state,
  fnState,
}: IFeedbackCheckbox) => {
  return (
    <div key={id} className={`block-fullsize ${id === 0 ? 'block__with-margin' : ''}`}>
      <input
        className="checkbox"
        id={`checkbox${id}`}
        type="checkbox"
        checked={state}
        onChange={() => fnState(!state)}
        name="order"
      />
      <label htmlFor={`checkbox${id}`} className="label label-fullsize label-checkbox">
        {name}
      </label>
    </div>
  );
};
