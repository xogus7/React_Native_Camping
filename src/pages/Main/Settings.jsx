import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";
import Banner from "@components/Banner";
import TextButton from "@components/TextButton";

import {
    alramIcon, checkIcon, listIcon, moreIcon, notiIcon, phoneIcon,
    chevronRightIcon
} from '@icons'
const bannerImage = require('@images/profile_view.png')

const Settings = () => {
    const onPressViewButton = () => { }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title="설정" leftButtonName={'menu'} />
            <Banner
                title={'프로필 보기'}
                titleFontSize={20}
                content={'asd@asd.com'}
                contentOpacity={0.5}
                source={bannerImage}
                component={
                    <TextButton
                        text="View"
                        onPress={onPressViewButton}
                        backgroundColor={COLOR.ORANGE}
                        width={120}
                        height={40}
                    />}
            />
            <View style={{ paddingHorizontal: 16 }}>
                <Text style={styles.sectionText}>일반</Text>
                <View style={{ gap: 8 }}>
                    <SettingButton source={alramIcon} title="알람" description="마케팅 알람" />
                    <SettingButton source={moreIcon} title="기타" description="그 외 설정" />
                </View>
                <Text style={styles.sectionText}>Support</Text>
                <View style={{ gap: 8 }}>
                    <SettingButton source={phoneIcon} title="문의하기" />
                    <SettingButton source={listIcon} title="자주묻는질문" />
                    <SettingButton source={checkIcon} title="개인정보처리방침" />
                    <SettingButton source={notiIcon} title="앱정보" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const SettingButton = ({ source, title, description }) => {
    return (
        <TouchableOpacity
            style={styles.settingButton}>
            <View style={styles.iconWrapper}>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={source}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, color: COLOR.PURPLE }}>{title}</Text>
                {description && (
                    <Text style={{ fontSize: 16, color: `${COLOR.PURPLE}`, opacity: 0.5 }}>{description}</Text>
                )}
            </View>
            <Image source={chevronRightIcon} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    sectionText: {
        color: COLOR.PURPLE,
        fontSize: 16,
        paddingVertical: 16,
    },
    iconWrapper: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: COLOR.WHITE_ORANGE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingButton: {
        flexDirection: 'row',
                gap: 16,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: COLOR.WHITE,
                paddingVertical: 8,
                paddingHorizontal: 8,
                borderRadius: 12,
    }
});

export default Settings;