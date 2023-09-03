import Svg from "atoms/Svg";
import useLibraryPermission from "hooks/useLibraryPermission";
import React, { useEffect, } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import COLORS from "values/colors";


type TProps = {
    name: string;
    setFieldValue: any;
    errors: any;
    touched: any;
};
export const UploadID = ({
    name,
    setFieldValue,
    errors,
    touched,
}: TProps) => {
    const { pick, source, pickImage } = useLibraryPermission();

    useEffect(() => {
        if (source) {
            setFieldValue(name.replace(/\s/g, ''), {
                uri: source?.assets[0]?.uri,
                type: source?.assets[0]?.type,
                name: `${new Date(new Date() - Math.random() * (1e+12))}`,
            })
        }
    }, [source]);
    // alert(JSON.stringify(source))
    return (
        <>
            <View style={{ marginBottom: 8, }}>
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => pick()}
                    style={[styles.Container, {
                        borderBottomColor:
                            errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]
                                ? COLORS.red :
                                COLORS.primary,
                    }]}
                >
                    <Text style={{ color: COLORS.placeHolder }}>{name}</Text>
                    <Svg name='upload' />
                </TouchableOpacity>
                <Text style={{
                    color: COLORS.errorRed,
                    marginTop: Platform.OS === 'android' ? 0 : 5,
                    marginLeft: 20,
                    fontSize: 12
                }}>{touched[name.replace(/\s/g, '')] ? errors[name.replace(/\s/g, '')] : ''}</Text>
                {source?.assets && <Image source={{ uri: source?.assets[0]?.uri }} style={styles.Image} />}
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    Container: {
        width: '90%',
        height: 35,
        borderBottomWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Image: {
        width: 150,
        height: 100,
        alignSelf: 'center',
        resizeMode: 'contain'
    }


})