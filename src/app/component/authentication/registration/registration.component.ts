import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder, private readonly _router: Router) {}
  hide = false;
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)]],
    mobile: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  // tslint:disable-next-line:typedef
  onRegister() {
    if (!this.registerForm.valid) {
      return;
    }
    this._router.navigate(['/dashboard']);
  }
  ngOnInit(): void {}
}
