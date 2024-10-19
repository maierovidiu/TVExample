import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Screen2: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          tvParallaxProperties={{magnification: 1.2}}
          style={styles.button}>
          <Text style={styles.text}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          tvParallaxProperties={{magnification: 1.3}}>
          <Text style={styles.text}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  button: {
    width: 200,
    height: 100,
    margin: 16,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Screen2;
