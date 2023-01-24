import axios, {RawAxiosRequestConfig, AxiosResponse} from 'axios';
const domain = 'https://hacker-news.firebaseio.com/v0';
const client = axios.create({
  baseURL: domain,
});

const Base = async function (options: RawAxiosRequestConfig) {
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: any) =>
    Promise.reject(error.response || error.message);

  try {
    const response = await client(options);
    //console.log(response);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default Base;
