import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Image, useWindowDimensions } from 'react-native';
import {
    articlesOffIcon, articlesOnIcon, campingOffIcon, campingOnIcon,
    communityOffIcon, communityOnIcon, settingOffIcon, settingOnIcon,
    plusButtonIcon
} from '@icons'

const bottomTabBackgroundImage = require('@images/bottomtab_background.png')

const BottomTab = ({ state, navigation, insets, descriptors }) => {
    const { width } = useWindowDimensions();
    const height = 70;

    const tab1Value = useRef(new Animated.Value(0)).current;
    const tab2Value = useRef(new Animated.Value(0)).current;
    const tab3Value = useRef(new Animated.Value(0)).current;
    const tab4Value = useRef(new Animated.Value(0)).current;
    const tab5Value = useRef(new Animated.Value(0)).current;

    const scaleAnimated = (value, animatedValue) =>
        Animated.timing(animatedValue, {
            useNativeDriver: true,
            toValue: value,
            duration: 150
        });
    const animatedValues = {
        0: tab1Value,
        1: tab2Value,
        2: tab3Value,
        3: tab4Value,
        4: tab5Value,
    };

    const onPressAddButton = () => navigation.navigate('Add');

    return (
        <View style={[styles.bottomTabBarWrapper]}>
            <Image source={bottomTabBackgroundImage}
                style={styles.bottomTabBackground}
                resizeMode='contain'
            />
            <TouchableOpacity
                onPress={onPressAddButton}
                style={{
                    position: 'absolute',
                    left: width / 2 - 64 / 2,
                    bottom: height - 20,
                    width: 64,
                    height: 64,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                }}
            >
                <Image
                    source={plusButtonIcon}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
            </TouchableOpacity>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = route.name;
                    const isFocused = state.index === index;
                    const animatedOf = animatedValues[index];

                    const iconFlag = (bool) => {
                        switch (label) {
                            case 'Camping':
                                return bool ? campingOnIcon : campingOffIcon;
                            case 'Articles':
                                return bool ? articlesOnIcon : articlesOffIcon;
                            case 'Community':
                                return bool ? communityOnIcon : communityOffIcon;
                            default:
                                return bool ? settingOnIcon : settingOffIcon;
                        }
                    }

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }

                        scaleAnimated(1, animatedOf).start(({ finished }) => {
                            if (finished) {
                                scaleAnimated(0, animatedOf).start();
                            }
                        })
                    }
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.7}
                            onPress={onPress}
                            style={{ flex: 1, alignItems: 'center' }}>
                            <Animated.Image
                                source={iconFlag(isFocused)}
                                resizeMode={'contain'}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginTop: 24,
                                    marginBottom: 16,
                                    transform: [
                                        {
                                            scale: animatedOf.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 0.9],
                                            }),
                                        },
                                    ],
                                }}
                            />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}





const styles = StyleSheet.create({
    bottomTabBarWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        zIndex: 10
    },
    bottomTabBackground: {
        width: '100%',
        height: 80,
        position: 'absolute',
        zIndex: -1
    }
})

export default BottomTab;