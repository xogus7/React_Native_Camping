import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '@styles/color';
import BasicHeader from '@components/BasicHeader';
import {Banner} from '@components/Banner';
import TextButton from '@components/TextButton';
import SettingButton from '@components/SettingButton';

import { alramIcon, checkIcon, listIcon, moreIcon, notiIcon, phoneIcon,
} from '@icons';
import useAccounts from '@hooks/useAccounts';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const bannerImage = require('@images/profile_view.png');

const Settings = ({navigation}) => {
    const isFocused = useIsFocused();
    const {accountsInfo, isLoading, getAccounts} = useAccounts();

    useEffect(() => {
        if (isFocused) {
            getAccounts();
        }
      }, [isFocused]);

  const onPressViewButton = () => {
    navigation.navigate('ProfileDetail', {accountsInfo: accountsInfo});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.WHITE_ORANGE}}>
      <BasicHeader title="설정" leftButtonName={'menu'} />
      <Banner
        title={'프로필 보기'}
        titleFontSize={20}
        content={accountsInfo.email}
        contentOpacity={0.5}
        source={bannerImage}
        component={
          <TextButton
            text="View"
            onPress={onPressViewButton}
            backgroundColor={COLOR.ORANGE}
            width={120}
            height={40}
          />
        }
      />
      <View style={{paddingHorizontal: 16}}>
        <Text style={styles.sectionText}>일반</Text>
        <View style={{gap: 8}}>
          <SettingButton
            source={alramIcon}
            title="알람"
            description="마케팅 알람"
          />
          <SettingButton
            source={moreIcon}
            title="기타"
            description="그 외 설정"
          />
        </View>
        <Text style={styles.sectionText}>Support</Text>
        <View style={{gap: 8}}>
          <SettingButton source={phoneIcon} title="문의하기" />
          <SettingButton source={listIcon} title="자주묻는질문" />
          <SettingButton source={checkIcon} title="개인정보처리방침" />
          <SettingButton source={notiIcon} title="앱정보" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionText: {
    color: COLOR.PURPLE,
    fontSize: 16,
    paddingVertical: 16,
  },
});

export default Settings;