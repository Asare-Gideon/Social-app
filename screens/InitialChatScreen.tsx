import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Message from "../components/Message";
import { messageData } from "../constants/data";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import { ChatScreenProps } from "../constants/Types";

const InitialChatScreen = ({ navigation }: ChatScreenProps) => {
  var message =
    "how to stay consistent to this end how to stay consistent to this end the he";
  console.log(message.length);

  //handling navigation ton innerchat
  const handle = (): void => {
    navigation.navigate("InnerChat");
  };

  // rendering message component
  const renderMessage = ({ item }: any) => (
    <Message
      name={item.name}
      message={item.message}
      time={item.time}
      image={item.image}
      handle={handle}
      number={item.number}
    />
  );

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <View style={styles.colorView}></View>
        <View style={styles.mainContent}>
          <View style={styles.list}>
            <FlatList
              renderItem={renderMessage}
              data={messageData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 70 }}
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
      width: "90%"
  }
});
export default InitialChatScreen;
