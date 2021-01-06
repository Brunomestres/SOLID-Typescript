import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { ShoppingCart } from './interfaces/shopping-cart';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';
export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDicount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente é ${this.customer.getName()} ${this.customer.getIDN()}`,
    );
  }
}
