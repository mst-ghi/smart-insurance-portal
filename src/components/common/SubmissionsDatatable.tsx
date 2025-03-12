'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSubmissionsQuery } from '@/hooks';
import { IconPlus, IconRefresh } from '@tabler/icons-react';
import { ActionIcon, Button, Card, Flex, LoadingOverlay, Table, Text } from '@mantine/core';

const SubmissionsDatatable = () => {
  const { data, isFetching, refetch } = useSubmissionsQuery();

  const tableBody = useMemo(() => {
    const body: [string | number | boolean][] = [];

    const records = data?.data.data;

    if (records) {
      for (let rx = 0; rx < records.length; rx++) {
        const record = records[rx];
        const recordArr: [string | number | boolean] = [record.id];

        for (let cx = 0; cx < data.data.columns.length; cx++) {
          const column = data.data.columns[cx];
          recordArr.push(record[column]);
        }

        body.push(recordArr);
      }
    }

    return body;
  }, [data?.data]);

  return (
    <Card withBorder mih={64}>
      <LoadingOverlay visible={isFetching} />

      <Flex direction='row' align='center' justify='space-between' mb='sm'>
        <Text fw={700}>All Submissions</Text>

        <Flex direction='row' align='center' gap='xs'>
          <ActionIcon variant='light' onClick={() => refetch()}>
            <IconRefresh size={20} />
          </ActionIcon>

          <Button size='xs' href='/forms' component={Link} leftSection={<IconPlus size={20} />}>
            New Submission
          </Button>
        </Flex>
      </Flex>

      {data?.data && (
        <Table
          striped
          highlightOnHover
          captionSide='top'
          data={{
            body: tableBody,
            head: ['Id', ...data.data.columns],
          }}
        />
      )}
    </Card>
  );
};

export default SubmissionsDatatable;
