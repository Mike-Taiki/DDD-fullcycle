import { Customer } from "../../";
import { CustomerCreatedEvent } from "../../event/customer-created.event";
import { EventHandlerInterface } from "../../../@shared";
export class logAddressChangedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    this.logAddress(event.eventData);
  }

  logAddress({ id, name, address }: Customer) {
    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${address}`
    );
  }
}
