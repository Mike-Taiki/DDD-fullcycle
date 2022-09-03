import { Sequelize } from "sequelize-typescript";
import { CustomerModel } from "../../../infrastructure/customer/repository/sequelize/customer.model";
import {
  createCustomer,
  createAddress,
  customerRepository,
} from "../../../common/utils";

describe("Customer repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a customer", async () => {
    const customer = await createCustomer("1", "Customer 1");
    const address = await createAddress("Street 1", 1, "SP", "08050", "City1");
    customer.address = address;
    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Customer 1",
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: address.street,
      state: address.state,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
    });
  });

  it("should update a customer", async () => {
    const customer = await createCustomer("1", "Customer 1");
    const address = await createAddress("Street 1", 1, "SP", "08050", "City1");
    customer.address = address;
    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Customer 1",
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: address.street,
      state: address.state,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
    });

    customer.changeName("Customer 2");

    await customerRepository.update(customer);

    const customerModel2 = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel2?.toJSON()).toStrictEqual({
      id: "1",
      name: "Customer 2",
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: address.street,
      number: address.number,
      state: address.state,
      zipcode: address.zip,
      city: address.city,
    });
  });

  it("should find a customer", async () => {
    const customer = await createCustomer("1", "Customer 1");
    const address = await createAddress("Street 1", 1, "SP", "08050", "City1");
    customer.address = address;
    await customerRepository.create(customer);

    const foundCustomer = await customerRepository.find(customer.id);
    expect(customer).toStrictEqual(foundCustomer);
  });

  it("should find all customers", async () => {
    const customer1 = await createCustomer("1", "Customer 1");
    const address = await createAddress("Street 1", 1, "SP", "08050", "City1");
    customer1.address = address;
    await customerRepository.create(customer1);

    const customer2 = await createCustomer("2", "Customer 2");
    const address2 = await createAddress("Street 1", 1, "SP", "08050", "City1");
    customer2.address = address2;
    await customerRepository.create(customer2);

    const foundCustomers = await customerRepository.findAll();
    const customers = [customer1, customer2];

    expect(customers).toEqual(foundCustomers);
  });
});
