"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    validate() {
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
exports.Order = Order;
