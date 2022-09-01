import { EnviaConsoleLog1Handler } from "./handler/envia-console-log1-handler";
import { EnviaConsoleLog2Handler } from "./handler/envia-console-log2-handler";
import { EventDispatcher } from "../@shared/event-dispatcher";
import { CustomerCreatedEvent } from "./customer-created.event";
import { Customer } from "../../entity/customer";
describe("Customer created handler", () => {
  it("should call function for execute console.log", () => {
    const customer = new Customer("1", "Pedro");
    const customerCreatedEvent = new CustomerCreatedEvent(customer);
    const eventDispatcher = new EventDispatcher();
    const eventHandler1 = new EnviaConsoleLog1Handler();
    const eventHandler2 = new EnviaConsoleLog2Handler();
    const spyHandle1 = jest.spyOn(eventHandler1, "handle");
    const spyHandle2 = jest.spyOn(eventHandler2, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
    eventDispatcher.notify(customerCreatedEvent);

    expect(spyHandle1).toHaveBeenCalled();
    expect(spyHandle2).toHaveBeenCalled();
  });
});
