import Svg from "atoms/Svg";
import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import COLORS from "values/colors";


type TProps = {
    selectorsShow: any;
    updateShowSelectors: any;
    name: string;
    choosen?: any;
    setChoosen?: any;
    data?: any;
    setFieldValue: any;
    errors: any;
    touched: any;
    disabled: any;
};
export const DropDown = ({
    name,
    choosen,
    data,
    selectorsShow,
    updateShowSelectors,
    setChoosen,
    setFieldValue,
    errors,
    touched,
    disabled
}: TProps) => {
    const [selectedIndex, setSelectedIndex] = useState<any>(null)

    const onShow = (value: boolean) => {
        return (
            updateShowSelectors({
                ...selectorsShow,
                [name.replace(/\s/g, '')]: value,
            }))
    }
    return (
        <>
            <View style={{ marginBottom: 8, }}>
                <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={.8}
                    onPress={() => onShow(true)}
                    style={[styles.Container, {
                        borderBottomColor:
                            errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]
                                ? COLORS.red
                                : COLORS.primary,
                    }]}
                >
                    <Text style={{ color: choosen[name.replace(/\s/g, '')]?.name != null ? COLORS.black : COLORS.placeHolder }}>{choosen[name.replace(/\s/g, '')]?.name == null ? name : choosen[name.replace(/\s/g, '')]?.name}</Text>
                    <Svg name='Arrow2' />
                </TouchableOpacity>
                <Text style={styles.errorText}>{touched[name.replace(/\s/g, '')] ? errors[name.replace(/\s/g, '')] : ''}</Text>

                <Modal
                    isVisible={selectorsShow[name.replace(/\s/g, '')]}
                    style={styles.Modal}
                    onBackdropPress={() => onShow(false)}
                    onBackButtonPress={() => onShow(false)}
                >
                    <View style={styles.Body}>
                        <FlatList
                            data={data}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={styles.Separator} />}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => {
                                    setSelectedIndex(index)
                                    setChoosen({ ...choosen, [name.replace(/\s/g, '')]: item })
                                    onShow(false)
                                    setFieldValue(name.replace(/\s/g, ''), ' ')
                                }}
                                    activeOpacity={.8}
                                    style={styles.DataContainer}>
                                    <Text style={{color:COLORS.black}}>{item.name}</Text>
                                    <View style={styles.Circle}>
                                        {index == selectedIndex && <View style={styles.SmallCircle} />}
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Modal>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    Container: {
        // borderBottomColor: COLORS.primary,
        width: '90%',
        height: 35,
        borderBottomWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 13
    },
    Modal: {
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    Body: {
        height: '35%',
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        padding: 20,
        paddingTop: 10
    },
    Separator: {
        height: 1,
        width: '100%',
        backgroundColor: COLORS.alfaBlack
    },
    DataContainer: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Circle: {
        height: 17,
        width: 17,
        borderRadius: 20,
        borderColor: COLORS.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SmallCircle: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
    },
    errorText: {
        color: COLORS.errorRed,
        marginTop: Platform.OS === 'android' ? 0 : 5,
        marginLeft: 20,
        fontSize: 12
    }

})