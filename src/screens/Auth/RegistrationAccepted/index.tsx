import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import COLORS from 'values/colors';

const RegistrationAccepted = () => {
  const { navigate } = useNavigation<any>()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Svg name='done' />
        <Text style={styles.firstText}>Registration Accepted</Text>
        <Text style={styles.secondText}>Account Number: #109876</Text>

        <Text style={styles.smallText}>You can now start Escrow & view invitations on your dashboard</Text>

        <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => navigate('login')}>
          <Text style={{ color: COLORS.blue, fontWeight: '600' }}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationAccepted;
