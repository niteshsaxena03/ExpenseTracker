import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  return (
    <View>
      <Input label="Amount"/>
      <Input label="Date" />
      <Input label="Description"/>
    </View>
  );
}
export default ExpenseForm;
