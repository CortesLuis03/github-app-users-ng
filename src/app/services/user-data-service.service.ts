import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../commons/types';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _data = new BehaviorSubject<UserData>({});

  get data() {
    return this._data.asObservable();
  }

  updateData(data: UserData) {
    this._data.next(data);
  }
}
