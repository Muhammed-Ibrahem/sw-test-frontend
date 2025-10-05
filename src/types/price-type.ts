import type { Currency } from "./currency-type";

export type Price = {
  id: number;
  amount: number;
  currency: Currency;
};
