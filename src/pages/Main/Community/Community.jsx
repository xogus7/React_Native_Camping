import { useEffect, useState } from "react";
import {
  FlatList, Image, Pressable, RefreshControl,
  SafeAreaView, Text, TouchableOpacity, View
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";
import ProfileHeader from "@components/ProfileHeader";
import useCommunityList from "@hooks/useCommunityList";
import { putCommunityLike } from "@libs/apis";

import { likeOnIcon, replyIcon } from "@icons";
const defaultProfileImageUrl = 'https://avatar.iran.liara.run/public'

const Community = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { communityList, getCommunityList } = useCommunityList();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (isFocused) {
      getCommunityList();
    }
  }, [isFocused]);

  const renderItem = ({ item }) => {
    const onPressCommunity = () => navigation.navigate('CommunityDetail', item);
    const onPressLike = async () => {
      const response = await putCommunityLike(item.id);
      if (response.success) await getCommunityList()
    }
    return (
      <Pressable
        style={{
          backgroundColor: COLOR.WHITE,
          borderRadius: 8,
        }}
        onPress={onPressCommunity}>
        <View style={{ padding: 16 }}>
          <ProfileHeader
            imageUrl={defaultProfileImageUrl}
            nickname={item.nickname}
            createDate={item.replys[0]?.createDate}
          />
        </View>
        <View style={{ height: 1, backgroundColor: COLOR.WHITE_ORANGE }} />
        <View style={{ paddingHorizontal: 16, flex: 1, gap: 8 }}>
          <Text style={{ color: COLOR.PURPLE, fontSize: 18, fontWeight: 700 }}>
            {item.subject}
          </Text>
          <Text
            style={{ color: COLOR.PURPLE, marginVertical: 10 }}
            numberOfLines={3}>
            {item.content}
          </Text>
          <View
            style={{ flexDirection: 'row', gap: 16, justifyContent: 'flex-end', paddingBottom: 10 }}>
            <TouchableOpacity onPress={onPressLike}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
              <Image source={likeOnIcon}
                style={{
                  width: 15, height: 15, resizeMode: 'contain',
                  opacity: item.likeCheck ? 1 : 0.5
                }} />
              <Text>{item.like}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
              <Image source={replyIcon} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
              <Text>{item.replyCount}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  const onRefresh = () => {
    setRefreshing(true);
    getCommunityList();
    setRefreshing(false);
  };
  const onPressMenuButton = () => { };
  const onPressHeaderProfileImage = () => { };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
      <BasicHeader
        title="커뮤니티"
        leftButtonName="menu"
        onPressLeftButton={onPressMenuButton}
        rightImageUrl={defaultProfileImageUrl}
        onPressRightButton={onPressHeaderProfileImage}
      />
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 100, gap: 16 }}
        data={communityList}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Community;