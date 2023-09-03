import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import { useNavigation } from '@react-navigation/native';
import COLORS from 'values/colors';

const UnderReview = () => {
  const { navigate } = useNavigation<any>()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.circle}>
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.circle3} />
        </View>


        <Text style={styles.firstText}>Registration Under Review</Text>
        <Text style={styles.secondText}>Please wait for account activation email</Text>
        <TouchableOpacity onPress={() => navigate('login')}>
          <View style={styles.ok}>
            <Text style={{ fontWeight: '500', color: COLORS.blue }}>ok</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UnderReview;
