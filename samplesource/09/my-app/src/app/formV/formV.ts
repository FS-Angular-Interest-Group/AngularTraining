import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hero-form-template1',
  templateUrl: './formV.html'
})
export class FormV {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    submitted = false;
    hero = {
        'name': '',
        'power': ''
    }
    formErrors = {
        'name': '',
        'power': ''
    }
    heroForm: NgForm;
    @ViewChild('heroForm') currentForm: NgForm;

    active = true;

    ngAfterViewChecked() {
        this.formChanged();
    }
    formChanged() {
        if (this.currentForm === this.heroForm) { return; }
        this.heroForm = this.currentForm;
        if (this.heroForm) {
            this.heroForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data) {
        if (!this.heroForm) { return; }
        const form = this.heroForm.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    onSubmit() {
        this.submitted = true;
    }
    validationMessages = {
        'name': {
            'required':      'Name is required.',
            'minlength':     'Name must be at least 4 characters long.',
            'maxlength':     'Name cannot be more than 24 characters long.',
            'forbiddenName': 'Someone named "Bob" cannot be a hero.'
        },
        'power': {
            'required': 'Power is required.'
        }
    };
}