import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../../forms/CustomValidators';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1-component.css']
})
export class page1Component implements OnInit {
  page1Form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.page1Form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  submitForm(): void {
    console.log(this.page1Form);
  }
}
