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

const data = [
    {
        id : "1",
        title: "Musk",
        img: images.friends[2]
    },
    {
        id : "2",
        title: "Gideon",
        img: images.friends[0]
    },
   {
       id: "3",
       title: "Janet",
       img: images.friends[1]
   },{
       id: "4",
       title: "Christ",
       img: images.friends[3]
   },
   {
       id: "5",
       title: "Antony",
       img: images.friends[4],
   },
   {
       id: "6",
       title: "Zamani",
       img: images.friends[5]
   }
]


const Feeds = () => {
    const renderItem = ({item}: any) => (
        <Friends title={item.title} image={item.img} />
    )
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <View style={styles.mainBar}>
        <View style={styles.innerBar}>
          <TouchableOpacity>
            <Entypo name="menu" size={27} color={Colors.darkgray} />
          </TouchableOpacity>
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

   <ScrollView>     
     <View style={styles.postCont}>
       <Post image={images.post[0]} title="Concept designed" description="" />
       <Post image={images.post[1]} title="Concept designed" description="" />
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
