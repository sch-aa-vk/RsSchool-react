import { ErrorIcon } from '../../assets/ErrorIcon';

import './style.css';

export const Page404 = () => {
  return (
    <>
      <div className="page-404">
        <h1 className="page-404__header">This address does not exist, please change pathname</h1>
        <ErrorIcon />
      </div>
    </>
  );
};
