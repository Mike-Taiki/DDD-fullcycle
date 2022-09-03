import { Customer } from "../entity/customer";
import { EventInterface } from "../../@shared";
export class AddressChangedEvent implements EventInterface {
  dataTimeOcurred: Date;
  eventData: Customer;

  constructor(eventData: Customer) {
    this.dataTimeOcurred = new Date();
    this.eventData = eventData;
  }
}
