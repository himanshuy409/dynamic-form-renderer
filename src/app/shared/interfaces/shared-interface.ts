export interface FormFields {
    label: string;
    name: string;
    type: string;
    required?: boolean;
    options?: string[];
    validation?: {
        pattern?: string;
        message?: string;
    }
}

export interface FormData {
    title: string;
    fields: FormFields[];
}