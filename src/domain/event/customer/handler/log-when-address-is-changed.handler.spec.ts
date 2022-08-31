import { AddressChangedEvent } from "../address-changed.event";
import { EventDispatcher } from "../../@shared/event-dispatcher";
import { Address } from "../../../entity/address";
import { logAddressChangedHandler } from "./log-when-address-is-changed.handler";
import { Customer } from "../../../entity/customer";
describe("Address changed handler", () => {
  it("should log address", () => {
    const customer = new Customer("2", "Rafaela");
    const address = new Address(
      "Rua Marapá",
      2,
      "São Paulo",
      "06080-950",
      "SP"
    );
    customer.address = address;
    const eventDispatcher = new EventDispatcher();
    const addressChangedEvent = new AddressChangedEvent(customer);
    const eventHandler = new logAddressChangedHandler();

    eventDispatcher.register("AddressChangedEvent", eventHandler);
    eventDispatcher.notify(addressChangedEvent);
    const spyHandle = jest.spyOn(eventHandler, "handle");
    const spyLogAddress = jest.spyOn(eventHandler, "logAddress");

    expect(spyHandle).toHaveBeenCalled();
    expect(spyLogAddress).toHaveBeenCalled();
  });
});
