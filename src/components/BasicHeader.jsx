import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLOR } from '@styles/color';

const backIcon = require('@icons/back.png')
const menuIcon = require('@icons/menu.png')
const searchIcon = require('@icons/search.png')
const bookmarkIcon = require('@icons/bookmark.png')
const editIcon = require('@icons/edit.png')

const BasicHeader = ({ title, leftButtonName, rightButtonName,
    rightImageUrl, onPressLeftButton, onPressRightButton }) => {
    
    const renderImage = (name) => {
        switch(name) {
            case 'back': return backIcon;
            case 'menu': return menuIcon;
            case 'search': return searchIcon;
            case 'bookmark': return bookmarkIcon;
            case 'edit': return editIcon;
            default: return ;
        }
    }
    return (
        <View style={styles.headerWrapper}>
            {leftButtonName && 
                <TouchableOpacity onPress={onPressLeftButton} style={styles.leftButton}>
                    <Image source={renderImage(leftButtonName)} style={{width: '100%', height: '100%'}} />
                </TouchableOpacity>
            }
            {title && <Text style={styles.headerTitle}>{title}</Text>}
            {rightButtonName &&
                <TouchableOpacity onPress={onPressRightButton} style={styles.rightButton} >
                <Image source={renderImage(rightButtonName)} style={{width: '100%', height: '100%'}}/>
                </TouchableOpacity>
            }
            {rightImageUrl &&
                <TouchableOpacity onPress={onPressRightButton} style={styles.rightButton} >
                <Image source={{uri: rightImageUrl}} style={{width: 45, height: 45}} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: 65,
        marginTop: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        position: 'absolute',
        width: 65,
        height: 65,
        left: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButton: {
        position: 'absolute',
        width: 65,
        height: 65,
        right: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 32,
        textAlign: 'center',
        color: COLOR.PURPLE
    },
})

export default BasicHeader;