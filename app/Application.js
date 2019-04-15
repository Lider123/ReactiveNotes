import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NotesListScreen from "./screens/NotesListScreen";

export default class Application extends Component {
  state = {
    showModal: false,
    selectedItemId: null,
  };

  openNoteScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    });
  };

  closeNoteScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    });
  };

  render() {
    // TODO: Add Modal
    return (
      <View style={styles.container}>
        <NotesListScreen onPressNote={this.openNoteScreen}/>
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
