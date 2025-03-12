import { Envs } from '@/utils';
import { useState } from 'react';
import { showNotification } from '@mantine/notifications';

const useRequest = () => {
  const [loading, setLoading] = useState(false);

  const request = async <T>(
    method: TRequestMethods = 'GET',
    path: string,
    body?: any,
  ): Promise<IResponse<T>> => {
    setLoading(true);

    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const url = `${Envs.api.url}${path}`;

    return fetch(url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    })
      .then(async (res) => {
        const success = res.status === 200;
        const unprocessable = res.status === 422;
        const internalError = res.status >= 500 && res.status < 600;

        let data: T = {} as T;

        if (internalError) {
          showNotification({
            color: 'red',
            message: 'Internal server error. Please contact support',
          });
        }

        try {
          data = await res.json();
        } catch (err) {
          console.error('err', err);
        }

        return {
          data,
          success,
          unprocessable,
          internalError,
        };
      })
      .catch(() => {
        showNotification({
          color: 'red',
          message: 'Please contact support.',
        });
      })
      .finally(() => {
        setLoading(false);
      }) as Promise<IResponse<T>>;
  };

  return {
    loading,
    request,
  };
};

export default useRequest;
