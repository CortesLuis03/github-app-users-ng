import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitHubAPIService {

  private fetchUsersURL: string = `https://api.github.com/search/users?q=`;
  private timeout: ReturnType<typeof setTimeout> | null = null

  constructor(private _http: HttpClient) {

  }

  fetchUsers(query: string) {
    return this._http.get<any>(`${this.fetchUsersURL}${query}`);
  }
}
