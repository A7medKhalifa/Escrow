import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Individual from './Components/Individual';
import Header from './Components/Head/Header';
import { useRoute } from '@react-navigation/native';
import Company from './Components/Company';

const SignUp = () => {
  const { item }: any = useRoute().params;

  return (
    <View style={styles.container}>
      <Header />
      {item === 0 ?
        <Individual />
        :
        <Company />
      }

    </View>
  );
};

export default SignUp;
