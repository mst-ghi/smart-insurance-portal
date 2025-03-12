'use client';

import { IconSun, IconMoon, IconMoonStars } from '@tabler/icons-react';
import {
  Box,
  Center,
  ActionIcon,
  SegmentedControl,
  useMantineColorScheme,
  SegmentedControlProps,
} from '@mantine/core';

type ToggleSchemaProps = Partial<SegmentedControlProps> & {
  minify?: boolean;
};

const ToggleSchema = ({ minify = false, fullWidth = true, size = 'xs' }: ToggleSchemaProps) => {
  const { colorScheme, setColorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  if (minify) {
    return (
      <ActionIcon onClick={() => toggleColorScheme()} size='lg'>
        {colorScheme === 'dark' ? <IconMoonStars size={22} /> : <IconSun size={22} />}
      </ActionIcon>
    );
  }

  return (
    <SegmentedControl
      size={size}
      radius='md'
      value={colorScheme}
      fullWidth={fullWidth}
      onChange={(value: any) => setColorScheme(value)}
      data={[
        {
          value: 'light',
          label: (
            <Center>
              <IconSun size={20} stroke={1.5} />
              <Box mx={4}>Light</Box>
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center>
              <IconMoon size={18} stroke={1.5} />
              <Box mx={4}>Dark</Box>
            </Center>
          ),
        },
      ]}
    />
  );
};

export default ToggleSchema;
