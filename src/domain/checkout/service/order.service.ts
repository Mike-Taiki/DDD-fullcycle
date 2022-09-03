import { Item } from "../entity/item";
import { Order } from "../entity/order";
import { Customer } from "../../customer";

export class OrderService {
  public static sum(orders: Order[]): number {
    return orders.reduce((total, order) => {
      return total + order.total();
    }, 0);
  }

  public static placeOrder(customer: Customer, items: Item[]): Order {
    if (items.length === 0) {
      throw new Error("Oder must have at least one item");
    }

    const order = new Order("id", customer.id, items);
    customer.addRewardPoints(order.total() / 2);
    return order;
  }
}
