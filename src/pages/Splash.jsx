import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';

const splashImage = require('@images/splash.jpeg')

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Introduction')
        }, 1000)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={splashImage} />
            </View>
        </SafeAreaView>
    )
}

export default Splash;