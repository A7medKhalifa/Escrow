import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  ModalContainer: {
    alignItems: 'center'
  },
  Container: {
    width: '100%',
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 15
  },
  Card: {
    width: '100%',
    backgroundColor: COLORS.white,
    // paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
    alignSelf: 'center'
  },
  TextContainer: {
    marginLeft: 10,
    width: '82.5%',
  },
  Head1: {
    fontSize: 13,
    color: COLORS.move
  },
  Head2:
  {
    marginTop: 4,
    fontSize: 13,
    color: COLORS.gray
  },
  Text: {
    fontSize: 15,
    color: COLORS.move,
    fontWeight: '700'
  },
  Text2: {
    fontSize: 22,
    color: COLORS.gray,
    fontWeight: '700'
  },
  DelText: {
    color: COLORS.Dred,
    textDecorationLine: 'line-through',
    fontSize: 15,
    fontWeight: '700'
  },
  Title: {
    fontSize: 12,
    color: COLORS.move,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 56
  },
  Button: {
    height: h * .042,
    width: w * .32,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: h * 0.03,
  },
  RowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  InvitationsText: {
    color: COLORS.white,
    fontSize: 14
  },
  Text3: {
    fontSize: 12,
    color: COLORS.move,
    fontWeight: '400',
    marginTop: 20,
    alignSelf: 'center'
  },
  AddText: {
    color: COLORS.DDarkBlue,
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 20,
    textAlign: 'center',
  },
  Discription: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.black
  },
  ok: {
    backgroundColor: '#e7ebfd',
    padding: 10,
    width: w * 0.4,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  DisputeButton: {
    width: '87%',
    alignSelf: 'center',
    height: h * .042,
    borderWidth: 2,
    borderColor: COLORS.Dred,
    borderRadius: 8,
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15
  },
  DisputeText: {
    color: COLORS.Dred,
    fontWeight: '600'
  },
  container: {
    padding: 28,
    paddingTop: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center'
  },
  Title2: {
    fontSize: 18,
    color: COLORS.DDarkBlue,
    fontWeight: '700'
  },
  Icon: {
    position: 'absolute',
    top: -58,
    opacity: 1
  },
  description: {
    fontSize: 12,
    color: COLORS.DDarkBlue,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: COLORS.move,
    paddingHorizontal: 60,
    paddingVertical: 7.5,
    borderRadius: 20,
    marginTop: 15
  },
  buttonTitle: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 13
  }

});
