import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
  const [amountValue,setAmountValue]=useState('');{/*This will be used to track the entered amount*/}
  function amountChangedHandler(enteredAmount) {
    setAmountValue(enteredAmount);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:'white',
    textAlign:'center',
    marginVertical:24,
  },
});
