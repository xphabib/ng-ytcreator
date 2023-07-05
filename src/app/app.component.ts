import { Component, OnInit } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'homes';

  constructor(private homeService: HomeService){
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.homeService.getUsers()
  }

  addPost() {
    this.homeService.addPost()
  }
}
