import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: {
    email: '',
    type: '',
    password: ''
  }

  onSubmit(f: NgForm){
    
  }

}
