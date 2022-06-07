/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import { name as appName } from "./app.json";
import { StoresProvider, stores } from "./src/store";
import 'react-native-gesture-handler';


const AppWithStore = () => (
  <StoresProvider value={stores}>
    <App />
  </StoresProvider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
