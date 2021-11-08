import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  introScreen : img; 
  welcome: img;
}

const images : ImageType = {
 introScreen : require("../assets/images/img1.jpg") ,
 welcome: require("../assets/images/wlc.png")

}


export default images;