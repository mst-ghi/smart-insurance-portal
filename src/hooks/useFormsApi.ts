import useRequest from './useRequest';

const useFormsApi = () => {
  const { loading, request } = useRequest();

  const forms = async () => {
    return request<IForm[]>('GET', '/api/insurance/forms');
  };

  const submit = async (body: any) => {
    return request('POST', '/api/insurance/forms/submit', body);
  };

  const submissions = async () => {
    return request<ISubmissions>('GET', '/api/insurance/forms/submissions');
  };

  return {
    loading,
    forms,
    submit,
    submissions,
  };
};

export default useFormsApi;
