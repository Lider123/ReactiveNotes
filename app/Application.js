import React, {Component} from 'react';
import {
  Modal,
  StyleSheet,
  View
} from 'react-native';

import NotesListScreen from "./screens/NotesListScreen";
import Note from "./models/Note";
import NoteScreen from "./screens/NoteScreen";

export default class Application extends Component {
  state = {
    showModal: false,
    selectedItemId: null,
    selectedItemText: "",
    notes: [
      new Note(1, "note1"),
      new Note(2, "note2"),
      new Note(3, "note3"),
      new Note(4, "When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."),
    ],
  };

  openNoteScreen = id => {
    const {notes} = this.state;
    this.setState({
      showModal: true,
      selectedItemId: id,
      selectedItemText: notes.find(obj => {return obj.id === id}).text
    });
  };

  closeNoteScreen = () => {
    const {notes, selectedItemId, selectedItemText} = this.state;
    notes.find(el => el.id === selectedItemId).text = selectedItemText;
    this.setState({
      showModal: false,
      selectedItemId: null,
      selectedItemText: "",
    });
  };

  onSelectedTextChanged = text => {
    this.setState({
      selectedItemText: text,
    });
  };

  render() {
    const {notes, showModal, selectedItemText} = this.state;
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide"
          visible={showModal}
          onRequestClose={this.closeNoteScreen}>
          <NoteScreen
            text={selectedItemText}
            onTextChanged={this.onSelectedTextChanged}/>
        </Modal>

        <NotesListScreen
          notes={notes}
          onPressNote={this.openNoteScreen}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
