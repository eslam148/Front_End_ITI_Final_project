import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/CartAction';

export const initialState = +localStorage.getItem('cartCount')!;

const _CartReducer = createReducer(
  initialState,
  on(increment, (state) => {
    localStorage.setItem('cartCount', (state! + 1).toString());
    return  state! + 1
    }
    ),
  on(decrement, (state) => {
      localStorage.setItem('cartCount', (state! - 1).toString());
      return state! - 1;
  
  }),
  on(reset, (state) => 0)
);
export function CartReducer(state: any, action: any) {
  return _CartReducer(state, action);
}