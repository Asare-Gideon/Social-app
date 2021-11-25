import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../constants/Images";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import * as Animatable from "react-native-animatable";
import { commentPostProp } from "../constants/Types";

const commentPost = ({ name, description, image, like }: commentPostProp) => {
  const [isPress, setIsPress] = React.useState<boolean>(false);
  const handleIsPress = (): void => {
    setIsPress((prev) => !prev);
  };
  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        width: "100%",
        marginLeft: 5,
        marginBottom: 5
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.15,
          }}
        >
          <Image
            source={image}
            style={{
              width: 47,
              height: 47,
              borderRadius: Sizes.radius,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 0.85,
          }}
        >
          <View style={{ width: "87%" }}>
            <Text
              style={{
                ...Fonts.h4,
                color: Colors.darkgray,
                paddingTop: 3,
                marginLeft: 3,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                ...Fonts.body4,
                width: like ? "80%" : "96%",
                marginLeft: 3,
              }}
            >
              {description}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <Text style={{ ...Fonts.body4, color: Colors.deepDarkGray }}>
                50m
              </Text>
             {like && (<Animatable.Text
                animation="bounceIn"
                duration={1000}
                style={{
                  ...Fonts.body4,
                  color: Colors.deepDarkGray,
                  marginLeft: 8,
                }}
              >
                {like} Likes
              </Animatable.Text>)} 
            </View>
          </View>
         {like && ( <TouchableOpacity onPress={handleIsPress}>
            {
                isPress ? (
                <Animatable.View animation="bounceIn" duration={1000} >
                       <AntDesign
              name="heart"
              size={20}
              color="red"
            />
                </Animatable.View>
             ): 
            (<Animatable.View animation="bounceIn" duration={1000} easing="ease-in-out" >
                       <AntDesign
              name="hearto"
              size={20}
              color={Colors.darkgray}
            />
                </Animatable.View>)
            }
          </TouchableOpacity>)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default commentPost;
