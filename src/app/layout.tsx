import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import '../styles/globals.css';

import { Suspense } from 'react';
import type { Metadata } from 'next';
import { DefaultTheme } from '@/utils';
import { DatesProvider } from '@mantine/dates';
import { RootLayout } from '@/components/layout';
import { ModalsProvider } from '@mantine/modals';
import { ScreenLoader } from '@/components/common';
import { Notifications } from '@mantine/notifications';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Smart Insurance Portal',
  description: 'Smart Insurance Portal Web App',
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body>
        <Suspense fallback={<ScreenLoader />}>
          <MantineProvider withCssVariables defaultColorScheme='auto' theme={DefaultTheme}>
            <DatesProvider settings={{ locale: 'ir' }}>
              <Notifications limit={7} autoClose={4000} position='top-center' />
              <ModalsProvider>
                <RootLayout>{children}</RootLayout>
              </ModalsProvider>
            </DatesProvider>
          </MantineProvider>
        </Suspense>
      </body>
    </html>
  );
}
