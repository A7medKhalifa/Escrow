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
  register: boolean;
  setRegister: any;
}) => {
  return (
    <View style={styles.container}>
      {/* {register ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{ marginRight: -w * 0.18, marginHorizontal: 20 }}
            onPress={() => {
              setRegister(!register);
            }}>
            <Svg name="arrow" />
          </TouchableOpacity>
          <Text style={[styles.title]}>Sign Up</Text>
          <View />
        </View>
      ) : ( */}
        <Animated.View>
          <Text style={styles.title}>Sign in</Text>
        </Animated.View>
      {/* )} */}
    </View>
  );
};

export default Header;
