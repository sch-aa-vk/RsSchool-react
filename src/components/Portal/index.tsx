import ReactDOM from 'react-dom';

interface IPortal {
  children: React.ReactNode;
}

export const Portal: React.FC<IPortal> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};
