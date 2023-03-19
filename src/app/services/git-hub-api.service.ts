import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../commons/types';

@Injectable({
  providedIn: 'root',
})
export class GitHubAPIService {
  private fetchUsersURL: string = `https://api.github.com/search/users?q=`;
  private fetchUserURL: string = `https://api.github.com/users/`;

  constructor(private _http: HttpClient) {}

  fetchUsers(query: string) {
    return this._http.get<any>(`${this.fetchUsersURL}${query}`);
  }

  fetchUser(username: string) {
    return this._http.get<UserData>(`${this.fetchUserURL}${username}`);
  }
}
