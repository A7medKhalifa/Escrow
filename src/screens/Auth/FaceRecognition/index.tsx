import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';

const FaceRecognition = () => {
  const { source, setSource }: any = useRoute().params;
  const navigation = useNavigation<any>();
  // console.log(source);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <TouchableOpacity
        style={{}}
        onPress={() => {
          navigation.goBack();
          console.log('fff');
        }}>
        <Svg name="arrow" bgColor="#fff" />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={source.assets}
          style={{
            width: h * 0.3,
            height: w * 0.63,
            marginTop: h * 0.1,
            borderRadius: 25,
          }}
        />
        <Text
          style={{ color: COLORS.white, marginTop: h * 0.07, fontSize: 22 }}>
          Registering Your Face
        </Text>
        <Text
          style={{ color: COLORS.white, marginTop: h * 0.02, fontSize: 42 }}>
          87%
        </Text>
      </View>
    </View>
  );
};

export default FaceRecognition;
