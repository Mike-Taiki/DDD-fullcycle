import { logCustomerCreatedHandler } from "./log-when-customer-is-created.handler";
import { EventDispatcher } from "./../../@shared/event-dispatcher";
import { CustomerCreatedEvent } from "./../customer-created.event";
import { Customer } from "./../../../entity/customer";
describe("Customer created handler", () => {
  it("should call log1 and log2 function for execute console.log", () => {
    const customer = new Customer("1", "Pedro");
    const customerCreatedEvent = new CustomerCreatedEvent(customer);
    const eventHandler = new EventDispatcher();
    const logEvent = new logCustomerCreatedHandler();
    const spyHandle = jest.spyOn(logEvent, "handle");
    const spyLog1 = jest.spyOn(logEvent, "log1");
    const spyLog2 = jest.spyOn(logEvent, "log2");

    eventHandler.register("CustomerCreatedEvent", logEvent);
    eventHandler.notify(customerCreatedEvent);

    expect(spyHandle).toHaveBeenCalled();
    expect(spyLog1).toHaveBeenCalled();
    expect(spyLog2).toHaveBeenCalled();
  });
});
