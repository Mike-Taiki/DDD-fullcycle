"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("./entity");
let customer = new entity_1.Customer("123", "Michael Gomes");
const address = new entity_1.Address("Rua dois", 2, "São Paulo", "08050490");
customer.address = address;
customer.activate();
//ID
// Objeto - Entidade
const item1 = new entity_1.Item("1", "Coca-cola", 1.5);
const item2 = new entity_1.Item("2", "Pepsi", 0.75);
const order = new entity_1.Order("1", "123", [item1, item2]);
