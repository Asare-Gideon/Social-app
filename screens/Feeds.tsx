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
import { data, postData } from "../constants/data";
import ImageModal from "../components/ViewImage";



const Feeds = ({navigation}: feedProp) => {
 //RENDERING POST COMPONENTS
 const postComponent = ({item}: any) => (
   <Post name={item.name} navigation={navigation} handle={handleModal} image={item.image} title={item.title} description={item.description} />
 )

  //RENDERIN FRIENDS COMPONENT
    const renderItem = ({item}: any) => (
        <Friends title={item.title} image={item.img} />
    );
//comment modal state
 const [modal, setModal] = React.useState<boolean>(false)

 //handling comment modal state
 const handleModal = () : void => {
   setModal(prev => !prev)
 };

 

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <View style={styles.mainBar}>
        <View style={styles.innerBar}>
          <Text style={styles.barText}>My Feeds</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("Nottification")} >
          <Ionicons name="notifications-outline" size={25} color={Colors.darkgray} />
          <View style={styles.alert}></View>

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
     <View style={styles.postCont}>
      <FlatList 
      style={styles.postContainer}
      data={postData}
      renderItem={postComponent}
      keyExtractor= {item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 70}}
      />
      <View style={styles.clearBottom}></View>
     </View>
     
    
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
}, 
postContainer: {
 padding: 1 ,
 marginBottom:150
},
clearBottom: {
  width: "100%",
},
alert: {
  position: "absolute",
  width: 5,
  height: 5,
  top: 0,
  left: 10,
  borderRadius: 5,
  backgroundColor: "red"
}

});

export default Feeds;
