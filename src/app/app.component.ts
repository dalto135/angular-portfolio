import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>About Me</a></li>
      <li><a class='nav-link' routerLink='/products'>Projects</a></li>
      <li><a class='nav-link' routerLink='/contact-me'>Contact Me</a></li>
      <li><a class='nav-link' href='https://drive.google.com/file/d/19fEXc-UwH_rd4qKfTBPd_yd3_9uusd6c/view?usp=sharing' target='_blank'>Resume</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Dalton Wilkins';
}