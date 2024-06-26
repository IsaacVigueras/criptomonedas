import axios from 'axios';

export const API = async (url: string) => {
  const baseUrl = `https://min-api.cryptocompare.com/data${url}`;

  const data = await axios.get(baseUrl);

  return data;
};
