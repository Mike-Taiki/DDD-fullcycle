import { Address } from "./../../domain/entity/address";
import { Customer } from "../../domain/entity";
import { CustomerRepositoryInterface } from "../../domain/repository/customer-repository.interface";
import { CustomerModel } from "../db/sequelize/model/customer.model";

export class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      state: entity.address.state,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints,
    });
  }

  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        id: entity.id,
        name: entity.name,
        street: entity.address.street,
        number: entity.address.number,
        zipcode: entity.address.zip,
        city: entity.address.city,
        active: entity.isActive(),
        rewardPoints: entity.rewardPoints,
      },
      { where: { id: entity.id } }
    );
  }

  async find(id: string): Promise<Customer> {
    let customerModel;

    try {
      customerModel = await CustomerModel.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Customer not found");
    }

    const customer = new Customer(id, customerModel.name);
    const address = new Address(
      customerModel.street,
      customerModel.number,
      customerModel.state,
      customerModel.zipcode,
      customerModel.city
    );
    customer.address = address;
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    const customerModels = await CustomerModel.findAll();
    const customers = customerModels.map((customerModel) => {
      const customer = new Customer(customerModel?.id, customerModel?.name);
      customer.addRewardPoints(customerModel.rewardPoints);
      customer.address = new Address(
        customerModel?.street,
        customerModel?.number,
        customerModel?.state,
        customerModel?.zipcode,
        customerModel?.city
      );
      if (customerModel.active) {
        customer.activate();
      }
      return customer;
    });

    return customers;
  }
}