import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';


const VALIDATORS_MESSAGES: any = {
  required: 'Should not be empty!',
  email: 'Email is not valid!',
  pattern: 'Email is not valid',
  minlength: 'Field is to short!',
  notMatch: 'Password and Confirm password does not match!'
 } 

@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit ,OnChanges {
  @Input()
  control!: AbstractControl;
  @Input()
  showErrorWhen: boolean = true;
  errorMessages: string[] = [];


  constructor(){}



  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValdation();
    })
    this.control.valueChanges.subscribe(() => {
      this.checkValdation();
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValdation()
  }

  checkValdation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key])
  }
}
