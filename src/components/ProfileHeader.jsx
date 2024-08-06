import {COLOR} from '@styles/color';
import { timeToDiffString } from '@utils/dateFormat';
import React from 'react';
import {Image, Text, View} from 'react-native';


const ProfileHeader = ({imageUrl, nickname, createDate}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Image
        style={{width: 32, height: 32, borderRadius: 20}}
        source={{ uri:imageUrl}}
      />
      <View>
        <Text style={{fontWeight: '700', color: COLOR.PURPLE}}>{nickname}</Text>
        {createDate && <View style={{flexDirection: 'row', gap: 4}}>
          <Text style={{color: COLOR.PURPLE, fontSize: 12, opacity: 0.5}}>
            {timeToDiffString(createDate)}
          </Text>
        </View>}
      </View>
    </View>
  );
};

export default ProfileHeader;