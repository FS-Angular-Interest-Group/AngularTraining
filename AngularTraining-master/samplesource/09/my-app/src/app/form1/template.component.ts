import { Component, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero }    from './hero';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  formErrors = {
      'name': '',
      'power': ''
  }
  submitted = false;

  heroForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;

  constructor(private el: ElementRef) {
    this.el.nativeElement.querySelector('[type=text]');
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  changeName() {
    console.log('change');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
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
