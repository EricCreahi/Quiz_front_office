import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-card',
  standalone: true,
  imports: [],
  templateUrl: './option-card.component.html',
  styleUrl: './option-card.component.css',
})
export class OptionCardComponent {
  @Input() label!: string;
}
