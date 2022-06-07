import * as React from "react";
import HomeTabNavigator from "./src/navigaiton";
import { useEffect } from "react";
import { useStore } from "./src/hooks/useStore";
import {  useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {NativeModules} from 'react-native';


const App = () => {
  const listStore = useStore("listStore");
  const configStore = useStore("configStore");
  const isDarkMode = useColorScheme() === "dark";
  // console.log(NativeModules.Device.getDeviceName().then((e)=>console.log(e,"name app")),"name app")
  console.log(NativeModules.AppInfoModule)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };
  useEffect(() => {
    listStore.loadList();
    configStore.getUserName();
  }, []);
  return (
    <HomeTabNavigator />
  );
};


export default App;
