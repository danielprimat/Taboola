import { FC } from "react";
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from "react-native";
import * as React from "react";

declare interface AppKeyboardAvoidingView extends KeyboardAvoidingViewProps {

}

const AppKeyboardAvoidingView: FC<AppKeyboardAvoidingView> = ({ ...props }) => {
  return (
    <KeyboardAvoidingView
      {...props}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default AppKeyboardAvoidingView;
