import { CustomerCreatedEvent } from "../../../customer/event/customer-created.event";
import { EventHandlerInterface } from "../../../@shared";
export class EnviaConsoleLog2Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
