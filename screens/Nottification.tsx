import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CommentPost from "../components/commentPost";
import { commentData } from "../constants/data";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import { viewImageProp } from "../constants/Types";

const Nottification = ({navigation}: viewImageProp) => {
  const renderNottification = ({ item }: any) => (
    <CommentPost
      name={item.name}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <View style={styles.colorView}></View>

        <View style={styles.mainContent}>
          <View style={styles.list}>
            <FlatList
              data={commentData}
              renderItem={renderNottification}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: 80 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: Sizes.width,
    height: Sizes.height,
    paddingTop: 24,
    backgroundColor: Colors.warmWhite,
  },
  top: {
    flex: 1,
    backgroundColor: Colors.warmWhite,
  },
  colorView: {
    position: "absolute",
    backgroundColor: Colors.secondary,
    height: 270,
    top: 0,
    width: Sizes.width,
    borderBottomLeftRadius: 80,
    zIndex: 20,
  },
  header: {
    position: "absolute",
    height: 120,
    backgroundColor: Colors.warmWhite,
    width: Sizes.width,
    top: 0,
    zIndex: 22,
    borderBottomLeftRadius: 80,
    paddingTop: 24,
    justifyContent: "center",
    paddingLeft: 20,
  },
  mainContent: {
    position: "absolute",
    height: Sizes.height,
    width: Sizes.width,
    top: 0,
    paddingTop: 90,
    zIndex: 21,
    alignItems: "center"
  },
  headerText: {
    textAlign: "center",
    ...Fonts.h2,
    color: Colors.darkgray,
    fontSize: 24,
  },
  backBtn: {
    position: "absolute",
    left: 20,
  },
  list: {
      width: "85%"
  }
});

export default Nottification;
