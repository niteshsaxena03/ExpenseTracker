import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";

function ManageExpense({ route, navigation }) {
  const expenseContext = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId; //to check whether expense id is present or not
  const isEditing = !!editedExpenseId; //trick to convert into boolean
  const selectedExpense = expenseContext.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense", //to dynamically set title based on conditions
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    expenseContext.deleteExpense(editedExpenseId);
    await deleteExpense(editedExpenseId);
    navigation.goBack(); //this will close the modal
  }
  function cancelHandler() {
    navigation.goBack(); //this will close the modal
  }
  async function confirmHandler(expenseData) {
    if (isEditing) {
      expenseContext.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expenseContext.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

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
});
