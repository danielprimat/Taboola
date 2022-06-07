import React, { useContext } from "react";
import { stores, storesContext } from "../store";


export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => useContext(storesContext)[store];
