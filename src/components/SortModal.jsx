import { COLOR } from '@styles/color';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

const SortModal = ({ isVisible, okText, noText, headerTitle, onPressOk, onPressNo, sortBy, list, setSortBy}) => {
    return (
        <Modal
            useNativeDriver
            animationIn='fadeInUp'
            animationOut='fadeOutDown'
            animationInTiming={200}
            animationOutTiming={200}
            isVisible={isVisible}
            backdropOpacity={0.6}
            style={{
                margin: 0, justifyContent: 'flex-end', alignItems: 'center',

            }}>
            <View style={{
                width: 320,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: '#FFF',
                paddingTop: 8,
                width: '100%'
            }}>
                <View style={{
                    height: 32,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginBottom: 10
                }}>
                    <TouchableOpacity
                        onPress={onPressNo}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{
                            fontSize: 17, fontWeight: 700, color: COLOR.LIGHT_ORANGE,
                        }}>
                            {noText}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: 700, color: COLOR.PURPLE, left: -8 }}>
                        {headerTitle}
                    </Text>
                    <TouchableOpacity
                        onPress={onPressOk}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 17, fontWeight: 700, color: COLOR.LIGHT_ORANGE, }}>{okText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10
                }}>
                    {list && list.map((item) => (
                        <TouchableOpacity key={item.value}
                            style={{ marginBottom: 10}}
                            onPress={() => {
                                setSortBy(item);
                                onPressOk()
                                }}>
                            <Text style={{
                                fontSize: 17, fontWeight: 700,
                                color: item.name === sortBy.name ? COLOR.LIGHT_ORANGE : COLOR.PURPLE
                            }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                )}
                </View>
            </View>
        </Modal>
    )
}

export default SortModal;