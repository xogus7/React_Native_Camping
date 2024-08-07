import { getArticle, getArticleFavorite } from '@libs/apis';
import { useEffect, useState } from 'react';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(sortTypeList[0]);
  
  useEffect(() => {
    getArticleList(sortBy);
  }, []);

  const getArticleList = async (sortBy) => {
    setIsLoading(true);
    let result = []
    if (sortBy.name === '즐겨찾기') {
      result = await getArticleFavorite();
    }
    else {
      result = await getArticle(sortBy.value);
    }
    if (result) setArticles(result);
    setIsLoading(false);
  }

  return {
    articles, isLoading,
    sortBy, setSortBy, sortTypeList, getArticleList
  };
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