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

  unregister(eventName: string, eventHandler: EventHandlerInterface): void {
    if (this._eventHandlers[eventName]) {
      const index = this._eventHandlers[eventName].indexOf(eventHandler);
      if (index !== -1) {
        this._eventHandlers[eventName].splice(index, 1);
      }
    }
  }
  unregisterAll(): void {
    this._eventHandlers = {};
  }

  get eventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this._eventHandlers;
  }
}
