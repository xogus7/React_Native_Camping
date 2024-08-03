import { SafeAreaView, Text, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";

const Settings = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title={'Settings'} leftButtonName={'menu'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings</Text>
            </View>
        </SafeAreaView>
    )
}

export default Settings;