import { Address } from "./../../domain/entity/address";
import { Customer } from "../../domain/entity";
import { CustomerRepository } from "../../infrastructure/repository/customer-repository";

export const customerRepository = new CustomerRepository();

export async function createCustomer(
  id: string,
  name: string
): Promise<Customer> {
  const customer = new Customer(id, name);
  return customer;
}

export async function createAddress(
  street: string,
  number: number,
  state: string,
  zip: string,
  city: string
): Promise<Address> {
  const address = new Address(street, number, state, zip, city);
  return address;
}
