export interface IFeedback {
  name: string;
  date: string;
  country: string;
  products: {
    tv: boolean;
    electronics: boolean;
    jewelery: boolean;
    wclothes: boolean;
    mclothes: boolean;
  };
  like: {
    yes: boolean;
    no: boolean;
  };
  file: string;
  id: number;
}
