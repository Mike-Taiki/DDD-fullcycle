import { EventHandlerInterface } from "./event-handler.interface";
import { EventInterface } from "./event.interface";
import { EventDispatcherInterface } from "./event-dispatcher.interface";

export class EventDispatcher implements EventDispatcherInterface {
  private _eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  notify(event: EventInterface): void {}
  register(eventName: string, eventHandler: EventHandlerInterface): void {
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(eventHandler);
  }
  unregister(eventName: string, eventHandler: EventDispatcherInterface): void {}
  unregisterAll(): void {}

  get eventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this._eventHandlers;
  }
}
