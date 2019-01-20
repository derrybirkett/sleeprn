import Colors from '../constants/Colors';
import Space from '../constants/Space';
import Type from '../constants/Type';

const borderRadius = 4;

export default {
  outline: {
      borderColor: Colors.neutralLight,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: borderRadius,
  },
  padSmall: {
      padding: Space.sizeSmall
  },
  card: {
      marginTop: Space.sizeLarge,
      padding: Space.sizeLarge,
      borderRadius: borderRadius,
  },
  panelLight: {
      backgroundColor: Colors.colorWhite,
      color: Type.textDark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Colors.neutralLight
  },
  panelDark: {
      backgroundColor: Colors.tintColor,
      color: Type.textWhite,
  },
  stackPush: {
    marginTop: Space.stackPush
  },
  sectionPush: {
    marginTop: Space.stackPush * 2
  },
  sectionHeader: {
      padding: Space.sizeMedium
  },
};
