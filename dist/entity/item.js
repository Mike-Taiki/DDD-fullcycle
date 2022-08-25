"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(id, name, price, productId, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
    }
    get price() {
        return this._price * this._quantity;
    }
    get quantity() {
        return this._quantity;
    }
}
exports.Item = Item;
