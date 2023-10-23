import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentPage: string =
    window.location.href.split('/')[3] === ''
      ? 'home'
      : window.location.href.split('/')[3];

  navbarButtons: any[] = [null, 'noticias', 'sobre'];
}
