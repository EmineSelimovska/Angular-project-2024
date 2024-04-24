import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { InputContainerComponent } from '../input-container/input-container.component';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [InputValidationComponent,InputContainerComponent,ReactiveFormsModule],
  templateUrl:'./text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit{
  @Input()
  control!: AbstractControl;
  @Input()
  showErrorWhen: boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'password' | 'email' = 'text';
formControl: any;

  get formCotrol(){
    return this.control as FormControl
  }

  constructor() {}

  ngOnInit(): void {
    
  }
}
