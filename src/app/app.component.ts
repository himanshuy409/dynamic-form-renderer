import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-renderer';
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
