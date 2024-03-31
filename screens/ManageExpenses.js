import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; //to check whether expense id is present or not
  const isEditing = !!editedExpenseId; //trick to convert into boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense", //to dynamically set title based on conditions
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();//this will close the modal
  }
  function cancelHandler() {
    navigation.goBack(); //this will close the modal
  }
  function confirmHandler() {
    navigation.goBack(); //this will close the modal
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button onPress={cancelHandler} mode="flat" style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {/*we will use conditional rendering here*/}
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonsContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  button:{
    marginHorizontal:8,
    minWidth:120,
  }
});
