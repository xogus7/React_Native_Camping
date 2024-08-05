import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { COLOR } from '@styles/color';
import { postAuth } from '@libs/apis';

const Introduction = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const [itemWidth, setItemWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPressSkipButton = () => { 
        postAuth();
        navigation.navigate('MainTab'); };
    const onPressNextButton = () => { if (currentIndex < 3) setCurrentIndex(currentIndex + 1) };
    const onPressStartButton = () => { navigation.navigate('MainTab') };
    const indexToOffset = () => { return { x: currentIndex * itemWidth, y: 0 } };

    const renderItem = ({ item }) => {
        const { title, image, description } = item;
        return (
            <View style={{ width, alignItems: 'center' }}>
                <Text style={{ color: COLOR.PURPLE, fontSize: 32, fontWeight: '700', marginTop: 80 }}>
                    {title}
                </Text>
                <Image
                    style={{ width: width * 0.9, maxHeight: 500 }}
                    source={image}
                    resizeMode="contain"
                />
                <Text
                    style={{ color: COLOR.PURPLE, textAlign: 'center', fontWeight: '700', fontSize: 17 }}>
                    {description}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ flex: 1 }}>
                {/* Carousel */}
                <FlatList
                    data={introductionData}
                    renderItem={renderItem}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 90 }}
                    onViewableItemsChanged={({ viewableItems }) => {
                        if (viewableItems[0]) setCurrentIndex(viewableItems[0].index);
                    }}
                    snapToInterval={width}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    decelerationRate={1}
                    contentOffset={indexToOffset()}
                    onContentSizeChange={w => setItemWidth(w / introductionData.length)}
                />

                {/* Onboarding */}
                {(currentIndex != 3) ?
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: 32,
                        marginBottom: 88
                    }}>

                        <TextButton text="Skip" onPress={onPressSkipButton} />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Indicator length={introductionData.length} currentIndex={currentIndex} />
                        </View>
                        <TextButton text="Next" onPress={onPressNextButton} />
                    </View>
                    : <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: 22,
                        marginBottom: 68
                    }}>

                        <TextButton text="시작하기"
                            onPress={onPressStartButton}
                            backgroundColor={COLOR.ORANGE}
                            width={'100%'}
                            height={60}
                        />
                    </View>
                }
            </View>
        </SafeAreaView>
    );
};

const Indicator = ({ currentIndex, length }) => {
    return (
        <View style={{ flexDirection: 'row', gap: 8 }}>
            {Array.from(Array(length)).map((_, index) => (
                <View
                    key={index}
                    style={{
                        width: 13,
                        height: 13,
                        borderRadius: 100,
                        backgroundColor:
                            currentIndex === index ? COLOR.PURPLE : '#F9B566',
                    }}
                />
            ))}
        </View>
    );
};

const TextButton = ({ text, backgroundColor, onPress, width, height }) => {
    return (
        <TouchableOpacity
            style={{
                width, height,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor,
                borderRadius: 8,
            }}
            onPress={onPress}>
            <Text style={{ color: COLOR.PURPLE, fontSize: 17, fontWeight: '700' }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const HighlightedText = ({ text }) => {
    return <Text style={{ color: COLOR.LIGHT_ORANGE }}>{text}</Text>;
}

const introductionData = [
    {
        title: '캠핑투게더 사용법',
        image: require('@images/introduction/introduction1.png'),
        description: (
            <Text>
                캠핑투게더는 <HighlightedText text="캠핑장 위치" />와{'\n'}
                <HighlightedText text="캠핑 커뮤니티" />를 제공합니다
            </Text>
        ),
    },
    {
        title: '캠핑장 추천',
        image: require('@images/introduction/introduction2.png'),
        description: (
            <Text>
                캠핑전문가들이 제공하는
                {'\n'}
                <HighlightedText text="질 높은 아티클" />로 시간을 아끼세요.
            </Text>
        ),
    },
    {
        title: '캠핑장 정보',
        image: require('@images/introduction/introduction3.png'),
        description: (
            <Text>
                대한민국 <HighlightedText text="캠핑장 정보" />를 모두 알아보고
                {'\n'}
                원하는 곳을 가보세요!
            </Text>
        ),
    },
    {
        title: '캠핑 커뮤니티',
        image: require('@images/introduction/introduction4.png'),
        description: (
            <Text>
                <HighlightedText text="캠핑 커뮤니티" />에 참여하여
                {'\n'}
                같이 캠핑 갈 멤버를 <HighlightedText text="모집" />
                해보세요.
            </Text>
        ),
    },
];

export default Introduction;