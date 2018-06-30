import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedUserComponent } from './components/detailed-user/detailed-user.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { GithubService } from './services/github.service';
import { MiscService } from './services/misc.service';
import { ErrorMessageComponent } from './components/error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    SearchResultsComponent,
    DetailedUserComponent,
    LoadingSpinnerComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService, MiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
