import React from 'react';
import Link from 'next/link';
import { ToggleSchema } from '../common';
import { Flex, Title } from '@mantine/core';

const RootHeader = () => {
  return (
    <Flex h={56} direction='row' align='center' justify='space-between'>
      <Link href='/'>
        <Title>S.I.P</Title>
      </Link>

      <ToggleSchema />
    </Flex>
  );
};

export default RootHeader;
