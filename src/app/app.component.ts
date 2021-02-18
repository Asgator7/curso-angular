import { Component } from '@angular/core';

@Component({
  // Nomeia este component para ser chamado em outros lugares
  selector: 'app-root',
  // Referencia o HTML a ser chamado para este component 
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  ` ,
  // Referencia o CSS a ser chamado para este component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fundamentals';
}
