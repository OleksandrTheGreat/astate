import { Subject } from '../Subject/Subject';

export class StateService {

  private _state: object = {};

  set<T>(name: string, value: T): void {
    this.getSubject<T>(name).publish(value);
  }

  setAsync<T>(name: string, value: T, timeout: number = 100): void {
    this.getSubject<T>(name).publishAsync(value, timeout);
  }

  getSubject<T>(name: string): Subject<T> {

    if (!this._state.hasOwnProperty(name)) 
      this._state[name] = new Subject<T>();

    return this._state[name] as Subject<T>;
  }

  getValue<T>(name: string): T {
    return this.getSubject<T>(name).value;
  }
}
