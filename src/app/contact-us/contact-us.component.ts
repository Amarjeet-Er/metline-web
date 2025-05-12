import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  enquiry_form!: FormGroup
  constructor(
    private _fb: FormBuilder
  ) {
    console.log('Contact Us Component Loaded');
  }
  ngOnInit(): void {
    this.enquiry_form = this._fb.group({
      name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^\d{10}$/)  // ensures exactly 10 digits
        ]
      ],

      message: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.enquiry_form.invalid) return;

    const formData = new FormData();
    const formValues = this.enquiry_form.value;

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    console.log('Form Submitted:', formValues);
  }
}