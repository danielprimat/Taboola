import {NativeModules} from 'react-native';
const {DarkModeModule} = NativeModules;
interface DarkModeModuleProps {
  setNightMode(isDarkMode: boolean): void;
}
export default DarkModeModule as DarkModeModuleProps;
