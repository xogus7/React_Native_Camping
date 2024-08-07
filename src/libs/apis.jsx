import { Platform } from 'react-native';
import { goCampInstance, swaggerInstance } from "@utils/apisInstanace";

// GoCamping
export const getCampsiteData = async (pageNo) => {
    try {
        const { data } = await goCampInstance.get('/basedList', {
            pageNo: pageNo,
            MobileOS: Platform.OS === 'android' ? 'AND' : 'IOS',
            MobileApp: 'Camping',
            serviceKey: process.env.REACT_APP_GO_CAMPING_API_SERVICE_KEY,
            _type: 'json',
            
        });
        return data.response.body.items.item;
    } catch (error) {
        console.warn(error);
    }
};

export const getCampsiteDataLocation = async (pageNo) => {
    try {
        const { data } = await goCampInstance.get('/locationBasedList', {
            pageNo: pageNo,
            MobileOS: Platform.OS === 'android' ? 'AND' : 'IOS',
            MobileApp: 'Camping',
            serviceKey: process.env.REACT_APP_GO_CAMPING_API_SERVICE_KEY,
            _type: 'json',
            mapX: 127.1234262,
            mapY: 37.590719,
            radius: 20000
        });
        return data.response.body.items.item;
    } catch (error) {
        console.warn(error);
    }
};

// Swagger
export const postAuth = async () => {
    try {
        const response = await swaggerInstance.post('/auth', {
            "email": process.env.REACT_APP_EMAIL,
            "password": process.env.REACT_APP_PASSWORD
        });
        return response;
    } catch (error) {
        console.warn(error);
    }
}

export const getArticle = async (sortType) => {
    try {
        const { data } = await swaggerInstance.get('/article', {
            sortType: sortType
        });
        return data.result;
    } catch (error) {
        console.warn(error);
    }
}

export const postArticleFavorite = async (id) => {
    try {
        const { data } = await swaggerInstance.post(`/article/favorite/${id}`);
        return data;
    } catch (error) {
        console.warn(error);
    }
}

export const getArticleFavorite = async () => {
    try {
        const { data } = await swaggerInstance.get('/article/favorite');
        return data.result;
    } catch (error) {
        console.warn(error);
    }
}

export const getCommunity = async () => {
    try {
        const { data } = await swaggerInstance.get('/community');
        return data.result.content;
    } catch (error) {
        console.warn(error);
    }
}

export const putCommunityLike = async (communityId) => {
    try {
        const { data } = await swaggerInstance.put(`/community/${communityId}/like`);
        return data;
    } catch (error) {
        console.warn(error);
    }
}

export const postCommunity = async (inputForm) => {
    try {
        const { response } = await swaggerInstance.post('/community', {
            subject: inputForm.title,
            content: inputForm.content
        });
        return response;
    } catch (error) {
        console.warn(error);
    }
}

export const getAccountsInfo = async () => {
    try {
        const { data } = await swaggerInstance.get('/accounts/info');
        return data.result;
    } catch (error) {
        console.warn(error);
    }
}

