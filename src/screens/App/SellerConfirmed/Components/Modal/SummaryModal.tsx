import { Text, ScrollView, View, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import COLORS from 'values/colors';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import { h } from 'values/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'components/molecules/shortbutton';


const SummaryModal = ({
  show,
  setShow
}: {
  show: boolean
  setShow: any
}) => {
  const { navigate } = useNavigation<any>()
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={() => setShow(!show)}
      onBackdropPress={() => setShow(!show)}
    >

      <View style={styles.container}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={['#5b6ed9', '#79b0f8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Text style={styles.Successfully}>Payment Summary</Text>
        </LinearGradient>

        <View style={styles.Row}>
          <Text style={styles.Text}>Escrow Fee</Text>
          <Text style={styles.Text}>$150,00</Text>
        </View>

        <Text style={[styles.Text, { paddingHorizontal: 20, marginBottom: 5 }]}>Milestones Payment</Text>
        <FlatList
          data={[{}, {}, {}]}
          showsVerticalScrollIndicator={false}
          renderItem={({ index }) => (
            <>
              <View style={styles.Card}>
                <Svg name='milestone' width={45} height={40} />
                <View style={styles.TextContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.Head1}>Milestone {index + 1}</Text>
                    <Text style={styles.Text}>$250</Text>
                  </View>
                  <Text style={styles.Head2}>Webservices APIs creation</Text>
                </View>
              </View>
            </>
          )}
        />
        <View style={{ height: 1, marginVertical: 15, width: '100%', backgroundColor: COLORS.alfaBlack }} />

        <View style={[styles.Row, { marginTop: -5 }]}>
          <Text style={styles.Text}>Total Payment Value</Text>
          <Text style={styles.Text2}>$1250,00</Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Button
            style={{ marginTop: h * 0.05 }}
            type="primary"
            label="Back"
            onPress={() => {
              setShow(false)
            }}
          />
        </View>

      </View>
    </Modal>

  );
};

export default SummaryModal;
