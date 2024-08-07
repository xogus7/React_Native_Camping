import {COLOR} from '@styles/color';
import {Image, StyleSheet, Text, View} from 'react-native';
import {clockIcon, bookmarkIcon} from '@icons';

export const Banner = ({
  title,
  titleFontSize,
  content,
  contentOpacity,
  source,
  component,
  marginTop,
}) => {
  return (
    //margin top추가
    <View style={[styles.bannerContainer, {marginTop}]}>
      <View style={{height: '100%', width: '100%'}}>
        <Image style={styles.bannerImage} source={source} />
        <View style={styles.bannerTextContainer}>
          <Text
            style={{
              color: COLOR.PURPLE,
              fontSize: titleFontSize,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text style={{color: COLOR.PURPLE, opacity: contentOpacity}}>
            {content}
          </Text>
          {component}
        </View>
      </View>
    </View>
  );
};

export const ProfileBanner = ({
  marginTop,
  source,
  name,
  content,
  leftSectionTitle,
  leftSectionData,
  rightSectionTitle,
  rightSectionData,
}) => {
  return (
    <View style={[styles.bannerContainer, {marginTop}]}>
      <View style={{height: '100%', width: '100%'}}>
        <View style={styles.bannerBackground} />
        <View style={styles.infoContainer}>
          <Image style={styles.profileIconImg} source={{uri: source}} />
          <View style={{gap: 4}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: COLOR.PURPLE}}>
              {name}
            </Text>
            <Text
              style={{fontWeight: '500', color: COLOR.PURPLE, opacity: 0.5}}>
              {content}
            </Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 0.5,
              borderRightColor: COLOR.WHITE_ORANGE,
              borderRightWidth: 1,
            }}>
            <View style={[styles.profileSection]}>
              <View>
                <Text style={{color: COLOR.PURPLE, opacity: 0.5}}>
                  {leftSectionTitle}
                </Text>
                <Text
                  style={{
                    color: COLOR.PURPLE,
                    fontSize: 24,
                    fontWeight: '700',
                  }}>
                  {leftSectionData}
                </Text>
              </View>
              <View style={styles.sectionLeftIcon}>
                <Image source={clockIcon} style={{width: 18, height: 18}} />
              </View>
            </View>
          </View>

          <View style={{flex: 0.5}}>
            <View style={styles.profileSection}>
              <View>
                <Text style={{color: COLOR.PURPLE, opacity: 0.5}}>
                  {rightSectionTitle}
                </Text>
                <Text
                  style={{
                    color: COLOR.PURPLE,
                    fontSize: 24,
                    fontWeight: '700',
                  }}>
                  {rightSectionData}
                </Text>
              </View>

              <Image source={bookmarkIcon} style={{width: 40, height: 40}} />
            </View>
          </View>
        </View>
      </View>
    </View>
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
    backgroundColor: COLOR.WHITE,
  },
  bannerTextContainer: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 20,
    paddingHorizontal: 28,
    justifyContent: 'space-between',
  },
  bannerBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: COLOR.WHITE,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.WHITE_ORANGE,
  },
  profileIconImg: {
    width: 60,
    height: 60,
  },
  profileSection: {
    flex: 1,
    margin: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLeftIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.WHITE_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});