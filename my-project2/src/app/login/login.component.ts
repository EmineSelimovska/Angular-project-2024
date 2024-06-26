import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../text-input/text-input.component';
import { InputContainerComponent } from '../input-container/input-container.component';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { DefaultButtonComponent } from '../default-button/default-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule, TextInputComponent,
    InputContainerComponent, InputValidationComponent,
    DefaultButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmited = false;
  returnUrl = '';

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmited = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login({
      email: this.fc['email'].value,
      password: this.fc['password'].value
    }).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
