import { OrderRepositoryInterface } from "./order-repository.interface";
import { OrderModel } from "../../../infrastructure/order/repository/sequelize/order.model";
import { Order } from "../entity/order";
import { Item } from "../../checkout";
import { OrderItemModel } from "../../../infrastructure/order/repository/sequelize/order-item.model";

export class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    const order = {
      id: entity.id,
      customer_id: entity.customerId,
      total: entity.total(),
      items: entity.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        product_id: item.productId,
        quantity: item.quantity,
      })),
    };
    await OrderModel.create(order, {
      include: [{ model: OrderItemModel }],
    });
  }

  async find(id: string): Promise<Order> {
    const orderModel = await OrderModel.findOne({
      where: { id },
      include: ["items"],
    });

    let orderItem: Item[] = [];

    orderModel.items.forEach((item) => {
      orderItem.push(
        new Item(item.id, item.name, item.price, item.product_id, item.quantity)
      );
    });

    return new Order(orderModel.id, orderModel.customer_id, orderItem);
  }

  async findAll(): Promise<Order[]> {
    const ordersModel = await OrderModel.findAll({ include: ["items"] });

    const orders = ordersModel.map((order) => {
      const orderItems: Item[] = [];
      order.items.forEach((item) => {
        orderItems.push(
          new Item(item.id, item.name, item.price, item.id, item.quantity)
        );
      });
      return new Order(order.id, order.customer_id, orderItems);
    });

    return orders;
  }

  async update(entity: Order) {
    await OrderModel.update(
      {
        id: entity.id,
        customer_id: entity.customerId,
        items: entity.items,
        total: entity.total(),
      },
      { where: { id: entity.id } }
    );
  }
}
