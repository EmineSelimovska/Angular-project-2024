import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  loginForm!: FormGroup;
  isSubmited = false;
  returnUrl = '' ;

  constructor(private formBuilder: FormBuilder,
  private userService: UserService,
  private activeRoute: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'];
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmited = true;
    if(this.loginForm.invalid){
      return;
    }

    this.userService.login({email:this.fc['email'].value,
      password: this.fc['password'].value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      })
  }
}
