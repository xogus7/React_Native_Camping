import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, View, Image, ScrollView,
    TextInput, TouchableOpacity, Text, StyleSheet, Keyboard
} from 'react-native';
import { COLOR } from '@styles/color';
import BasicHeader from '@components/BasicHeader';
import ProfileHeader from '@components/ProfileHeader';
import { likeOnIcon, replyIcon } from '@icons';
import { putCommunityLike } from '@libs/apis';

const defaultProfileImageUrl = 'https://avatar.iran.liara.run/public'

const CommunityDetail = ({ navigation, route }) => {

    const [comment, setComment] = useState('');
    const item = route.params

    const onChangeComment = (text) => setComment(text);
    const onPressBackButton = () => navigation.goBack();
    const onPressLike = async () => await putCommunityLike(item.id);
    const onPressCommentSubmitButton = () => {

        Keyboard.dismiss();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader
                title="커뮤니티 상세보기"
                leftButtonName="back"
                onPressLeftButton={onPressBackButton}
            />
            <View
                style={{
                    flex: 1,
                    margin: 16,
                    backgroundColor: COLOR.WHITE,
                    borderRadius: 8,
                }}>
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <View style={styles.profileHeaderWrapper}>
                        <ProfileHeader
                            imageUrl={defaultProfileImageUrl}
                            nickname={item.nickname}
                            createDate={item.replys[0]?.createDate}
                        />
                    </View>
                    <Text style={{ color: COLOR.PURPLE, fontSize: 18, fontWeight: 700 }}>
                        {item.subject}
                    </Text>
                    <Text style={{ color: COLOR.PURPLE, marginVertical: 20 }}>
                        {item.content}
                    </Text>
                    <View
                        style={{ flexDirection: 'row', gap: 16, justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={onPressLike}
                            style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                            <Image source={likeOnIcon} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                            <Text>{item.like}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                            <Image source={replyIcon} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                            <Text>{item.replyCount}</Text>
                        </View>
                    </View>

                    <Text style={{ color: COLOR.PURPLE, fontWeight: '700', fontSize: 16, marginBottom: 20 }}>
                        댓글
                    </Text>
                    <View style={{ gap: 16 }}>
                        {item.replys.map(item => (
                            <View key={item.id} style={{ gap: 8 }}>
                                <ProfileHeader
                                    createDate={item.createDate}
                                    imageUrl={defaultProfileImageUrl}
                                    nickname={item.nickname}
                                />
                                <Text style={{ color: COLOR.PURPLE }}>{item.reply}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* 댓글 입력 */}
                <View style={styles.commentInputContainer}>
                    <TextInput
                        style={styles.commentInput}
                        placeholder="댓글을 입력하세요"
                        placeholderTextColor={`${COLOR.PURPLE}50`}
                        onChangeText={onChangeComment}
                    />
                    <TouchableOpacity
                        style={[styles.commentSubmitButton,
                        { backgroundColor: comment ? COLOR.ORANGE : COLOR.WHITE }
                        ]}
                        onPress={onPressCommentSubmitButton}>
                        <Text style={[styles.commentSubmitButtonText,
                        { color: comment ? COLOR.WHITE : '#C3C3C3' }
                        ]}>등록</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    profileHeaderWrapper: {
        paddingBottom: 16,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: COLOR.WHITE_ORANGE,
        borderBottomWidth: 1,
    },
    commentInputContainer: {
        padding: 16,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 8,
    },
    commentInput: {
        flex: 1,
        color: COLOR.PURPLE,
        paddingHorizontal: 16,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
    },
    commentSubmitButton: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    commentSubmitButtonText: {
        fontSize: 18,
        fontWeight: '700',
    },
});

export default CommunityDetail;