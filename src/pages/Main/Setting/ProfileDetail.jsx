import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ProfileBanner } from '@components/Banner';
import BasicHeader from '@components/BasicHeader';
import SettingButton from '@components/SettingButton';
import { COLOR } from '@styles/color';


import { medalIcon, premiumIcon, moreIcon } from '@icons';

const ProfileDetail = ({ navigation, route }) => {
  const { accountsInfo } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
      <BasicHeader
        title="Profile"
        leftButtonName={'back'}
        rightButtonName={'edit'}
        onPressLeftButton={() => navigation.goBack()}
      />

      <ProfileBanner
        name={accountsInfo.nickName}
        marginTop={32}
        source={accountsInfo.profileImagePath ?? 'https://avatar.iran.liara.run/public'}
        content={accountsInfo.introduce ?? '자기소개를 적어주세요!'}
        leftSectionTitle="내가 쓴 글"
        leftSectionData={accountsInfo.communityCount}
        rightSectionTitle="즐겨찾기"
        rightSectionData={accountsInfo.favoriteCount}
      />

      <View style={{ paddingHorizontal: 16, marginTop: 11 }}>
        <View style={{ gap: 8 }}>
          <SettingButton source={premiumIcon} title="프리미엄 전환" />
          <SettingButton
            source={medalIcon}
            title="캠핑 기록"
            rightText={`${accountsInfo.communityCount}`}
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