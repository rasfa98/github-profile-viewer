import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedUserComponent } from './components/detailed-user/detailed-user.component';

import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    LoaderComponent,
    ErrorMessageComponent,
    SearchResultsComponent,
    DetailedUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
