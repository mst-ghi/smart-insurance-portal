import { Flex } from '@mantine/core';
import React from 'react';

interface RootPageProps {
  children: React.ReactNode;
}

const RootPage = ({ children }: RootPageProps) => {
  return (
    <Flex direction='column' gap='mg'>
      {children}
    </Flex>
  );
};

export default RootPage;
