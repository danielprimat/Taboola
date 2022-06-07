import { NativeModules } from "react-native";

const { AppInfoModule } = NativeModules;

interface AppInfoModuleType {
  appVersion: string;
  appName: string;
}

export default AppInfoModule as AppInfoModuleType;


