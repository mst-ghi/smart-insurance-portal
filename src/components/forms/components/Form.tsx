import Field from './Field';
import Group from './Group';
import { useMemo } from 'react';
import { useFormsApi } from '@/hooks';
import { useForm } from '@mantine/form';
import { parseFormToArgs } from '@/utils';
import { Button, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

interface FormProps {
  form: IForm;
}

const Form = ({ form }: FormProps) => {
  const { loading, submit } = useFormsApi();

  const formArgs = useMemo(() => {
    return parseFormToArgs(form);
  }, [form]);

  const formObject = useForm(formArgs);

  const onSubmit = async (values: any) => {
    const res = await submit(values);

    if (res.success) {
      showNotification({ color: 'green', message: 'Your application successfully submitted' });
    } else {
      showNotification({
        color: 'red',
        message: 'There was an error registering your application',
      });
    }
  };

  return (
    <form onSubmit={formObject.onSubmit(onSubmit)}>
      <Stack gap='md' px='sm'>
        {form.fields.map((field) => {
          if (field.type === 'group') {
            return <Group key={field.id + form.formId} field={field} formObject={formObject} />;
          }
          return <Field key={field.id + form.formId} field={field} formObject={formObject} />;
        })}

        <Button type='submit' mt='md' size='lg' fullWidth loading={loading}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
