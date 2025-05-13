import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  enquiry_form!: FormGroup
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _crud: CrudService,
    private snackBar: MatSnackBar
  ) {
    console.log('Contact Us Component Loaded');
  }
  ngOnInit(): void {
    this.enquiry_form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Contact_Num: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^\d{10}$/)
        ]
      ],

      Message: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.enquiry_form.invalid) return;

    const formValues = this.enquiry_form.value;

    this._crud.addEnquiry(formValues).subscribe(
      (response) => {
        this.snackBar.open('Enquiry submitted successfully!', 'Close', {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snackbar-success']
        });
        this.enquiry_form.reset();
      },
      (error) => {
        this.snackBar.open('Failed to submit enquiry. Please try again.', 'Close', {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snackbar-error']
        });
      }
    );
  }

}
