import { Address } from "../value-object/address";

export class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get id(): string {
    return this._id;
  }

  validate() {
    this.validateId(this._id);
    this.validateName(this._name);
  }

  validateId(id: string) {
    if (id.length === 0) {
      throw new Error("Id is required");
    }
  }

  validateName(name: string) {
    if (name.length < 3) {
      throw new Error("Name must be at least 3 characters");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validateName(this._name);
  }

  isActive(): boolean {
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

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set address(address: Address) {
    this._address = address;
  }

  get address() {
    return this._address;
  }
}
