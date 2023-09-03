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
          paddingHorizontal: 20
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() => { goBack() }}>
          <Svg name="arrow" />
        </TouchableOpacity>
        <Text style={[styles.title]}>Reset Password</Text>
        <View style={{ width: 40 }} />
      </View>

    </TouchableOpacity>
  );
};

export default Header;
