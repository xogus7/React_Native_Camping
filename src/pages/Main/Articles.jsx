import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";
import useArticles from "@hooks/useArticles";

const bannerImage = require('@images/splash.jpeg');
const downArrow = require('@icons/down_arrow.png')
const defaultThumbnailImage = require('@images/default_article_thumb.png')

const Articles = ({ navigation }) => {
    const { articles, sortBy } = useArticles();

    const renderItem = ({ item }) => {
        const onPressArticle = () =>
            navigation.navigate('ArticleDetail', { id: item.id });

        return (
            <TouchableOpacity
                style={{ borderRadius: 8, overflow: 'hidden' }}
                onPress={onPressArticle}>
                {(
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={defaultThumbnailImage}
                    />
                )}
                <View
                    style={{
                        backgroundColor: COLOR.WHITE,
                        padding: 12,
                        gap: 8,
                    }}>
                    <Text
                        style={{
                            color: COLOR.PURPLE,
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>
                        {item.title}
                    </Text>
                    <Text style={{ color: COLOR.PURPLE }} numberOfLines={2}>
                        {item.content}
                    </Text>
                    <Text style={{ color: COLOR.GRAY_2 }}>
                        {item.createDate}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title="아티클"
                leftButtonName="menu" rightButtonName="search" />

            {/* Banner */}
            <View
                style={styles.bannerContainer}>
                <View style={{ height: '100%', width: '100%' }}>
                    <Image
                        style={styles.bannerImage}
                        source={bannerImage}
                    />
                    <View
                        style={styles.bannerTextContainer}>
                        <Text
                            style={{ color: COLOR.PURPLE, fontSize: 36, fontWeight: 'bold' }}>
                            각종 캠핑 정보
                        </Text>
                        <Text style={{ color: COLOR.PURPLE }}>
                            캠핑 투게더가 제공하는 각종 꿀팁으로{'\n'}
                            캠핑을 더 풍성하게 즐겨보세요
                        </Text>
                    </View>
                </View>
            </View>


            {/* Sort By */}
            <View style={styles.sortByContainer}>
                <Text style={styles.sortByText}>Sort By:</Text>
                <TouchableOpacity style={styles.sortButton}>
                    <Text>{sortBy.name}</Text>
                    <Image source={downArrow} style={{ width: 16, height: 16 }} />
                </TouchableOpacity>
            </View>


            {/* List */}
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ padding: 16, paddingBottom: 100, gap: 16 }}
                data={articles}
                renderItem={renderItem}
                scrollEventThrottle={1}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        marginHorizontal: 16,
        height: 160,
        zIndex: -1,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        position: 'absolute',
    },
    bannerTextContainer: {
        flex: 1,
        paddingTop: 12,
        paddingBottom: 20,
        paddingHorizontal: 28,
    },
    sortByContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginHorizontal: 16,
        marginVertical: 18,
    },
    sortByText: { flex: 1, color: COLOR.PURPLE },
    sortButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        backgroundColor: COLOR.WHITE,
        alignItems: 'center',
    },
});

export default Articles;