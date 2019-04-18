import React from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import PropTypes from "prop-types";

export default function NoteScreen({text}) {
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.note}
        multiline={true}
        value={text}/>
    </View>
  );
}

NoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
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
