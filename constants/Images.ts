import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  introScreen : img; 
  welcome: img;
  friends: img[];
  post : img[];
  
}

const images : ImageType = {
 introScreen : require("../assets/images/img1.jpg") ,
 welcome: require("../assets/images/wlc.png"),
 friends : [
     require("../assets/images/gideon.jpg"),
     require("../assets/images/girl.jpg"),
     require("../assets/images/musk.jpg"),
     require("../assets/images/jesus.jpg"),
     require("../assets/images/img2.jpg"),
     require("../assets/images/img3.jpg"),
 ],
 post : [
   require("../assets/images/img2.jpg"),
   require("../assets/images/img3.jpg")
 ]

}


export default images;