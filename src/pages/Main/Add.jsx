import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { COLOR } from '@styles/color';
import BasicHeader from '@components/BasicHeader';
import { postCommunity } from '@libs/apis';

const Add = ({ navigation }) => {
    const [inputForm, setinputForm] = useState({
        title: '',
        content: '',
    });

    const onChangeTitle = useCallback(
        (title) => setinputForm(state => ({ ...state, title })),
        [],
    );
    const onChangeContent = useCallback(
        (content) => setinputForm(state => ({ ...state, content })),
        [],
    );
    const onPressBackButton = useCallback(() => navigation.goBack(), []);
    const onPressWriteButton = async () => {
        const response = await postCommunity(inputForm);
        if (!response.success) {
            console.warn(error);
        }
        navigation.navigate('Community');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader
                title="새 글 쓰기"
                leftButtonName="back"
                onPressLeftButton={onPressBackButton}
                rightButtonName="edit"
                onPressRightButton={onPressWriteButton}
            />
            <View style={styles.editor}>
                <TextInput
                    style={styles.titleInput}
                    placeholder="제목을 입력해주세요"
                    placeholderTextColor={`${COLOR.PURPLE}aa`}
                    value={inputForm.title}
                    onChangeText={onChangeTitle}
                />
                <TextInput
                    style={styles.contentInput}
                    value={inputForm.content}
                    onChangeText={onChangeContent}
                    multiline
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    editor: { flex: 1, margin: 16 },
    titleInput: {
        paddingHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: COLOR.WHITE,
        color: COLOR.PURPLE,
    },
    contentInput: {
        flex: 1,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: COLOR.WHITE,
        color: COLOR.PURPLE,
        textAlignVertical: 'top',
    },
});

export default Add;