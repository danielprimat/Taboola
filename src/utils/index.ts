import {ListItem} from '../API';
import {FormattedList} from '../store/ListStore';
import {ITEMS_ARRAY, TABOOLA, TABOOLA_FEED, USER_NAME} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const splitIntoChunks = (
  arr?: ListItem[],
  chunkSize = 3,
): FormattedList => {
  if (!arr) {
    return [];
  }
  const res = [];
  const arrFunc = [...arr];
  while (arrFunc.length > 0) {
    const chunk = arrFunc.splice(0, chunkSize);
    if (chunk.length === 3) {
      chunk.push(TaboolaItem);
    }
    res.push({data: chunk});
  }
  res.length > 0 && res.push({data: [taboolaFedd]});
  return res;
};

export const isValidName = (name: string): boolean => /^[a-zA-Z]+$/.test(name);

export const saveUseNameAsyncStorage = async (useName: string) => {
  try {
    await AsyncStorage.setItem(USER_NAME, useName);
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

export const getItemsArray = async (): Promise<ListItem[] | undefined> => {
  try {
    const data = await AsyncStorage.getItem(ITEMS_ARRAY);
    if (data) {
      return JSON.parse(data);
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
  }
};

export const saveItemsArray = async (itemsArray: ListItem[]) => {
  try {
    await AsyncStorage.setItem(ITEMS_ARRAY, JSON.stringify(itemsArray));
  } catch (error) {
    console.error(error);
  }
};

export const itemsAreTheSame = (
  previousItem: ListItem,
  currentItem: ListItem,
) => {
  let objectsAreSame = true;
  for (let propertyName in previousItem) {
    if (
      isString(previousItem[propertyName as keyof ListItem]) &&
      isString(currentItem[propertyName as keyof ListItem])
    ) {
      if (
        previousItem[propertyName as keyof ListItem] !==
        currentItem[propertyName as keyof ListItem]
      ) {
        objectsAreSame = false;
        break;
      }
    }
  }
  return objectsAreSame;
};

export const isString = (value: any) => {
  return typeof value === 'string' || value instanceof String;
};

const TaboolaItem = {
  accessibility: '',
  attractions: [''],
  author: '',
  bicycle: '',
  bicycle_desc: '',
  carmoving: '',
  cars4x4: '',
  cars4x4_desc: '',
  checkin: [],
  coordinates: '',
  date: '',
  desc: '',
  difficulty: '',
  directions: '',
  dog: '',
  dog_desc: '',
  family: '',
  family_desc: '',
  gallery: [{id: '', thumb: '', title: ''}],
  hours: '',
  id: '',
  menu_order: '',
  parent: '',
  parking: '',
  shaded: '',
  slug: '',
  status: '',
  title: {rendered: TABOOLA},
  track_type: '',
  type: '',
  waze: '',
};

const taboolaFedd = {
  accessibility: '',
  attractions: [''],
  author: '',
  bicycle: '',
  bicycle_desc: '',
  carmoving: '',
  cars4x4: '',
  cars4x4_desc: '',
  checkin: [],
  coordinates: '',
  date: '',
  desc: '',
  difficulty: '',
  directions: '',
  dog: '',
  dog_desc: '',
  family: '',
  family_desc: '',
  gallery: [{id: '', thumb: '', title: ''}],
  hours: '',
  id: '',
  menu_order: '',
  parent: '',
  parking: '',
  shaded: '',
  slug: '',
  status: '',
  title: {rendered: TABOOLA_FEED},
  track_type: '',
  type: '',
  waze: '',
};
