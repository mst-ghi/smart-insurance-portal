import { Loader, Select, SelectProps } from '@mantine/core';

interface FieldSelectProps {
  baseProps?: IBaseField;
  inputProps: SelectProps;
}

const FieldSelect = ({ baseProps, inputProps }: FieldSelectProps) => {
  return (
    <Select
      {...inputProps}
      data={baseProps?.options}
      rightSection={baseProps?.loading && <Loader size='sm' />}
    />
  );
};

export default FieldSelect;
