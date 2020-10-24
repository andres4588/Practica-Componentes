import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  impares: number[] = [];
  pares: number[] = [];
  llamada(event) {
    if (event.contador % 2 != 0) {
      this.impares.push(event.contador);
    } else {
      this.pares.push(event.contador);
    }
  }
}
