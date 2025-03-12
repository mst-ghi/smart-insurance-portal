'use client';

import { ScreenLoader } from '../common';
import { DefaultQueryClient } from '@/utils';
import React, { useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppShell, Container, ScrollArea } from '@mantine/core';

import RootHeader from './RootHeader';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <QueryClientProvider client={DefaultQueryClient}>
      {loading && <ScreenLoader />}
      {!loading && (
        <AppShell h='100dvh'>
          <AppShell.Header withBorder={false} px='sm'>
            <RootHeader />
          </AppShell.Header>

          <AppShell.Main mt={56}>
            <ScrollArea h='calc(100dvh - 56px)'>
              <Container p='sm' pb='xl'>
                {children}
              </Container>
            </ScrollArea>
          </AppShell.Main>
        </AppShell>
      )}
    </QueryClientProvider>
  );
};

export default RootLayout;
