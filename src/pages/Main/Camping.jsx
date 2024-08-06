import { FlatList, Image, Pressable, RefreshControl, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useState } from "react";

import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";
import useCampsiteList from "@hooks/useCampsiteList";
import SortBy from "@components/SortBy";
import SortModal from "@components/SortModal";
import { getDistance } from "@utils/getDistance";

const Camping = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { campsiteList, loadNextPageCampsiteList, refreshCampsiteList,
        sortBy, setSortBy, sortTypeList } = useCampsiteList();
    const defaultThumbnailImage = require('@images/default_article_thumb.png')
    const coords1 = { latitude: 37.590719, longitude: 127.1234262};

    const renderItem = useCallback(({ item }) => {
        const onPressCampsiteInfo = () => navigation.navigate('CampingDetail', item);
        const coords2 = {latitude: item.mapY, longitude: item.mapX};
        const distance = getDistance(coords1, coords2).toFixed(1);
        return (
            <Pressable
                style={{
                    padding: 8,
                    backgroundColor: COLOR.WHITE,
                    borderRadius: 8,
                    shadowColor: '#000',
                    elevation: 2,
                }}
                onPress={onPressCampsiteInfo}>
                <View>
                    {/* 업종 */}
                    <Text
                        style={{
                            position: 'absolute',
                            color: COLOR.WHITE,
                            backgroundColor: COLOR.ORANGE,
                            fontWeight: '700',
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                            borderRadius: 8,
                            left: 8,
                            top: 8,
                            zIndex: 1 
                        }}>
                        {item.induty} 
                    </Text>
                    {/* 썸네일 */}
                    <Image
                        style={{ borderRadius: 8, height: 150, width: '100%' }}
                        source={item.firstImageUrl ?
                            { uri: item.firstImageUrl } : defaultThumbnailImage}
                        resizeMode="cover"
                    />
                    {!item.firstImageUrl && <Text
                        style={{
                            position: 'absolute',
                            color: COLOR.WHITE,
                            right: 8,
                            bottom: 8,
                            zIndex: 1 
                    }}>가상 이미지 입니다.</Text>}
                </View>

                <View style={{ flexDirection: 'row', gap: 8, marginVertical: 8}}>
                    {/* 사업주체 */}
                    <Text style={{ fontSize: 13, fontWeight: '700', color: '#C3C3C3' }}>
                        {item.facltDivNm}
                    </Text>
                    {/* 운영주체 */}
                    <Text style={{ fontSize: 13, fontWeight: '700', color: '#C3C3C3' }}>
                        {item.mangeDivNm}
                    </Text>
                </View>
                {/* 야영장명 */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                <Text style={{ fontWeight: 'bold', color: '#707070', fontSize: 18 }}>
                    {item.facltNm}
                </Text>
                {/* 캠핑장까지 거리 */}
                <Text  style={{ fontSize: 13, fontWeight: '700', color: '#707070' }}>
                    {`${distance}km`}
                </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 28 }}>
                    {/* 주소 */}
                    <Text style={{ fontSize: 13, fontWeight: '700' }}>
                        {item.addr1}
                    </Text>
                    {/* 예약 구분 */}
                    <Text style={{ fontWeight: 'bold', color: COLOR.ORANGE }}>
                        {item.resveCl}
                    </Text>
                </View>
            </Pressable>
        );
    }, []);
    
    const onRefresh = () => {
        setRefreshing(true);
        refreshCampsiteList();
        setRefreshing(false);
    };

    const onEndReached = () => {
        loadNextPageCampsiteList();
    };

    const onPressSort = () => {
        setIsVisible(true)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title="캠핑 투게더" leftButtonName="menu" rightButtonName="search" />
            {/* Sort By */}
            <SortBy sortBy={sortBy} onPress={onPressSort}/>
            {/* List */}
            <FlatList
                style={{ marginHorizontal: 16 }}
                contentContainerStyle={{ gap: 16, padding: 4, paddingBottom: 100 }}
                data={campsiteList}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={renderItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
            />
            <SortModal
                isVisible={isVisible}
                okText={'Save'}
                noText={'Cancel'}
                headerTitle={'정렬'}
                onPressOk={() => setIsVisible(false)}
                onPressNo={() => setIsVisible(false)}
                sortBy={sortBy}
                setSortBy={setSortBy}
                list={sortTypeList}
            />
        </SafeAreaView>
    );
};

export default Camping;