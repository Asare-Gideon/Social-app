import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import CommentPost from "../components/commentPost";
import images from "../constants/Images";
import Input from "./Input";
import { commentData } from "../constants/data";

interface commentProp {
  visibility: boolean;
  handle: () => void;
}
const Comment = ({ visibility, handle }: commentProp) => {
  const [modalVisible, setModalVisible] = useState(visibility);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        setModalVisible(!visibility);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeBtn} onPress={handle}>
              <FontAwesome
                name="chevron-down"
                size={23}
                color={Colors.darkgray}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Comments</Text>
          </View>
          <ScrollView style={styles.content}>
            <View style={styles.description}>
              <CommentPost
                name="Majesty"
                description="how to stay constitent to this end dkdkd deleldlfl ldkld"
                image={images.post[0]}
              />
            </View>
            {commentData.map((item,index) => (
              <CommentPost
              key={index}
                like={item.like}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
         </ScrollView>

          <View style={styles.imageCont}>
            <Input />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: Sizes.width,
    height: Sizes.height,
  },
  modalView: {
    backgroundColor: Colors.white,
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  headerText: {
    ...Fonts.h3,
    marginLeft: 15,
    color: Colors.darkgray,
  },
  closeBtn: {
    ...Fonts.body1,
    padding:3,
  },
  content: {
    width: Sizes.width,
    position: "relative",
  },
  description: {
    borderBottomWidth: 0.2,
    width: "100%",
    paddingBottom: 2,
  },
  imageCont: {
    width: "100%",
    flexDirection: "row",
    borderTopWidth: 0.3,
  },
});

export default Comment;