import { UserData } from './../../commons/types/index';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service.service';
import { Options } from './types';

@Component({
  selector: 'app-UserInfo',
  templateUrl: './UserInfo.component.html',
  styleUrls: ['./UserInfo.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userData: UserData | undefined;
  options: Array<Options> = [];

  constructor(private dataService: UserDataService) {}

  ngOnInit() {
    this.dataService.data.subscribe((data) => {
      this.userData = data;
      if (this.userData?.bio) {
        this.options.push({ type: 'bio', value: this.userData.bio });
      }
      if (this.userData?.company) {
        this.options.push({ type: 'company', value: this.userData.company });
      }
      if (this.userData?.location) {
        this.options.push({
          type: 'location',
          value: this.userData.location,
        });
      }
    });
  }
}
