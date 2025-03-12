import { NumberInput, NumberInputProps } from '@mantine/core';

interface FieldNumberProps {
  baseProps?: IBaseField;
  inputProps: NumberInputProps;
}

const FieldNumber = ({ inputProps }: FieldNumberProps) => {
  return <NumberInput {...inputProps} />;
};

export default FieldNumber;
