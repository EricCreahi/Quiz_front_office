import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  handleNavigate(route: string): void {
    this.router.navigate([route]);
  }
}
