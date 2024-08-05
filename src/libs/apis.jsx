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