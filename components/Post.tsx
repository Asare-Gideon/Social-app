import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Sizes, Colors, Fonts } from "../constants/Layout";
import { postProp } from "../constants/Types";

const Post = ({ title, image, description }: postProp) => {
  return (
    <View
      style={{
        paddingTop: Sizes.padding + 5,
      }}
    >
      <View
        style={{
          width: Sizes.width - 30,
          height: 250,
          position: "relative",
          elevation: 5,
          backgroundColor: Colors.lightGray2,
          borderRadius: 8,
        }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 8,
          }}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 4
          }}
        >
          <Text
            style={{
              ...Fonts.h3,
              color: Colors.darkgray,
              width: "60%",
              paddingTop: 4,
            }}
          >
            {title}
          </Text>

          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginRight: 10,
              }}
            >
              <AntDesign name="hearto" size={20} />
              <Text
                style={{
                  ...Fonts.body5,
                  color: Colors.darkgray,
                  marginLeft: 4,
                }}
              >
                23
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="chatbubble-ellipses-outline" size={20} />
              <Text
                style={{
                  ...Fonts.body5,
                  color: Colors.darkgray,
                  marginLeft: 4,
                }}
              >
                60
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>hello there</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
