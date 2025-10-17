import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImports } from 'src/app/shared/modules/material.imports';
import { FormData } from 'src/app/shared/interfaces/shared-interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MaterialImports,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() data: FormData = {title: '', fields: [{label: '', name: '', type: ''}]};
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addFieldsInForm();
  }

  addFieldsInForm() {
    this.data.fields.forEach(field => {
      const fieldValidation = [];
      if(field.required) {
        fieldValidation.push(Validators.required);
      }
      if(field.validation && field.validation.pattern) {
        fieldValidation.push(Validators.pattern(field.validation.pattern));
      }
      this.form.addControl(field.name, this.fb.control('', fieldValidation));
    })
  }

  getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (!control || !control.errors)
      return '';
    if (control.errors['required'])
      return 'This field is required';
    if (control.errors['pattern']) {
      const field = this.data.fields.find(field => field.name === fieldName)
      return field?.validation?.message ?? 'Invalid value entered';
    }
    return 'Invalid input';
  }

  submit() {
    console.log(JSON.stringify(this.form.value));
  }

}
