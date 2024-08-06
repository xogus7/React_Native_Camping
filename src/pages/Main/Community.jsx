import { FlatList, Image, Pressable, RefreshControl, SafeAreaView, Text, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";
import { useIsFocused } from "@react-navigation/native";
import ProfileHeader from "@components/ProfileHeader";
import useCommunityList from "@hooks/useCommunityList";
import { useEffect, useState } from "react";
import { likeOnIcon, replyIcon } from "@icons/index";

const Community = ({navigation}) => {
    const isFocused = useIsFocused();
    const {communityList, getCommunityList, onPressLike} = useCommunityList();
    const defaultProfileImageUrl = 'https://avatar.iran.liara.run/public'
    const [refreshing, setRefreshing] = useState(false);
    
    useEffect(() => {
      if (isFocused) {
        getCommunityList();
      }
    }, [isFocused]);
  
    const renderItem = ({item}) => {
      const onPressCommunity = () =>
        navigation.navigate('CommunityDetail', {
          id: item.id,
        });
  
      return (
        <Pressable
          style={{
            backgroundColor: COLOR.WHITE,
            borderRadius: 8,
            height: 180,
          }}
          onPress={onPressCommunity}>
          <View style={{padding: 16}}>
            <ProfileHeader
              imageUrl={defaultProfileImageUrl}
              nickname={item.nickname}
              createDate={item.replys[0]?.createDate}
            />
          </View>
          <View style={{height: 1, backgroundColor: COLOR.WHITE_ORANGE}} />
          <View style={{padding: 16, flex: 1, gap: 8}}>
            <Text style={{color: COLOR.PURPLE, fontSize: 18, fontWeight: 700}}>
                {item.subject}
            </Text>
            <Text
              style={{color: COLOR.PURPLE}}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {item.content}
            </Text>
            <View
              style={{flexDirection: 'row', gap: 16, justifyContent: 'flex-end'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 1}}>
              <Image source={likeOnIcon} style={{width: 15, height: 15, resizeMode: 'contain'}}/>
                <Text>{item.like}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 1}}>
                <Image source={replyIcon} style={{width: 15, height: 15, resizeMode: 'contain'}}/>
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
    const onPressMenuButton = () => {};
    const onPressHeaderProfileImage = () => navigation.navigate('Profile');
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLOR.WHITE_ORANGE}}>
        <BasicHeader
          title="커뮤니티"
          leftButtonName="menu"
          onPressLeftButton={onPressMenuButton}
          rightImageUrl={defaultProfileImageUrl}
          onPressRightButton={onPressHeaderProfileImage}
        />
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{padding: 16, paddingBottom: 100, gap: 16}}
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