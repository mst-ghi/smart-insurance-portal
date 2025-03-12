'use client';

import Form from './Form';
import { useFormsQuery } from '@/hooks';
import { Box, LoadingOverlay, Tabs } from '@mantine/core';

const RootForms = () => {
  const { data, isFetching } = useFormsQuery();

  return (
    <Box mih={216}>
      <LoadingOverlay visible={isFetching} />

      {data?.data && (
        <Tabs variant='outline' defaultValue={data.data[0].formId}>
          <Tabs.List mb='lg'>
            {data.data.map((form) => {
              return (
                <Tabs.Tab key={`tab-${form.formId}`} value={form.formId}>
                  {form.title}
                </Tabs.Tab>
              );
            })}
          </Tabs.List>

          {data.data.map((form) => {
            return (
              <Tabs.Panel key={`panel-${form.formId}`} value={form.formId}>
                <Form form={form} />
              </Tabs.Panel>
            );
          })}
        </Tabs>
      )}
    </Box>
  );
};

export default RootForms;
