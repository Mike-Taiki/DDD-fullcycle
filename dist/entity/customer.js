"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, name) {
        this._active = false;
        this._id = id;
        this._name = name;
        this.validate();
    }
    get name() {
        return this._name;
    }
    validate() {
        this.validateId(this._id);
        this.validateName(this._name);
    }
    validateId(id) {
        if (id.length === 0) {
            throw new Error("Id is required");
        }
    }
    validateName(name) {
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters");
        }
    }
    changeName(name) {
        this._name = name;
        this.validateName(this._name);
    }
    isActive() {
        return this._active;
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }
    set address(address) {
        this._address = address;
    }
}
exports.Customer = Customer;
