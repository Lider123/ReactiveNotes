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
      new Note(5, "When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."),
      new Note(6, "When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."),
      new Note(7, "When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."),
      new Note(8, "When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."),
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

    if (selectedItemText.length === 0) {
      const updatedNotes = notes.filter(function(obj) {
        return obj.id !== selectedItemId;
      });
      this.setState({ notes: updatedNotes });
    }
    else
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

  createNote = () => {
    const {notes} = this.state;
    let id = Math.floor(Math.random() * 10000);
    notes.push(new Note(id));
    this.openNoteScreen(id);
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
          onPressNote={this.openNoteScreen}
          onFabPress={this.createNote}/>
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
