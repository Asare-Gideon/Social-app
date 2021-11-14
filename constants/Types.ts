import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { ImageSourcePropType } from "react-native";


export type MainStackParams = {
    InitialPage: undefined;
    Login : undefined,
    Signup : undefined
  }
export type initialPageProp = NativeStackScreenProps<MainStackParams, "InitialPage">

export type HomeTabParams = {
    Home : undefined;
    Search : undefined;
    Post : undefined;
    Favorites : undefined;
    Profile : undefined;
}

export type homePageProp =BottomTabScreenProps<HomeTabParams, "Home">

export type MainpageParams = {
  Feeds : undefined;
  Details : undefined;
}

export type mainPageProp = NativeStackScreenProps<MainpageParams, "Feeds">

export interface friendsProps {
  image : ImageSourcePropType,
  title : string,
}

export interface postProp {
  image : ImageSourcePropType,
  title?: String,
  description? : String,
}