import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cursoangular';
  teste = ['teste1', 'teste2', 'teste3']

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}

