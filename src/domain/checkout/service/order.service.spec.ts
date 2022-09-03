import { Order, Item } from "../";
import { Customer } from "../../customer";
import { OrderService } from "./order.service";
describe("Order service unit tests", () => {
  it("should place an order", () => {
    const customer = new Customer("c1", "Customer1");
    const item1 = new Item("i1", "Item1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);
    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("should sum the prices of all products", () => {
    const item1 = new Item("item1", "Item 1", 100, "p1", 1);
    const item2 = new Item("item2", "Item 2", 300, "p2", 1);

    const order1 = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);

    const total = OrderService.sum([order1, order2]);

    expect(total).toBe(400);
  });
});
