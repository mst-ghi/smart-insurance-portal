'use client';

import { useRequest } from '@/hooks';
import { useEffect, useState } from 'react';
import { UseFormReturnType } from '@mantine/form';

interface UseDynamicOptionsProps {
  fieldId: string;
  dynamicOptions?: IFormDynamicOptions;
  formObject: UseFormReturnType<any, (values: any) => any>;
}

const useDynamicOptions = ({ formObject, dynamicOptions }: UseDynamicOptionsProps) => {
  const { loading, request } = useRequest();
  const [options, setOptions] = useState([]);

  const fetcher = async () => {
    if (dynamicOptions && formObject.values[dynamicOptions.dependsOn]) {
      const res: any = await request(
        dynamicOptions.method as TRequestMethods,
        dynamicOptions.endpoint +
          `?${dynamicOptions.dependsOn}=${formObject.values[dynamicOptions.dependsOn]}`,
      );

      if (dynamicOptions.dependsOn === 'country') {
        setOptions(res.data?.states || []);
      }
    }
  };

  useEffect(() => {
    fetcher();
  }, [dynamicOptions, formObject.values[dynamicOptions?.dependsOn || '']]);

  return {
    loading,
    options,
  };
};

export default useDynamicOptions;
