import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Sizes, Colors, Fonts } from "../constants/Layout";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Button from "../components/Button";
import img from "../constants/Images";

type data = string | undefined;

interface dataType {
  name: data;
  email: data;
  password: data;
  validName: boolean;
}
const Login = () => {
  const [data, setData] = useState<dataType>({
    name: undefined,
    email: undefined,
    password: undefined,
    validName: true,
  });
  const handleNameChange = (value: any) => {
    if (value.length > 0) {
      setData({
        ...data,
        validName: true,
        name: value,
      });
      
    }else{
        setData({
            ...data,
            validName: false,
            name: value
        })
    }
  };

  return (
    <KeyboardAvoidingView style={styles.main}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled
    >
      <View style={styles.topCont}>
        <View style={styles.imgMain}>
          <View style={styles.imgSub}>
            <Image source={img.welcome} style={styles.img} />
          </View>
          <Text style={styles.topText}>Stay hungry, stay folish</Text>
        </View>
      </View>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={styles.botCont}
      >
          
            <ScrollView style={{ height: "100%", paddingBottom: 30 }}>
              
              <View style={styles.inputContent}>
                <FontAwesome style={styles.icons} name="envelope-o" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  value={data.email}
                  onChangeText={(e) => handleNameChange(e)}
                />
                <Animatable.View
                  style={styles.icons}
                  animation="bounceIn"
                  duration={800}
                >
                  <Feather
                    name="check-circle"
                    size={24}
                    color={Colors.primary}
                  />
                </Animatable.View>
              </View>
              <View style={[styles.inputContent]}>
                <Feather style={styles.icons} name="lock" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  value={data.email}
                  onChangeText={(e) => handleNameChange(e)}
                />
                <TouchableOpacity>
                  <Feather name="eye-off" size={25} color={Colors.primary} />
                </TouchableOpacity>
              </View>
              <View style={styles.already}>
                <TouchableOpacity>
                  <Text style={styles.alreadyText}>
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 13 }}>
                <Button
                  title="Login"
                  BackgroundColor={Colors.secondary}
                  color={Colors.white}
                />
              </View>
            </ScrollView>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: Sizes.height,
    width: Sizes.width,
    backgroundColor: Colors.secondary,
  },
  topCont: {
    flex: 0.3,
    width: "100%",
    padding: 30,
  },
  botCont: {
    flex: 0.7,
    width: "100%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  inputCont: {
    marginTop: 20,
  },
  inputContent: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: Colors.secondary,
    padding: 10,
    paddingLeft: 6,
    paddingRight: 7,
    borderRadius: Sizes.radius,
    marginBottom: 15,
  },
  input: {
    ...Fonts.h5,
    paddingLeft: 5,
    fontSize: Sizes.font,
    flex: 1,
    alignItems: "center",
  },
  icons: {
    marginTop: 3,
  },
  already: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  alreadyText: {
    ...Fonts.body4,
    color: Colors.secondary,
  },
  imgMain: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  imgSub: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  img: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  topText: {
    ...Fonts.style2,
    color: Colors.white,
    marginTop: 10
  },
});

export default Login;
