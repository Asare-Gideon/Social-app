import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ImageSourcePropType } from "react-native";
import { RouteProp } from "@react-navigation/core";

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
  Search: undefined;
  Post: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type homePageProp = BottomTabScreenProps<HomeTabParams, "Home">;

export type MainpageParams = {
  Feeds: undefined;
  ViewImage: { description: String | undefined; image: ImageSourcePropType };
};

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
}[];


export type commentDatType = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  description: String;
  like : number
}[];
