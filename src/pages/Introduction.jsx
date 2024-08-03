import { SafeAreaView, Text, View } from "react-native";
import BasicHeader from "@components/BasicHeader";

const Introduction = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <BasicHeader title={'Introduction'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Introduction</Text>
        </View>
        </SafeAreaView>
    )
}

export default Introduction;