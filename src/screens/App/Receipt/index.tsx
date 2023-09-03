import { View, StatusBar, ScrollView, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import COLORS from 'values/colors';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import Header from './Components/Head/Header';
import LinearGradient from 'react-native-linear-gradient';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import Button from 'components/molecules/ButtonIcon';
import SuccessModal from './Components/SuccessModal/SuccessModal';
import { checkPermissionAndDownloadFile } from 'src/HF/HF';

const ReceiptScreen = () => {
  const { navigate } = useNavigation<any>()
  const [show, setShow] = useState(false)
  const fileUrl = 'https://www.africau.edu/images/default/sample.pdf';

  const handleDownloadFile = () => {
    checkPermissionAndDownloadFile(fileUrl).then(() => {
      setShow(true)
    })
  }
  return (
    <View
      style={{
        height: h * 1,
        justifyContent: 'flex-start',
        backgroundColor: COLORS.bgDWhite,
      }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <Header />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <View style={styles.sec_container}>

            <LinearGradient
              style={styles.LinearGradient}
              colors={['#5b6ed9', '#79b0f8']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <Text style={styles.Successfully}>Payment Receipt</Text>
            </LinearGradient>
            <Svg name='done' style={styles.Icon} />
            <View style={styles.SmallContainer}>
              <View style={styles.Row}>
                <View >
                  <Text style={styles.WalletBalanceText}>DATE</Text>
                  <Text style={styles.smallHeaderText}>October 11, 2020</Text>
                </View>
                <View>
                  <Text style={[styles.WalletBalanceText, { textAlign: 'right' }]}>TIME</Text>
                  <Text style={styles.smallHeaderText}>03:00 PM</Text>
                </View>
              </View>

              <View style={[styles.Row, { marginTop: 30 }]}>
                <Text style={styles.WalletBalanceText}>From:</Text>
                <View style={styles.TextContainer2}>
                  <Text style={styles.smallHeaderText}>TFD - ADIB (HO)</Text>
                </View>
              </View>

              <View style={[styles.Row]}>
                <Text style={styles.WalletBalanceText}>ELC Ref:</Text>
                <View style={styles.TextContainer2}>
                  <Text style={styles.smallHeaderText}>Arab Bank for Inv and Foreign Trade</Text>
                </View>
              </View>
             
             
              <View style={[styles.Row]}>
                <Text style={styles.WalletBalanceText}>Issuing Bank Ref:</Text>
                <View style={styles.TextContainer2}>
                  <Text style={[styles.smallHeaderText, { marginTop: -9  }]}>TF193456546743</Text>
                </View>
              </View>

              <View style={[styles.Row]}>
                <Text style={styles.WalletBalanceText}>Applicant:</Text>
                <View style={styles.TextContainer2}>
                  <Text style={[styles.smallHeaderText, { marginTop: -9  }]}>Applicant:</Text>
                </View>
              </View>

              <View style={[styles.Row]}>
                <Text style={styles.WalletBalanceText}>Beneficiary:</Text>
                <View style={styles.TextContainer2}>
                  <Text style={[styles.smallHeaderText, { marginTop: -9  }]}>Practical Furniture LLC</Text>
                </View>
              </View>

              <View style={[styles.Row]}>
                <Text style={styles.WalletBalanceText}>Amount:</Text>
                <View style={styles.TextContainer2}>
                  <Text style={[styles.smallHeaderText, { marginTop: -9  }]}>Practical LLC</Text>
                </View>
              </View>

            </View>
          </View>
          <SuccessModal show={show} setShow={setShow} />
          <Button
            svg='Download'
            style={{ marginTop: h * 0.05 }}
            type="primary"
            label="Download detailed Escrow document"
            onPress={() => {
              handleDownloadFile()
              // navigate('Dashboard')
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              alignSelf: 'center',
              textDecorationLine: 'underline',
              marginTop: -10
            }}
            onPress={() => navigate('Dashboard')}
          >Back to dashboard</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReceiptScreen;
