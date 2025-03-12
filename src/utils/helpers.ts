import z from 'zod';
import { zodResolver } from '@mantine/form';

const getDefaultValue = (field: IFormField) => {
  let value: any = '';

  if (field.type === 'date') {
    value = null;
  } else if (field.type === 'select') {
    value = field.options?.[0] || '';
  } else if (field.type === 'number') {
    value = 0;
  } else if (field.type === 'checkbox') {
    value = false;
  }

  return value;
};

const getZodValidation = (
  required: boolean,
  type: TFieldType,
  validation?: {
    min: number;
    max: number;
  },
) => {
  let schema;

  // string values
  if (['text', 'select'].includes(type)) {
    schema = z.string().min(2, { message: 'Must be more than two characters' });
  }

  // radio values
  else if (type === 'radio') {
    schema = z.string().min(2, { message: 'Selecting one of the options is required' });
  }

  // date values
  else if (type === 'date') {
    schema = z.date().nullable();
  }

  // number values
  else if (type === 'number') {
    schema = z.number();

    if (validation) {
      if (validation.min) {
        schema = schema.gte(validation.min);
      }
      if (validation.max) {
        schema = schema.lte(validation.max);
      }
    }
  }

  // boolean values
  else if (['checkbox'].includes(type)) {
    schema = z.boolean();
  }

  if (schema && !required) {
    schema = schema.optional();
  }

  return schema;
};

export const parseFormToArgs = (form: IForm) => {
  const initialValues: any = {};
  const schema: any = {};

  for (let fx = 0; fx < form.fields.length; fx++) {
    const field = form.fields[fx];

    if (field.type === 'group') {
      for (let index = 0; index < field.fields.length; index++) {
        const innerField = field.fields[index];
        initialValues[innerField.id] = getDefaultValue(innerField);
        schema[innerField.id] = getZodValidation(
          innerField.required,
          innerField.type,
          innerField.validation,
        );
      }
    } else {
      initialValues[field.id] = getDefaultValue(field);
      schema[field.id] = getZodValidation(field.required, field.type, field.validation);
    }
  }

  return { initialValues, validate: zodResolver(z.object(schema)) };
};
