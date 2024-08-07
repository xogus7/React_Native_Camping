import { useState, useEffect } from 'react';
import { getCampsiteData, getCampsiteDataLocation } from '@libs/apis';

const useCampsiteList = () => {
    useEffect(() => {
        getCampsiteList(1, sortBy);
    }, []);

    const [campsiteList, setCampsiteList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState(sortTypeList[0]);

    const getCampsiteList = async (page, sortBy) => {
        setIsLoading(true);
        let item = [];
        if (sortBy.name === '기본순') {
            item = await getCampsiteData(page);
        }
        else { item = await getCampsiteDataLocation(page); }
        if (item) {
            setCampsiteList(item);
            setCurrentPage(page);
        } else { console.warn("item: " + item); }
        setIsLoading(false);
    };

    const loadNextPageCampsiteList = async (sortBy) => {
        const nextPage = currentPage + 1;
        let item = [];
        if (sortBy.name === '기본순') {
            item = await getCampsiteData(nextPage);
        }
        else { item = await getCampsiteDataLocation(nextPage); }
        if (!item) return;
        setCampsiteList([...campsiteList, ...item]);
        setCurrentPage(nextPage);
    };

    const refreshCampsiteList = () => getCampsiteList(1, sortBy);

    return {
        isLoading, campsiteList, currentPage,
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