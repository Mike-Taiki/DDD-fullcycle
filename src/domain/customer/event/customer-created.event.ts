import { Customer } from "../../customer";
import { EventInterface } from "../../@shared";

export class CustomerCreatedEvent implements EventInterface {
  dataTimeOcurred: Date;
  eventData: Customer;

  constructor(eventData: Customer) {
    this.dataTimeOcurred = new Date();
    this.eventData = eventData;
  }
}
