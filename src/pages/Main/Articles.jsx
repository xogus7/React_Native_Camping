import { SafeAreaView, Text, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";

const Articles = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title={'아티클'} leftButtonName={'menu'} rightButtonName={'search'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Articles</Text>
            </View>
        </SafeAreaView>
    )
}

export default Articles;