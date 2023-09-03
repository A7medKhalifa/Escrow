import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import Svg from 'atoms/Svg';
import useLibraryPermission from "hooks/useLibraryPermission";

type TProps = {
    values: any;
    name: string;
    errors: any;
    touched: any;
    setFieldValue: any;
};

const UploadDocument = ({
    values,
    name,
    errors,
    touched,
    setFieldValue
}: TProps) => {
    const { uploadFile } = useLibraryPermission()

    return (
        <>
            <TouchableOpacity onPress={() => uploadFile(setFieldValue, name)} style={[styles.container, {
                borderBottomColor:
                    errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]
                        ? COLORS.red
                        : COLORS.primary,
            }]}>
                <Text style={[styles.Text, { color: values[name.replace(/\s/g, '')] ? '#000' : '#b4b7d5', }]}>{values[name.replace(/\s/g, '')] ? values[name.replace(/\s/g, '')]?.name?.slice(0, 40) : name}</Text>
                <TouchableOpacity onPress={() => uploadFile(setFieldValue, name)} activeOpacity={.8}>
                <Svg name='upload' />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.errorText}>{touched[name.replace(/\s/g, '')] ? errors[name.replace(/\s/g, '')] : ''}</Text>

        </>
    );
};

export default UploadDocument;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 47,
        alignSelf: 'center',
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -8,
    },
    Text: {
        fontSize: 14,
    },
    CalendarStyle: {
        height: 350,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    },
    errorText: {
        color: COLORS.errorRed,
        marginLeft: 20,
        marginBottom: 5,
        fontSize: 12,
        marginTop: 5
    }
});
