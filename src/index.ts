import { Subject } from 'rxjs/Subject';

export class AStateService {

  private _state: object = {};
  private _value: object = {};

  set(name: string, value: any): void {
    this._get(name).next(value);
    this._value[name] = value;
  }

  getSubject<T>(name: string): Subject<T> {
    return this._get(name) as Subject<T>;
  }

  getValue<T>(name: string): T {
    return this._value[name] as T;
  }

  private _get(name: string): Subject<any> {

    if (!this._state.hasOwnProperty(name)) {
      this._state[name] = new Subject();
    }

    return this._state[name];
  }
}
