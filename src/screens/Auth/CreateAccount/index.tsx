import { Animated as RNAnimated, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { h, w } from 'values/Dimensions';
import FormSection from './Components/Form/Form';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import Header from './Components/Head/Header';
import Button from 'components/molecules/Button';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
  const [finished, setIsFinished] = useState(false);
  const [item, setItem] = useState(0);
  const navigation = useNavigation<any>()

  return (
    <View
      style={{
        // height: h * 1,
        height:'100%',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white
      }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <Header />
      <Svg style={{ alignSelf: 'center',position:'absolute',top:h*.19 }} name="logo"  />
      <Animated.View exiting={FadeOut.duration(1000)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setItem(0);
            }}
            style={[
              styles.item,
              { backgroundColor: item === 0 ? '#7986ff' : '#f2f8ff' },
            ]}>
            <Svg name="individual" bgColor={item === 0 ? '#f2f8ff' : '#7986ff'} />
            <Text
              style={[
                styles.label,
                {
                  color: item === 0 ? COLORS.white : COLORS.black,
                  fontWeight: item === 0 ? '700' : '400'
                },
              ]}>
              Individual
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setItem(1);
            }}
            style={[
              styles.item,
              { backgroundColor: item === 1 ? '#7986ff' : '#f2f8ff' },
            ]}>
            <Svg name="company" bgColor={item === 1 ? '#f2f8ff' : '#7986ff'} />
            <Text
              style={[
                styles.label,
                {
                  color: item === 1 ? COLORS.white : COLORS.black,
                  fontWeight: item === 1 ? '700' : '400'
                },
              ]}>
              Company
            </Text>
          </TouchableOpacity>
        </View>
        
      </Animated.View>
      <Button
          // style={{ marginTop: h * 0.15,}}
          type="primary"
          label="Proceed"
          onPress={() => {
            navigation.navigate('signUp', { item })
          }}
        />
    </View>
  );
};

export default CreateAccount;
