import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts-impl';
}
