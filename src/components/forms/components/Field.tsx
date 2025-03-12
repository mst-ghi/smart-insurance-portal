import FieldText from './FieldText';
import FieldDate from './FieldDate';
import FieldRadio from './FieldRadio';
import FieldNumber from './FieldNumber';
import FieldSelect from './FieldSelect';
import FieldCheckBox from './FieldCheckBox';
import { UseFormReturnType } from '@mantine/form';
import { useDynamicOptions } from '../hooks';

const FieldMapper: Record<TFieldType, any> = {
  group: undefined,
  date: FieldDate,
  text: FieldText,
  number: FieldNumber,
  select: FieldSelect,
  radio: FieldRadio,
  checkbox: FieldCheckBox,
};

interface FieldProps {
  field: IFormField;
  formObject: UseFormReturnType<any, (values: any) => any>;
}

const Field = ({ field, formObject }: FieldProps) => {
  const { loading, options } = useDynamicOptions({
    fieldId: field.id,
    formObject,
    dynamicOptions: field.dynamicOptions,
  });

  const Element: any = FieldMapper[field.type];

  if (!Element) {
    return null;
  }

  //! just check equals condition
  if (
    field.visibility &&
    formObject.values[field.visibility.dependsOn] !== field.visibility.value
  ) {
    return null;
  }

  return (
    <Element
      baseProps={{
        loading,
        options: field.options || options,
        visibility: field.visibility,
        dynamicOptions: field.dynamicOptions,
      }}
      inputProps={{
        label: field.label,
        ...formObject.getInputProps(field.id),
      }}
    />
  );
};

export default Field;
