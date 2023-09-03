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
import SummaryModal from './Components/Modal/SummaryModal';
import { checkPermissionAndDownloadFile } from 'src/HF/HF';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SellerConfirmedScreen = () => {
  const { navigate } = useNavigation<any>()
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState<any>('USD');
  const [value1, setValue1] = useState<any>('USD');
  const fileUrl = 'https://www.africau.edu/images/default/sample.pdf';
  const uri = 'data:image/jpeg;base64,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'

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
              <Text style={styles.Successfully}>Seller Confirmed</Text>
            </LinearGradient>
            <Svg name='done' style={styles.Icon} />
            <View style={styles.SmallContainer}>
              <View style={styles.lowOpacityContsiner}>
                <Text style={styles.WalletBalanceText}>Reference Number</Text>
                <Text style={[styles.Text]}>1222344</Text>
              </View>

              <View style={[{ marginTop: 30 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <Text style={styles.WalletBalanceText}>Total Payment Value</Text>
                  <TouchableOpacity activeOpacity={.8} onPress={() => { setShow(true) }}
                    style={styles.MilestoneDetails}>
                    <Text style={[styles.WalletBalanceText, { fontSize: 12 }]}>Milestone Details</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[styles.Text]}>$ 122.00</Text>
              </View>

              <Text style={styles.DetailsText}>Buyer Details</Text>

              <View style={styles.Contain}>
                <Image source={{ uri: uri }} style={styles.Image2} />
                <View style={styles.Contain2}>
                  <View style={styles.Row2}>
                    <Text style={styles.WalletBalanceText}>Mina Ezzat</Text>
                    <Text style={styles.smallText}>Egypt</Text>
                  </View>
                  <Text style={[styles.smallText, { fontWeight: '600' }]}>CEO</Text>
                </View>
              </View>

              <Text style={styles.PaysText}>Buyer Pays</Text>
              <Formik
                initialValues={{ Currency: '' }}
                validationSchema={
                  Yup.object().shape({ Currency: Yup.string().required('Currency is required') })
                }
                onSubmit={() => navigate('RegistrationAccepted')}>
                {props => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { setOpen(!open) }} style={styles.CurrancyContainer}>
                      <Text style={styles.CurrancyText}>{value}</Text>
                      <Svg name='arrowD' height={30} />
                    </TouchableOpacity>

                    <InputView
                      {...props}
                      name="Currency"
                      values={props.values}
                      placeholder="Currency"
                      keyboardType="numeric"
                      containerStyling={{ width: '80%', marginTop: 15, marginLeft: -5 }}
                    />

                  </View>
                )}

              </Formik>


              <Text style={styles.DetailsText}>Seller Details</Text>
              {/* {
                open && <View style={styles.Modal}>
                  <FlatList
                    data={[{ currancy: 'USD' }, { currancy: 'EGP' }]}
                    renderItem={({ item }) => (
                      <Text onPress={() => {
                        setOpen(false)
                        setValue(item.currancy)
                      }} style={{ marginVertical: 5, color: '#000' }}>{item.currancy}</Text>
                    )}
                  />
                </View>
              } */}
              <View style={styles.Contain}>
                <Image source={{ uri: uri }} style={styles.Image2} />
                <View style={styles.Contain2}>
                  <View style={styles.Row2}>
                    <Text style={styles.WalletBalanceText}>Ahmed Khalifa</Text>
                    <Text style={styles.smallText}>Egypt</Text>
                  </View>
                  <Text style={[styles.smallText, { fontWeight: '600' }]}>Dev</Text>
                </View>
              </View>

              <Text style={styles.PaysText}>Seller Recive</Text>
              <Formik
                initialValues={{ Currency: '' }}
                validationSchema={
                  Yup.object().shape({ Currency: Yup.string().required('Currency is required') })
                }
                onSubmit={() => navigate('RegistrationAccepted')}>
                {props => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { setOpen1(!open1) }} style={styles.CurrancyContainer}>
                      <Text style={styles.CurrancyText}>{value1}</Text>
                      <Svg name='arrowD' height={30} />
                    </TouchableOpacity>
                    <InputView
                      {...props}
                      name="Currency"
                      values={props.values}
                      placeholder="Currency"
                      keyboardType="numeric"
                      containerStyling={{ width: '80%', marginTop: 15, marginLeft: -5 }}
                    />
                  </View>
                )}
              </Formik>
              {/* {
                open1 && <View style={styles.Modal1}>
                  <FlatList
                    data={[{ currancy: 'USD' }, { currancy: 'EGP' }]}
                    renderItem={({ item }) => (
                      <Text onPress={() => {
                        setOpen1(false)
                        setValue1(item.currancy)
                      }} style={{ marginVertical: 5, color: '#000' }}>{item.currancy}</Text>
                    )}
                  />
                </View>
              } */}
              <Text style={styles.small}>*Please note that money will be kept in escrow in the seller's currency, incase you cancel for any reason exchange expenses will apply</Text>
            </View>
          </View>
          <SummaryModal show={show} setShow={setShow} />
          <Button
            style={{ marginTop: h * 0.03,marginBottom: h * 0.04}}
            type="primary"
            label="Deposit Funds"
            onPress={() => {
              handleDownloadFile()
              // navigate('Dashboard')
            }}
          />
        </View >
      </ScrollView >
    </View >
  );
};

export default SellerConfirmedScreen;
