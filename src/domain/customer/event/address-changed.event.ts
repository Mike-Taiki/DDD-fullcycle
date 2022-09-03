import { Customer } from "../../entity/customer";
import { EventInterface } from "../../@shared/event.interface";
export class AddressChangedEvent implements EventInterface {
  dataTimeOcurred: Date;
  eventData: Customer;

  constructor(eventData: Customer) {
    this.dataTimeOcurred = new Date();
    this.eventData = eventData;
  }
}
