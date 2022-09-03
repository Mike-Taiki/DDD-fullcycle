import { Order } from "../../domain/checkout/entity/order";
import { Item } from "../../domain/checkout";
import { Product } from "../../domain/product/entity/product";
import { Address } from "../../domain/customer/value-object/address";
import { Customer } from "../../domain/customer";
import { CustomerRepository } from "../../domain/customer/repository/customer-repository";
import { OrderRepository } from "../../domain/checkout/repository/order-repository";
import { ProductRepository } from "../../domain/product/repository/product.repository";

export const orderRepository = new OrderRepository();

export const customerRepository = new CustomerRepository();

export const productRepository = new ProductRepository();

export async function createOrder1() {
  const customer = new Customer("3", "Customer 12");
  const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "SP");
  customer.address = address;
  await customerRepository.create(customer);

  const product = new Product("1", "Product 1", 10);
  await productRepository.create(product);

  const ordemItem = new Item("1", product.name, product.price, product.id, 2);

  const order = new Order("2", "3", [ordemItem]);
  await orderRepository.create(order);

  return { order, ordemItem };
}

export async function createOrder2() {
  const customer = new Customer("4", "Customer 3");
  const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "SP");
  customer.address = address;
  await customerRepository.create(customer);

  const product = new Product("2", "Product 1", 10);
  await productRepository.create(product);

  const ordemItem = new Item("2", product.name, product.price, product.id, 2);

  const order = new Order("3", "4", [ordemItem]);
  await orderRepository.create(order);

  return { order, ordemItem };
}
