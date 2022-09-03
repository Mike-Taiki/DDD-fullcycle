import { Item } from "./item";
import { Order } from "./order";
describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Order("", "123", [])).toThrowError("Id is empty");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => new Order("123", "", [])).toThrowError(
      "CustomerId is required"
    );
  });

  it("should throw error when customerId is empty", () => {
    expect(() => new Order("123", "123", [])).toThrowError(
      "Item qtd must be greater than 0"
    );
  });

  it("should calculate total", () => {
    const item1 = new Item("34", "Item 1", 100, "p1", 2);
    const item2 = new Item("35", "Item 2", 200, "p2", 2);
    const order = new Order("o1", "c1", [item1, item2]);

    const total = order.total();
    expect(total).toBe(600);
  });

  it("should throw error if the qtd is less or equal to 0", () => {
    expect(() => {
      const item = new Item("34", "Item 1", 100, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
