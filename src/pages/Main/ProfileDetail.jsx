import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '@styles/color';
import BasicHeader from '@components/BasicHeader';
import {ProfileBanner} from '@components/Banner';
import SettingButton from '@components/SettingButton';
import {medalIcon, premiumIcon, moreIcon} from '@icons';

const ProfileDetail = ({navigation, route}) => {
  const {accountsInfo = {}} = route.params;
  const {result = {}} = accountsInfo;

  // console.log('Received accountsInfo:', accountsInfo);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.WHITE_ORANGE}}>
      <BasicHeader
        title="Profile"
        leftButtonName={'back'}
        rightButtonName={'edit'}
        onPressLeftButton={() => navigation.goBack()}
      />

      <ProfileBanner
        name={result.nickName}
        marginTop={32}
        source={
          result.profileImagePath ?? 'https://avatar.iran.liara.run/public'
        }
        content={result.introduce ?? '자기소개를 적어주세요!'}
        leftSectionTitle="내가 쓴 글"
        leftSectionData={result.communityCount}
        rightSectionTitle="즐겨찾기"
        rightSectionData={result.favoriteCount}
      />

      <View style={{paddingHorizontal: 16, marginTop: 11}}>
        <View style={{gap: 8}}>
          <SettingButton source={premiumIcon} title="프리미엄 전환" />
          <SettingButton
            source={medalIcon}
            title="캠핑 기록"
            rightText={`${result.communityCount}`}
          />
          <SettingButton source={moreIcon} title="그외 메뉴들" />
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

export default ProfileDetail;
