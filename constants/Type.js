import Colors from '../constants/Colors';

const textBaseSize = 12;
const textBaseLine = 20;

export default {
  textBaseSize,
  textBaseLine,
  textDark: Colors.neutralDark,
  textWhite: Colors.neutralWhite,
  textH3: 24,
  textP: {
      fontSize: textBaseSize,
      lineHeight: textBaseSize,
      color: this.textDark,
      flexDirection: 'row',
  },
  textH3: {
    fontSize: 28,
    lineHeight: 54,
  }
};
