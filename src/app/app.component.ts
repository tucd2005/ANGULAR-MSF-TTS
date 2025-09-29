import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderLayoutComponent } from './shared/layout/header-layout/header-layout.component';
import { FooterLayoutComponent } from "./shared/layout/footer-layout/footer-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, HeaderLayoutComponent, FooterLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-dsfj';
}
