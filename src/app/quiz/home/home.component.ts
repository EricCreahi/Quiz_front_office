import { Component } from '@angular/core';
import { ComponentsModule } from "../../components/components.module";
import { OptionCardComponent } from "../option-card/option-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, OptionCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
