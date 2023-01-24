import base from './base';

const getNews = async () => {
  return await base({
    url: '/topstories.json',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getNewsItem = async (id: number) => {
  return await base({
    url: `/item/${id.toString()}.json`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getAuthor = async (id: string) => {
  return await base({
    url: `/user/${id}.json`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const Api = {
  getNews,
  getNewsItem,
  getAuthor,
};

export default Api;
