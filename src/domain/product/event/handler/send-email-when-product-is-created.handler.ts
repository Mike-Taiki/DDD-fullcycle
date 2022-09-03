import { ProductCreatedEvent } from "../product-created.event";
import { EventHandlerInterface } from "../../../@shared";
export class sendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log("Sending email to ........");
  }
}
