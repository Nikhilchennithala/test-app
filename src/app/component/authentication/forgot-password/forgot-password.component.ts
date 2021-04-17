import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewPasswordComponent } from '../_dialogues/new-password/new-password.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private readonly _router: Router,
    private readonly dialog: MatDialog,
  ) {}
  hide = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {}

  public onConfirmButtonClicked(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const dialogRef = this.dialog.open(NewPasswordComponent, {
      panelClass: 'mat-dialogue-no-padding',
      width: '300px',
      height: 'auto%',
      autoFocus: false,
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
