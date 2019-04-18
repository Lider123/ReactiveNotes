import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import NotesList from "../components/NotesList";

export default class NotesListScreen extends Component {
  static propTypes = {
    notes: PropTypes.array,
    onPressNote: PropTypes.func,
  };

  static defaultProps = {
    notes: [],
    onPressNote: () => {},
  };

  render(): React.ReactNode {
    return (

      <View style={styles.container}>
        <NotesList notes={this.props.notes} onPressItem={this.props.onPressNote}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});