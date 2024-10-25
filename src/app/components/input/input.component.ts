import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type InputSize = 'large' | 'medium' | 'small';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() id: string = '';
  @Input() label: string = 'Label';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() placeholder: string | number = 'Input';
  @Input() size: InputSize = 'medium';
  @Input() block: boolean = false;
  @Input() required: boolean = false;
  @Input() showLabel: boolean = true;

  @Output() onValueChange = new EventEmitter<string | number>();

  value: string | number = '';
  onChange = (value: string | number) => {console.log(value);
  };
  onTouched = () => {};

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value); // Émettre la valeur à Angular
    this.onValueChange.emit(this.value);
    this.onTouched(); // Appeler la méthode onTouched
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
