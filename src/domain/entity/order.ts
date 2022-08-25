import { Item } from "./item";

export class Order {
  private _id: string;
  private _customerId: string;
  private _items: Item[];
  private _total: number;

  constructor(id: string, customerId: string, items: Item[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is empty");
    }

    if (this._customerId.length === 0) {
      throw new Error("CustomerId is required");
    }

    if (this._items.length === 0) {
      throw new Error("Item qtd must be greater than 0");
    }

    if (this._items.some((item) => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }

    return true;
  }

  total() {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}