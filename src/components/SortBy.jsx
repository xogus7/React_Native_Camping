import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { chevronDownIcon } from '@icons'
import { COLOR } from "@styles/color";


const SortBy = ({sortBy, onPress}) => {
    return (
        <View style={styles.sortByContainer}>
            <Text style={styles.sortByText}>Sort By:</Text>
            <TouchableOpacity style={styles.sortButton} onPress={onPress}>
                <Text>{sortBy.name}</Text>
                <Image source={chevronDownIcon} style={{ width: 16, height: 16 }} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    sortByContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginHorizontal: 16,
        marginVertical: 18,
    },
    sortByText: { flex: 1, color: COLOR.PURPLE },
    sortButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        backgroundColor: COLOR.WHITE,
        alignItems: 'center',
    },
});

export default SortBy;