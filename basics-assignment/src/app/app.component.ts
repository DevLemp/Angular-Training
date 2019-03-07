import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hidden = true;
  pass = [];
  constructor(){

  }

  toggle(){
    this.hidden = !this.hidden;
    this.pass.push(this.pass.length + 1);
  }

}


