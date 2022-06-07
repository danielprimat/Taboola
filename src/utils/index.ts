import { ListItem } from "../API";
import { FormattedList } from "../store/ListStore";
import { TABOOLA, TABOOLA_FEED, USER_NAME } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const splitIntoChunks = (arr?: ListItem[], chunkSize = 3): FormattedList => {
  if (!arr) return [];
  const res = [];
  const arrFunc = [...arr];
  while (arrFunc.length > 0) {
    const chunk = arrFunc.splice(0, chunkSize);
    if (chunk.length === 3) {
      chunk.push(TaboolaItem);
    }
    res.push({ data: chunk });

  }
  res.length > 0 && res.push({ data: [taboolaFedd] });
  return res;
};

export const isValidName = (name: string): boolean => ((/^[a-zA-Z]+$/).test(name));

export const saveUseNameAsyncStorage = async (useName: string) => {
  try {
    await AsyncStorage.setItem(
      USER_NAME,
      useName
    );
  } catch (error) {
    console.error(error);
  }
};

export const getUserNameAsyncStorage = async () => {
  try {

    return await AsyncStorage.getItem(USER_NAME);

  } catch (error) {
    console.error(error);
  }
};


const TaboolaItem = {
  accessibility: "",
  attractions: [""],
  author: "",
  bicycle: "",
  bicycle_desc: "",
  carmoving: "",
  cars4x4: "",
  cars4x4_desc: "",
  checkin: [],
  coordinates: "",
  date: "",
  desc: "",
  difficulty: "",
  directions: "",
  dog: "",
  dog_desc: "",
  family: "",
  family_desc: "",
  gallery: [{ id: "", thumb: "", title: "" }],
  hours: "",
  id: "",
  menu_order: "",
  parent: "",
  parking: "",
  shaded: "",
  slug: "",
  status: "",
  title: { rendered: TABOOLA },
  track_type: "",
  type: "",
  waze: ""
};

const taboolaFedd = {
  accessibility: "",
  attractions: [""],
  author: "",
  bicycle: "",
  bicycle_desc: "",
  carmoving: "",
  cars4x4: "",
  cars4x4_desc: "",
  checkin: [],
  coordinates: "",
  date: "",
  desc: "",
  difficulty: "",
  directions: "",
  dog: "",
  dog_desc: "",
  family: "",
  family_desc: "",
  gallery: [{ id: "", thumb: "", title: "" }],
  hours: "",
  id: "",
  menu_order: "",
  parent: "",
  parking: "",
  shaded: "",
  slug: "",
  status: "",
  title: { rendered: TABOOLA_FEED },
  track_type: "",
  type: "",
  waze: ""
};
