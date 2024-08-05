import { COLOR } from "@styles/color";
import { Image, StyleSheet, Text, View } from "react-native";

const Banner = ({ title, titleFontSize, content, contentOpacity, source, component }) => {
    return (
        <View style={styles.bannerContainer}>
            <View style={{ height: '100%', width: '100%' }}>
                <Image style={styles.bannerImage}
                    source={source}
                />
                <View style={styles.bannerTextContainer}>
                    <Text
                        style={{ color: COLOR.PURPLE, fontSize: titleFontSize, fontWeight: 'bold' }}>
                        {title}
                    </Text>
                    <Text style={{ color: COLOR.PURPLE, opacity: contentOpacity }}>
                        {content}
                    </Text>
                    {component}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerContainer: {
        marginHorizontal: 16,
        height: 160,
        zIndex: -1,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        position: 'absolute',
        backgroundColor: COLOR.WHITE
    },
    bannerTextContainer: {
        flex: 1,
        paddingTop: 12,
        paddingBottom: 20,
        paddingHorizontal: 28,
        justifyContent: 'space-between'
    }
});

export default Banner;