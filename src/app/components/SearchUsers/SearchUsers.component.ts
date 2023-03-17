import { GitHubAPIService } from './../../services/git-hub-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-SearchUsers',
  templateUrl: './SearchUsers.component.html',
  styleUrls: ['./SearchUsers.component.scss']
})
export class SearchUsersComponent {

  selectedValue = null;
  listOfOption: Array<{ value: string; text: string }> = [];
  nzFilterOption = (): boolean => true;
  timeout: ReturnType<typeof setTimeout> | null = null

  constructor(private githubAPI: GitHubAPIService) { }

  search(value: string): void {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null;
    }

    if (value.length > 0) {
      this.timeout = setTimeout(() => {
        this.githubAPI.fetchUsers(value).subscribe(data => {
          const listOfOption: Array<{ value: string; text: string }> = [];
          data.items.forEach((item: any) => {
            listOfOption.push({
              value: item.login,
              text: item.login
            });
          });
          this.listOfOption = listOfOption
        })
      }, 500);
    }
  }
}
