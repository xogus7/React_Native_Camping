import { SafeAreaView, Text, View } from "react-native";
import { COLOR } from "@styles/color";
import BasicHeader from "@components/BasicHeader";

const Camping = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE_ORANGE }}>
            <BasicHeader title={'캠핑투게더'} leftButtonName={'menu'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Camping</Text>
            </View>
        </SafeAreaView>
    )
}

export default Camping;