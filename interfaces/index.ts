import {Btc} from './Pricemultifull';

export enum CurrencytType {
  EMPTY = '',
  USD = 'USD',
  MXN = 'MXN',
  EUR = 'EUR',
  GBP = 'GBP',
}

export type FormProps = {
  currency: CurrencytType;
  cryptocurrency: string;
  setCurrency: React.Dispatch<React.SetStateAction<CurrencytType>>;
  setCryptoCurrency: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export type QuotationProps = {
  data: Btc | undefined;
};
