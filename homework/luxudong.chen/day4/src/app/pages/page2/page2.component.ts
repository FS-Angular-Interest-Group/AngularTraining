import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../../forms/CustomValidators';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2-component.css']
})
export class page2Component implements OnInit {
  page2Form: FormGroup;
  listitems:Array<any>;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.page2Form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.listitems = ["link1","link2","link3"];
  }
  submitForm(): void {
    console.log(this.page2Form);
  }

  movetodetail(param1: string) {
    console.log(param1);
    this.router.navigate(['page3', {'searchDetail':'searchDetail'}]);
  }
}
