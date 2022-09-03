import { Item, Order } from "./domain/checkout";
import { Address, Customer } from "./domain/customer";

let customer = new Customer("123", "Michael Gomes");
const address = new Address("Rua dois", 2, "São Paulo", "08050490", "SP");
customer.address = address;
customer.activate();
//ID

// Objeto - Entidade
const item1 = new Item("1", "Coca-cola", 1.5, "12", 2);
const item2 = new Item("2", "Pepsi", 0.75, "13", 3);
const order = new Order("1", "123", [item1, item2]);
