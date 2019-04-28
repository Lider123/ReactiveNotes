import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import NotesList from "../components/NotesList";
import FloatingActionButton from "../components/FloatingActionButton";

export default class NotesListScreen extends Component {
  static propTypes = {
    notes: PropTypes.array,
    onPressNote: PropTypes.func,
    onFabPress: PropTypes.func,
  };

  static defaultProps = {
    notes: [],
    onPressNote: () => {},
    onFabPress: () => {},
  };

  render(): React.ReactNode {
    return (

      <View style={styles.container}>

        <NotesList
          notes={this.props.notes}
          onPressItem={this.props.onPressNote}/>

        <FloatingActionButton
          iconName="add"
          iconColor="#444"
          onPress={this.props.onFabPress}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});