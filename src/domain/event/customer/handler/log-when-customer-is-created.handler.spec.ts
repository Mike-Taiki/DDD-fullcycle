import { logCustomerCreatedHandler } from "./log-when-customer-is-created.handler";
import { EventDispatcher } from "./../../@shared/event-dispatcher";
import { CustomerCreatedEvent } from "./../customer-created.event";
import { Customer } from "./../../../entity/customer";
describe("Customer created handler", () => {
  it("should call log1 and log2 function for execute console.log", () => {
    const customer = new Customer("1", "Pedro");
    const customerCreatedEvent = new CustomerCreatedEvent(customer);
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new logCustomerCreatedHandler();
    const spyHandle = jest.spyOn(eventHandler, "handle");
    const spyLog1 = jest.spyOn(eventHandler, "log1");
    const spyLog2 = jest.spyOn(eventHandler, "log2");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler);
    eventDispatcher.notify(customerCreatedEvent);

    expect(spyHandle).toHaveBeenCalled();
    expect(spyLog1).toHaveBeenCalled();
    expect(spyLog2).toHaveBeenCalled();
  });
});
