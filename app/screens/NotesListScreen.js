import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import Note from "../models/Note";
import NotesList from "../components/NotesList";

export default class NotesListScreen extends Component {
  // TODO: Add data save and load
  state = {
    notes: [
      new Note(1, "note1"),
      new Note(2, "note2"),
      new Note(3, "note3"),
      new Note(4, "When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."),
    ],
  };

  static propTypes = {
    onPressNote: PropTypes.func,
  };

  static defaultProps = {
    onPressNote: () => {}
  };

  render(): React.ReactNode {
    const {notes} = this.state;

    return (
      <View style={styles.container}>
        <NotesList notes={notes} onPressItem={this.props.onPressNote}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});