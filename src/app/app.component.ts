import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatePersistService } from './shared/service/state-persist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fratmat_anniv_quiz';

  constructor(private statePersist: StatePersistService) {}
}
