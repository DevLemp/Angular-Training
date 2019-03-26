import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() oddElements = [];
  @Input() evenElements = [];

  onOdd(oddData: {number: string}){
    this.oddElements.push({
      number: oddData.number
    });
  }

  onEven(evenData: {number: string}){
    this.evenElements.push({
      number: evenData.number
    });
  }

}
