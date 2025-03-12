import { Card, Checkbox, CheckboxProps } from '@mantine/core';

interface FieldCheckBoxProps {
  baseProps?: IBaseField;
  inputProps: CheckboxProps;
}

const FieldCheckBox = ({ inputProps }: FieldCheckBoxProps) => {
  return (
    <Card withBorder p='xs'>
      <Checkbox variant='outline' {...inputProps} />
    </Card>
  );
};

export default FieldCheckBox;
