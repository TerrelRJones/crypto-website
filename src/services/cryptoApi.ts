import { EndPoints } from 'types/endpoints';

interface ClientProps {
  endpoint: EndPoints;
  customConfig?: {};
}

const client = async ({ endpoint, customConfig = {} }: ClientProps) => {
  const config = {
    method: 'GET',
    ...customConfig,
  };

  const response = await window.fetch(
    `${process.env.REACT_APP_CRYPTO_API_URL}/${endpoint}`,
    config,
  );
  const data = await response.json();
  return await (response.ok ? data : Promise.reject(data));
};

export { client };
