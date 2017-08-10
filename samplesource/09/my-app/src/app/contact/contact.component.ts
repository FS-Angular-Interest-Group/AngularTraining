import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  private info = {name: '',email: '', content: ''};
  private formErrors = {};

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [this.info.name, Validators.required],
      email: [this.info.email, [Validators.required, CustomValidators.validateEmail]],
      content: [this.info.content, [Validators.required, Validators.minLength(10)]]
    });
    this.contactForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }


  submitForm(): void {
    this.contactForm.setValue({"name" : this.info.name,
      "email": this.info.email,
      "content": this.info.content
    });
    console.log(this.contactForm);
  }

  onValueChanged(data) {
      if (!this.contactForm) { return; }
      const form = this.contactForm;

      for (const field in this.info) {
          // clear previous error message (if any)
          this.formErrors[field] = '';
          const control = form.get(field);

          if (control && !control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
                this.formErrors[field] += messages[key] + ' ';
            }
          }
      }
  }
  validationMessages = {
      'name': {
          'required':      'Name is required.',
          'minlength':     'Name must be at least 4 characters long.',
          'maxlength':     'Name cannot be more than 24 characters long.'
      },
      'email': {
          'required': 'Email is required.',
          'validateEmail': 'Email is invalid'
      },
      'content': {
          'required':      'Content is required.',
          'minlength':     'Content must be at least 10 characters long.',
      }
  };
}
