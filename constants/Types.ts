import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ImageSourcePropType } from "react-native";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";

export type MainStackParams = {
  InitialPage: undefined;
  Login: undefined;
  Signup: undefined;
};
export type initialPageProp = NativeStackScreenProps<
  MainStackParams,
  "InitialPage"
>;

export type HomeTabParams = {
  Home: undefined;
  Chat: NativeStackNavigationProp<ChatNavParams, "InitialChat">;
  Post: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type ChatNavParams = {
  InitialChat: undefined;
  InnerChat: undefined;
};
export type initialChatScreenProps = NativeStackScreenProps<
  ChatNavParams,
  "InitialChat"
>;

export type homePageProp = BottomTabScreenProps<HomeTabParams, "Home">;

export type MainpageParams = {
  Feeds: undefined;
  ViewImage: { description: String | undefined; image: ImageSourcePropType };
  Nottification: undefined;
};
export interface mainpageProp {
  route: RouteProp<HomeTabParams, "Home">;
  navigation: NativeStackNavigationProp<HomeTabParams, "Home">;
}
export interface chatScreenProp {
  route: RouteProp<HomeTabParams, "Chat">;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<HomeTabParams, "Chat">,
    NativeStackNavigationProp<HomeTabParams>
  >;
}

export type feedProp = NativeStackScreenProps<MainpageParams, "Feeds">;

export interface friendsProps {
  image: ImageSourcePropType;
  title: string;
}

export interface postProp {
  image: ImageSourcePropType;
  title?: String;
  description?: String | undefined;
  navigation: NativeStackNavigationProp<MainpageParams, "Feeds">;
  handle?: () => void;
  name: String;
}

export interface commentPostProp {
  image: ImageSourcePropType;
  description: String;
  name: String;
  like?: number | String;
}
export interface viewImageProp {
  route: RouteProp<MainpageParams, "Feeds">;
  navigation: NativeStackNavigationProp<MainpageParams, "Feeds">;
}
export type dataType = {
  id: string;
  title: string;
  img: ImageSourcePropType;
}[];

export type postDatType = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  description: String;
  name: String;
}[];

export type commentDatType = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  description: String;
  like: number;
}[];

export interface messageProp {
  name: string;
  message: string;
  time: number;
  image: ImageSourcePropType;
  handle: () => void;
  number: number;
}
export type messageDataType = {
  id: string;
  name: string;
  message: string;
  time: number;
  image: ImageSourcePropType;
  number: number;
}[];
