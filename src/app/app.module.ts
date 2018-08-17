import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubUserComponent } from './github-user/github-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubSearchComponent,
    GithubUserComponent
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
