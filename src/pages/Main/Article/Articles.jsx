import { useEffect, useState } from "react";
import {
    FlatList, Image, Pressable, RefreshControl, SafeAreaView,
    StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { COLOR } from "@styles/color";
import { Banner } from "@components/Banner";
import BasicHeader from "@components/BasicHeader";
import SortBy from "@components/SortBy";
import SortModal from "@components/SortModal";

import useArticles from "@hooks/useArticles";
import { postArticleFavorite } from "@libs/apis";
import { timeToDiffString } from "@utils/dateFormat";

import { bookmarkIcon } from '@icons'
const bannerImage = require('@images/splash.png');
const defaultThumbnailImage = require('@images/default_article_thumb.png')

const Articles = ({ navigation }) => {
    const { articles, sortBy, setSortBy, sortTypeList, getArticleList, isLoading } = useArticles();
    const [isVisible, setIsVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getArticleList(sortBy)
    }, [sortBy])

    const renderItem = ({ item }) => {

        const onPressArticle = () =>
            navigation.navigate('ArticleDetail', { item });

        return (
            <Pressable
                style={{ borderRadius: 8, overflow: 'hidden' }}
                onPress={onPressArticle}>

                <Image style={{ width: '100%', height: 200 }}
                    source={item.articleImages[0]?.imgPath ?
                        { uri: `http://${item.articleImages[0].imgPath}` }
                        : defaultThumbnailImage}
                />

                <View style={{ backgroundColor: COLOR.WHITE, padding: 12, gap: 8 }}>
                    <Text style={{ color: COLOR.PURPLE, fontSize: 18, fontWeight: 'bold' }}>
                        {item.title}
                    </Text>
                    <Text style={{ color: COLOR.PURPLE }} numberOfLines={2}>
                        {item.content}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLOR.PURPLE, opacity: 0.5 }}>
                            {timeToDiffString(item.createDate)}
                        </Text>
                        <TouchableOpacity onPress={() => onPressBookmark(item.id)}
                            style={{
                                backgroundColor: item.isFavorite ? '#FFED00' : null,
                                borderRadius: 100,
                            }}
                        >
                            <Image source={bookmarkIcon} style={{ width: 32, height: 32, }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
        );
    };

    const onPressSortBy = () => setIsVisible(true);

    const onPressBookmark = async (id) => {
        const response = await postArticleFavorite(id);
        console.log(response.success)
        if (response.success)
            await getArticleList(sortBy);
    }
    const onRefresh = () => {
        setRefreshing(true);
        getArticleList(sortBy);
        setRefreshing(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title="아티클"
                leftButtonName="menu" rightButtonName="search" />
            <Banner
                title={'각종 캠핑 정보'}
                titleFontSize={36}
                content={`캠핑 투게더가 제공하는 각종 꿀팁으로${'\n'}캠핑을 더 풍성하게 즐겨보세요`}
                source={bannerImage}
            />

            {/* Sort By */}
            <SortBy sortBy={sortBy} onPress={onPressSortBy} />

            {/* List */}
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100, gap: 16 }}
                data={articles}
                renderItem={renderItem}
                scrollEventThrottle={1}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
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

export default Articles;