import { GitHubAPIService } from './../../services/git-hub-api.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserData } from 'src/app/commons/types';

@Component({
  selector: 'app-SearchUsers',
  templateUrl: './SearchUsers.component.html',
  styleUrls: ['./SearchUsers.component.scss'],
})
export class SearchUsersComponent {
  @Output() onSelectUser = new EventEmitter<UserData>();

  selectedValue = null;
  listOfOption: Array<{ value: string; text: string }> = [];
  nzFilterOption = (): boolean => true;
  timeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private githubAPI: GitHubAPIService) {}

  handleSelect(value: string): void {
    this.githubAPI.fetchUser(value).subscribe((data: UserData) => {
      this.onSelectUser.emit(data);
    });
  }

  search(value: string): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    if (value.length > 0) {
      this.timeout = setTimeout(() => {
        this.githubAPI.fetchUsers(value).subscribe((data) => {
          const listOfOption: Array<{ value: string; text: string }> = [];
          data.items.forEach((item: any) => {
            listOfOption.push({
              value: item.login,
              text: item.login,
            });
          });
          this.listOfOption = listOfOption;
        });
      }, 500);
    }
  }
}
