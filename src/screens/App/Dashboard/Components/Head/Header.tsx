import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import NotificationModal from '../Modal/Modal';

const Header = ({

}: {

  }) => {
  const { navigate } = useNavigation<any>()
  const [show, setShow] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <NotificationModal show={show} setShow={setShow} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View />
        <Text style={[styles.title]}>User Dashboard</Text>
        <TouchableOpacity
          style={{ marginLeft: 40 }}
          onPress={() => {
            setShow(true)
          }}>
          <Svg name="list" />
          <View style={styles.NotificationNumber}>
            <Text style={styles.Number}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Header;
