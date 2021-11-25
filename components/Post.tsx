import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Sizes, Colors, Fonts } from "../constants/Layout";
import { postProp } from "../constants/Types";

const Post = ({ title, image, description, navigation, handle,name }: postProp) => {
  const [isWidth, setIsWidth] = React.useState<Boolean>(false);

  React.useEffect(() => {
    if (description)
      if (description.length > 45) {
        setIsWidth(true);
      }
  }, []);

  return (
    <View
      style={{
        paddingTop: Sizes.padding + 5,
        width: Sizes.width - 30,
        position: "relative",
        overflow: "hidden",
        paddingBottom: 10
      }}
    >
      <Text style={{
        ...Fonts.style2,
        paddingBottom: 3,
        paddingLeft: 3,
        color: Colors.deepDarkGray,
        fontSize: 14
      }}>{name}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ViewImage", {
            image,
            description,
          })
        }
        style={{
          height: 250,
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
      </TouchableOpacity>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 4,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...Fonts.h3,
              color: Colors.darkgray,
              width: "60%",
              paddingTop: 6,
            }}
          >
            {title ? title : "Check this out"}
          </Text>

          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <AntDesign name="hearto" size={25} />
              <Text
                style={{
                  ...Fonts.body3,
                  color: Colors.darkgray,
                  marginLeft: 4,
                }}
              >
                23
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handle}
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="chatbubble-ellipses-outline" size={25} />
              <Text
                style={{
                  ...Fonts.body3,
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
          {isWidth ? (
            <Text
              style={{
                ...Fonts.body3,
                paddingTop: 5,
              }}
            >
              {description}
            </Text>
          ) : (
            <Text
              style={{
                ...Fonts.body3,
                marginTop: -3,
                paddingTop: 0,
                paddingLeft: 2,
                width: "60%",
              }}
            >
              {description}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Post;
