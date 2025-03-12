import { UseFormReturnType } from '@mantine/form';
import Field from './Field';
import { Fieldset, Stack } from '@mantine/core';

interface GroupProps {
  field: IFormField;
  formObject: UseFormReturnType<any, (values: any) => any>;
}

const Group = ({ field, formObject }: GroupProps) => {
  return (
    <Fieldset legend={field.label}>
      <Stack gap='md'>
        {field.fields?.map((field, idx) => {
          return <Field key={idx + field.id} field={field} formObject={formObject} />;
        })}
      </Stack>
    </Fieldset>
  );
};

export default Group;
