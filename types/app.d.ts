import { UseFormReturnType } from '@mantine/form';

export declare global {
  type TRequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

  interface IResponse<T> {
    data: T;
    success?: boolean;
    unprocessable?: boolean;
    internalError?: boolean;
  }

  type TSubmissionColumn = string;

  interface ISubmissionData {
    id: string | number;
    [key: string]: string | number | boolean;
  }

  interface ISubmissions {
    columns: TSubmissionColumn[];
    data: ISubmissionData[];
  }

  interface IForm {
    formId: string;
    title: string;
    fields: IFormField[];
  }

  type TFieldType = 'group' | 'radio' | 'select' | 'number' | 'text' | 'checkbox' | 'date';

  interface IFormField {
    id: string;
    label: string;
    type: TFieldType;
    required: boolean;
    fields: IFormField[];
    options?: string[];
    dynamicOptions?: IFormDynamicOptions;
    visibility?: IFormVisibility;
    validation?: {
      min: number;
      max: number;
    };
  }

  interface IFormDynamicOptions {
    dependsOn: string;
    endpoint: string;
    method: string;
  }

  interface IFormVisibility {
    dependsOn: string;
    condition: string;
    value: string;
  }

  interface IBaseField {
    loading?: boolean;
    options?: string[];
    visibility?: IFormVisibility;
    dynamicOptions?: IFormDynamicOptions;
    formObject: UseFormReturnType<any, (values: any) => any>;
  }
}
