import { MantineThemeOverride } from '@mantine/core';

export const DefaultTheme: MantineThemeOverride = {
  black: '#424242',
  defaultRadius: 'md',

  components: {
    Button: {
      defaultProps: {
        variant: 'light',
        radius: 'md',
      },
    },
    ActionIcon: {
      defaultProps: {
        variant: 'light',
        radius: 'md',
      },
    },
  },
};
