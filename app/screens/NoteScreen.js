import React from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import PropTypes from "prop-types";

export default function NoteScreen({text, onTextChanged}) {
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.note}
        multiline={true}
        onChangeText={onTextChanged}
        value={text}/>
    </View>
  );
}

NoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChanged: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  note: {
    flex: 1,
    textAlignVertical: "top",
    backgroundColor: "#f2e8a9",
    padding: 8,
    borderRadius: 8,
  }
});
