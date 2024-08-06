import { useState, useEffect } from 'react';
import { getCampsiteData } from '@libs/apis';

const useCampsiteList = () => {
    useEffect(() => {
        getCampsiteList(1);
    }, []);

    const [campsiteList, setCampsiteList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState(sortTypeList[0]);

    const getCampsiteList = async (page) => {
        setIsLoading(true);
        const item = await getCampsiteData(page);
        if (item) {
            setCampsiteList(item);
            setCurrentPage(page);
        } else { console.warn("item: " + item) }
        setIsLoading(false);
    };

    const loadNextPageCampsiteList = async () => {
        const nextPage = currentPage + 1;
        const item = await getCampsiteData(nextPage);
        if (!item) return;
        setCampsiteList([...campsiteList, ...item]);
        setCurrentPage(nextPage);
    };

    const refreshCampsiteList = () => {
        getCampsiteList(1);
    };

    return { isLoading, campsiteList, currentPage,
        loadNextPageCampsiteList,
        refreshCampsiteList,
        sortBy,
        setSortBy,
        sortTypeList
    };
};

const sortTypeList = [
    {
      value: 'BASED',
      name: '기본순',
    },
    {
      value: 'LOCATION',
      name: '거리순',
    },
  ];

export default useCampsiteList;