import { AddressChangedEvent } from "./address-changed.event";
import { EventDispatcher } from "../../@shared";
import { Address } from "../value-object/address";
import { logAddressChangedHandler } from "./handler/log-when-address-is-changed";
import { Customer } from "../";
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

    const spyHandle = jest.spyOn(eventHandler, "handle");
    const spyLogAddress = jest.spyOn(eventHandler, "logAddress");

    eventDispatcher.register("AddressChangedEvent", eventHandler);
    eventDispatcher.notify(addressChangedEvent);

    expect(spyHandle).toHaveBeenCalled();
    expect(spyLogAddress).toHaveBeenCalledWith(customer);
  });
});
