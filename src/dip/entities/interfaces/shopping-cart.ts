import { CartItem } from './cartItem';
import { Discount } from '../discount';
import { ShoppingCartProtocol } from './shopping-cart-protocol';
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDicount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length == 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi esvaziado!');
    this._items.length = 0;
  }
}
