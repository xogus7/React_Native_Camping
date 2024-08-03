import { SafeAreaView, Text, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";

const Community = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title={'커뮤니티'} leftButtonName={'menu'} rightImageUrl={'https://avatar.iran.liara.run/public'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Community</Text>
            </View>
        </SafeAreaView>
    )
}

export default Community;