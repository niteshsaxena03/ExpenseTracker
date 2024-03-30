import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; //to check whether expense id is present or not
  const isEditing = !!editedExpenseId; //trick to convert into boolean

  useLayoutEffect(()=>{
     navigation.setOptions({
    title: isEditing ? "Edit expense" : "Add expense", //to dynamically set title based on conditions
  });
  },[navigation,isEditing]);
  

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;
