import React from 'react';
import {
  ColorPropType,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FloatingActionButton({onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Icon
        name="add"
        color="#444"
        size={30}/>
    </TouchableOpacity>
  );
}

FloatingActionButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: ColorPropType,
  onPress: PropTypes.func,
};

FloatingActionButton.defaultProps = {
  iconColor: "#000",
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 16,
    right: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});