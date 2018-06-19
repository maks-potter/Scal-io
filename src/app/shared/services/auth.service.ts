import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedInStatus);

  constructor() {
  }

  get status(): boolean {
    return this.isLoggedInStatus;
  }

  set status(_status: boolean) {
    this.isLoggedInStatus = _status;
    this.setLoggedInStatus(_status);
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
