import { DatePickerInput } from '@mantine/dates';

interface FieldDateProps {
  baseProps?: IBaseField;
  inputProps: any;
}

const FieldDate = ({ inputProps }: FieldDateProps) => {
  return <DatePickerInput {...inputProps} />;
};

export default FieldDate;
