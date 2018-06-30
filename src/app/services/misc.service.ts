import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscService {
  private Loading = new BehaviorSubject(false);
  private Error = new BehaviorSubject(false);

  public loading = this.Loading.asObservable();
  public error = this.Error.asObservable();

  constructor() { }

  updateLoading(loading) {
    this.Loading.next(loading);
  }

  updateError(error) {
    this.Error.next(error);
  }
}
