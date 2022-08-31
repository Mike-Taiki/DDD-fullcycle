import { Customer } from "../../entity";
import { EventInterface } from "./../@shared/event.interface";

export class CustomerCreatedEvent implements EventInterface {
  dataTimeOcurred: Date;
  eventData: Customer;

  constructor(eventData: Customer) {
    this.dataTimeOcurred = new Date();
    this.eventData = eventData;
  }
}
