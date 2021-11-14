import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Colors = {
  // base colors
  primary: "#f7cf21", // green
  secondary: "#cb9308", // gray

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: "#555555",
};
export const Sizes = {
    width,
    height,
  isSmallDevice: width < 375,
 
     // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  status : 25,

  // font sizes
  largeTitle: 50,
  subTitle : 40,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
};

export const Fonts = {
  largeTitle: {
    fontFamily: "Roboto-regular",
    fontSize: Sizes.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: Sizes.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: Sizes.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: Sizes.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: Sizes.h4, lineHeight: 22 },
  h5: { fontFamily: "Roboto-Regular", fontSize: Sizes.h4, lineHeight: 22 },
  style:{fontFamily : "Pattaya-Regular", fontSize : Sizes.h2, lineHeight : 26},
  style2:{fontFamily : "Pattaya-Regular", fontSize : Sizes.h4, lineHeight : 22},
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: Sizes.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: Sizes.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: Sizes.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: Sizes.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: Sizes.body5,
    lineHeight: 22,
  },
};
const Layout = {Fonts, Sizes, Colors}
export default Layout;
