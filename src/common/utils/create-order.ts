import { OrderRepository } from "./../../infrastructure/repository/order-repository";
import { Order } from "./../../domain/entity/order";
import { Item } from "./../../domain/entity/item";
import { Product } from "./../../domain/entity/product";
import { ProductRepository } from "./../../infrastructure/repository/product.repository";
import { Address } from "./../../domain/entity/address";
import { Customer } from "./../../domain/entity/customer";
import { CustomerRepository } from "../../infrastructure/repository/customer-repository";

export const orderRepository = new OrderRepository();

export async function createOrder1() {
  const customerRepository = new CustomerRepository();
  const customer = new Customer("3", "Customer 12");
  const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "SP");
  customer.address = address;
  await customerRepository.create(customer);

  const productRepository = new ProductRepository();
  const product = new Product("1", "Product 1", 10);
  await productRepository.create(product);

  const ordemItem = new Item("1", product.name, product.price, product.id, 2);

  const order = new Order("2", "3", [ordemItem]);
  await orderRepository.create(order);

  return { order, ordemItem };
}

export async function createOrder2() {
  const customerRepository = new CustomerRepository();
  const customer = new Customer("3", "Customer 12");
  const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "SP");
  customer.address = address;
  await customerRepository.create(customer);

  const productRepository = new ProductRepository();
  const product = new Product("1", "Product 1", 10);
  await productRepository.create(product);

  const ordemItem = new Item("1", product.name, product.price, product.id, 2);

  const order = new Order("2", "3", [ordemItem]);
  await orderRepository.create(order);

  return { order };
}
