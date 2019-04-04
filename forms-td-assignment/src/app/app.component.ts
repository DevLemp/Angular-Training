import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('f') form: NgForm;
  data = {
    email: '',
    type: '',
    password: ''
  };
  submitted = false;
  defaultOption = '2';

  onSubmit(form: NgForm){
    this.submitted = true;
    this.data.email = form.value.email;
    this.data.type =form.value.type;
    this.data.password = form.value.password;
    console.log(this.data);
  }

}
