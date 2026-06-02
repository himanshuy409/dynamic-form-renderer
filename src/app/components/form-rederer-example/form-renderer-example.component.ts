import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-form-renderer-example',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './form-renderer-example.component.html',
  styleUrl: './form-renderer-example.component.scss'
})
export class FormRendererExampleComponent {

  userRegistration = {
    "title": "User Registration",
    "fields": [
      {
        "label": "Full Name",
        "name": "fullName",
        "type": "text",
        "required": true
      },
      {
        "label": "Email",
        "name": "email",
        "type": "text",
        "required": true,
        "validation": {
          "pattern": "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
          "message": "Invalid email address"
        }
      },
      {
        "label": "Date of Birth",
        "name": "dob",
        "type": "date"
      },
      {
        "label": "Gender",
        "name": "gender",
        "type": "dropdown",
        "options": [
          "Male",
          "Female",
          "Other"
        ],
        "required": true
      },
      {
        "label": "Hobbies",
        "name": "hobbies",
        "type": "multiselect",
        "options": [
          "Reading",
          "Sports",
          "Music",
          "Travel"
        ]
      },
      {
        "label": "Subscribe to newsletter",
        "name": "subscribe",
        "type": "checkbox"
      },
      {
        "label": "About Yourself",
        "name": "about",
        "type": "textarea"
      }
    ]
  };

  employeeInformation = {
    "title": "Employee Information",
    "fields": [
      {
        "name": "firstName",
        "label": "First Name",
        "type": "text",
        "required": true,
        "validation": {
          "pattern": "[A-Za-z0-9 ]*",
          "message": "Invalid first name"
        }
      },
      {
        "name": "lastName",
        "label": "Last Name",
        "type": "text",
        "required": true,
        "validation": {
          "pattern": "[A-Za-z0-9 ]*",
          "message": "Invalid last name"
        }
      },
      {
        "name": "email",
        "label": "Email",
        "type": "text",
        "required": true,
        "validation": {
          "pattern": "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
          "message": "Invalid email address"
        }
      },
      {
        "name": "department",
        "label": "Department",
        "type": "dropdown",
        "options": [
          "Engineering",
          "HR",
          "Finance"
        ]
      },
      {
        "name": "joiningDate",
        "label": "Joining Date",
        "type": "date"
      },
      {
        "name": "isActive",
        "label": "Currently Active Employee",
        "type": "checkbox"
      }
    ]
  };
}
