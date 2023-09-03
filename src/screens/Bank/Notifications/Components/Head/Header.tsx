import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';

const Header = ({

}: {

  }) => {
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.8} onPress={() => goBack()}>
        <Svg name="arrow" />
      </TouchableOpacity>
      <Text style={[styles.title]}>Notifications</Text>
      <View style={{ width: 33 }} />
    </View>
  );
};

export default Header;
