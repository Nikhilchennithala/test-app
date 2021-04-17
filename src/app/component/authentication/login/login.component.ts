import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private readonly _router: Router,
  ) {}
  hide = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // tslint:disable-next-line:typedef
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this._router.navigate(['/dashboard']);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {}
}
