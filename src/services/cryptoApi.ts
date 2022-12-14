import { EndPoints } from 'types/endpoints';

interface ClientProps {
  endpoint: EndPoints | string;
  customConfig?: {};
}

const client = async ({ endpoint, customConfig = {} }: ClientProps) => {
  const config = {
    method: 'GET',
    ...customConfig,
  };

  return window
    .fetch(`${process.env.REACT_APP_CRYPTO_API_URL}/${endpoint}`, config)
    .then(async response => {
      const data = await response.json();
      return response.ok ? data : Promise.reject(data);
    });
};

export { client };
