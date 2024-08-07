import React, { useCallback } from 'react';
import {
    Image, Linking, SafeAreaView, ScrollView, StyleSheet,
    Text, View, useWindowDimensions
} from 'react-native';
import { COLOR } from '@styles/color';
import BasicHeader from '@components/BasicHeader';
import TextButton from '@components/TextButton';

const CampingDetail = ({ navigation, route }) => {
    const { width } = useWindowDimensions();
    const { firstImageUrl, facltNm, intro, featureNm, caravInnerFclty,
        addr1, facltDivNm, mangeDivNm, resveCl, tel
    } = route.params;

    const onPressCall = useCallback(() => {
        Linking.openURL(`tel:${tel}`).catch(error => {
            console.warn(error);
        });
    }, [tel]);

    const onPressBackButton = useCallback(() => navigation.goBack(), []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader
                title="캠핑장 상세 정보"
                leftButtonName="back"
                onPressLeftButton={onPressBackButton}
            />

            <Image style={{ width, height: 250 }} source={{ uri: firstImageUrl }} />

            <ScrollView
                style={{ flex: 1, backgroundColor: COLOR.WHITE }}
                contentContainerStyle={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                        <Text style={styles.divNm}>{facltDivNm}</Text>
                        <View style={{ height: 8, width: 1, backgroundColor: '#C3C3C3' }} />
                        <Text style={styles.divNm}>{mangeDivNm}</Text>
                    </View>
                    <Text style={{ color: '#919191', fontWeight: 700 }}>{resveCl}</Text>
                </View>
                <View style={{ gap: 4 }}>
                    {/* 야영장명 */}
                    <Text style={styles.facltNm}>{facltNm}</Text>
                    {/* 주소 */}
                    <Text style={styles.addr}>{addr1}</Text>
                    {/* 카라반 - 내부시설 */}
                    <Text style={styles.text}>{caravInnerFclty ?? '내부시절 정보가 없습니다.'}</Text>
                </View>
                <Text style={styles.intro}>소개 및 안내</Text>
                {/* 소개 || 특징 */}
                <Text style={styles.text}>{(intro || featureNm) ?? '소개 및 안내 정보가 없습니다.'}</Text>
            </ScrollView>

            <View style={{ padding: 16 }}>
                <TextButton
                    text="전화하기"
                    onPress={onPressCall}
                    backgroundColor={COLOR.ORANGE}
                    height={60}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    facltNm: {
        color: '#383838',
        fontWeight: 'bold',
        fontSize: 18,
    },
    intro: {
        color: '#3C3C3C',
        fontWeight: '700',
        opacity: 0.5,
        marginTop: 12
    },
    text: {
        color: '#383838',
        fontWeight: '700',
        marginTop: 8
    },
    addr: {
        color: '#707070',
        fontWeight: '700',
        fontSize: 13,
    },
    divNm: {
        color: COLOR.ORANGE,
        fontWeight: '700',
    },
});

export default CampingDetail;