import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {chevronRightIcon} from '@icons';
import {COLOR} from '@styles/color';

const SettingButton = ({source, title, description, rightText}) => {
  return (
    <TouchableOpacity style={styles.settingButton}>
      <View style={styles.iconWrapper}>
        <Image
          style={{width: 20, height: 20}}
          source={source}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 16, color: COLOR.PURPLE}}>{title}</Text>
        {description && (
          <Text style={{fontSize: 16, color: `${COLOR.PURPLE}`, opacity: 0.5}}>
            {description}
          </Text>
        )}
      </View>
      <View style={styles.rightContents}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        <Image source={chevronRightIcon} style={{width: 20, height: 20}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: COLOR.WHITE_ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  rightContents: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  rightText: {
    fontSize: 16,
    color: `${COLOR.PURPLE}`,
    fontWeight: '700',
    lineHeight: 16,
  },
});

export default SettingButton;