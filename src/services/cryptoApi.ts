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

<<<<<<< HEAD
  const response = await window.fetch(
    `${process.env.REACT_APP_CRYPTO_API_URL}/${endpoint}`,
    config,
  );
  const data = await response.json();
  return await (response.ok ? data : Promise.reject(data));
=======
  return window
    .fetch(`${process.env.REACT_APP_CRYPTO_API_URL}/${endpoint}`, config)
    .then(async response => {
      const data = await response.json();
      return response.ok ? data : Promise.reject(data);
    });
>>>>>>> main
};

export { client };
