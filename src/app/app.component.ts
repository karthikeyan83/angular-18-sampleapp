import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `<app-header />
  <div class="container">
    <router-outlet>
    </router-outlet>
</div>
  `,
})
export class AppComponent {}
