import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import InputView from 'components/molecules/Input';
import { useNavigation } from '@react-navigation/native';
import { AddAuthorizedUserScheme } from 'src/formik/schema';

const Form = ({
  setVisable,
  setData,
  userData
}: {
  setVisable: any
  setData: any
  userData?: any
}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: userData?.name,
          email: userData?.email,
          password: userData?.password
        }}
        validationSchema={AddAuthorizedUserScheme}
        onSubmit={(data) => {
          setData({
            name: data.name,
            email: data.email,
            password: data.password
          })
          setVisable(false)
        }}>
        {props => (
          <>
            <View style={styles.content}>
              <ScrollView>
                <Text style={styles.text}>Personal Information</Text>
                <InputView
                  {...props}
                  name="name"
                  values={props.values}
                  placeholder="Contact Name"
                />
                <InputView
                  {...props}
                  name="email"
                  values={props.values}
                  placeholder="Email Address"
                />

                <Text style={styles.GeneratePassword} >Generated Password</Text>
                <InputView
                  {...props}
                  name="password"
                  values={props.values}
                  placeholder="Password"
                />

              </ScrollView>
            </View>

            <Text style={styles.bottomText}>*You should add minimum 1 authorized user</Text>
            <Text style={[styles.bottomText, { marginBottom: 40 }]}>*An invitation link will be sent to the mentioned email address</Text>

            <Button
              type={'primary'}
              label={'Complete Registration'}
              onPress={() => {
                props.handleSubmit()
                // navigation.navigate('RegistrationAccepted')
              }
              }
            />
          </>
        )}
      </Formik>
    </View >
  );
};

export default Form;
