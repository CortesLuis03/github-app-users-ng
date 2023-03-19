import { Component } from '@angular/core';
import { UserData } from './commons/types';
import { UserDataService } from './services/user-data-service.service';

@Component({
  selector: 'app-root',
  template: `<nz-layout>
    <div nz-row [nzGutter]="[12, 12]">
      <div nz-col nzSpan="24">
        <app-SearchUsers
          (onSelectUser)="onSelectUser($event)"
        ></app-SearchUsers>
      </div>
      <div nz-col nzSpan="10">
        <app-UserInfo></app-UserInfo>
      </div>
      <div nz-col nzSpan="14"><app-UserInfoDetail></app-UserInfoDetail></div>
    </div>
  </nz-layout>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'github-app-users-ng';
  userData: UserData = {};

  constructor(private dataService: UserDataService) {}

  onSelectUser(userData: UserData) {
    this.userData = userData;
    this.dataService.updateData(userData);
  }
}
