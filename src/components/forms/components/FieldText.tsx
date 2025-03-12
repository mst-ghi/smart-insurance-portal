import { TextInput, TextInputProps } from '@mantine/core';

interface FieldTextProps {
  baseProps?: IBaseField;
  inputProps: TextInputProps;
}

const FieldText = ({ inputProps }: FieldTextProps) => {
  return <TextInput {...inputProps} />;
};

export default FieldText;
