import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './entities/interfaces/shopping-cart';
import { Product } from './entities/product';
import { FiftyPercentDiscount, TenPercentDiscount } from './entities/discount';

// const fiftyPercent = new FiftyPercentDiscount();
const tenPercent = new TenPercentDiscount();

const shoppingCart = new ShoppingCart(tenPercent);

const message = new Message();
const persistency = new Persistency();

const order = new Order(shoppingCart, message, persistency);

shoppingCart.addItem(new Product('camisa', 15.9));
shoppingCart.addItem(new Product('Bermuda', 85.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
order.checkout();
