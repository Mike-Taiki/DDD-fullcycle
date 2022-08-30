describe("doman events tests", () => {
  it("should register an event  handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new sendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(
      eventDispatcher.getEventHandlers["ProductcreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductcreatedEvent"].length).toBe(
      1
    );
  });
});
