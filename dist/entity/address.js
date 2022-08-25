"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(street, number, state, zip) {
        this.street = street;
        this.number = number;
        this.state = state;
        this.zip = zip;
        this._street = street;
        this._number = number;
        this._state = state;
        this._zip = zip;
        this.validate(street, number, state, zip);
    }
    toString() {
        return `${this._street}, ${this._number}, ${this._state} ${this._zip}`;
    }
    validate(street, number, state, zip) {
        this.validateStreet(street);
        this.validateNumber(number);
        this.validateState(state);
        this.validateZip(zip);
    }
    validateStreet(street) {
        if (street.length < 5) {
            throw new Error("Street must be at least 5 characters");
        }
    }
    validateNumber(number) {
        if (!number) {
            throw new Error("Number is required");
        }
    }
    validateState(state) {
        if (state.length !== 2) {
            throw new Error("State must be 2 characters");
        }
    }
    validateZip(zip) {
        if (zip.length !== 5) {
            throw new Error("Zip must be 5 characters");
        }
    }
}
exports.Address = Address;
