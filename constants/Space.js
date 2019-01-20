const sizeMod = 2;
const sizeBase = sizeMod * 4;

export default {
  sizeBase,
  sizeSmall: sizeBase,
  sizeMedium: sizeBase * 2,
  sizeLarge: sizeBase * 3,
  stackPush: this.sizeMedium,
  sectionPush: this.stackPush * 2,
};
