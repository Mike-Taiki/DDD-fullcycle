import { orderRepository } from "./../../common/utils/create-order";
import { orderMock } from "./../../__mocks__/order.mock";
import { OrderModel } from "./../db/sequelize/model/order.model";
import { Sequelize } from "sequelize-typescript";
import { CustomerModel } from "../db/sequelize/model/customer.model";
import { OrderItemModel } from "../db/sequelize/model/order-item.model";
import ProductModel from "../db/sequelize/model/product.model";
import { createOrder1, createOrder2 } from "../../common/utils/create-order";

describe("Order repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel,
    ]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a new order", async () => {
    const { order, ordemItem } = await createOrder1();

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"],
    });

    expect(orderModel?.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: order.customerId,
      total: order.total(),
      items: [
        {
          id: ordemItem.id,
          name: ordemItem.name,
          price: ordemItem.price,
          quantity: ordemItem.quantity,
          order_id: order.id,
          product_id: ordemItem.productId,
        },
      ],
    });
  });

  it("should find a order", async () => {
    const { order } = await createOrder1();
    const foundOrder = await orderRepository.find(order.id);
    expect(foundOrder).toStrictEqual(order);
  });

  // it("should find all orders", async () => {
  //   const { order, ordemItem } = await createOrder1();
  //   const foundOrders = await orderRepository.findAll();
  //   const orders = orderMock(order, ordemItem);
  //   expect(foundOrders).toEqual(orders);
  // });
});
