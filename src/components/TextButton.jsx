import { COLOR } from "@styles/color";
import { Text, TouchableOpacity } from "react-native";

const TextButton = ({ text, backgroundColor, onPress, width, height }) => {
    return (
        <TouchableOpacity
            style={{
                width, height,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor,
                borderRadius: 8,
            }}
            onPress={onPress}>
            <Text style={{ color: COLOR.PURPLE, fontSize: 17, fontWeight: '700' }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default TextButton;