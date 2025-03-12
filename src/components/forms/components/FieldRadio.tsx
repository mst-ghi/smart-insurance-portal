import { Box, Card, Group, Radio, RadioGroupProps, Text } from '@mantine/core';

interface FieldRadioProps {
  baseProps?: IBaseField;
  inputProps: RadioGroupProps;
}

const FieldRadio = ({ baseProps, inputProps }: FieldRadioProps) => {
  return (
    <Box>
      <Text size='sm' ml={6} mb={4}>
        {inputProps.label}
      </Text>
      <Card withBorder p='xs'>
        <Radio.Group
          {...inputProps}
          styles={{
            label: {
              display: 'none',
            },
          }}
        >
          <Group>
            {baseProps?.options?.map((op, idx) => {
              return <Radio variant='outline' value={op} label={op} key={op + idx + name} />;
            })}
          </Group>
        </Radio.Group>
      </Card>
    </Box>
  );
};

export default FieldRadio;
