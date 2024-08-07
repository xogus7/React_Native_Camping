import React, { useCallback } from 'react';
import {
    FlatList, Image, SafeAreaView, ScrollView, Text, View, useWindowDimensions
} from 'react-native';
import BasicHeader from '@components/BasicHeader';
import { COLOR } from '@styles/color';
import { timeToDiffString } from '@utils/dateFormat';

const defaultThumbnailImage = require('@images/default_article_thumb.png')

const ArticleDetail = ({ navigation, route }) => {
    const { width } = useWindowDimensions();
    const { item } = route.params;

    const onPressBackButton = () => navigation.goBack();
    const onPressBookmarkButton = () => {
    };

    const renderItem = useCallback(({ item }) => {
        return (
            <Image
                style={{
                    width: width - 40, height: '100%',
                    borderRadius: 16, marginHorizontal: 20
                }}
                source={item.imgPath ?
                    { uri: `http://${item.imgPath}` } : defaultThumbnailImage}
            />
        );
    },
        []);

    const { title, content, createDate, articleImages } = item;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader
                title="아티클 상세보기"
                leftButtonName="back"
                rightButtonName="bookmark"
                onPressLeftButton={onPressBackButton}
                onPressRightButton={onPressBookmarkButton}
                rightButtonSize={45}
            />

            <FlatList
                style={{ width: '100%', height: 300 }}
                data={articleImages}
                renderItem={renderItem}
                decelerationRate={1}
                snapToInterval={width}
                horizontal
            />
            <ScrollView
                style={{ marginHorizontal: 16 }}
                contentContainerStyle={{ paddingVertical: 16 }}
                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLOR.WHITE,
                        padding: 12,
                        borderRadius: 8,
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLOR.PURPLE }}>
                        {title}
                    </Text>
                    <Text style={{
                        color: COLOR.PURPLE, opacity: 0.5, textAlign: 'right',
                        marginVertical: 8
                    }}>
                        {timeToDiffString(createDate)}
                    </Text>
                    <Text style={{ color: COLOR.PURPLE, marginTop: 4 }}>{content}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ArticleDetail;