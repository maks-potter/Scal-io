import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/response.model';
import {LOGIN_DATA} from '../mocks/login-data.mock';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private environment = environment;
  private loginData = LOGIN_DATA;

  constructor(private httpClient: HttpClient) {
  }

  onLogin(): Observable<ServerResponse> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new HttpParams()
      .set('login', this.loginData.login)
      .set('password', this.loginData.password);
    return this.httpClient.post<ServerResponse>(
      `${this.environment.endpoint}/login`,
      body.toString(),
      {
        headers
      }
    );
  }
}
