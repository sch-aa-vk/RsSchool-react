import './style.css';

interface IInputText {
  value: string;
  classname?: string;
  fn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<IInputText> = ({ value, classname, fn }: IInputText) => {
  return <input className={`input ${classname || ''}`} type="text" value={value} onChange={fn} />;
};
