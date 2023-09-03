const COLORS = {
  initialBackGround: '#000111',
  black: '#000',
  white: '#fff',
  orange: '#FF7301',
  pink: '#FFE3CC',
  errorRed: '#F23005',
  green: '#0DD98B',
  bgDWhite:'#F2F8FF',
  light:'#E8EBFD',
  // app colors
  primary: '#6eb4ff',
  secondery: '#000',
  darkMode: '#242332',
  iconBackDarkMode: '#2b2c3a',
  gray:'#9DA2C9',
  BW:'#414141',
  LRed:'#9F2D47',
  sky:'#4AFCFE',
  placeHolder:'#b4b7d5',

  alfaBlack: 'rgba(192,192,192, 0.65)',
  alfaBlack2: 'rgba(192,192,192, 0.2)',

  lightGrey: '#F2F2F2',
  red: '#ff0000',
  Dred:'#9F2D47',
  grey: '#B4B4B4',
  blue: '#0081DF',
  move: '#7986FF',
  darkBlue: '#1F1FEC',
  DDarkBlue:'#002364'
};

export default COLORS;

export type TThemeColor = keyof typeof COLORS;
