import { InputFieldProps } from "@/types/type";
import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Image,
  Platform,
  Keyboard,
} from "react-native";

const InputField = ({
  label,
  labelStyle = "",
  icon,
  secureTextEntry = false,
  containerStyle,
  inputstyle,
  iconstyle,
  className,
  ...props
}:InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={className}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>

          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image
                source={icon}
                className={`w-6 h-6 ml-4 ${iconstyle}`}
              />
            )}

            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 text-left ${inputstyle}`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
