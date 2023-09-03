import { Modal, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Header from './Components/Head/Header';
import Form from './Components/Form';

const AddAuthorizedUser = ({
  visible,
  setVisable,
  setData,
  userData
}: {
  visible?: boolean;
  setVisable?: any;
  setData?: any;
  userData?: any;
}) => {

  return (
    <Modal
      visible={visible}
      style={styles.container}>
      <Header setVisable={setVisable}/>
      <Form userData={userData} setVisable={setVisable} setData={setData} />
    </Modal>
  );
};

export default AddAuthorizedUser;
