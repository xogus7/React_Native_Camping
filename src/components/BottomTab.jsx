import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Image  } from 'react-native';
import { articlesOffIcon, articlesOnIcon, campingOffIcon, campingOnIcon, 
    communityOffIcon, communityOnIcon, settingOffIcon, settingOnIcon } from '@icons/bottomtab'
const bottomTabBackgroundImage = require('@images/bottomtab_background.png')

const BottomTab = ({ state, navigation, insets, descriptors }) => {
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

    return (
        <View style={[styles.bottomTabBarWrapper, {paddingBottom: insets.bottom}]}>
            <Image source={bottomTabBackgroundImage} style={styles.bottomTabBackground}/>
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

                        scaleAnimated(1, animatedOf).start(({ finished}) => {
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
                                width: 24,
                                height: 24,
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
        borderStyle: 'solid',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#EEE',
        backgroundColor: '#FFF',
        paddingTop: 5,
        zIndex: 10
    },
    bottomTabBackground: {
        width,
        height: 80,
        position: 'absolute',
        bottom: 0,
        zIndex: -1
    }
})

export default BottomTab;