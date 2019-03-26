import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('oddElmntCreated') oEvent = new EventEmitter<{number: number}>();
  @Output('evenElmntCreated') eEvent = new EventEmitter<{number: number}>();
  i = 0;
  ref;
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.ref = setInterval(() =>{
      if(this.i % 2 === 0){
        this.eEvent.emit({number: this.i});
      }else{
        this.oEvent.emit({number: this.i});
      }
      this.i++;
    }, 1000);
  }

  stopGame(){
    clearInterval(this.ref);
  }
  
    
}
