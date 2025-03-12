import { useQuery } from '@tanstack/react-query';
import useFormsApi from './useFormsApi';

const useSubmissionsQuery = () => {
  const { submissions } = useFormsApi();

  return useQuery({
    queryKey: ['submissions'],
    queryFn: submissions,
  });
};

export default useSubmissionsQuery;
