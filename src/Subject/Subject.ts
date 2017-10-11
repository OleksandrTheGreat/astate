import { Guid } from '../Tools/Guid';
import { Observer } from './Observer';

export class Subject<T> {

  private _observers: Array<Observer> = [];
  private _value: T;

  get value(): T {
    return this._value;
  };

  subscribe(handler: (value: T) => void): string {

    let observer = new Observer(Guid.New(), handler);

    this._observers.push(observer);

    return observer.id;
  }

  publish(value: T): void {

    let
      len = this._observers.length,
      i = 0;

    this._value = value;

    for (i = 0; i < len; i++)
      this._observers[i].handler(value);
  }

  publishAsync(value: T, timeout: number = 10): void {

    let
      len = this._observers.length,
      i = 0;

    this._value = value;

    for (i = 0; i < len; i++){
      let handler = this._observers[i].handler;
      setTimeout(() => handler(value), timeout);
    }
  }

  unsubscribe(subscription: string): void {
    this._observers = this._observers.filter(x => x.id !== subscription);
  }
}
