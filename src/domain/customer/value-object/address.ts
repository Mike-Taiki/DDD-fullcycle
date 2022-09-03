export class Address {
  private _street: string;
  private _number: number;
  private _state: string;
  private _zip: string;
  private _city: string;

  constructor(
    street: string,
    number: number,
    state: string,
    zip: string,
    city: string
  ) {
    this._street = street;
    this._number = number;
    this._state = state;
    this._zip = zip;
    this._city = city;
    this.validate(street, number, state, zip, city);
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._state} ${this._zip}`;
  }

  validate(
    street: string,
    number: number,
    state: string,
    zip: string,
    city: string
  ) {
    this.validateStreet(street);
    this.validateNumber(number);
    this.validateState(state);
    this.validateZip(zip);
    this.validateCity(city);
  }

  validateStreet(street: string) {
    if (street.length < 5) {
      throw new Error("Street must be at least 5 characters");
    }
  }

  validateNumber(number: number) {
    if (!number) {
      throw new Error("Number is required");
    }
  }

  validateState(state: string) {
    if (state.length < 2) {
      throw new Error("State must be at least 2 characters");
    }
  }

  validateZip(zip: string) {
    if (zip.length < 5) {
      throw new Error("Zip must be 5 characters");
    }
  }

  validateCity(city: string) {
    if (city.length < 2) {
      throw new Error("City must be at least 2 characters");
    }
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get zip(): string {
    return this._zip;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }
}
