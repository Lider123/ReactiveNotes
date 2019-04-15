import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

export default function NoteItem({ id, text, onPressItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.note}
        onPress={ () => {onPressItem(id)} }>
        <Text
          ellipsizeMode="tail"
          numberOfLines={5}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

NoteItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  onPressItem: PropTypes.func,
};

NoteItem.defaultProps = {
  text: "",
  onPressItem: () => {},
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  note: {
    backgroundColor: "#f2e8a9",
    borderRadius: 8,
    padding: 10,
  },
});