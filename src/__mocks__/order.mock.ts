import { Item } from "./../domain/entity/item";
import { Order } from "./../domain/entity/order";

export const orderMock = (order: Order, ordemItem: Item) => ({
  id: order.id,
  customer_id: order.customerId,
  total: order.total(),
  items: [
    {
      id: ordemItem.id,
      name: ordemItem.name,
      price: ordemItem.price,
      quantity: ordemItem.quantity,
      productId: ordemItem.productId,
    },
  ],
});
