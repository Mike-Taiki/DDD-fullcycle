import { OrderModel } from "./../db/sequelize/model/order.model";
import { Order } from "./../../domain/entity/order";
import { OrderItemModel } from "../db/sequelize/model/order-item.model";
import { OrderRepositoryInterface } from "../../domain/repository/order-repository.interface";

export class OrderRepository {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
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
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async find(id: string): Promise<OrderModel> {
    const order = await OrderModel.findOne({
      where: { id },
      include: ["items"],
    });

    return order;
  }

  async findAll(id: string) {}

  async update() {}
}
