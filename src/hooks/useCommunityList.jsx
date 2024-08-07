
import { useEffect, useState } from 'react';
import { getCommunity } from '@libs/apis';

const useCommunityList = () => {
  useEffect(() => {
    getCommunityList();
  }, []);
  const [communityList, setCommunityList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCommunityList = async () => {
    setIsLoading(true);
    const content = await getCommunity()
    setCommunityList(content);
    setIsLoading(false);
  };

  return { communityList, isLoading, getCommunityList };
};

export default useCommunityList;
