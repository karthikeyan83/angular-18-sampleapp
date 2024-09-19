import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <nav>
  <ul>
    <li><a routerLink="/login" routerLinkActive="active" ariaCurrentWhenActive="page">Login</a></li>
    <li><a routerLink="/signup" routerLinkActive="active" ariaCurrentWhenActive="page">Signup</a></li>
    <li><a routerLink="/products" routerLinkActive="active" ariaCurrentWhenActive="page">Products</a></li>
  </ul>
</nav>
  `,
  styles: `ul { 
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    gap:10px;
  }
  li {list-style-type:none;}
  a { cursor:pointer;}
  `,
})
export class HeaderComponent {}
