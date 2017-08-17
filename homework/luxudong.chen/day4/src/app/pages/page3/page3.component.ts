import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../../forms/CustomValidators';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3-component.css']
})
export class page3Component implements OnInit {
  page3Form: FormGroup;
  listitems:Array<any>;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.page3Form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.listitems = ["aaaaa","linbbbbbk2","lincccck3"];
    console.log(this.router.routerState);
  }
  submitForm(): void {
    console.log(this.page3Form);
  }
}
