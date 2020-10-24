import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFire = new EventEmitter <{contador: number}>();
  interval;
  ultimo=0;

  constructor() { }

  ngOnInit(): void {
  }



  startGame(): void{
    this.interval = setInterval(() =>
    {
      this.intervalFire.emit(
        {
          contador: this.ultimo ++
        } );
    }, 1000);

  }

  stopGame() {
    clearInterval(this.interval)
  }

}
