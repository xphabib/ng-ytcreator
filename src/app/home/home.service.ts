import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

   getUsers() {
    this.httpClient.get(`${this.BASE_URL}/users`).subscribe(data => {
      console.log(data);
    });
  }

  addPost() {
    let post = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    return this.httpClient.post(`${this.BASE_URL}/posts`, post)
  }

  getUserss(): number {
    return 2
  }
}
