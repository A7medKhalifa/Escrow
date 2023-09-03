import Svg from 'atoms/Svg';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { styles } from './styles';

const uri = 'data:image/jpeg;base64,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'

const AnimatedAcordion = () => (
  <View style={styles.containerStyle}>
    <AccordionItem title={'Escrow Balance'} price={'$850.00'} content={
      <>
        <View style={styles.Card}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: uri }} style={styles.S_Image} />
            <View style={styles.TextContainer}>
              <Text style={styles.Head1}>Seller in:</Text>
              <Text style={styles.Head2}>Aquatics</Text>
              <Text style={styles.describe}>Mobile App</Text>
            </View>
          </View>
          <View >
            <Text style={styles.Salary}>$721.00</Text>
            <Text style={styles.Date}>March</Text>
          </View>
        </View>

        <View style={styles.Card}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: uri }} style={styles.S_Image} />
            <View style={styles.TextContainer}>
              <Text style={styles.Head1}>Buyer in:</Text>
              <Text style={styles.Head2}>MAZERA</Text>
              <Text style={styles.describe}>Mobile App</Text>
            </View>
          </View>
          <View >
            <Text style={styles.Salary}>$361.00</Text>
            <Text style={styles.Date}>February</Text>
          </View>
        </View>

        <View style={styles.Card}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: uri }} style={styles.S_Image} />
            <View style={styles.TextContainer}>
              <Text style={styles.Head1}>Buyer in:</Text>
              <Text style={styles.Head2}>Froneri</Text>
              <Text style={styles.describe}>Website Development</Text>
            </View>
          </View>
          <View >
            <Text style={styles.Salary}>$361.00</Text>
            <Text style={styles.Date}>February</Text>
          </View>
        </View>
      </>
    } />
    <AccordionItem title={'Wallet Balance'} price={'$250.00'} content={
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: uri }} style={styles.Image} />
          <Text style={styles.smallHeader}>Aquatics</Text>
        </View>
        
        <FlatList
          data={[{ done: true }, { done: true }, { done: false }]}
          renderItem={({ item }) => (
            <>
              <View style={[styles.RowBetween, { marginTop: 15, marginBottom: 5, }]}>
                <View style={styles.ProgressCircleBorder}>
                  {item.done && <View style={styles.ProgressCircle} />}
                </View>

                <TouchableOpacity activeOpacity={.8} onPress={() => {}} style={styles.SupplierCard}>
                  <Image style={styles.Sec_Image} source={{ uri: uri }} />

                  <View style={{ marginLeft: 10, width: '80%' }}>
                    <View style={styles.TextContainer2}>
                      <Text style={[styles.WalletBalanceText, { fontSize: 15 }]}>Milestone 1</Text>
                      <Text style={[styles.WalletBalanceText, { fontWeight: '700' }]}>$501.00</Text>
                    </View>
                    <Text style={styles.grayText}>Backend Development</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </>
          )}
        />
      </>
    } />
  </View>
);

const AccordionItem = ({ title, price, content }) => {
  const shareValue = useSharedValue(0);
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = useAnimatedStyle(() => ({
    height: interpolate(shareValue.value, [0, 1], [0, bodySectionHeight])
  }));

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(shareValue.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  const toggleButton = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } else {
      shareValue.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  };

  return (
    <View style={styles.subContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnStyle}
        onPress={toggleButton}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Animated.View style={iconStyle}>
          <Svg name='arrowD' />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[styles.descStyle, bodyHeight]}>
        <View
          style={styles.bodyContainer}
          onLayout={event => {
            setBodySectionHeight(event.nativeEvent.layout.height);
          }}>
          {content}
        </View>
      </Animated.View>

    </View>
  );
};



export default AnimatedAcordion;