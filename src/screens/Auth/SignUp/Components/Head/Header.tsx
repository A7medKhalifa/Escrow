import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
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
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15
        }}>
        <TouchableOpacity onPress={() => { goBack() }}>
          <Svg name="arrow" />
        </TouchableOpacity>
        <Text style={[styles.title]}>Sign up</Text>
        <View style={{ width: 35 }} />
      </View >

    </View >
  );
};

export default Header;
