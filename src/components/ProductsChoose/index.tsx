interface IProductsChoose {
  tv: boolean;
  setTV: React.Dispatch<React.SetStateAction<boolean>>;
  electronics: boolean;
  setElectronics: React.Dispatch<React.SetStateAction<boolean>>;
  jewelery: boolean;
  setJewelery: React.Dispatch<React.SetStateAction<boolean>>;
  wclothes: boolean;
  setWclothes: React.Dispatch<React.SetStateAction<boolean>>;
  mclothes: boolean;
  setMclothes: React.Dispatch<React.SetStateAction<boolean>>;
  warningProduct: boolean;
  setWarningProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsChoose: React.FC<IProductsChoose> = ({
  tv,
  setTV,
  electronics,
  setElectronics,
  jewelery,
  setJewelery,
  wclothes,
  setWclothes,
  mclothes,
  setMclothes,
  warningProduct,
  setWarningProduct,
}: IProductsChoose) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setWarningProduct(false);
    }
  };

  return (
    <div className="form__block">
      <p className="form-text">What type of product(s) did you order?</p>
      {warningProduct ? (
        <p className="form-text form-text__warning">choose minimum one product!</p>
      ) : (
        <></>
      )}
      <div className="block-fullsize block__with-margin">
        <input
          className="checkbox"
          type="checkbox"
          id="input-tv"
          name="order"
          checked={tv}
          onChange={(e) => {
            handleCheckbox(e);
            setTV(!tv);
          }}
        />
        <label htmlFor="input-tv" className="label label-fullsize label-checkbox">
          TV
        </label>
      </div>
      <div className="block-fullsize">
        <input
          className="checkbox"
          type="checkbox"
          id="input-electronics"
          name="order"
          checked={electronics}
          onChange={(e) => {
            handleCheckbox(e);
            setElectronics(!electronics);
          }}
        />
        <label htmlFor="input-electronics" className="label label-fullsize label-checkbox">
          Electronics
        </label>
      </div>
      <div className="block-fullsize">
        <input
          className="checkbox"
          type="checkbox"
          id="input-jewelery"
          name="order"
          checked={jewelery}
          onChange={(e) => {
            handleCheckbox(e);
            setJewelery(!jewelery);
          }}
        />
        <label htmlFor="input-jewelery" className="label label-fullsize label-checkbox">
          Jewelery
        </label>
      </div>
      <div className="block-fullsize">
        <input
          className="checkbox"
          id="input-women-clothes"
          type="checkbox"
          name="order"
          checked={wclothes}
          onChange={(e) => {
            handleCheckbox(e);
            setWclothes(!wclothes);
          }}
        />
        <label htmlFor="input-women-clothes" className="label label-fullsize label-checkbox">
          Women clothes
        </label>
      </div>
      <div className="block-fullsize">
        <input
          className="checkbox"
          id="input-men-clothes"
          type="checkbox"
          name="order"
          checked={mclothes}
          onChange={(e) => {
            handleCheckbox(e);
            setMclothes(!mclothes);
          }}
        />
        <label htmlFor="input-men-clothes" className="label label-fullsize label-checkbox">
          Men clothes
        </label>
      </div>
    </div>
  );
};
