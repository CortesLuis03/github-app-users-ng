import { GitHubAPIService } from './services/git-hub-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUsersComponent } from './components/SearchUsers/SearchUsers.component';
import { UserInfoComponent } from './components/UserInfo/UserInfo.component';
import { UserInfoDetailComponent } from './components/UserInfoDetail/UserInfoDetail.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    UserInfoComponent,
    UserInfoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule,
    NgZorroAntdModule
    
  ],
  providers: [
    GitHubAPIService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
