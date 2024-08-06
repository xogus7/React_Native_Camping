import { getArticle } from '@libs/apis';
import { useEffect, useState } from 'react';

const useArticles = () => {
  useEffect(() => {
    getArticleList(sortBy);
  }, []);

  const getArticleList = async (sortBy) => {
    setIsLoading(true);
    const result = await getArticle(sortBy.value);
    setArticles(result ?? []);
    setIsLoading(false);
  }

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(sortTypeList[0]);

  return { articles, isLoading,
    sortBy, setSortBy, sortTypeList, getArticleList };
};

const sortTypeList = [
  {
    value: 'LATEST',
    name: '최신순',
  },
  {
    value: 'FAVORITE',
    name: '오래된순',
  },
  {
    value: 'favorite',
    name: '즐겨찾기',
  },
];

export default useArticles;