import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import Friends from "../components/Friends";
import Post from "../components/Post";
import images from "../constants/Images";
import { Sizes, Colors, Fonts } from "../constants/Layout";
import { feedProp } from "../constants/Types";
import Comment from "../components/Comment"
import { data } from "../constants/data";
import ImageModal from "../components/ViewImage";



const Feeds = ({navigation}: feedProp) => {
  
  //RENDERIN POST COMPONENT
    const renderItem = ({item}: any) => (
        <Friends title={item.title} image={item.img} />
    );
//comment modal state
 const [modal, setModal] = React.useState<boolean>(false)

 //handling comment modal state
 const handleModal = () : void => {
   setModal(prev => !prev)
 };
 
 //image modal state
 const [viewImage, setViewImage] = React.useState<boolean>(false)

 //handling modal state
const handleViewImage = () : void => {setViewImage(prev => !prev)}



  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <View style={styles.mainBar}>
        <View style={styles.innerBar}>
          <Text style={styles.barText}>My Feeds</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={25} color={Colors.darkgray} />

        </TouchableOpacity>
      </View>
      
     {/* friend goes here */}
     <View style={styles.friendsList}>
         <FlatList 
         horizontal={true}
         data={data}
         renderItem = {renderItem}
         keyExtractor = {item => item.id}
         showsHorizontalScrollIndicator={false}
         />
     </View>
   <Comment visibility={modal} handle={handleModal} />
   <ScrollView>     
     <View style={styles.postCont}>
       <Post navigation={navigation} handle={handleModal} image={images.post[0]} title="Concept designed" description="how to stay constitent to this end " />
       <Post navigation={navigation} image={images.post[1]} title="Concept designed" description="" />
     </View>
     </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: Sizes.width,
    height: Sizes.height,
    backgroundColor: "#ddd",
    paddingTop: Sizes.status,
  },
  mainBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  innerBar: {
    flexDirection: "row",
  },
  barText: {
    ...Fonts.h4,
    paddingLeft: Sizes.padding + 5,
    paddingTop: 4,
    color: Colors.darkgray
  },
friendsList: {
    flexDirection: "row"
},
postCont: {
  justifyContent: "center",
  width: Sizes.width,
  alignItems: "center",
  overflow: "hidden",
  paddingBottom: 70,
}
});

export default Feeds;
