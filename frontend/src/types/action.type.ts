import { ResponseType, QtyType } from 'types';

type ActionTypeResponse = {
  payload: ResponseType[];
  type: string;
};

type ActionTypeQty = {
  payload: QtyType;
  type: string;
};

export { type ActionTypeResponse, type ActionTypeQty };
