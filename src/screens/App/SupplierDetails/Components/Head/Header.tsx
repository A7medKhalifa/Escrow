import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import NotificationModal from 'screens/App/Dashboard/Components/Modal/Modal';

const Header = ({

}: {

  }) => {
  const { goBack } = useNavigation()
  const [show, setShow] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <NotificationModal show={show} setShow={setShow} />
      <TouchableOpacity activeOpacity={.8} onPress={() => goBack()}>
        <Svg name="arrow" />
      </TouchableOpacity>
      <Text style={[styles.title]}>Seller Details</Text>
      <TouchableOpacity
          // style={{ marginLeft: 40 }}
          onPress={() => {
            setShow(true)
          }}>
          <Svg name="list" />
          <View style={styles.NotificationNumber}>
            <Text style={styles.Number}>3</Text>
          </View>
        </TouchableOpacity>
     </View>
  );
};

export default Header;
