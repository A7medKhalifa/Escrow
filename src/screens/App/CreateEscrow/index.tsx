import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import FormSection from './Components/Form';
import Header from './Components/Head/Header';


const CreateEscrowScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormSection />
    </View>
  );
};

export default CreateEscrowScreen;
