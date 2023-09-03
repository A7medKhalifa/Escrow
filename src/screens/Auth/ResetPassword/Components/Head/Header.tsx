import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Animated, { FadeIn } from 'react-native-reanimated';
import Svg from 'atoms/Svg';
import { w } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  register,
  setRegister,
}: {
  register?: boolean;
  setRegister?: any;
}) => {
  const { goBack } = useNavigation()
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{ marginRight: -w * 0.18, marginHorizontal: 20 }}
          onPress={() => { goBack() }}>
          <Svg name="arrow" />
        </TouchableOpacity>
        <Text style={[styles.title]}>Reset Password</Text>
        <View />
      </View>

    </TouchableOpacity>
  );
};

export default Header;
