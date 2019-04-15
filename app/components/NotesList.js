import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import NoteItem from "./NoteItem";

export default class NotesList extends Component {
  static propTypes = {
    notes: PropTypes.array,
    onPressItem: PropTypes.func,
  };

  static defaultProps = {
    notes: [],
    onPressItem: () => {},
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <NoteItem
      id={item.id}
      text={item.text}
      onPressItem={this.props.onPressItem}/>
  );

  render() {
    return <FlatList
      style={styles.container}
      data={this.props.notes}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});