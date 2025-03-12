import useFormsApi from './useFormsApi';
import { useQuery } from '@tanstack/react-query';

const useFormsQuery = () => {
  const { forms } = useFormsApi();

  return useQuery({
    queryKey: ['forms'],
    queryFn: forms,
  });
};

export default useFormsQuery;
