import { createContext } from "react";
import { ListStore } from "./ListStore";
import { ConfigStore } from "./ConfigStore";

export const stores = Object.freeze({
  listStore: new ListStore(),
  configStore: new ConfigStore(),
});

export const storesContext = createContext(stores);
export const StoresProvider = storesContext.Provider;
