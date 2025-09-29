import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/layout/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-Msf';
}
