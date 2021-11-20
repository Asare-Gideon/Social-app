import images from "./Images";
import { ImageSourcePropType } from "react-native";
import { commentDatType, dataType, postDatType } from "./Types";

export const data: dataType = [
  {
    id: "1",
    title: "Musk",
    img: images.friends[2],
  },
  {
    id: "2",
    title: "Gideon",
    img: images.friends[0],
  },
  {
    id: "3",
    title: "Janet",
    img: images.friends[1],
  },
  {
    id: "4",
    title: "Christ",
    img: images.friends[3],
  },
  {
    id: "5",
    title: "Antony",
    img: images.friends[4],
  },
  {
    id: "6",
    title: "Zamani",
    img: images.friends[5],
  },
];

export const postData: postDatType = [
  {
    id: "1",
    title: "Concept of designed",
    description: "how to stay consistend to this end",
    image: images.post[0],
  },
  {
    id: "2",
    title: "Concept of designed",
    description: "simple life is way beyond human expectations",
    image: images.post[1],
  },
{
    id: "3",
    title: "Concept of designed",
    description: "simple life is way beyond human expectations",
    image: images.friends[1],
  },
];

export const commentData: commentDatType = [
  {
    id: "1",
    name: "Majesty",
    description: "how to stay consistent to this end",
    image: images.post[1],
    like: 3,
  },
  {
    id: "2",
    name: "Majesty",
    description: "how to stay consistent to this end",
    image: images.friends[0],
    like: 3,
  },
  {
    id: "3",
    name: "Asare",
    description: "how to stay consistent to this end",
    image: images.friends[1],
    like: 5,
  },
{
    id: "6",
    name: "Majesty",
    description: "how to stay consistent to this end",
    image: images.friends[3],
    like: 3,
  },
{
    id: "7",
    name: "Majesty",
    description: "how to stay consistent to this end",
    image: images.friends[3],
    like: 3,
  },
];
