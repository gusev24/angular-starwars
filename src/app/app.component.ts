import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-angular';

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Hello StarWars!';
    }, 1000);
  }
}
