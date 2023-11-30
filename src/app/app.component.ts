import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarComponente = false;

  adicionarComponente() {
    this.mostrarComponente = true;
  }
  
  title = 'teste-agenda-1.0';
}
