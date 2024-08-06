
import { getCommunity, putCommunityLike } from '@libs/apis';
import {supabase} from '@libs/supabase';
import {useEffect, useState} from 'react';

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

  const onPressLike = async (communityId) => {
    const result = putCommunityLike(communityId);

    setCommunityList(
      communityList.map(item => ({
        ...item,
        like: item.id === communityId ? result.like : item.like,
      })),
    );
  };

  return {communityList, isLoading, getCommunityList, onPressLike};
};

export default useCommunityList;
