import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import { messageProp } from "../constants/Types";

const Message = ({ message, image, time, name, handle,number }: messageProp) => {
    const [num, setNum] = React.useState<boolean>(false)

    React.useEffect(()=> {
         if(number > 0){
             setNum(true)
         }else setNum(false)
    },[number])
  return (
    <TouchableOpacity
    onPress={handle}
      style={{
        width: Sizes.width - 30,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 2,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <View>
          <View
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: "#56ceef",
              borderRadius: Sizes.radius,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
              <View style={{
                  width: 7,
                  height: 7,
                  position: "absolute",
                  backgroundColor: "red",
                  borderRadius: 20,
                  bottom : 0,
                  zIndex: 55
              }}></View>
            <Image
              source={image}
              style={{
                width: 52,
                height: 52,
                borderRadius: Sizes.radius,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "80%",
            marginLeft: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: 2,
    
            }}
          >
            <Text
            style={{
                ...Fonts.h4
            }}
            >{name}</Text>
            <Text>{time}min</Text>
          </View>
          <View
            style={{
              width: "100%",
              padding: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: num ? 0.9 : 1,
              }}
            >
              <Text>{message}</Text>
            </View>
            {
                num ? (
                    <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 0.1,
              }}
            >
              <Text
                style={{
                  ...Fonts.body4,
                  backgroundColor: "green",
                  borderRadius: Sizes.radius,
                  color: Colors.white,
                  textAlign: "center",
                  width: 23,
                  height: 23,
                }}
              >
                {number}
              </Text>
            </View>
                ): 
                null
            }
            
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Message;
