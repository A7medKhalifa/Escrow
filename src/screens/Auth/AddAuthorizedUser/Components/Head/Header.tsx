import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  setVisable
}: {
  setVisable?: any
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15
        }}>
        <TouchableOpacity onPress={() => { setVisable(false) }}>
          <Svg name="arrow" />
        </TouchableOpacity>
        <View style={{}} />
        <Text style={[styles.title]}>Add Authorized User</Text>
        <View style={{ width: 63.5 }} />
      </View >

    </View >
  );
};

export default Header;
