import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea } from "@activity-ideas-app/api-interfaces";
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";


const BASE_URL = 'https://www.boredapi.com/api/';
const MODEL = 'activity';



@Injectable({
  providedIn: 'root'
})
export class IdeasService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Idea>(this.getUrl()).pipe(
      tap((res) => console.log(res)),
      map((response) => response.key)
    );
  };

  getOne(id: string): Observable<Idea> {
    return this.http.get<Idea>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}