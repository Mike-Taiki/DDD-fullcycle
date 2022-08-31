import { CustomerCreatedEvent } from "./../customer-created.event";
import { EventHandlerInterface } from "./../../@shared/event-handler.interface";
export class logCustomerCreatedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    this.log1();
    this.log2();
  }

  log1() {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }

  log2() {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
