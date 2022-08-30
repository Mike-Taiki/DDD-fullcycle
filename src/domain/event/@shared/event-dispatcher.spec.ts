import { sendEmailWhenProductIsCreatedHandler } from "./../product/handler/send-email-when-product-is-created.handler";
import { EventDispatcher } from "./event-dispatcher";
describe("doman events tests", () => {
  it("should register an event  handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new sendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(eventDispatcher.eventHandlers["ProductCreatedEvent"]).toBeDefined();
    expect(eventDispatcher.eventHandlers["ProductCreatedEvent"].length).toBe(1);
  });
});
