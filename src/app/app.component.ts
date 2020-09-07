import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit{
  title : string;

  ngOnInit() {
    // calling a service to get the data
    this.title = 'data binding on init';
  }
}
