import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  introScreen : img; 
}

const images : ImageType = {
 introScreen : require("../assets/images/img1.jpg") ,

}


export default images;