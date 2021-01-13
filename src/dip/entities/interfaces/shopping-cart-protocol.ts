import { CartItem } from './cartItem';
export interface ShoppingCartProtocol {
  addItem(item: CartItem): void;

  removeItem(index: number): void;

  items(): Readonly<CartItem[]>;

  total(): number;

  totalWithDicount(): number;

  isEmpty(): boolean;

  clear(): void;
}
