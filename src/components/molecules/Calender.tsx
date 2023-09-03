import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import Svg from 'atoms/Svg';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

type TProps = {
    values: any;
    name: string;
    CalenderShow: boolean;
    setCalenderShow: any;
    errors: any;
    touched: any;
    setFieldValue: any;
};

const CalendarInput = ({
    values,
    name,
    CalenderShow,
    setCalenderShow,
    errors,
    touched,
    setFieldValue
}: TProps) => {
    return (
        <>
            <TouchableOpacity onPress={() => setCalenderShow(!CalenderShow)} style={[styles.container, {
                borderBottomColor:
                    errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]
                        ? COLORS.red
                        : COLORS.primary,
            }]}>
                <Text style={[styles.Text, { color: values[name.replace(/\s/g, '')] ? '#000' : '#b4b7d5', }]}>{values[name.replace(/\s/g, '')] ? values[name.replace(/\s/g, '')] : name}</Text>
                <TouchableOpacity onPress={() => setCalenderShow(!CalenderShow)} activeOpacity={.8}>
                    <Svg name='calendar' height={19} />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.errorText}>{touched[name.replace(/\s/g, '')] ? errors[name.replace(/\s/g, '')] : ''}</Text>

            {CalenderShow &&
                <Calendar
                    minDate={moment().format('YYYY-MM-DD')}
                    style={styles.CalendarStyle}
                    onDayPress={day => {
                        setFieldValue(name.replace(/\s/g, ''), `${day.year}-${day.month}-${day.day}`)
                        setCalenderShow(!CalenderShow)
                    }}
                />
            }

        </>


    );
};

export default CalendarInput;

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
