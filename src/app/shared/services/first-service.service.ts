import { Injectable } from '@angular/core';
import { BaseHttp } from 'src/app/shared/services/basehttp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FirstServiceService extends BaseHttp {
  constructor(public http: HttpClient) {
    super(http, 'students');
  }
}