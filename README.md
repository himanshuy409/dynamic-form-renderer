# DynamicFormRenderer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## To run the project in development mode
git clone from `https://github.com/himanshuy409/dynamic-form-renderer.git` or extract zip file
Run `npm install` to install the libraries
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## To build the project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## JSON schema format
```json
{
    "title": "<title to display>",
    "fields": [
        {
            "label": "<field label>",
            "name": "<field name>",
            "type": "<field type> (field types supported - text, dob, dropdown, multiselect, checkbox, textarea)",
            "required": "<true if required>",
            "validation": {
                "pattern": "<pattern to match>",
                "message": "<error message for failed validation>"
            },
            "options": [
                "<options to display in the dropdown>"
            ],
        },
    ]
};
```

## Example output
```json
{
    "fullName":"hi",
    "email":"hi@mail.com",
    "dob":"2025-09-30T18:30:00.000Z",
    "gender":"Male",
    "hobbies":["Sports","Music"],
    "subscribe":true,
    "about":"some random text"
}
```