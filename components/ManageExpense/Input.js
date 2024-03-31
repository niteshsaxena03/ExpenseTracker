import { View } from "react-native";

function Input({label,textInputConfig}){//accepting props as an object
    return (
      <View>
        <Text>{label}</Text>
        <TextInput {...textInputConfig} />//this is a way of putting value of props using an object
      </View>
    );
}
export default Input;